import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { UserModel } from "../../domain/user.model";
import { UserRepository } from "../../repositories/user.repository";

export interface GetUserByEmailRequest {
  email: string;
  platform: string;
}

@Injectable({
  providedIn: `root`,
})
export class GetUserByEmailUseCase
  implements UseCase<GetUserByEmailRequest, UserModel> {
  constructor(@Inject(UserRepository) private userRepository: UserRepository) {}

  execute(getUserByEmailRequest: GetUserByEmailRequest): Observable<UserModel> {
    return this.userRepository.getUserByEmail(
      getUserByEmailRequest.email,
      getUserByEmailRequest.platform,
    );
  }
}
