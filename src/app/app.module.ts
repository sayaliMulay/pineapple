import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DemoMaterialModule } from './modules/material.module';
import { FilterPipe} from './filter.pipe';
import { FormsModule } from '@angular/forms';
import {
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatListModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    FormsModule,
    MatButtonModule, 
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
