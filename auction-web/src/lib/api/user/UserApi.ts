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

  async deleteMe() {
    const { data } = await client.delete<void>(
      "/users",
      getAuthorizationHeader()
    );
    return data;
  }

  async getUser(userId: string) {
    const { data } = await client.get<User>(`/users/${userId}`);
    return data;
  }
}

export default new UserApi();
