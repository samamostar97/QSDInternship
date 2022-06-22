import { SearchScreenComponent } from './search-screen/search-screen.component';

import { EventDetailsScreenComponent } from './event-details-screen/event-details-screen.component';
import { SecurityScreenComponent } from './security-screen/security-screen.component';
import { EditCustomerDetailsScreenComponent } from './edit-customer-details-screen/edit-customer-details-screen.component';

import { ViewCalendarScreenComponent } from './view-calendar-screen/view-calendar-screen.component';
import { AddEventsComponent } from './add-events/add-events.component';

import { ViewEventsComponent } from './view-events/view-events.component';
import { ForgotPassScreenComponent } from './forgot-pass-screen/forgot-pass-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleOrderComponent } from './single-order/single-order.component';
import { ViewOrdersScreenComponent } from './view-orders-screen/view-orders-screen.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { EticketBodyComponent } from './eticket-body/eticket-body.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: WelcomeScreenComponent },
  {path:'login', component: LoginScreenComponent },
  {path:'signup', component: SignupScreenComponent},
  {path:'forgotPass', component: ForgotPassScreenComponent},
  {path:'viewEvents', component: ViewEventsComponent},
  {path:'editProfile', component: EditCustomerDetailsScreenComponent},
  {path:'security', component: SecurityScreenComponent},
  {path:'details', component: EventDetailsScreenComponent},
  {path:'single-order', component:SingleOrderComponent},
  {path:'addEvents', component: AddEventsComponent},
  {path:'viewCalendar', component: ViewCalendarScreenComponent},
  {path:'viewOrders', component: ViewOrdersScreenComponent},
  {path:'bookTickets', component: BookTicketsComponent},
  {path:'viewOrderDetails', component: OrderDetailsComponent},
  {path:'eTicketBody', component: EticketBodyComponent},
  {path:'search', component: SearchScreenComponent},
  {path:'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
