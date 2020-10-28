document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  document.addEventListener("keydown", function(event) {
    let tileContainer = document.querySelector("ul#moves-container")
    let movesLi = document.createElement("li")
      if (event.key === "ArrowRight") {
        tileContainer.append(movesLi)
        movesLi.innerHTML = "right"
      } else if (event.key === "ArrowLeft") {
        tileContainer.append(movesLi)
        movesLi.innerHTML = "left"
      } else if (event.key === "ArrowUp") {
        tileContainer.append(movesLi)
        movesLi.innerHTML = "up"
      } else if (event.key === "ArrowDown") {
        tileContainer.append(movesLi)
        movesLi.innerHTML = "down"
      } else {
        console.log("Clang! Hit the wall!")
      }
  })

  let moveButton = document.querySelector("#move-button")

  moveButton.addEventListener("click", function(event) {
      let moves = document.querySelectorAll("#moves-container li")
      moves.forEach(function(movement) {
        move(movement.innerText)
        movement.remove()
      })  
  })
});


// const tileRobot = document.querySelector("tile-robot")