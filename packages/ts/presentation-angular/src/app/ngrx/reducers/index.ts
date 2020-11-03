import { authReducer, AuthStoreState } from "./auth.reducer";

export const REDUCER_KEY_AUTH = `auth`;

export interface AppState {
  [REDUCER_KEY_AUTH]: AuthStoreState;
}

export const reducers = {
  [REDUCER_KEY_AUTH]: authReducer,
};
