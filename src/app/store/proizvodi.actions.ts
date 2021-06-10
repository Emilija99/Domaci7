import { createAction, props } from '@ngrx/store';
import { Proizvod } from '../models/proizvod';

export const dodajProizvodUKorpu = createAction(
  'Dodaj proizvod u korpu',
  props<{
    proizvodId: number;
  }>()
);

export const ucitajProizvode=createAction(
    'Ucitaj proizvode',
    props<{
        proizvodi:Proizvod[];

    }>()
);

export const izbaciProizvodIzKorpe=createAction(
    'Izbaci Proizvod Iz Korpe',
    props<{
        indexProizvoda:number,
       

    }>()
)