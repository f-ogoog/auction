import { client } from "../instance";
import { LoginBody } from "./types/LoginBody";
import { RegisterBody } from "./types/RegisterBody";
import { Token } from "@/types/tokens";

class AuthApi {
  async register(body: RegisterBody) {
    const { data } = await client.post<void>("/auth/register", body);
    return data;
  }

  async login(body: LoginBody) {
    const { data } = await client.post<Token>("/auth/login", body);
    return data;
  }
}

export default new AuthApi();
