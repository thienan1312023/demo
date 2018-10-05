export class Sentence{
    abbrevID: string;
    abbrevName?: string;
    chapter: number;
    sentence: number;
    content: string;
    constructor(_abbrevID: string, _abbrevName, _chapter: number, _sentence: number, _content: string){
        this.abbrevID = _abbrevID;
        this.abbrevName = _abbrevName;
        this.chapter = _chapter;
        this.sentence = _sentence;
        this.content = _content;
    }
}