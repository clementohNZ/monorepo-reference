/**************************************
 *
 *  KEYS
 *
 *************************************/

import { Action } from "@ngrx/store";

export enum AuthStoreActions {
  LOGIN_USER = `[Authentication Store] LOGIN_USER`,
  LOGIN_SUCCESSFUL = `[Authentication Store] LOGIN_SUCCESSFUL`,
}

/**************************************
 *
 *  PAYLOADS
 *
 *************************************/

export interface LoginUserActionPayload {
  email: string;
  password: string;
}

/**************************************
 *
 *  ACTIONS
 *
 *************************************/

export interface AuthStoreAction extends Action {
  payload?: any;
}

/**
 * Attempt to login the user.
 */
export class LoginUserAction implements AuthStoreAction {
  readonly type = AuthStoreActions.LOGIN_USER;
  payload: LoginUserActionPayload;

  constructor(email: string, password: string) {
    this.payload = { email, password };
  }
}
