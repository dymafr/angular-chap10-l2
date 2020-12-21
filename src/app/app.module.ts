import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HomepageComponent, UsersComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
