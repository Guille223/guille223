import { Component } from '@angular/core';
import { Chart } from '../../models/chart'
import { CoinsService } from '../../services/coins.service'


@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent {

  chart: any;

  constructor(
    private coinsService: CoinsService //aquí tenemos que inyectar el servicio
  ) {

  }

  ngOnInit() {

    this.coinsService.getChart('ethereum')
      .subscribe((res) => {
        console.log(res);
        this.chart = res;
      },
        (err) => console.error(err)
      );

  }

}
