import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ApplePhoneFormModule } from "./apple-phone-form/apple-phone-form.module";

@NgModule({
  imports: [BrowserModule, FormsModule, ApplePhoneFormModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
