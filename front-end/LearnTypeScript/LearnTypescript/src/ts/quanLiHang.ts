import { Product } from './product';
export class QuanLiHang {
  private _productList: Product[];
  constructor() {
    var sp1 = new Product(1, 'Chuột Không Dây Logitech M590', 610000, 'Chuột Không Dây Logitech M590', true, './src/img/anhsp1.jpg');
    this._productList = [];
    this.addProduct(sp1);
  }
  getProducts(): Product[] {
    return this._productList;
  }
  getProductById(): Product {
    var motSp = new Product(1, 'Chuột Không Dây Logitech M590', 610000, 'Chuột Không Dây Logitech M590', true, './src/img/anhsp1.jpg');
    return motSp;
  }
  addProduct(sp: Product) {
    this._productList.push(sp);
  }
  showProduct(): string {
    return '';
  }

  public set productList(v: Product[]) {
    this._productList = v;
  }

  public get productList(): Product[] {
    return this._productList;
  }
}
