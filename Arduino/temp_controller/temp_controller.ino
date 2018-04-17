//Setup code from https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806

#include <OneWire.h> 
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
int pinOut = 7;
int pinState = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(pinOut, OUTPUT);
  digitalWrite(pinOut, HIGH);
  Serial.begin(9600); 
  // Start up the library 
  sensors.begin(); 
}

void loop() {
  sensors.requestTemperatures();
  float temperature = sensors.getTempCByIndex(0);
  Serial.print(temperature);
  Serial.print("\n");
  // Aiming for 24 degrees C based on https://www.weekendbakery.com/posts/a-few-tips-on-dough-temperature/
  if (temperature > 24) {
    digitalWrite(pinOut, HIGH);
  }
  else digitalWrite(pinOut, LOW);
  // Delay for a second before re-reading
  delay(1000);
  
}
