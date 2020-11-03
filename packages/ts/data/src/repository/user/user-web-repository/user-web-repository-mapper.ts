import { Mapper, UserModel } from "@clementohnz/core";
import { UserWebEntity } from "./user-web-entity";

export class UserWebRepositoryMapper extends Mapper<UserWebEntity, UserModel> {
  mapFrom(param: UserWebEntity): UserModel {
    return {
      email: `${param.name}-${param.birth_year}-${param.gender}@star.wars.com`,
    };
  }

  mapTo(param: UserModel): UserWebEntity {
    return {
      name: `${param.email}`,
      height: Math.random(),
      mass: Math.random(),
      hair_color: `${param.email}`,
      skin_color: `${param.email}`,
      eye_color: `${param.email}`,
      birth_year: Math.random(),
      gender: `${param.email}`,
    };
  }
}
