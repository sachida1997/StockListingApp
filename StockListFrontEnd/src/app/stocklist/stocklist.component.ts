import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { AuthServiceService } from '../services/auth-service.service';
import { Stock } from '../_models/stock';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  stock: any[]=[];
  constructor(private stockService: StockService, private authService: AuthServiceService) {}
ngOnInit(): void {
  this.getStocksByCountry("india");
}
  // Add a method to trigger the service
  getStocksByCountry(country: string) {
    // Use your authentication service to get the token
    this.stockService.getStocksByCountry(country).subscribe(
      (response) => {
        console.log(response);
        this.stock=response.body;
        // Handle the response here
      },
      (error) => {
        console.error(error);
        // Handle errors here
      }
    );
  }
  dummyData = [
    {
      "symbol": "08GPG",
      "name": "Nippon India Mutual Fund",
      "currency": "INR",
      "exchange": "BSE",
      "mic_code": "XBOM",
      "country": "India",
      "type": "Common Stock",
      "extraField": "Dummy Extra Data"
    },
    // Add more dummy data if needed
  ];


  onButtonClick(data: any) {
    // Handle button click for the specific data row
    console.log('Button clicked for:', data);
  }
}
