import { Injectable } from '@angular/core';
import { Coin } from '../models/coin'
import { Chart } from '../models/chart'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoinsService {





  api: string =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  ap2: string = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=10&interval=daily';

  constructor(
    private http: HttpClient
  ) { }

  getCoins() {
    return this.http.get<Coin[]>(this.api)
  };

  getChart(id: string) {
    console.log("recibo id: " + id)
    return this.http.get<Chart>(this.ap2)
  };
}


