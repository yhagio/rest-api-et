/* tslint:disable */

export namespace UserFields {
  export type user_id = string;
  export type username = string;
  export type email = string;
  export type first_name = string | null;
  export type last_name = string | null;
  export type password = string;
}

export interface IUser {
  user_id: UserFields.user_id;
  username: UserFields.username;
  email: UserFields.email;
  first_name: UserFields.first_name;
  last_name: UserFields.last_name;
  password: UserFields.password;
}
