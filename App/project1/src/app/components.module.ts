import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonmenuComponent } from './ionmenu/ionmenu.component';



const COMPONENTS = [
  IonmenuComponent
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class ComponentsModule { }