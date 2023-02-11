import { Injectable } from '@angular/core';
import { Coin } from '../models/coin'
import { Chart } from '../models/chart'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoinsService {





  api: string =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false';

  ap2: string = ''

  constructor(
    private http: HttpClient
  ) { }

  getCoins() {
    return this.http.get<Coin[]>(this.api)
  };

  getCoinsByPage(perPage: number, page: number) {
    return this.http.get<Coin[]>(this.api + '&per_page=' + perPage + '&page=' + page)

  };

  getChart(id: string) {
    console.log("recibo id: " + id)
    this.ap2 = 'https://api.coingecko.com/api/v3/coins/'.concat(id).concat('/market_chart?vs_currency=usd&days=10&interval=daily');
    console.log("url: " + this.ap2)
    return this.http.get<Chart>(this.ap2)
  };


}


