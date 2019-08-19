import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHTMLPipe } from './sanitize-html/sanitize-html.pipe';
import {DurationFormatPipe} from './duration/durationFormat.pipe';
import {OrderByPipe} from './order-by/order-by.pipe';
import {FullNamePipe} from './full-name/full-name.pipe';



@NgModule({
  declarations: [SanitizeHTMLPipe, DurationFormatPipe, OrderByPipe, FullNamePipe],
  imports: [
    CommonModule
  ],
  exports: [SanitizeHTMLPipe, DurationFormatPipe, OrderByPipe, FullNamePipe]
})
export class PipesModule { }
