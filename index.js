document.addEventListener("DOMContentloaded", ()=>{
document.getElementById('Comment_form').addEventListener('submit',postComent)
})
function postComent(e){
e.preventDefault(); 
let comment={
    content:e.target.input_comment.value,
}
postToJson(comment)
}
 function postToJson(comment){
 return fetch('http://localhost:3000/comments',{
  method: 'POST',
  headers: {
  'content-Type':'application/json',
  Accept:'application/json',
},
  body:JSON.stringify(comment)
    })
    .then(response =>response.json())
    .then(data =>console.log(data))
        }
    
