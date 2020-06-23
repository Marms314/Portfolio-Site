import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    AboutMeComponent,
    ContactFormComponent,
    PortfolioPageComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
