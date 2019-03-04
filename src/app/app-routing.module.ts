import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppGuard } from './app.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', loadChildren: './pokemon/pokemon.module#PokemonModule', canActivate:[AppGuard] },
  { path: 'about', loadChildren: './about/about.module#AboutModule', canActivate:[AppGuard] },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
