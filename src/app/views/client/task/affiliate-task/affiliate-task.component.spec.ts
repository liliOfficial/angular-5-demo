import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateTaskComponent } from './affiliate-task.component';

describe('AffiliateTaskComponent', () => {
  let component: AffiliateTaskComponent;
  let fixture: ComponentFixture<AffiliateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
