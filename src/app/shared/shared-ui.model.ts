import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackHistory } from '../directives/back-history.directive';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    BackHistory,
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
  ]
})
export class SharedUiModule { }
