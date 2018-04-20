import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {PokeClass} from '../../poke-classes';
import {E} from '@angular/core/src/render3';


@Component({
  selector: 'app-poke-cell',
  templateUrl: './poke-cell.component.html',
  styleUrls: ['./poke-cell.component.css']
})
export class PokeCellComponent implements OnInit {

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Input() pokeClass: PokeClass;

  style: {};
  id: '';

  constructor() {
  }

  ngOnInit() {
    this.style = {
      'background-position': this.pokeClass.backgroundPosition
  };

  }

  onClick(e) {
    this.clicked.emit(this.pokeClass.id);
  }

}
