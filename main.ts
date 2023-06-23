input.onButtonPressed(Button.A, function () {
    radio.sendValue("Rotate", -500)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Go", 750)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Rotate", 500)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("Go", 500)
    radio.sendValue("Rotate", -200)
    radio.sendValue("Go", 800)
    radio.sendValue("Rotate", 300)
    radio.sendValue("Go", 600)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("Go", 750)
    radio.sendValue("Rotate", 500)
    radio.sendValue("Go", 500)
    radio.sendValue("Rotate", -500)
    radio.sendValue("Go", 750)
})
radio.setGroup(0)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
