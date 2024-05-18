import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ProfilComponent }];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ProfilRoutingModule { }
