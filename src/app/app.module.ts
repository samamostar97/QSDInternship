import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { ForgotPassScreenComponent } from './forgot-pass-screen/forgot-pass-screen.component';
import { ViewEventsComponent } from './view-events/view-events.component';

import { EditCustomerDetailsScreenComponent } from './edit-customer-details-screen/edit-customer-details-screen.component';
import { SecurityScreenComponent } from './security-screen/security-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsScreenComponent } from './event-details-screen/event-details-screen.component';

import { AddEventsComponent } from './add-events/add-events.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ViewCalendarScreenComponent } from './view-calendar-screen/view-calendar-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AuthModule } from '@auth0/auth0-angular';
import { SingleOrderComponent } from './single-order/single-order.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ViewOrdersScreenComponent } from './view-orders-screen/view-orders-screen.component';

import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { EticketBodyComponent } from './eticket-body/eticket-body.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { SideSettingsComponent } from './side-settings/side-settings.component';
import { SideButtonsComponent } from './side-buttons/side-buttons.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditSecurityComponent } from './edit-security/edit-security.component';
import { EventHistoryComponent } from './event-history/event-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { DataService } from './data.service';
import { DatePipe } from '@angular/common';

import { AdminComponent } from './admin/admin.component';

import { FilterPipe } from './filter.pipe';







@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    LoginScreenComponent,
    SignupScreenComponent,
    ForgotPassScreenComponent,
    ViewEventsComponent,

    EditCustomerDetailsScreenComponent,
    SecurityScreenComponent,
    EventDetailsScreenComponent,

    AddEventsComponent,
    ViewCalendarScreenComponent,
    SingleOrderComponent,
    TopbarComponent,
    ViewOrdersScreenComponent,

    BookTicketsComponent,
    EticketBodyComponent,
    OrderDetailsComponent,

    SideSettingsComponent,
    SideButtonsComponent,
    EditProfileComponent,
    EditSecurityComponent,
    EventHistoryComponent,
    SearchScreenComponent,
    AdminComponent,
    FilterPipe



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    AuthModule.forRoot({
      domain: 'dev-lz9102m3.us.auth0.com',
      clientId: 'sqoubBoh26ZLygmYuMzQXBskZJHfYf5Z'
    }),

    BrowserAnimationsModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })

  ],
  providers: [DataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
