import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService, private router: Router ) { }

  ngOnInit() {
      this.personService.GetPersons()
        .subscribe(
            response =>  this.persons = response,
            error => console.log(error));
}

showPhones(person: Person) {
    this.router.navigateByUrl('/person/phones', { queryParams: { person }});
}


//     this.persons = [
//       {
//           businessEntityID: 1,
//           name: "User Two",
//           phones: [
//               {
//                   businessEntityID: 1,
//                   phoneNumber: "(19)99999-2883",
//                   phoneNumberType: null
//               },
//               {
//                   businessEntityID: 1,
//                   phoneNumber: "(19)99999-4021",
//                   phoneNumberType: null
//               },
//               {
//                   businessEntityID: 1,
//                   phoneNumber: "(81)99999-4151",
//                   phoneNumberType: null
//               }
//           ]
//       },
//       {
//           businessEntityID: 2,
//           name: "User Two",
//           phones: [
//               {
//                   businessEntityID: 2,
//                   phoneNumber: "(19)99999-2883",
//                   phoneNumberType: null
//               },
//               {
//                   businessEntityID: 2,
//                   phoneNumber: "(19)99999-4021",
//                   phoneNumberType: null
//               },
//               {
//                   businessEntityID: 2,
//                   phoneNumber: "(81)88888-4151",
//                   phoneNumberType: null
//               },
//               {
//                   businessEntityID: 2,
//                   phoneNumber: "(81)99999-4151",
//                   phoneNumberType: null
//               }
//           ]
//       }
//     ];
}
