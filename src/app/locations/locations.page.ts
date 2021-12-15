import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage {
  constructor(private http: HttpClient) {
    this.getInfo();
  }

  locations: any = [];
  searchTerm: string;
  page: number = 1;
  maxPages: number = 7;

  getInfo(infiniteScroll?) {
    this.http.get<any>(`https://rickandmortyapi.com/api/location?page=${this.page}`)
      .subscribe(res => {
        this.locations = this.locations.concat(res["results"]);

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
