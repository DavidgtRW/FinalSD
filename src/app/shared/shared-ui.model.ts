import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackHistory } from '../directives/back-history.directive';
import { ClickOutsideModule } from 'ng-click-outside';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  declarations: [
    BackHistory,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ClickOutsideModule,
  ],
  exports: [
    BackHistory,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ClickOutsideModule,
    FilterPipe,
  ]
})
export class SharedUiModule { }
