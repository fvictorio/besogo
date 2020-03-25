// Sets up keypress handling
module.exports.addKeypressHandler = function addKeypressHandler(
  container,
  editor,
) {
  if (!container.getAttribute('tabindex')) {
    container.setAttribute('tabindex', '0') // Set tabindex to allow div focusing
  }

  container.addEventListener('keydown', function (evt) {
    evt = evt || window.event
    switch (evt.keyCode) {
      case 33: // page up
        editor.prevNode(10)
        break
      case 34: // page down
        editor.nextNode(10)
        break
      case 35: // end
        editor.nextNode(-1)
        break
      case 36: // home
        editor.prevNode(-1)
        break
      case 37: // left
        editor.prevNode(1)
        break
      case 38: // up
        editor.nextSibling(-1)
        break
      case 39: // right
        editor.nextNode(1)
        break
      case 40: // down
        editor.nextSibling(1)
        break
      case 46: // delete
        editor.cutCurrent()
        break
    } // END switch (evt.keyCode)
    if (evt.keyCode >= 33 && evt.keyCode <= 40) {
      evt.preventDefault() // Suppress page nav controls
    }
  }) // END func() and addEventListener
} // END function addKeypressHandler

// Sets up mousewheel handling
module.exports.addWheelHandler = function addWheelHandler(boardDiv, editor) {
  boardDiv.addEventListener('wheel', function (evt) {
    evt = evt || window.event
    if (evt.deltaY > 0) {
      editor.nextNode(1)
      evt.preventDefault()
    } else if (evt.deltaY < 0) {
      editor.prevNode(1)
      evt.preventDefault()
    }
  })
}
