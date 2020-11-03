import { Observable } from "rxjs";
import { UserModel } from "../domain/user.model";

export abstract class UserRepository {
  abstract getUserByEmail(
    email: string,
    platform: string,
  ): Observable<UserModel>;
  abstract getUserByEmailAndPassword(
    email: string,
    password: string,
    platform: string,
  ): Observable<UserModel>;
}
