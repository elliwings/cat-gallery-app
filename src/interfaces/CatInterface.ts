export interface Breed {
  id: number;
  name: string;
  temperament: string;
  description: string;
}

export interface Cat {
  id: string;
  url: string;
  breeds: Breed[];
}
