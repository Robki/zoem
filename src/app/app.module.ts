import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CarsresultComponent } from './carsresult/carsresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageComponent,
    FooterComponent,
    AboutComponent,
    SignupComponent,
    DatepickerComponent,
    CarsresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }