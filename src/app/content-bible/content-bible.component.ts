import { Component, OnInit, Input} from '@angular/core';
import {Sentence} from '../common/Sentence';
@Component({
  selector: 'app-content-bible',
  templateUrl: './content-bible.component.html',
  styleUrls: ['./content-bible.component.css']
})
export class ContentBibleComponent implements OnInit {
  @Input() ListSentence: Sentence[];
  isOpen = false;
  @Input() searchString: string = "";
  ngOnInit(){

  }
}
