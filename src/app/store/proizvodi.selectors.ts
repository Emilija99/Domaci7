import { createSelector } from '@ngrx/store';
import { AppState } from './app-state';

export const selectProductsFeature = (state: AppState) => state.proizvodi;

export const selectAllProducts = createSelector(
  selectProductsFeature,
  (state) => state.sviProizvodi
);

export const selectProductsInCartIds = createSelector(
  selectProductsFeature,
  (state) => state.proizvodiUKorpiIds
);

export const selectProductsInCart = createSelector(
  selectAllProducts,
  selectProductsInCartIds,
  (sviProizvodi, proizvodiUKorpiIds) =>
    proizvodiUKorpiIds.map((proizvodId) =>
      sviProizvodi.find((proizvod) => proizvod.id === proizvodId)??null
    )
);
