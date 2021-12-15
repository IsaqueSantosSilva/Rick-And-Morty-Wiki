import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage {
  constructor(private http: HttpClient) {
    this.getInfo();
  }

  chars: any = [];
  searchTerm: string;
  page: number = 1;
  maxPages: number = 43;

  getInfo(infiniteScroll?) {
    this.http.get<any>(`https://rickandmortyapi.com/api/character?page=${this.page}`)
      .subscribe(res => {
        this.chars = this.chars.concat(res["results"]);

        if (infiniteScroll) {
          infiniteScroll.target.complete();
        }
      });
  }

  loadMore(infiniteScroll) {
    this.page++;
    this.getInfo(infiniteScroll);

    if (this.page === this.maxPages) {
      infiniteScroll.enable(false);
    }
  }

}
