strip: PlanetX_Display.Strip = None
差速 = 0
def 任务一(左: number, 右: number, 时间: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左)
    neZha.set_motor_speed(neZha.MotorList.M4, 右)
    basic.pause(时间)
def 视觉追踪(左2: number, 右2: number):
    while not (input.button_is_pressed(Button.A)):
        PlanetX_AILens.init_module()
        if PlanetX_AILens.ball_color(PlanetX_AILens.ballColorList.RED) or PlanetX_AILens.ball_color(PlanetX_AILens.ballColorList.BLUE):
            if PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.X) >= 70 and PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.X) <= 154 and (PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.Y) >= 0 and PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.Y) <= 74):
                neZha.set_motor_speed(neZha.MotorList.M1, 0 - 左2)
                neZha.set_motor_speed(neZha.MotorList.M4, 0 - 右2)
            elif PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.X) >= 70 and PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.X) <= 154 and (PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.Y) >= 148 and PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.Y) <= 224):
                neZha.set_motor_speed(neZha.MotorList.M1, 左2)
                neZha.set_motor_speed(neZha.MotorList.M4, 右2)
            elif PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.X) >= 0 and PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.X) <= 74 and (PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.Y) >= 0 and PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.Y) <= 224):
                neZha.set_motor_speed(neZha.MotorList.M1, 0 - 左2)
                neZha.set_motor_speed(neZha.MotorList.M4, 右2)
            elif PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.X) >= 148 and PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.X) <= 224 and (PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.Y) >= 0 and PlanetX_AILens.ball_data(PlanetX_AILens.Ballstatus.Y) <= 224):
                neZha.set_motor_speed(neZha.MotorList.M1, 左2)
                neZha.set_motor_speed(neZha.MotorList.M4, 0 - 右2)
        else:
            neZha.set_motor_speed(neZha.MotorList.M1, 0)
            neZha.set_motor_speed(neZha.MotorList.M4, 0)
        if PlanetX_Basic.check_card():
            if PlanetX_Basic.read_data_block() == "R":
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.RED))
                basic.pause(3500)
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.WHITE))
                neZha.set_motor_speed(neZha.MotorList.M1, 左2)
                neZha.set_motor_speed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            elif PlanetX_Basic.read_data_block() == "B":
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.BLUE))
                basic.pause(3500)
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.WHITE))
                neZha.set_motor_speed(neZha.MotorList.M1, 左2)
                neZha.set_motor_speed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            elif PlanetX_Basic.read_data_block() == "G":
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.GREEN))
                basic.pause(3500)
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.WHITE))
                neZha.set_motor_speed(neZha.MotorList.M1, 左2)
                neZha.set_motor_speed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            elif PlanetX_Basic.read_data_block() == "Y":
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.YELLOW))
                basic.pause(3500)
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.WHITE))
                neZha.set_motor_speed(neZha.MotorList.M1, 左2)
                neZha.set_motor_speed(neZha.MotorList.M4, 右2)
                basic.pause(500)
            else:
                strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.WHITE))
        else:
            strip.show_color(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.WHITE))
def 巡线至基地(左3: number, 右3: number):
    PlanetX_Basic.Trackbit_get_state_value()
    while not (PlanetX_Basic.trackbit_state(PlanetX_Basic.TrackbitStateType.TRACKING_STATE_0)):
        PlanetX_Basic.Trackbit_get_state_value()
        巡线(左3, 右3)
def 任务四2(电机: number, 时间2: number):
    neZha.set_motor_speed(neZha.MotorList.M3, 电机)
    basic.pause(时间2)
def 右转(左4: number, 右4: number, 时间3: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左4)
    neZha.set_motor_speed(neZha.MotorList.M4, 右4)
    basic.pause(时间3)
def 左转(左轮速度: number, 右轮速度: number, 时间4: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左轮速度)
    neZha.set_motor_speed(neZha.MotorList.M4, 右轮速度)
    basic.pause(时间4)
def 直走至四黑(左5: number, 右5: number):
    PlanetX_Basic.Trackbit_get_state_value()
    while not (PlanetX_Basic.trackbit_state(PlanetX_Basic.TrackbitStateType.TRACKING_STATE_5)):
        PlanetX_Basic.Trackbit_get_state_value()
        neZha.set_motor_speed(neZha.MotorList.M1, 左5)
        neZha.set_motor_speed(neZha.MotorList.M4, 右5)
def 任务四回线(左6: number, 右6: number, 时间5: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左6)
    neZha.set_motor_speed(neZha.MotorList.M4, 右6)
    basic.pause(时间5)
def 右转1(左7: number, 右7: number):
    PlanetX_Basic.Trackbit_get_state_value()
    while not (PlanetX_Basic.trackbit_state(PlanetX_Basic.TrackbitStateType.TRACKING_STATE_1)):
        PlanetX_Basic.Trackbit_get_state_value()
        neZha.set_motor_speed(neZha.MotorList.M1, 左7)
        neZha.set_motor_speed(neZha.MotorList.M4, 右7)
# 因为机器人处于A基地时，四巡未在黑线上
def 出基地(左轮速度2: number, 右轮速度2: number, 时间6: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左轮速度2)
    neZha.set_motor_speed(neZha.MotorList.M4, 右轮速度2)
    basic.pause(时间6)
def 右转90(左8: number, 右8: number, 时间7: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左8)
    neZha.set_motor_speed(neZha.MotorList.M4, 右8)
    basic.pause(时间7)

def on_button_pressed_a():
    PlanetX_Basic.Trackbit_get_state_value()
    basic.show_number(1)
    出基地(30, 32.2, 500)
    巡线至左转路口(30, 32.2)
    前进(1, 1, 1)
    左转(1, 1, 1)
    左转1(-30, 32.2)
    巡线至四黑(30, 30)
    停止电机(150)
    任务一(30, 30, 500)
    停止电机(150)
    任务一回线(-30, -30, 1000)
    停止电机(150)
    右转90(30, -30, 200)
    右转1(30, -32.2)
    巡线至四黑(30, 30)
    任务二(30, 30, 750)
    任务二回线(-30, -30, 750)
    左转90(-30, 30, 450)
    直走至四黑(30, 30)
    前进(30, 32.2, 150)
    右转1(30, -32.2)
    任务三(-30, -30, 200)
    巡线至四黑(30, 30)
    停止电机(1)
    任务四1(30, 30, 150)
    停止电机(1)
    任务四2(50, 1500)
    任务四回线(-30, -30, 480)
    停止电机(1)
    右转(30, 0, 450)
    直走至四黑(30, 30)
    前进(30, 32.2, 150)
    右转1(30, -32.2)
    巡线至基地(30, 30)
    回基地(30, 30, 250)
    neZha.stop_all_motor()
input.on_button_pressed(Button.A, on_button_pressed_a)

def 巡线(左轮速度3: number, 右轮速度3: number):
    global 差速
    差速 = (PlanetX_Basic.trackbitget_gray(PlanetX_Basic.TrackbitChannel.TWO) - PlanetX_Basic.trackbitget_gray(PlanetX_Basic.TrackbitChannel.THREE)) * 0.02
    neZha.set_motor_speed(neZha.MotorList.M1, 左轮速度3 - 差速)
    neZha.set_motor_speed(neZha.MotorList.M4, 右轮速度3 + 差速)
def 任务二(左9: number, 右9: number, 时间8: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左9)
    neZha.set_motor_speed(neZha.MotorList.M4, 右9)
    basic.pause(时间8)
def 任务三(左10: number, 右10: number, 时间9: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左10)
    neZha.set_motor_speed(neZha.MotorList.M4, 右10)
    basic.pause(时间9)
def 左转1(左11: number, 右11: number):
    PlanetX_Basic.Trackbit_get_state_value()
    while not (PlanetX_Basic.trackbit_state(PlanetX_Basic.TrackbitStateType.TRACKING_STATE_1)):
        PlanetX_Basic.Trackbit_get_state_value()
        neZha.set_motor_speed(neZha.MotorList.M1, 左11)
        neZha.set_motor_speed(neZha.MotorList.M4, 右11)
def 前进(左12: number, 右12: number, 时间10: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左12)
    neZha.set_motor_speed(neZha.MotorList.M4, 右12)
    basic.pause(时间10)
def 左转90(左20: number, 右20: number, 时间16: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左20)
    neZha.set_motor_speed(neZha.MotorList.M4, 右20)
    basic.pause(时间16)

def on_button_pressed_ab():
    global strip
    basic.show_number(3)
    strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J1,
        8,
        PlanetX_Display.NeoPixelMode.RGB)
    PlanetX_AILens.init_module()
    PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.BALL)
    视觉追踪(10.4, 12)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def 巡线至左转路口(左13: number, 右13: number):
    PlanetX_Basic.Trackbit_get_state_value()
    while not (PlanetX_Basic.trackbit_state(PlanetX_Basic.TrackbitStateType.TRACKING_STATE_9)):
        PlanetX_Basic.Trackbit_get_state_value()
        巡线(左13, 右13)
def 巡线至四黑(左14: number, 右14: number):
    PlanetX_Basic.Trackbit_get_state_value()
    while not (PlanetX_Basic.trackbit_state(PlanetX_Basic.TrackbitStateType.TRACKING_STATE_5)):
        PlanetX_Basic.Trackbit_get_state_value()
        巡线(左14, 右14)
def 任务二回线(左15: number, 右15: number, 时间11: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左15)
    neZha.set_motor_speed(neZha.MotorList.M4, 右15)
    basic.pause(时间11)
def 任务四1(左16: number, 右16: number, 时间12: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左16)
    neZha.set_motor_speed(neZha.MotorList.M4, 右16)
    basic.pause(时间12)
def 回基地(左17: number, 右17: number, 时间13: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左17)
    neZha.set_motor_speed(neZha.MotorList.M4, 右17)
    basic.pause(时间13)
def 手柄(左18: number, 右18: number):
    while not (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.LEFT1) and PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.RIGHT1) and (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.LEFT2) and PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.RIGHT2))):
        if PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.UP):
            neZha.set_motor_speed(neZha.MotorList.M1, 左18)
            neZha.set_motor_speed(neZha.MotorList.M4, 右18)
        elif PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.DOWN):
            neZha.set_motor_speed(neZha.MotorList.M1, 0 - 左18)
            neZha.set_motor_speed(neZha.MotorList.M4, 0 - 右18)
        elif PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.RIGHT):
            neZha.set_motor_speed(neZha.MotorList.M1, 左18)
            neZha.set_motor_speed(neZha.MotorList.M4, 0 - 右18)
        elif PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.LEFT):
            neZha.set_motor_speed(neZha.MotorList.M1, 0 - 左18)
            neZha.set_motor_speed(neZha.MotorList.M4, 右18)
        else:
            neZha.set_motor_speed(neZha.MotorList.M1, 0)
            neZha.set_motor_speed(neZha.MotorList.M4, 0)
def 停止电机(时间14: number):
    neZha.stop_all_motor()
    basic.pause(时间14)

def on_button_pressed_b():
    basic.show_number(2)
    手柄(30, 30)
input.on_button_pressed(Button.B, on_button_pressed_b)

def 任务一回线(左19: number, 右19: number, 时间15: number):
    neZha.set_motor_speed(neZha.MotorList.M1, 左19)
    neZha.set_motor_speed(neZha.MotorList.M4, 右19)
    basic.pause(时间15)