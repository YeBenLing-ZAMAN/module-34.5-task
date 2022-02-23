
function showComment() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => showCommentPage(json))
}

showComment();
 
function showCommentPage(data){
    const comment = document.getElementById('comment');
    for(const post of data ){
        const para = document.createElement("p");
        para.innerText = post.body;
        comment.append(para);
    }
}
