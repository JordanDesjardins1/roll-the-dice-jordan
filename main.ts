let Number2 = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        Number2 = randint(0, 5) + 1
        if (Number2 == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            if (Number2 == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . # .
                    . . . . .
                    . # . . .
                    . . . . .
                    `)
            }
        }
        if (Number2 == 3) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
        } else {
            if (Number2 == 4) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # . # .
                    . . . . .
                    `)
            }
        }
        if (Number2 == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else {
            if (Number2 == 6) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . # . # .
                    . # . # .
                    . . . . .
                    `)
            }
        }
        basic.pause(100)
    }
})
