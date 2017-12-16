import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSubaccountComponent } from './client-subaccount.component';

describe('ClientSubaccountComponent', () => {
  let component: ClientSubaccountComponent;
  let fixture: ComponentFixture<ClientSubaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSubaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSubaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
