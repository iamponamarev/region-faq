import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {TuiPromptModule} from "@taiga-ui/kit";

const routes:Routes = [

  {
    path:':region',
    loadComponent: () => import('./layouts/faq-store-layout/faq-store-layout.component').then(c => c.FaqStoreLayoutComponent)
  }
]



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TuiRootModule,
    TuiDialogModule,
    TuiPromptModule,

    TuiAlertModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],

  bootstrap: [AppComponent]
})
export class AppModule { }
