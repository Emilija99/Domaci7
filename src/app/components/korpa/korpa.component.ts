import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faShoppingCart,
  faWindowClose,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app-state';
import { Store } from '@ngrx/store';
import { selectProductsInCart } from 'src/app/store/proizvodi.selectors';
import { Proizvod } from 'src/app/models/proizvod';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.scss'],
})
export class KorpaComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faWindowClose = faWindowClose;
  faMinus = faMinus;
  tabelaVidljivost = 'skrivena';
  prozirnost: string = 'neproziran';

  proizvodiUKorpi: Observable<(Proizvod | null)[]> = of(new Array());

  @Output() onClickIzbaciProizvod: EventEmitter<number> =
    new EventEmitter<number>();
    
  @Output() promeniProzirnost: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.proizvodiUKorpi = this.store.select(selectProductsInCart);
  }

  ukljuciVidljivostProzora() {
    this.tabelaVidljivost = 'vidljiva';
    this.prozirnost = 'proziran';
    this.promeniProzirnost.emit();
  }

  iskljuciVidljivostProzora() {
    this.tabelaVidljivost = 'skrivena';
    this.prozirnost = 'neproziran';
    this.promeniProzirnost.emit();
  }

  izbaciProizvod(indeks: number) {
    this.onClickIzbaciProizvod.emit(indeks);
    console.log(indeks);
  }

  izracunajRacun(proizvodi: (Proizvod | null)[] | null) {
    let sum = 0;
    if (proizvodi) {
      proizvodi.forEach((p) => {
        if (p) sum += p.cena;
      });
    }
    return sum;
  }
}
