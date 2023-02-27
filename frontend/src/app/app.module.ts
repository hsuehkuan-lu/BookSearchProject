import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [AppComponent, TopBarComponent, BookListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
