import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThecaveAboutComponent } from './thecave-about.component';

describe('ThecaveAboutComponent', () => {
  let component: ThecaveAboutComponent;
  let fixture: ComponentFixture<ThecaveAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThecaveAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThecaveAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
