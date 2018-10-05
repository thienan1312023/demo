import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import{Sentence} from './common/Sentence';
@Injectable({
  providedIn: 'root'
})
export class BibleDataService {
  
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data=>{
      var arraySentenceDetail = [];
      data.forEach(function(itemAbbrev){
          itemAbbrev.chapters.forEach(function(itemChapter, indexChapter){
              itemChapter.forEach(function(itemSentence, indexSentence){
                  let sentenceDetail: Sentence = new Sentence(itemAbbrev.abbrev,itemAbbrev.name, indexChapter + 1, indexSentence + 1, itemSentence);
                  arraySentenceDetail.push(sentenceDetail);
              });
          })
      })
      console.log(arraySentenceDetail);  
    })
   }
   public getJSON(): Observable<any>{
     return this.http.get("./assets/bible_vi.json");
     
   }
}
