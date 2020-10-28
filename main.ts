let age = 0
let count_youth = 0
let count_seniority = 0
let average_age = 0
let dice_1 = 0
let dice_2 = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 15; index++) {
        age = randint(0, 70)
        basic.showNumber(age)
        if (age >= 0 && age <= 14) {
            basic.showString("childhood")
        } else if (age >= 15 && age <= 24) {
            basic.showString("Youth")
            count_youth += 1
        } else if (age >= 25 && age <= 64) {
            basic.showString("Adulthood")
        } else if (age >= 64) {
            basic.showString("Seniority")
            count_seniority += 1
        }
    }
    average_age = age / 15
    basic.showString("average age")
    basic.showNumber(average_age)
    basic.showString("total of youth")
    basic.showNumber(count_youth)
    basic.showString("total of seniority")
    basic.showNumber(count_seniority)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let counter = 0; counter <= 3; counter++) {
        basic.showNumber(counter)
        basic.clearScreen()
    }
    dice_1 = randint(1, 6)
    dice_2 = randint(1, 6)
    if (dice_1 == 6 && dice_2 == 6) {
        basic.showString("Win")
        music.playMelody("C5 D B A F A C E ", 200)
    } else {
        basic.showString("Lose")
        music.playTone(165, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = randint(0, 4)
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
    }
})
