export interface Card {
  id: number;
  title: string;
  description: string;
  coverImg: string;
  location: string;
  openSpots: number;
  price: number;
  stats: Stats;
}

export interface Stats {
  rating: number;
  reviewCount: number;
}
