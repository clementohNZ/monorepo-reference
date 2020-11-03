import { Injectable } from "@angular/core";
import { UserModel, UserRepository } from "@clementohnz/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: `root`,
})
export class UserMockRepository extends UserRepository {
  constructor() {
    super();
  }

  getUserByEmail(email: string): Observable<UserModel> {
    return of({
      email,
      password: `Don't look at me!`,
    });
  }

  getUserByEmailAndPassword(email: string): Observable<UserModel> {
    if (email === `test@test.com`) return of();
    return of({ email });
  }
}
