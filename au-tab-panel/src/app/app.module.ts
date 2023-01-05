import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AuTabComponent } from './au-tab/au-tab.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AuTabComponent,
    AuTabPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
