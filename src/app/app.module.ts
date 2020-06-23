import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    AboutMeComponent,
    ContactFormComponent,
    FooterComponent,
    LandingComponent,
    ProjectDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
