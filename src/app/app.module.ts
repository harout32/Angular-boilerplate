import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRouteingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [AppRouteingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
