import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthenticateUserUseCase, UserModel } from "@clementohnz/core";

@Component({
  selector: `app-login`,
  templateUrl: `./login.component.html`,
  styleUrls: [`./login.component.scss`],
})
export class LoginComponent {
  public user: UserModel;
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    @Inject(AuthenticateUserUseCase)
    private authenticateUserUseCase: AuthenticateUserUseCase,
  ) {}

  public onLogin(): void {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.authenticateUserUseCase
      .execute({ email, password, platform: `Angular` })
      .subscribe((response: UserModel) => {
        this.user = response;
        console.log(`user login data:`, response);
      });
  }
}
