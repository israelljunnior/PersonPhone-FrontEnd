import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './navigation/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'person', pathMatch: 'full' },
    {
        path: 'person',
        loadChildren: './person/person.module#PersonModule',
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
