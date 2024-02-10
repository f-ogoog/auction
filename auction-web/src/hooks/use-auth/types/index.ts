import { User } from "@/types/user";

export interface AuthContextProps {
  user: User;
  update: () => Promise<void>;
}

export interface UseAuthReturn extends AuthContextProps {
  isLoggedIn: boolean;
}
