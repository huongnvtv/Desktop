var user =[
    {
        id : 1,
        name : 'Văn Hướng'
    },
    {
        id : 2,
        name : 'Sơn Đặng'
    },
    {
        id : 3,
        name : "Hùng Đặng"
    }
]
var comments = [
    {
        id : 1,
        user_id : 1,
        content : "Anh Sơn chưa ra video:(("
    },
    {
        id : 2,
        user_id : 2,
        content : "Vừa ra xong em ơi!"
    }
]
// 1.Lấy comments
// 2.Từ comments lấy ra user_id
// 3.Từ user_id lấy ra user tương ứng
// Fake API
function getComments(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(comments)
        },1000)
    })
}
function getUsersById(userIds){
    return new Promise(function(resolve){
        var result = user.filter(function(item){
            return userIds.includes(item.id);
        })
        setTimeout(function(){
            resolve(result)
       },1000)
    })
}
getComments()
   .then(function(comments){
       var user_ids = comments.map(function(item){
           return item.user_id
       })
   })
getUsersById([1,2])
   .then(function(data){
       console.log(data)
   })   