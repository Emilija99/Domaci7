import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProizvodComponent } from './components/proizvod/proizvod.component';
import { KorpaComponent } from './components/korpa/korpa.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProizvodiService } from './services/proizvodi.service';
import {HttpClientModule} from '@angular/common/http'
import {StoreModule} from '@ngrx/store'
import { proizvodiReducer } from './store/proizvodi.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ProizvodComponent,
    KorpaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({proizvodi:proizvodiReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25
    }

    )
  ],
  providers: [ProizvodiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
