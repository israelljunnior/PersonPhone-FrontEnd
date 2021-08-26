import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { catchError, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonService extends BaseService {
    constructor(private http: HttpClient) { 
        super();
        this.URL_API += "person";
    }

    GetPersons() : Observable<Person[]> {
        let response = this.http.get(this.URL_API, this.getHeaders())
            .pipe(
                map( response => (<any>response).data.personObjects),
                catchError(this.serviceError)
            );
        return response;
    }
}