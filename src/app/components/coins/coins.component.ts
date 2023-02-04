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

  constructor(
    private coinsService: CoinsService //aquí tenemos que inyectar el servicio
  ) {

  }

  ngOnInit() {
    this.coinsService.getCoins()
      .subscribe((res) => {
        this.coins = res;
        this.filteredCoints = this.coins;
      },
        (err) => console.error(err)
      );

  }


  searchCoin() {
    this.filteredCoints = this.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  onRefresh() { this.ngOnInit(); }
}