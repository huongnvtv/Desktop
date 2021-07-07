// 1.JSON là một định dạng dữ liệu (không phải là một kiểu dữ liệu)
// là một chuỗi
// 2.JSON viết tắt của Javascript Object Notation
// 3.JSON thể hiện dạng :number, string, boolean, Null, Array, Object
// 4.Thao tác chuyển đổi thành JSON và JSON thành kiểu dữ liệu
// Stringify : từ js type sang json
// Parse : từ json thành js
// vd :
var json = '1';
var json1 = 'true';
var json2 = '["Javascript","PHP","Java"]' 
// lưu ý các element trong array phải nằm trong dấu ""
var json3 = '{"name" : "huong","age" : 18}'
var json4 = '"abc"'
// các key và value cũng phải nằm trong dấu nháy kép
// dạng số không cần nằm trong dấu nháy kép
// chuyển từ dạng JSON về dạng bình thường
console.log(JSON.parse(json4))
var stJson = {name : "huong", age : 18}
console.log(JSON.stringify(stJson))