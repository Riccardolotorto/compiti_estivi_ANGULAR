import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'about', component: AboutComponent},
    {path: 'products/:id', component: ProductComponent},
    {path: '',   redirectTo: '/search', pathMatch: 'full' } //path home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
