import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonRoutingModule } from './person-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PersonComponent } from './person.component';
import { PersonPhoneComponent } from './person-phone/person-phone.component';
import { AddPhoneComponent } from './person-phone/add-phone/add-phone.component';
import { EditPhoneComponent } from './person-phone/edit-phone/edit-phone.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { PersonService } from './services/person.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonPhoneService } from './services/person-phone.service';

@NgModule({
  declarations: [
    PersonComponent,
    PersonPhoneComponent,
    AddPhoneComponent,
    EditPhoneComponent,
    ListPersonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PersonRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [PersonService, PersonPhoneService],
})
export class PersonModule { }
