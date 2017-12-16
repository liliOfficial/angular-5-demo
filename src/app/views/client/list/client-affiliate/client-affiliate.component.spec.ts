import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAffiliateComponent } from './client-affiliate.component';

describe('ClientAffiliateComponent', () => {
  let component: ClientAffiliateComponent;
  let fixture: ComponentFixture<ClientAffiliateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAffiliateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
