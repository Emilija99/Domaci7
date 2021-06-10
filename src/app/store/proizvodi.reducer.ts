import { createReducer, on } from '@ngrx/store';
import { Proizvod } from '../models/proizvod';
import * as Actions from './proizvodi.actions';

export interface ProizvodiState {
  sviProizvodi: ReadonlyArray<Proizvod>;
  proizvodiUKorpiIds: ReadonlyArray<number>;
}

export const initialState: ProizvodiState = {
  sviProizvodi: [],
  proizvodiUKorpiIds: [],
};

export const proizvodiReducer = createReducer(
  initialState,
  on(Actions.dodajProizvodUKorpu, (state, { proizvodId }) => ({
    ...state,
    sviProizvodi: state.sviProizvodi.map((proizvod) =>
      proizvod.id === proizvodId
        ? { ...proizvod, kolicina: proizvod.kolicina - 1 }
        : proizvod
    ),
    proizvodiUKorpiIds: [...state.proizvodiUKorpiIds, proizvodId],
  })),

  on(Actions.ucitajProizvode, (state, { proizvodi }) => ({
    ...state,
    sviProizvodi: proizvodi,
  })),

  on(Actions.izbaciProizvodIzKorpe, (state, { indexProizvoda }) => ({
    ...state,
    sviProizvodi: state.sviProizvodi.map((proizvod) =>
      proizvod.id === state.proizvodiUKorpiIds[indexProizvoda]
        ? { ...proizvod, kolicina: proizvod.kolicina + 1 }
        : proizvod
    ),
    proizvodiUKorpiIds: state.proizvodiUKorpiIds.filter(
      (proizvodId, index) => index !== indexProizvoda
    ),
  }))
);
