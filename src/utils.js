// Parses size parameter from SGF format
module.exports.parseSize = function (input) {
  var matches, sizeX, sizeY

  input = (input + '').replace(/\s/g, '') // Convert to string and remove whitespace

  matches = input.match(/^(\d+):(\d+)$/) // Check for #:# pattern
  if (matches) {
    // Composed value pattern found
    sizeX = +matches[1] // Convert to numbers
    sizeY = +matches[2]
  } else if (input.match(/^\d+$/)) {
    // Check for # pattern
    sizeX = +input // Convert to numbers
    sizeY = +input // Implied square
  } else {
    // Invalid input format
    sizeX = sizeY = 19 // Default size value
  }
  if (sizeX > 52 || sizeX < 1 || sizeY > 52 || sizeY < 1) {
    sizeX = sizeY = 19 // Out of range, set to default
  }

  return { x: sizeX, y: sizeY }
}
