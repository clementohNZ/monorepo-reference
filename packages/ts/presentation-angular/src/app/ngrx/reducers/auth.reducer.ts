import { UserModel } from "@clementohnz/core";
import { AuthStoreAction, AuthStoreActions } from "../actions/auth.actions";

export interface AuthStoreState {
  user: UserModel;
  isLoggedIn: boolean;
}

export const authStoreInitialState: AuthStoreState = {
  user: null,
  isLoggedIn: false,
};

export function authReducer(
  state: AuthStoreState = authStoreInitialState,
  action: AuthStoreAction,
): AuthStoreState {
  switch (action.type) {
    case AuthStoreActions.LOGIN_SUCCESSFUL:
      const loginSuccessfulPayload = action.payload as UserModel;
      return {
        ...state,
        isLoggedIn: true,
        user: loginSuccessfulPayload,
      };
    default:
      return state;
  }
}
