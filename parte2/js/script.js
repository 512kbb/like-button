const likeSpans = document.querySelectorAll('.likes')
const likeButtons = document.querySelectorAll('.like-button')
// console.log(likeButtons)

const likeArray = []

likeSpans.forEach((likeSpan) => {
  likeArray.push(0)
})

document.addEventListener("DOMContentLoaded", (e) => {
  likeArray.forEach((like, index) => {
    likeSpans[index].innerHTML = `${like} like(s)`
  })
})

likeButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    likeArray[index]++
    likeSpans[index].innerHTML = `${likeArray[index]} like(s)`
  })
})
