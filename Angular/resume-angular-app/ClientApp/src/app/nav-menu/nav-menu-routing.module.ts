
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  {
    path: 'home',
    component: NavMenuComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class NavMenuRoutingModule { }
