import serial
import sqlite3
from datetime import datetime 
import sleep

conn = sqlite3.connect('db.sqlite3')
c = conn.cursor()

ser=serial.Serial("/dev/ttyACM0",9600)
ser.baudrate=9600


while True:
    read_ser=int(ser.readline())
    print(read_ser)
    c.execute('INSERT INTO home_temperature VALUES (?,?)', (read_ser, datetime.now()))
    c.commit()
    sleep(2)

conn.close()
