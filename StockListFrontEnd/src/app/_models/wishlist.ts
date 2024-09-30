export interface Wishlist {

    
        id: number;
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        country: string;
        type: string;
        userId?: string; // Making it optional as it might be hidden
    
      
}
