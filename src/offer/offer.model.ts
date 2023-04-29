class Product {
  constructor(public amount: string, public sku: string, public name: string) {}
}

export class UserSession {
  constructor(
    public gameId: string,
    public avlabilty: number,
    public offerSetName: string,
    public offerSetId: string,
    public sku: string,
    public priceInCents: string,
    public currency: string,
    public products: Product[],
  ) {}
}
