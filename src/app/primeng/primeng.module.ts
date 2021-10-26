import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [],
  imports: [TableModule, TagModule, InputSwitchModule],
  exports: [TableModule, TagModule, InputSwitchModule],
})
export class PrimengModule {}
