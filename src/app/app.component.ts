import { Component } from '@angular/core';
import { BibleDataService } from './bible-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  isDay: boolean =  true;
  constructor(
    private bibleDataService: BibleDataService
  ){}
  ngOnInit(){
    this.bibleDataService.getJSON().subscribe(data => {
        //console.log(data);
    });
  }
  toogleNightMode(){
    this.isDay = !this.isDay;
  }
  title = 'read-bible';
}
