import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'orders', loadChildren:() => import('./pages/orders/orders.module').then((m) => m.OrdersModule) },
      { path: 'quizes', loadChildren:() => import('./pages/quizes/quizes.module').then((m) => m.QuizesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
