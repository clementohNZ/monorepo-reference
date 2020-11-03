import { Injectable } from "@angular/core";
import { UserModel, UserRepository } from "@clementohnz/core";
import { from, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { UserWebRepositoryMapper } from "./user-web-repository-mapper";

@Injectable({
  providedIn: `root`,
})
export class UserWebRepository extends UserRepository {
  mapper = new UserWebRepositoryMapper();

  constructor() {
    super();
  }

  getUserByEmail(email: string, platform: string): Observable<UserModel> {
    console.log(`Called from platform -----------> ${platform}`);
    // example of error case without implementing separate api, please don't do this
    if (email === `test@test.com`) return of();
    return from(
      fetch(
        `https://swapi.dev/api/people/${Math.floor(Math.random() * 50)}`,
      ).then((data: Response) => data.json()),
    ).pipe(map(this.mapper.mapFrom));
  }

  getUserByEmailAndPassword(
    email: string,
    password: string,
    platform: string,
  ): Observable<UserModel> {
    console.log(`Called from platform -----------> ${platform}`);
    // example of error case without implementing separate api, please don't do this
    if (email === `test@test.com`) return of();
    return from(
      fetch(
        `https://swapi.dev/api/people/${Math.floor(Math.random() * 50)}`,
      ).then((data: Response) => data.json()),
    ).pipe(map(this.mapper.mapFrom));
  }
}
