function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(righttNumbers, 10)
 
  if (left > 0) {
    dodger.style.right = `${right - 1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgeright()
  }
})