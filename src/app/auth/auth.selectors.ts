// src/app/auth/auth.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<any>('auth');

export const selectAuthToken = createSelector(
  selectAuthState,
  (state) => state.token
);
