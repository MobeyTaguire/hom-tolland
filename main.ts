function changegamelevel1 () {
    let level1 = 0
    if (level1 == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (level1 == 2) {
    	
    } else if (level1 == 3) {
    	
    } else if (level1 == 4) {
    	
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    currentlevel1 += 1
    changegamelevel1()
})
let currentlevel1 = 0
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 1 e 4 e 1 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 f f 4 4 4 . . . . . 
    . . f f f 4 4 4 4 4 f f f . . . 
    . . f f f f 2 f f f f f f . . . 
    . . f f f f 2 2 2 f f f f . . . 
    . . 4 4 4 f f f 2 f 4 4 4 . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . 6 6 . 6 6 . . . . . . 
    . . . . . 6 6 . 6 6 . . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
