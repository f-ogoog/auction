import StorageUtil from "@/lib/utils/StorageUtil";
import AuthApi from "../../api/auth/AuthApi";
import { LoginBody } from "../../api/auth/types/LoginBody";

class AuthService {
  static async login(data: LoginBody) {
    const { accessToken } = await AuthApi.login(data);
    StorageUtil.setToken(accessToken);
  }

  static async logout() {
    StorageUtil.removeToken();
  }
}

export default AuthService;
