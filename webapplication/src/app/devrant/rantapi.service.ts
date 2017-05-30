import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RantapiService {

  constructor(private http:Http) { }

  getRant()
  {
    let result;
     result = this.http.get('http://localhost:3000/').map( (res:Response) => res.json() );
     return result;
  }

}
