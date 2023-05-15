import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpointAngularPlayerComponent } from './kpoint-angular-player.component';


@NgModule({
  declarations: [
    KpointAngularPlayerComponent
  ],
  imports: [CommonModule],
  exports: [
    KpointAngularPlayerComponent
  ]
})
export class KpointAngularPlayerModule { }
