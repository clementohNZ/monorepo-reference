import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { UserModel } from "../../domain/user.model";
import { UserRepository } from "../../repositories/user.repository";

export interface UserLoginRequest {
  email: string;
  password: string;
  platform: string;
}

@Injectable({
  providedIn: `root`,
})
export class AuthenticateUserUseCase
  implements UseCase<UserLoginRequest, UserModel> {
  constructor(@Inject(UserRepository) private userRepository: UserRepository) {}

  execute(userLoginRequest: UserLoginRequest): Observable<UserModel> {
    return this.userRepository.getUserByEmailAndPassword(
      userLoginRequest.email,
      userLoginRequest.password,
      userLoginRequest.platform,
    );
  }
}
