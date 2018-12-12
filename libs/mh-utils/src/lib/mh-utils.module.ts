import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatPipe } from './repeat.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [RepeatPipe],
  exports: [RepeatPipe]
})
export class MhUtilsModule {}
