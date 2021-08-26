import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonPhone } from '../models/personPhone';
import {map} from 'rxjs/operators';
import { PhoneNumberType } from '../models/enums/PhoneNumberType';
import { PersonPhoneService } from '../services/person-phone.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-phone',
  templateUrl: './person-phone.component.html',
  styleUrls: ['./person-phone.component.css']
})
export class PersonPhoneComponent implements OnInit {

  personPhones: PersonPhone[];
  businessEntityID: number;

  constructor(private personPhoneService: PersonPhoneService, private router: ActivatedRoute) {  }

  ngOnInit() {
    let queryParams = this.router.snapshot.params;
    console.log(queryParams);
    let person: Person = JSON.parse(queryParams.getAll());
    this.businessEntityID = person.businessEntityID;
    this.personPhones = person.phones;
  }

  edit(phone: PersonPhone) {

  }
  remove(phone: PersonPhone) {

  }

}
