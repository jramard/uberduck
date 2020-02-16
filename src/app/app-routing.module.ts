import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'stores',
    loadChildren: () => import('./stores/stores.module').then(m => m.StoresPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'connection',
    loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'account-info',
    loadChildren: () => import('./account-info/account-info.module').then(m => m.AccountInfoPageModule)
  },
  {
    path: 'account-history',
    loadChildren: () => import('./account-history/account-history.module').then(m => m.AccountHistoryPageModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketPageModule)
  },
  {
    path: 'delivered',
    loadChildren: () => import('./delivered/delivered.module').then(m => m.DeliveredPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
