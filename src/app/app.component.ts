import {Component} from '@angular/core';
import Pokemon from './pokemon';
import {PokemonService} from './services/pokemon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-pokedex';
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {

  }

  onClick(id) {

    this.pokemonService.getPokemon(id)
      .subscribe(data => {
          this.pokemon = new Pokemon(data); // {...data};
          return this.pokemon;
        }
      );
  }
}
