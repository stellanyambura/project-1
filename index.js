document.addEventListener("DOMContentloaded", ()=>{
    document.getElementById(Comment_form).addEventListener('submit',postComent)
})
function postComent(e)
e.preventdefault 
let postComent={
    content:e.target.input_comment.value,
}
postToJson(postedComment)

    function postComent(postedComment){
        return fetch('http://localhost:3000/comments',{
          method: 'POST',
          headers: {
            'content-Type':'application/json',
            Accept:'application/json',

        },
        body:JSON.stringify(postedComment)
    })
    .then(response =>response.json())
    .then(comment =>console.log(comment))
        }
    
