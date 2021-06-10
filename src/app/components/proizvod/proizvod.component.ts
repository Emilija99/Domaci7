import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Proizvod } from 'src/app/models/proizvod';

import { ProizvodiService } from 'src/app/services/proizvodi.service';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.scss'],
})
export class ProizvodComponent implements OnInit {
  @Output() onClickStaviUKorpu: EventEmitter<number> =
    new EventEmitter<number>();

  @Input() proizvod: Proizvod | null = null;

  constructor(private proizvodiService: ProizvodiService) {}

  ngOnInit(): void {}

  staviUKorpu() {
    if (this.proizvod) {
      if (this.proizvod.kolicina > 0) {
        this.onClickStaviUKorpu.emit(this.proizvod.id);
      } else alert('Ovaj proizvod nije trenutno dostupan!');
    }
  }
}
