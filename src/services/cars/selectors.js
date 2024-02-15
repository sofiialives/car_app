import { createSelector } from "@reduxjs/toolkit";

const allSelectors = (state) => state.cars;

export const selectCars = createSelector(allSelectors, (cars) => cars.items);

export const selectIsLoading = createSelector(
  allSelectors,
  (cars) => cars.isLoading
);

export const selectError = createSelector(allSelectors, (cars) => cars.error);
