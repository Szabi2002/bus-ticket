import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search.routing.module';
import { SearchComponent } from './search.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule, 
    SearchRoutingModule,
    MatIconModule
  ]
})
export class SearchModule { }
