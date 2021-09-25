export class Product {
  // property
  private _id: number;
  private _name: string;
  private _price: number;
  private _description: string;
  private _status: boolean;
  private _img: string;
  constructor(id: number, name: string, price: number, description: string, status: boolean, img: string) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
    this._status = status;
    this._img = img;
  }
  // id
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }
  // name
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  //price
  public get price(): number {
    return this._price;
  }
  public set price(v: number) {
    this._price = v;
  }
  //description
  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }
  //status
  public get status(): boolean {
    return this._status;
  }
  public set status(v: boolean) {
    this._status = v;
  }
  //img
  public get img(): string {
    return this._img;
  }
  public set img(v: string) {
    this._img = v;
  }
}
