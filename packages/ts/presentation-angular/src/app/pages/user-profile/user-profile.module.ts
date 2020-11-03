import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserRepository } from "@clementohnz/core";
import { UserWebRepository } from "@clementohnz/data";
import { UserProfileComponent } from "./user-profile.component";

const routes: Routes = [
  {
    path: ``,
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [],
  providers: [{ provide: UserRepository, useClass: UserWebRepository }],
})
export class UserProfileModule {}
