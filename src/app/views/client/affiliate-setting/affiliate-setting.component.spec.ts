import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateSettingComponent } from './affiliate-setting.component';

describe('AffiliateSettingComponent', () => {
  let component: AffiliateSettingComponent;
  let fixture: ComponentFixture<AffiliateSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
