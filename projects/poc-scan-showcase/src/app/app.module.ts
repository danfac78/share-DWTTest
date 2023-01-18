import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { PocScanPackageModule } from "poc-scan-package";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PocScanPackageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
