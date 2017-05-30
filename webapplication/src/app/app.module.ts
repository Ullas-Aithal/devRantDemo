import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RantapiService } from './devrant/rantapi.service';

import { AppComponent } from './app.component';
import { DevrantComponent } from './devrant/devrant.component';

@NgModule({
  declarations: [
    AppComponent,
    DevrantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RantapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
