let strip: PlanetX_Display.Strip = null
let 差速 = 0
function 任务一 (左: number, 右: number, 时间: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右)
    basic.pause(时间)
}
function 视觉追踪 (左2: number, 右2: number) {
    while (!(input.buttonIsPressed(Button.A))) {
        PlanetX_AILens.cameraImage()
        if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Red) || PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Blue)) {
            if (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) >= 70 && PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) <= 154 && (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) >= 0 && PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) <= 74)) {
                neZha.setMotorSpeed(neZha.MotorList.M1, 0 - 左2)
                neZha.setMotorSpeed(neZha.MotorList.M4, 0 - 右2)
                basic.pause(500)
            } else if (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) >= 70 && PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) <= 154 && (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) >= 148 && PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) <= 224)) {
                neZha.setMotorSpeed(neZha.MotorList.M1, 左2)
                neZha.setMotorSpeed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            } else if (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) >= 0 && PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) <= 74 && (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) >= 0 && PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) <= 224)) {
                neZha.setMotorSpeed(neZha.MotorList.M1, 0 - 左2)
                neZha.setMotorSpeed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            } else if (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) >= 148 && PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.X) <= 224 && (PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) >= 0 && PlanetX_AILens.ballData(PlanetX_AILens.Ballstatus.Y) <= 224)) {
                neZha.setMotorSpeed(neZha.MotorList.M1, 左2)
                neZha.setMotorSpeed(neZha.MotorList.M4, 0 - 右2)
                basic.pause(500)
            }
        } else {
            neZha.setMotorSpeed(neZha.MotorList.M1, 0)
            neZha.setMotorSpeed(neZha.MotorList.M4, 0)
        }
        if (PlanetX_Basic.checkCard()) {
            if (PlanetX_Basic.readDataBlock() == "R") {
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Red))
                basic.pause(3500)
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
                neZha.setMotorSpeed(neZha.MotorList.M1, 左2)
                neZha.setMotorSpeed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            } else if (PlanetX_Basic.readDataBlock() == "B") {
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Blue))
                basic.pause(3500)
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
                neZha.setMotorSpeed(neZha.MotorList.M1, 左2)
                neZha.setMotorSpeed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            } else if (PlanetX_Basic.readDataBlock() == "G") {
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Green))
                basic.pause(3500)
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
                neZha.setMotorSpeed(neZha.MotorList.M1, 左2)
                neZha.setMotorSpeed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            } else if (PlanetX_Basic.readDataBlock() == "Y") {
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Yellow))
                basic.pause(3500)
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
                neZha.setMotorSpeed(neZha.MotorList.M1, 左2)
                neZha.setMotorSpeed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            } else {
                strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
            }
        } else {
            strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
        }
    }
}
function 巡线至基地 (左3: number, 右3: number) {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0))) {
        PlanetX_Basic.Trackbit_get_state_value()
        巡线(左3, 右3)
    }
}
function 任务四2 (电机: number, 时间2: number) {
    neZha.setMotorSpeed(neZha.MotorList.M3, 电机)
    basic.pause(时间2)
}
function 右转 (左4: number, 右4: number, 时间3: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左4)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右4)
    basic.pause(时间3)
}
function 左转 (左轮速度: number, 右轮速度: number, 时间4: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左轮速度)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右轮速度)
    basic.pause(时间4)
}
function 直走至四黑 (左5: number, 右5: number) {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        PlanetX_Basic.Trackbit_get_state_value()
        neZha.setMotorSpeed(neZha.MotorList.M1, 左5)
        neZha.setMotorSpeed(neZha.MotorList.M4, 右5)
    }
}
function 任务四回线 (左6: number, 右6: number, 时间5: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左6)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右6)
    basic.pause(时间5)
}
function 右转1 (左7: number, 右7: number) {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
        neZha.setMotorSpeed(neZha.MotorList.M1, 左7)
        neZha.setMotorSpeed(neZha.MotorList.M4, 右7)
    }
}
// 因为机器人处于A基地时，四巡未在黑线上
function 出基地 (左轮速度2: number, 右轮速度2: number, 时间6: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左轮速度2)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右轮速度2)
    basic.pause(时间6)
}
function 右转90 (左8: number, 右8: number, 时间7: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左8)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右8)
    basic.pause(时间7)
}
input.onButtonPressed(Button.A, function () {
    PlanetX_Basic.Trackbit_get_state_value()
    basic.showNumber(1)
    出基地(29.1, 30, 450)
    巡线至左转路口(29.1, 30)
    前进(29.1, 30, 175)
    左转(-29.1, 30, 150)
    左转1(-29.1, 30)
    停止电机(150)
    巡线至四黑(29.1, 30)
    停止电机(150)
    任务一(29.1, 30, 530)
    停止电机(155)
    任务一回线(-29.1, -30, 1000)
    停止电机(150)
    右转90(29.1, -30, 200)
    右转1(29.1, -30)
    停止电机(150)
    巡线至四黑(29.1, 30)
    任务二(29.1, 29.5, 1000)
    任务二回线(-29.1, -30, 1000)
    左转90(-29.1, 30, 450)
    停止电机(150)
    直走至四黑(29.1, 30)
    前进(29.1, 30, 180)
    右转1(29.1, -30)
    停止电机(150)
    任务三(-29.1, -30, 500)
    巡线至四黑(20.1, 20.5)
    停止电机(150)
    任务四1(29.1, 29.5, 480)
    停止电机(150)
    任务四2(780, 5000)
    停止电机(150)
    任务四回线(-29.1, -30, 900)
    停止电机(150)
    右转(29.1, -30, 450)
    直走至四黑(29.1, 29.1)
    前进(29.1, 30, 150)
    右转1(29.1, -30)
    巡线至基地(29.1, 30)
    回基地(29.1, 30, 780)
    neZha.stopAllMotor()
})
function 巡线 (左轮速度3: number, 右轮速度3: number) {
    差速 = (PlanetX_Basic.TrackbitgetGray(PlanetX_Basic.TrackbitChannel.Two) - PlanetX_Basic.TrackbitgetGray(PlanetX_Basic.TrackbitChannel.Three)) * 0.1
    neZha.setMotorSpeed(neZha.MotorList.M1, 左轮速度3 - 差速)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右轮速度3 + 差速)
}
function 任务二 (左9: number, 右9: number, 时间8: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左9)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右9)
    basic.pause(时间8)
}
function 任务三 (左10: number, 右10: number, 时间9: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左10)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右10)
    basic.pause(时间9)
}
function 左转1 (左11: number, 右11: number) {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
        neZha.setMotorSpeed(neZha.MotorList.M1, 左11)
        neZha.setMotorSpeed(neZha.MotorList.M4, 右11)
    }
}
function 前进 (左12: number, 右12: number, 时间10: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左12)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右12)
    basic.pause(时间10)
}
function 左转90 (左20: number, 右20: number, 时间16: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左20)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右20)
    basic.pause(时间16)
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J1, 8, PlanetX_Display.NeoPixelMode.RGB)
    PlanetX_AILens.initModule()
    PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Ball)
    视觉追踪(10.4, 12)
})
function 巡线至左转路口 (左13: number, 右13: number) {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_9))) {
        PlanetX_Basic.Trackbit_get_state_value()
        巡线(左13, 右13)
    }
}
function 巡线至四黑 (左14: number, 右14: number) {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        PlanetX_Basic.Trackbit_get_state_value()
        巡线(左14, 右14)
    }
}
function 任务二回线 (左15: number, 右15: number, 时间11: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左15)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右15)
    basic.pause(时间11)
}
function 任务四1 (左16: number, 右16: number, 时间12: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左16)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右16)
    basic.pause(时间12)
}
function 回基地 (左17: number, 右17: number, 时间13: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左17)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右17)
    basic.pause(时间13)
}
function 手柄 (左18: number, 右18: number) {
    while (!(PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.Left1) && PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.Right1) && (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.Left2) && PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.Right2)))) {
        if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.UP)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 左18)
            neZha.setMotorSpeed(neZha.MotorList.M4, 右18)
        } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.DOWN)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 0 - 左18)
            neZha.setMotorSpeed(neZha.MotorList.M4, 0 - 右18)
        } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.RIGHT)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 左18)
            neZha.setMotorSpeed(neZha.MotorList.M4, 0 - 右18)
        } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.LEFT)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 0 - 左18)
            neZha.setMotorSpeed(neZha.MotorList.M4, 右18)
        } else {
            neZha.setMotorSpeed(neZha.MotorList.M1, 0)
            neZha.setMotorSpeed(neZha.MotorList.M4, 0)
        }
    }
}
function 停止电机 (时间14: number) {
    neZha.stopAllMotor()
    basic.pause(时间14)
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
    手柄(32, 29.1)
})
function 任务一回线 (左19: number, 右19: number, 时间15: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 左19)
    neZha.setMotorSpeed(neZha.MotorList.M4, 右19)
    basic.pause(时间15)
}
