import { Component, OnInit } from '@angular/core';
import { Proizvod } from './models/proizvod';
import { ProizvodiService } from './services/proizvodi.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-state';
import {
  dodajProizvodUKorpu,
  izbaciProizvodIzKorpe,
  ucitajProizvode,
} from './store/proizvodi.actions';
import { selectAllProducts } from './store/proizvodi.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sedmi-domaci';

  proizvodi: Observable<readonly Proizvod[]> = of([]);

  prozirnost: string = 'neproziran';

  constructor(
    private proizvodiService: ProizvodiService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.proizvodiService.getAll().subscribe((proizvodi) => {
      this.store.dispatch(ucitajProizvode({ proizvodi }));
    });
    this.proizvodi = this.store.select(selectAllProducts);
  }

  dodajProizvod(proizvodId: number) {
    this.store.dispatch(dodajProizvodUKorpu({ proizvodId }));
  }

  izbaciProizvod(proizvodIndeks: number) {
    this.store.dispatch(
      izbaciProizvodIzKorpe({ indexProizvoda: proizvodIndeks })
    );
  }

  promeniProzirnost() {
    this.prozirnost === 'neproziran'
      ? (this.prozirnost = 'proziran')
      : (this.prozirnost = 'neproziran');
  }
}
