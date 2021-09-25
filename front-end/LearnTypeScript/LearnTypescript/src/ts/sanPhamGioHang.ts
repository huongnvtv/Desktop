import { Product } from "./product";
export class SanPhamGioHang {
    private sanPham: Product;
    private soLuong: number = 1;
    constructor(sanPham: Product, soLuong: number) {
        this.sanPham = sanPham;
        this.soLuong = soLuong;
    }
    tinhGia(): number{
        return 2;
    }
    showSanPhamTrongGioHang() :string{
        return '';
    }
}