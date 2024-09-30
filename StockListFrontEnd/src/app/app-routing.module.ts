import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",  redirectTo:"/home",pathMatch:'full'
  },
  {
    path:"home", component:HomeComponent
  },

  {
    path:"login", component:LoginComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"wishlist", component:WishlistComponent
  },
  {
    path:"stocklist", component:StocklistComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
