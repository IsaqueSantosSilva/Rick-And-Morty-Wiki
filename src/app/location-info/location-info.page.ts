import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.page.html',
  styleUrls: ['./location-info.page.scss'],
})
export class LocationInfoPage implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient) { 
  }

  locationsId: string;
  location: string;
  element: any;

  ngOnInit() {
    this.locationsId = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>("https://rickandmortyapi.com/api/location/" + this.locationsId)
      .subscribe(res => {
        this.location = res;
      })

     }

  }
