import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
    selector: 'stocks', // it's a css selector
    template: `<h2>Stocks</h2>
    {{title}}
    
    <ul>
        <li *ngFor="let stock of stocks">
        {{stock}}</li>
    </ul>

    `
})

export class StocksComponent{
    title = "List of Stocks:";
    //stocks  = ['AAPL', 'IBM', 'GOOG', 'UDEMY'];  
    stocks; 

    constructor(stockService : StockService) {
        this.stocks = stockService.getStocks();
    } 
}