// 1.Front-end : xây dựng giao diện người dùng
// 2.Back-end : xây dựng logic xử lí
// + Cơ sở dữ liệu
// API (url): Application programing interface (giao diện lập trình
// ứng dụng) ---> cổng giao tiếp giữa các phần mềm

// Back-end --> API --> Fetch (gọi API lấy dữ liệu) --> 
// dữ liệu dạng JSON/XML --> JSON.parse --> javascript types
// ---> render ra giao diện với HTML

var postAPI = 'https://jsonplaceholder.typicode.com/posts';
fetch(postAPI)
   .then(function(response){
       // gọi fetch trả lại 1 phản hồi gọi là respone
       // respone là 1 promise
       // console.log(response)
       return response.json();
       // response.json() : là 1 promise trả về 
       // JSON.parse : JSON --> js
   })
   .then(function(posts){
       console.log(posts)
       var htmls = posts.map(function(post){
           return `<li> 
             <h2>${post.title}</h2>
             <p>${post.body}</p>
           </li>`
       })
      var html =  htmls.join('')
      var content = document.getElementById('content');
      content.innerHTML = html;
   })
   .catch(function(err){
       console.log('có lỗi !')
       // khi mất mạng hoặc là url không tồn tại
   })
