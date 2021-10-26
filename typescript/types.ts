export type CryptoType = {
    id: number;
    title: string; 
    rating: number; 
    body: string;
    categories: Category[];
}


export type Props = {
    reviews: CryptoType[];
    loading: Boolean;
  }

export type Category = {
    id: number; 
    name: string;
}