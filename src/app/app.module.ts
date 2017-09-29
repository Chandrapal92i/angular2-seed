import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.route';
import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { ProcessJsonListComponent } from './process-json-list/process-json-list.component';
import { OrderByPipe } from './order-by.pipe';
import { HttpModule } from '@angular/http';
import { GroupByPipe } from './group-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    ProcessJsonListComponent,
    OrderByPipe,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
