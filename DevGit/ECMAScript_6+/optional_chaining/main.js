// sử dụng khi nghi ngờ 1 key của object không tồn tại
const obj ={
    name : "Alice",
    cat :{
        name : "Bob",
        cat1 : {
            name : "Java",
            cat2 : {
                name : "Js"
            }
        }
    }
}
// không tin cat3 tồn tại hay không
if(obj.cat.cat1.cat2.cat3?.name){
    console.log(obj.cat.cat1.name)
}
// sử dụng ontional chaining với những key mà tin tưởng có tồn
// tại hay không
// dùng với array nghi ngờ index không tồn tại 
// dùng để nghi ngờ một hàm có phải là hàm không
const demo = {
    getName(value){
        console.log(value);
    }
}
demo.getName?.(123);