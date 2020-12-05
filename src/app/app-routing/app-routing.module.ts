import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { ThecaveProductsComponent } from '../thecave-products/thecave-products.component';
import { ThecaveAboutComponent } from '../thecave-about/thecave-about.component';


const routes : Routes = [
  {
    path :'',
    redirectTo : 'products',
    pathMatch : 'full'
  },
  {
    path :'products',
    component : ThecaveProductsComponent
  },
  {
    path :'about',
    component : ThecaveAboutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
