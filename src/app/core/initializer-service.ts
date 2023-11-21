import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class InitializerService {

  // public resp: any;

  constructor(private http: HttpClient) {}

  // async initializeApp(): Promise<any> {
  //   console.log('AAAA Entre');

  //    return await this.http.get('http://localhost:8080/api/bo/v1/config').toPromise()
  // };

//  initializesApp(): Observable<any> {
//       return this.http.get('http://localhost:3000/load').pipe(
//         tap(resp => {
//           this.resp = resp;
//         })
//       )
//   };

 initializeApp(origin: string): Observable<any> {
    // return this.http.get(`http://localhost:3000/config`, 
    return this.http.get(`https://api-test-ssr.onrender.com/config`, 
            { headers: { 'Client-Domain'  : origin }})
    // return this.http.get(`http://localhost:60765/api/notify`, { headers: { Test  : origin }})
    // return this.http.get('http://localhost:8080/api/bo/v1/config', { headers: { Test  : origin }})
 };

//  initializesApp(): Observable<any> {
//       return this.http.get('http://localhost:8080/api/bo/v1/config').pipe(
//         tap(resp => {
//           this.storageService.resp = resp;
//         })
//       )
//     };

}
