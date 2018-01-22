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
  int temperature = sensors.getTempCByIndex(0);
  Serial.print(temperature);
  // Logic currently the wrong way round to avoid heater being always on
  if (temperature > 25) {
    digitalWrite(pinOut, LOW);
  }
  else digitalWrite(pinOut, HIGH);
  // Delay for a second before re-reading
  delay(1000);
  
}
