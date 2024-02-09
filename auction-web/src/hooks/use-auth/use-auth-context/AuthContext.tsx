"use client";

import React, { PropsWithChildren, useContext, useMemo, useState } from "react";
import { AuthContextProps } from "@/hooks/use-auth/types";
import { User } from "@/types/user";
import StorageUtil from "@/lib/utils/StorageUtil";
import AuthApi from "@/lib/api/auth/AuthApi";
import { useQuery } from "@tanstack/react-query";

const AuthContext = React.createContext<AuthContextProps>({
  update: () => new Promise(() => {}),
  user: {} as User,
});

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState(StorageUtil.getAccessToken());

  const { error, isFetching, isFetched, isError, data, refetch } = useQuery({
    queryKey: ["oauth", token],
    queryFn: () => AuthApi.getMe(),
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (error && !isFetching) {
    StorageUtil.removeToken();
  }

  const context: AuthContextProps = useMemo(
    () => ({
      user: data as User,
      update: async () => {
        setToken(StorageUtil.getAccessToken());
        await refetch();
      },
    }),
    [data, refetch]
  );

  return (
    <AuthContext.Provider value={context}>
      {(isFetched || isError) && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
