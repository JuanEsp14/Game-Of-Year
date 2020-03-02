import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styles: []
})
export class GraficoBarraHorizontalComponent implements OnInit {

  results: any[] = [{
    "name": "Game 1",
    "value": 500
  },
  {
    "name": "Game 2",
    "value": 300
  },
  {
    "name": "Game 3",
    "value": 400
  },
  {
    "name": "Game 4",
    "value": 200
  }];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  constructor() {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
