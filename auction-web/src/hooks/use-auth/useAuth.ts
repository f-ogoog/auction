import { UseAuthReturn } from "./types";
import { useAuthContext } from "./use-auth-context";

export const useAuth = (): UseAuthReturn => {
  const { user, update } = useAuthContext();

  const isLoggedIn = !!user;

  return {
    isLoggedIn,
    user,
    update,
  };
};

export default useAuth;
