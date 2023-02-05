import { Component } from '@angular/core';
import { Chart } from '../../models/chart'
import { CoinsService } from '../../services/coins.service'


@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent {

  chart!: Chart;

  constructor(
    private coinsService: CoinsService //aquí tenemos que inyectar el servicio
  ) {

  }

  ngOnInit() {

    this.coinsService.getChart('ethereum')
      .subscribe((res) => {
        this.chart = res;
        this.chart.prices.sort((a, b) => 0 - (a > b ? 1 : -1)); // Sort descending
      },
        (err) => console.error(err)
      );

  }

}
