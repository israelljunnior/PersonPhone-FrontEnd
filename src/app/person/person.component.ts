import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
      <section>
        <router-outlet></router-outlet>
      </section>
  `,
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
