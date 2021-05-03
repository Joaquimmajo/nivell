serial.setBaudRate(BaudRate.BaudRate115200)
let SPRITE = game.createSprite(2, 2)
basic.forever(function () {
    basic.pause(500)
    if (input.acceleration(Dimension.Y) < 0) {
        SPRITE.change(LedSpriteProperty.Y, -1)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        SPRITE.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.X) < 0) {
        SPRITE.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.X) > 0) {
        SPRITE.change(LedSpriteProperty.X, 1)
    }
})
basic.forever(function () {
    basic.pause(500)
    serial.writeLine("" + (input.acceleration(Dimension.X)))
    serial.writeLine("" + (input.acceleration(Dimension.Y)))
    serial.writeLine("" + (input.acceleration(Dimension.Z)))
})
