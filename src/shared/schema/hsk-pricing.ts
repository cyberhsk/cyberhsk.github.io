export interface HskPricing {
  title: string;
  price: number;
  serrvices: {
    important: boolean;
    text: string;
  }[];
  popular: boolean;
  unit?: string;
  publish: boolean;
}
