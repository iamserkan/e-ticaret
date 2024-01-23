import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  url: string | null = null; // tipi string veya null olabilir

  constructor() { }

  ngOnInit() {
    this.url=localStorage.getItem('download');
    console.log(this.url);
  }

}
