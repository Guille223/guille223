import { Component, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { Chart } from '../../models/chart'
import { CoinsService } from '../../services/coins.service'


@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent {
  @Input() id: string = '';
  chart!: Chart;

  date: Date = new Date();

  coinTitle: string = 'Etherium';

  constructor(
    private coinsService: CoinsService //aquí tenemos que inyectar el servicio

  ) {

  }


  ngOnInit() {
    console.log("coin child:" + this.id)
    this.coinsService.getChart(this.id)
      .subscribe((res) => {
        this.chart = res;
        this.chart.prices.sort((a, b) => 0 - (a > b ? 1 : -1)); // Sort descending
      },
        (err) => console.error(err)
      );

  }
  ngOnChanges() {
    console.log("coin child:" + this.id)
    this.coinsService.getChart(this.id)
      .subscribe((res) => {
        this.chart = res;
        console.log("res: " + res)
        this.chart.prices.sort((a, b) => 0 - (a > b ? 1 : -1)); // Sort descending
      },
        (err) => console.error(err)
      );
  }
}
