import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThecaveProductsComponent } from './thecave-products.component';

describe('ThecaveProductsComponent', () => {
  let component: ThecaveProductsComponent;
  let fixture: ComponentFixture<ThecaveProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThecaveProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThecaveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
