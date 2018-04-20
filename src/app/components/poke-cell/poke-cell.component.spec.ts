import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCellComponent } from './poke-cell.component';

describe('PokeCellComponent', () => {
  let component: PokeCellComponent;
  let fixture: ComponentFixture<PokeCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
