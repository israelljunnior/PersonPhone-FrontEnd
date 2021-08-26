import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './list-person/list-person.component';
import { AddPhoneComponent } from './person-phone/add-phone/add-phone.component';
import { EditPhoneComponent } from './person-phone/edit-phone/edit-phone.component';
import { PersonPhoneComponent } from './person-phone/person-phone.component';
import { PersonComponent } from './person.component';

const routes: Routes = [
    { path: '', component: PersonComponent,
    children: [
        { path: '', component: ListPersonComponent },
        {
            path: '/phones', component: PersonPhoneComponent,
            children: [
                { path: '/add', component: AddPhoneComponent },
                { path: ':id/edit', component: EditPhoneComponent }
            ]
        }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
