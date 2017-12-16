import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http, HttpModule, BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/share/header/header.component';
import { FooterComponent } from './views/share/footer/footer.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SidebarComponent } from './views/share/sidebar/sidebar.component';
import { ClientListComponent } from './views/client/client-list/client-list.component';
import { AffiliateSettingComponent } from './views/client/affiliate-setting/affiliate-setting.component';
import { TreasuryComponent } from './views/treasury/treasury/treasury.component';
import { MaterialListComponent } from './views/marketing/material-list/material-list.component';
import { MaterialDetailComponent } from './views/marketing/material-detail/material-detail.component';
import { ClientDetailComponent } from './views/client/client-detail/client-detail.component';
import { FreightSettingComponent } from './views/freight/freight-setting/freight-setting.component';
import { NotFoundComponent } from './views/pages/not-found/not-found.component';
import { AffiliateTaskComponent } from './views/client/task/affiliate-task/affiliate-task.component';
import { DocumentTaskComponent } from './views/client/task/document-task/document-task.component';
import { ClientAccountComponent } from './views/client/list/client-account/client-account.component';
import { ClientLeadComponent } from './views/client/list/client-lead/client-lead.component';
import { ClientSubaccountComponent } from './views/client/list/client-subaccount/client-subaccount.component';
import { ClientAffiliateComponent } from './views/client/list/client-affiliate/client-affiliate.component';
import { ClientSubleadComponent } from './views/client/list/client-sublead/client-sublead.component';
import { RolesComponent } from './views/Administration/roles/roles.component';
import { LoginComponent } from './views/pages/login/login.component';
import { UsersComponent } from './views/Administration/users/users.component';
import { ClientOrderComponent } from './views/common/client-order/client-order.component';
import { TreasurySettingComponent } from './views/treasury/treasury-setting/treasury-setting.component';
import { OrdersComponent } from './views/order/orders/orders.component';
import { PendingOrdersComponent } from './views/order/pending-orders/pending-orders.component';
import { DeliveredOrdersComponent } from './views/order/delivered-orders/delivered-orders.component';

import { ClientService } from './services/client.service';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { AuthGuard } from './services/auth-guard.service';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    ClientListComponent,
    AffiliateTaskComponent,
    AffiliateSettingComponent,
    TreasuryComponent,
    MaterialListComponent,
    MaterialDetailComponent,
    ClientDetailComponent,
    FreightSettingComponent,
    NotFoundComponent,
    DocumentTaskComponent,
    ClientAccountComponent,
    ClientLeadComponent,
    ClientSubaccountComponent,
    RolesComponent,
    LoginComponent,
    UsersComponent,
    OrdersComponent,
    PendingOrdersComponent,
    DeliveredOrdersComponent,
    ClientOrderComponent,
    ClientAffiliateComponent,
    ClientSubleadComponent,
    TreasurySettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'client/account', component: ClientAccountComponent },
      { path: 'client/lead', component: ClientLeadComponent },
      { path: 'client/affiliate', component: ClientAffiliateComponent },
      { path: 'client/sublead', component: ClientSubleadComponent },
      { path: 'client/subaccount', component: ClientSubaccountComponent },
      { path: 'account-client/:id', component: ClientDetailComponent },
      { path: 'affiliate-task', component: AffiliateTaskComponent },
      { path: 'document-task', component: DocumentTaskComponent },
      { path: 'affiliate-setting', component: AffiliateSettingComponent },
      { path: 'treasury/list', component: TreasuryComponent },
      { path: 'treasury/setting', component: TreasurySettingComponent },
      { path: 'material-list', component: MaterialListComponent },
      { path: 'material-detail/:id', component: MaterialDetailComponent },
      { path: 'freight-setting', component: FreightSettingComponent },
      { path: 'administration/roles', component: RolesComponent },
      { path: 'administration/users', component: UsersComponent },
      { path: 'order/orders', component: OrdersComponent },
      { path: 'order/pending-orders', component: PendingOrdersComponent },
      { path: 'order/delivered-orders', component: DeliveredOrdersComponent },
      { path: 'example/client-order', component: ClientOrderComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    ClientService,
    OrderService,
    AuthService,
    AuthGuard,

    // For creating a mock back-end. You don't need these in a real app. 
    // fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
