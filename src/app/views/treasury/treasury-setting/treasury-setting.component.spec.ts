import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasurySettingComponent } from './treasury-setting.component';

describe('TreasurySettingComponent', () => {
  let component: TreasurySettingComponent;
  let fixture: ComponentFixture<TreasurySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasurySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasurySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
