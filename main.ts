let SPRITE = game.createSprite(2, 2)
serial.setBaudRate(BaudRate.BaudRate115200)
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
    if (input.buttonIsPressed(Button.A)) {
        SPRITE.set(LedSpriteProperty.X, 2)
        SPRITE.set(LedSpriteProperty.Y, 2)
        basic.pause(1000)
    }
})
