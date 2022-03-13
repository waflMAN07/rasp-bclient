import kaboom from "kaboom"

// initialize context
kaboom({
  width: 960,
  height:725,
  scale: 0.8
})  
layers([
 	"bg",
  	"ui",
  	"game"
])



const player = add([
		sprite("Frog"),
    pos(100, 100),
    scale(.1),
    area(10,10),
    solid(),
    "game",
    layer("game")
	]);

const SPEED = 150

// load assets
loadSprite("Skybox", "sprites/Skybox.png")
loadSprite("Frog", "sprites/Frog.png")
loadSprite("FrogRed", "sprites/Frog.png")

// add a character to screen
  add([
	// list of components
	sprite("Skybox"),
	pos(0, 0),
	area(),
])

const end_game = add([
	// list of components
	sprite("FrogRed"),
	pos(990, 500),
	area(1,1),
  solid(),
  scale(0.1),
  "red",
  "game",
    layer("game"),
  color(255,0,0)
])

let score = 0;
let scoreLabel = add([
    ]);

onKeyDown("w", () => {
    player.move(0, -SPEED)
  })
onKeyDown("s", () => {
  player.move(0, SPEED)
  })

onKeyDown("d", () => {
  player.move(SPEED, 0)
});

onKeyDown("a", () => {
  player.move(-SPEED, 0)
});
// add a kaboom on mouse click

player.collides("red", () => {
	destroy("red"),
	score += 1,
  scoreLabel.text = score;

})

