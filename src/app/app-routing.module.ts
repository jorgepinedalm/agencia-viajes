import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate : [AuthGuard] },
      { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
