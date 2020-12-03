import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThecaveCartComponent } from './thecave-cart.component';

describe('ThecaveCartComponent', () => {
  let component: ThecaveCartComponent;
  let fixture: ComponentFixture<ThecaveCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThecaveCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThecaveCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
