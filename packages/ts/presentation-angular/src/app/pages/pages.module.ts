import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: `login`,
    loadChildren: (): Promise<any> =>
      import(`./login/login.module`).then((m) => m.LoginModule),
  },
  {
    path: `profile`,
    loadChildren: (): Promise<any> =>
      import(`./user-profile/user-profile.module`).then(
        (m) => m.UserProfileModule,
      ),
  },
  {
    path: ``,
    redirectTo: `login`,
    pathMatch: `full`,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class PagesModule {}
