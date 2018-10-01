import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibleDataService {
  
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data=>{
      console.log(data);
    })
   }
   public getJSON(): Observable<any>{
     return this.http.get("./assets/bible_vi.json");
   }
}
