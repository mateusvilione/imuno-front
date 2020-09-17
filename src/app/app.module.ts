import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { LabelTextComponent } from './components/label-text/label-text.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    LoginClienteComponent,
    LabelTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
