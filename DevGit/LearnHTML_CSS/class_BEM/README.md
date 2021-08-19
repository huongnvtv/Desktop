# BEM
- Là tiêu chuẩn đặt tên class khi viết CSS

## ý nghĩa:
- Viết tắt của : Block Element Modifier
- Block : khối
- Element : Thành phần trong khối
- Modifier : Bổ sung ý nghĩa cho `Block` hoặc `Element`

## Tại sao phải dùng BEM:
- Mỗi người đặt một kiểu
- Members đặt class trùng nhau, CSS đè lên nhau

# Cú pháp:
- .block
- .block__element
- .block--modifier
- .block__element--modifier

## Tính ứng dụng:
- Xây dựng layout website
- Xây dựng thành phần trên website

## ưu điểm:
- Tính rõ ràng
- Tái sử dụng dễ dàng
- Giúp cả teams làm việc với nhau dễ dàng 
- Tính module, không lo CSS của class này ảnh hưởng lên CSS của class khác

## nhược điểm:
- Tên class dài
- Một số người cho là xấu

## khi nào sử dụng BEM là phù hợp?
- Dự án nhiều members
- Dự án lớn, số lượng page nhiều hoặc số lượng các thành phần trên giao diên nhiều
