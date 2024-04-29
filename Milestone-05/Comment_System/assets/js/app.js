const commentWrap = document.querySelector('.comment_wrap');
const commentBox = document.querySelector('#comment-box');
const post = document.querySelector('.post');


const getComment = () => {
    let comment  = commentBox.value;
    let newComment = document.createElement('p');
    newComment.className = 'comment_item'
    newComment.innerHTML = comment;
    commentWrap.append(newComment);

    // Clear Comment Box
    commentBox.value = '';
}

post.addEventListener('click', getComment);