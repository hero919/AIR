import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatusComponent } from './status/status.component';
import { SystemupgradeComponent } from './systemupgrade/systemupgrade.component';
import { EventComponent } from './event/event.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SupportComponent } from './support/support.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { HelpComponent } from './help/help.component';
import { EventdetailstableComponent } from './eventdetailstable/eventdetailstable.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    StatusComponent,
    SystemupgradeComponent,
    EventComponent,
    ConfigurationComponent,
    SupportComponent,
    EventdetailsComponent,
    HelpComponent,
    EventdetailstableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
