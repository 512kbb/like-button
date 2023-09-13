const likeButton = document.querySelector('#like-button')
const dislikeButton = document.querySelector('#dislike-button')
const likeSpan = document.getElementById('likes')

// console.log(likeButton)
let likes = 0
document.addEventListener("DOMContentLoaded", (e) => {
  likeSpan.innerHTML = `${likes} like(s)`
})

likeButton.addEventListener('click', (e) => {
  likes++
  likeSpan.innerHTML = `${likes} like(s)`
})

dislikeButton.addEventListener('click', (e) => {
  if (likes > 0) {
    likes--
    likeSpan.innerHTML = `${likes} like(s)`
  }
})