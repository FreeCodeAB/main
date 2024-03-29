import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UppdragComponent } from './uppdrag/uppdrag.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KonsulterComponent } from './konsulter/konsulter.component';
import { FrikodareComponent } from './frikodare/frikodare.component';
import { SeparatorComponent } from './separator/separator.component';
import { SalaryComponent } from './salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    SeparatorComponent,
    IntroComponent,
    UppdragComponent,
    KonsulterComponent,
    FrikodareComponent,
    KontaktComponent,
    HeaderComponent,
    FooterComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
