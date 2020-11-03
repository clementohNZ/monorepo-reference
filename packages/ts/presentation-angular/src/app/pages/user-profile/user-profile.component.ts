import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { GetUserByEmailUseCase, UserModel } from "@clementohnz/core";

@Component({
  selector: `app-user-profile`,
  templateUrl: `./user-profile.component.html`,
  styleUrls: [`./user-profile.component.scss`],
})
export class UserProfileComponent implements OnInit {
  user: UserModel;

  constructor(
    @Inject(GetUserByEmailUseCase)
    private getUserByEmailUseCase: GetUserByEmailUseCase,
    @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.getUserByEmailUseCase
        .execute({ email: params.email, platform: `Angular` })
        .subscribe((user: UserModel) => {
          this.user = user;
        });
    });
  }
}
