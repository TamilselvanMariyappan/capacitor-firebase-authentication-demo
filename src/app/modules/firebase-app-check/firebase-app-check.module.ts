import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaseAppCheckPageRoutingModule } from './firebase-app-check-routing.module';

import { FirebaseAppCheckPage } from './firebase-app-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseAppCheckPageRoutingModule
  ],
  declarations: [FirebaseAppCheckPage]
})
export class FirebaseAppCheckPageModule {}
