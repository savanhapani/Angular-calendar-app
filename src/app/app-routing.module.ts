import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () => import('./calender/calender.module').then(m => m.CalenderModule)
  },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: '**', redirectTo: '/calendar' } // Redirect unknown routes to the calendar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
