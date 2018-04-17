import serial
import sqlite3
from datetime import datetime 
from time import sleep

conn = sqlite3.connect('db.sqlite3')
c = conn.cursor()

ser=serial.Serial("/dev/ttyACM0",9600)
ser.baudrate=9600


while True:
    read_ser=float(ser.readline())
    print(read_ser)
    print(datetime.now())
    c.execute('INSERT INTO home_temperature (rec_date, temp) VALUES (?,?)', (datetime.now(), read_ser))
    conn.commit()

conn.close()
