import { Component, OnInit } from '@angular/core';
import { Coin } from '../../models/coin'
import { CoinsService } from '../../services/coins.service'


@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})


export class CoinsComponent implements OnInit {

  coins: Coin[] = [];
  titles: string[] = ['#', 'Coin', 'Price', 'Price Change', '24H Volume'];
  searchText: string = '';
  filteredCoints: Coin[] = [];

  //hiding info box

  coinId: string = ''
  perPage: number = 5
  page: number = 1

  constructor(
    private coinsService: CoinsService //aquí tenemos que inyectar el servicio
  ) {

  }

  ngOnInit() {
    this.coinsService.getCoinsByPage(this.perPage, this.page)
      .subscribe((res) => {
        this.coins = res;
        this.filteredCoints = this.coins;
      },
        (err) => console.error(err)
      );

    this.onShowDetail('ethereum')
  }


  searchCoin() {
    this.filteredCoints = this.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  onRefresh() { this.ngOnInit(); }

  onShowDetail(id: string) {

    this.coinId = id
    console.log(id);
  }

  loadMore() {
    this.page += 1
    this.coinsService.getCoinsByPage(this.perPage, this.page)
      .subscribe((res) => {
        this.coins = this.coins.concat(res);
        this.filteredCoints = this.coins;
      },
        (err) => console.error(err)
      );
  }

}