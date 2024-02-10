import { User } from "@/types/user";
import { client } from "../instance";
import { getAuthorizationHeader } from "../utils";

class UserApi {
  async updateMe(body: FormData) {
    const { data } = await client.patch<User>("/users", body, {
      headers: {
        ...getAuthorizationHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  }
}

export default new UserApi();
