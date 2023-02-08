import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Partners } from '../interfaces/partners';
@Injectable({
  providedIn: 'root',
})
export class PartnersServiceService {
  public credentialUrl: string = '../../assets/data/credential.json';
  public partnersData: string = '../../assets/data/partners.json';
  constructor(private httpclient: HttpClient) {}
  //getting credential from credential.json
  getCredential(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.credentialUrl);
  }
  //getting partners data
  getPartnersData(): Observable<Partners[]> {
    return this.httpclient.get<Partners[]>(this.partnersData);
  }
}
