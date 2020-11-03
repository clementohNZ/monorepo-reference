import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticateUserUseCase, UserRepository } from "@clementohnz/core";
import { UserWebRepository } from "@clementohnz/data";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: ``,
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],
  exports: [],
  providers: [
    { provide: UserRepository, useClass: UserWebRepository },
    AuthenticateUserUseCase,
  ],
})
export class LoginModule {}
