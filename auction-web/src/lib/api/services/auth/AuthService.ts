import StorageUtil from "@/lib/utils/StorageUtil";
import AuthApi from "../../auth/AuthApi";
import { LoginBody } from "../../auth/types/LoginBody";

class AuthService {
  static async login(data: LoginBody) {
    const { accessToken } = await AuthApi.login(data);
    StorageUtil.setToken(accessToken);
  }
}

export default AuthService;
