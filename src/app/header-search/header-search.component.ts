import { Component,  OnInit } from '@angular/core';
import { BibleDataService } from '../bible-data.service';
import {Sentence} from '../common/Sentence';
export class AbbrevDropDownlist{
  name: string;
  value: string;
  numchapter: number;
}
export class ChapterDropDownList{
  name: number;
  value: number;
}
export class SentenceDropDownList{
  name: number;
  value: number;
}
@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})

export class HeaderSearchComponent implements OnInit {
  // VARIABLE
  bibleData: any[];
  selectedValueAbbrev: string;
  selectedValueChapter: number = 0;
  selectedValueSentence: number = 0;
  abbrevList: AbbrevDropDownlist[];
  listChapterSelected: ChapterDropDownList[];
  listSentenceSelected: SentenceDropDownList[];
  listContentSentence: string[];
  contentBible: Sentence[];
  selectedSentence: Sentence;
  constructor(
    private bibleDataService: BibleDataService
  ){}


  ngOnInit(){
    this.bibleDataService.getJSON().subscribe(data => {        
        this.abbrevList = data.map(obj =>{ 
          var abbrev = {};
          abbrev["name"] = obj.name;
          abbrev["value"] = obj.abbrev;
          abbrev["numchapter"] = obj.chapters.length;
          return abbrev;
       });
       this.bibleData = data;
       console.log(this.abbrevList);
    });
  }

  generateNumberListIncrease(numchapter){
    var listNumber = [];
    for(var i = 0; i < numchapter; i++){
      var objectChapter = {
         name: i + 1,
         value: i
      }
      listNumber.push(objectChapter);
    }
    return listNumber;
  }
  OnChangeAbbrev(value){
    var itemSelected = this.abbrevList.find(function(element) {
      return element.value == value;
    });
    var selectedAbbrev = this.selectedValueAbbrev;
    var itemSelectedAbbrev = this.bibleData.find(function(element) {
      return element.abbrev == selectedAbbrev;
    });
    this.listChapterSelected = [];
    this.listChapterSelected = this.generateNumberListIncrease(itemSelected.numchapter);     
    // this.listContentSentence = itemSelectedAbbrev.chapters[this.selectedValueChapter]; 
    // var sentence: Sentence = {
    //   abbrevID: itemSelectedAbbrev.abbrev,
    //   chapter: this.selectedValueChapter + 1,
    //   sentence: 1,
    //   content: this.listContentSentence[0]
    // }
    // this.contentBible = [sentence];
  }
  OnChangeChapter(){
    var selectedAbbrev = this.selectedValueAbbrev;
    var itemSelectedAbbrev = this.bibleData.find(function(element) {
      return element.abbrev == selectedAbbrev;
    });
    this.listSentenceSelected = this.generateNumberListIncrease(itemSelectedAbbrev.chapters[this.selectedValueChapter].length);
    this.listContentSentence = itemSelectedAbbrev.chapters[this.selectedValueChapter];
    this.contentBible = itemSelectedAbbrev.chapters[this.selectedValueChapter].join(" "); 
    var chaptersLength = itemSelectedAbbrev.chapters[this.selectedValueChapter].length;
    let arraySentencesDisplay = [];  
    for (var i = 0; i < chaptersLength; i ++) {
      var sentence: Sentence = {
        abbrevID: itemSelectedAbbrev.abbrev,
        chapter: this.selectedValueChapter + 1,
        sentence: i + 1,
        content: this.listContentSentence[i]
      }
      arraySentencesDisplay.push(sentence);
    }
    this.contentBible = arraySentencesDisplay;  
  }
  OnChangeSentence(){
    var selectedAbbrev = this.selectedValueAbbrev;
    var itemSelectedAbbrev = this.bibleData.find(function(element) {
      return element.abbrev == selectedAbbrev;
    });
    var sentence: Sentence = {
        abbrevID: itemSelectedAbbrev.abbrev,
        chapter: this.selectedValueChapter + 1,
        sentence: this.selectedValueSentence,
        content: this.listContentSentence[this.selectedValueSentence]
    }
      this.contentBible = [sentence];
  }
}
