import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BuyComponent } from './buy/buy.component';
import { ListComponent } from './list/list.component';
import { SearchPipe } from './search.pipe';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    ListComponent,
    SearchPipe,
    HeaderComponent,
    MainComponent,
    CreateComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
