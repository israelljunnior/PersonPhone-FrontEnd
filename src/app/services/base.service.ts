import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

export abstract class BaseService {
    protected URL_API: string = "/api/";

    protected getHeaders() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        }
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {
            if (response.statusText === "Unknown Error") {
                customError.push("Ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
        }
        console.error(response);
        return throwError(response);
    }
}