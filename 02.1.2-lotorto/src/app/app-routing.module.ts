import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: "", redirectTo: "/search", pathMatch: "full"} //path che si apre di default e risulta come il path home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
