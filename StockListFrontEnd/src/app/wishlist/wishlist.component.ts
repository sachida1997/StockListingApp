import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Wishlist } from '../_models/wishlist';
import { StocklistComponent } from '../stocklist/stocklist.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  userId: string="sachida12345";
  token: string | undefined;
  wishlist!: any[];
  onButtonClick(data:any){
    this.addToWishlist(data);
  }
  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    
     this.wishlist=this.getWishlist();
    
  }

  getWishlist(): any {
    this.wishlistService.getWishlistByUserId(this.userId).subscribe(
      (response) => {
        console.log(response);
        this.wishlist = response.body as any[]; // Assuming the response body is an array
      },
      (error) => {
        console.error('Error fetching wishlist:', error);
      }
    );
  }

  addToWishlist(stock: Wishlist): void {
    if (stock != null) {
      this.wishlistService.addToWishlist(stock).subscribe(
        () => {
          this.getWishlist();
        },
        (error) => {
          console.error('Error adding to wishlist:', error);
        }
      );
    }
  }
  
  

  deleteFromWishlist(itemId: number): void {
    this.wishlistService.deleteFromWishlist(itemId).subscribe(
      () => {
        this.getWishlist();
      },
      (error) => {
        console.error('Error deleting from wishlist:', error);
      }
    );
  }

  updateWishlist(itemId: number, item: any): void {
    this.wishlistService.updateWishlist(itemId, item).subscribe(
      () => {
        this.getWishlist();
      },
      (error) => {
        console.error('Error updating wishlist:', error);
      }
    );
  }

  getAllItems(): void {
    this.wishlistService.getAllItems().subscribe(
      (data: any) => {
        this.wishlist = data;
      },
      (error) => {
        console.error('Error fetching all items:', error);
      }
    );
  }
}
