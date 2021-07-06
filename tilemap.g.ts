// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010101010101010101010101010101010101030101010101030101010101010101010101010101010101010101010101010201010102020202010103010101010101020201020101010202020101010101010102010102010101010202020101010102020101010101020202020202010103020101010103010201010202010101010102020201010202010203010101010101060606050602020201020101010103010504040406020101020101010101010104060405060102020101010101010201060506060602020101010301010102020202010101010101080e09010101010101020301010101020a070d010101010101020101010202010b0e0c0101`, img`
. . . . . . . . . . . . . . . . 
. . 2 . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. 2 . 2 . . . 2 . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . 2 2 2 2 2 . . . . . 2 . . 
. . . . . . . . . . . 2 . 2 . . 
. . . . . 2 . . . . . 2 . 2 . . 
. . . . . . . . . . . 2 . 2 . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.builtin.forestTiles12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
