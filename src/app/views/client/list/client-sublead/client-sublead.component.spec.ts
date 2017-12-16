import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSubleadComponent } from './client-sublead.component';

describe('ClientSubleadComponent', () => {
  let component: ClientSubleadComponent;
  let fixture: ComponentFixture<ClientSubleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSubleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSubleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
