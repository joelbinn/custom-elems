import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ButtonComponent],
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const customElement = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('jb-button', customElement);
  }
}
