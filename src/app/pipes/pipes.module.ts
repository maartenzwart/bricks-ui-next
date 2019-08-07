import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHTMLPipe } from './sanitize-html/sanitize-html.pipe';
import {DurationFormatPipe} from './duration/durationFormat.pipe';



@NgModule({
  declarations: [SanitizeHTMLPipe, DurationFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [SanitizeHTMLPipe, DurationFormatPipe]
})
export class PipesModule { }
