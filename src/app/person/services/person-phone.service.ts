import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { catchError, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonPhoneService extends BaseService {
    constructor(private http: HttpClient) { 
        super();
        this.URL_API += "person";
    }

    GetPhones(id: number) : Observable<Person[]> {
        let response = this.http.get(`${this.URL_API}/phones/${id}`, this.getHeaders())
            .pipe(
                map( response => (<any>response).data.personPhonesObjects),
                catchError(this.serviceError)
            );
        return response;
    }
}