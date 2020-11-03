import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { ActionReducer, MetaReducer, StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { reducers } from "./ngrx/reducers";
import { PagesModule } from "./pages/pages.module";
import { ServicesModule } from "./services/services.module";

export function rootStateSetter(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return (state: any, action: any): ActionReducer<any> => {
    if (action.type === `SET_ROOT_STATE`) {
      return action.payload;
    }
    return reducer(state, action);
  };
}

const metaReducers: MetaReducer<any, any>[] = [rootStateSetter];

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: `serverApp` }),
    PagesModule,
    RouterModule.forRoot(routes, {
      initialNavigation: `enabled`,
    }),
    ServicesModule,
    PagesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  // providers: [{ provide: ErrorHandler, useClass: SentryErrorLogger }],
  bootstrap: [AppComponent],
})
export class AppModule {}
