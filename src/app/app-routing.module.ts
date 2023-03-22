import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
const routes: Routes = [
  { path: '', redirectTo: 'getapp', pathMatch: 'full' },
  { path: 'getapp', title: 'welcome page', component: HomeComponent },
  { path: 'store', title: 'Store page', component: StoreComponent },
  { path: 'carousel', title: 'Carousel slide', component: CarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }