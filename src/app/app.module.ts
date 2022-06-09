import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EmulatedComponent } from "./components/emulated/emulated.component";
import { NoneComponent } from "./components/none/none.component";
import { ShadowDomComponent } from "./components/shadow-dom/shadow-dom.component";

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    NoneComponent,
    ShadowDomComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
