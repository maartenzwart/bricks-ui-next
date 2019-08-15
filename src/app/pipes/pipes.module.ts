import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHTMLPipe } from './sanitize-html/sanitize-html.pipe';
import {DurationFormatPipe} from './duration/durationFormat.pipe';
import {OrderByPipe} from './order-by/order-by.pipe';



@NgModule({
  declarations: [SanitizeHTMLPipe, DurationFormatPipe, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [SanitizeHTMLPipe, DurationFormatPipe, OrderByPipe]
})
export class PipesModule { }
