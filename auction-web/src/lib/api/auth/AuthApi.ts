import { client } from "../instance";
import { RegisterBody } from "./types/RegisterBody";

class AuthApi {
  async register(body: RegisterBody) {
    const { data } = await client.post<void>("/auth/register", body);
    return data;
  }
}

export default new AuthApi();
