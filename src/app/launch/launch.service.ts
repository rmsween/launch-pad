import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Launch } from './launch';

@Injectable()
export class LaunchService {
  public launches: Launch[] = [];

  private apiUrl = 'https://launch-pad-4cb59.firebaseio.com/launches.json';
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  // Returns a list of launches
  getLaunches() {
    return this.http.get(this.apiUrl).map((response: Response) => response.json());
  }

  saveLaunch(launch: Launch) {
    return this.http.post(this.apiUrl, JSON.stringify(launch), {headers: this.headers})
      .map((data: Response) => data.json());
  }

}
