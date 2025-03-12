// src/app/auth/auth.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './auth.actions';

export const initialState = { token: '' };

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token }) => ({ ...state, token }))
);
