import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-chars-info',
  templateUrl: './chars-info.page.html',
  styleUrls: ['./chars-info.page.scss'],
})
export class CharsInfoPage implements OnInit {

  api: String = 'https://rickandmortyapi.com/api/character/';

  charsId: string;
  char: any;
  element: any;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient) { 
  }

  ngOnInit() {
    this.charsId = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>(this.api + this.charsId)
      .subscribe(res => {
        this.char = res;
      })

     }

  }
