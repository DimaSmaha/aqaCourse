import { userData } from "../helpers/getUserData";

export interface IUserDTO {
  username: string;
  password: string;
}

export const userDTO: IUserDTO = {
  username: userData.username,
  password: userData.password,
};
