import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'newbook',
    loadChildren: () => import('./pages/newbook/newbook.module').then( m => m.NewbookPageModule)
  },
  {
    path: 'newaudio',
    loadChildren: () => import('./pages/newaudio/newaudio.module').then( m => m.NewaudioPageModule)
  },
  {
    path: 'newvideo',
    loadChildren: () => import('./pages/newvideo/newvideo.module').then( m => m.NewvideoPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'newlink',
    loadChildren: () => import('./pages/newlink/newlink.module').then( m => m.NewlinkPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
