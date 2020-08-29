import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { components } from './app-routing.module';
import { NavigationComponent } from './common/navigation/navigation.component';
import { ElephantItemComponent } from './elephants/elephant-item/elephant-item.component';
import { ElephantListComponent } from './elephants/elephant-list/elephant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    components,
    ElephantListComponent,
    ElephantItemComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
