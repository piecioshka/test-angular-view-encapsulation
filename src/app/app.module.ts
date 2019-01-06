import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmulatedComponent } from './components/emulated/emulated.component';
import { NativeComponent } from './components/native/native.component';
import { NoneComponent } from './components/none/none.component';
import { ShadowDomComponent } from './components/shadow-dom/shadow-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    NativeComponent,
    NoneComponent,
    ShadowDomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
