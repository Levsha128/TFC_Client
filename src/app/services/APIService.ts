import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class APIService {
  protected apiRoot: string = 'http://192.168.1.100:3000';
  constructor(protected http: Http) {
  }
}
