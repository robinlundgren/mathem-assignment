import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TimeService } from './service/app-service';
import { OrderByPipe } from './pipe/orderBy.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

