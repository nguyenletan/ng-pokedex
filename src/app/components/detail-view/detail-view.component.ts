import {Component, Input, OnInit} from '@angular/core';
import Pokemon from '../../pokemon';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  constructor() { }
  @Input() pokemon: Pokemon;
  ngOnInit() {
  }

}
