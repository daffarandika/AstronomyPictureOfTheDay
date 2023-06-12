import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CropSentencePipe } from './crop-sentence.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    DashboardComponent,
    CropSentencePipe,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
