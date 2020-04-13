import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldStatsComponent } from './world-stats.component';

describe('WorldStatsComponent', () => {
  let component: WorldStatsComponent;
  let fixture: ComponentFixture<WorldStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
