import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Article Dictionary';
  wordsInArticle: string[] = [];
  @Input('article') article: any = '';

  constructor() {
    this.article = '';
  }

  findMeanings(articleText: string) {
    if (articleText.length === 0) {
      this.wordsInArticle = [];
      return;
    }
    console.log(articleText.length);
    this.wordsInArticle = articleText
      .match(new RegExp(/[a-zA-Z ]/g)) // filtering special characters
      .join('') // joining each character
      .split(' '); // converting to array of words

    // filtering blank array element
    this.wordsInArticle = this.wordsInArticle.filter((n) => n !== '');

    // removing duplicate elements
    this.wordsInArticle = this.wordsInArticle
      .filter((v, i) => this.wordsInArticle.indexOf(v) === i);

    // sort the array
    // this.wordsInArticle = this.wordsInArticle.sort();
    console.log(this.wordsInArticle);

    // try this API
    // https://github.com/matheuss/google-translate-api

  }
}
