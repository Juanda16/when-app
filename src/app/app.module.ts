import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from  '@angular/material/toolbar'; 
import { AppComponent } from './app.component';
import { HolidayCheckerComponent } from './holiday-checker/holiday-checker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialReferencesModule } from './material-references/material-references.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    AppComponent,
    HolidayCheckerComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MaterialReferencesModule,
    NgxDatatableModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
