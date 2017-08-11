import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { getJsonService } from './app-getJson.service';
import {single} from './price';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
//main page
@Component({
  selector: 'app-main',
  templateUrl: './pages/main.component.html',
  styleUrls: ['./app.component.css'],
  providers: [getJsonService],
})
export class MainComponent implements OnInit {
  title = 'main';
  imgsrc = '';
  itemDetail: any;
  itemPrice: Number;
  selectedItem: any
  constructor(private getJson: getJsonService, public dialog: MdDialog) { };

  ngOnInit(): void {
    this.getJson.getJSON()
      .subscribe(
      res => this.itemDetail = res.item,
      err => console.error(err)
      )
  }

  selectItem(item): void {
    console.log(this.itemDetail)
    this.selectedItem = item
    this.itemPrice = item.item_price;
    this.imgsrc = item.item_image;
  }

  showChart(): void {
    this.dialog.open(priceChart);
  }
}
//homepage
@Component({
  selector: 'app-home',
  templateUrl: './pages/home.component.html',
  styleUrls: ['./app.component.css']
})
export class HomeComponent {
  title = 'home'
  constructor(private router: Router) { };
  redirect() {
    console.log('click');
    this.router.navigate(['/main']);
  }
}

@Component({
  selector: 'price-chart',
  template: `
  <ngx-charts-line-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale"
      (select)="onSelect($event)">
    </ngx-charts-line-chart>
  `
})
export class priceChart { 
  single: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time-Line';
  showYAxisLabel = true;
  yAxisLabel = 'Price';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}
