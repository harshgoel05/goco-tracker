import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRegestrtionComponent } from './store-regestrtion.component';

describe('StoreRegestrtionComponent', () => {
  let component: StoreRegestrtionComponent;
  let fixture: ComponentFixture<StoreRegestrtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreRegestrtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRegestrtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
