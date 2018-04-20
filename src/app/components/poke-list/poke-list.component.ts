import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import pokeClasses, {PokeClass} from '../../poke-classes';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  @Output() clicked: EventEmitter<string> = new EventEmitter();
  cells: {
    id: string,
    pokeClass: PokeClass
  }[];

  constructor() {
  }

  ngOnInit() {
    this.cells = pokeClasses.map(pokeClass => {
      return {
        id: pokeClass.id,
        pokeClass: {id: pokeClass.id, backgroundPosition: pokeClass.backgroundPosition }
      };
    });
  }

  onClick(id) {
    this.clicked.emit(id);
  }

}
