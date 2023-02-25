import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
const routes: Routes = [
  { path: '', redirectTo: 'GetApp', pathMatch: 'full' },
  { path: 'GetApp', title: 'welcome page', component: HomeComponent },
  { path: 'Store', title: 'Store page', component: StoreComponent },
  { path: 'carousel', title: 'carousel slide', component: CarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }