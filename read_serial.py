import serial
from datetime import datetime 
from time import sleep

ser=serial.Serial("/dev/ttyACM0",9600)
ser.baudrate=9600


while True:
    read_ser=float(ser.readline())
    print(read_ser)
    print(datetime.now())

