import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PokeListComponent} from './components/poke-list/poke-list.component';
import {PokeCellComponent} from './components/poke-cell/poke-cell.component';
import {DetailViewComponent} from './components/detail-view/detail-view.component';
import {HttpClientModule} from '@angular/common/http';
import {PokemonService} from './services/pokemon.service';


@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeCellComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
