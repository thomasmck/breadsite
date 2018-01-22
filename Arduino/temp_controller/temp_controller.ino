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
  digitalWrite(pinOut, LOW);
  Serial.begin(9600); 
  // Start up the library 
  sensors.begin(); 
}

void loop() {
  sensors.requestTemperatures();
  int temperature = sensors.getTempCByIndex(0);
  Serial.print(temperature);
  // Delay for a second before re-reading
  delay(1000);
  if (temperature > 25) digitalWrite(pinOut, HIGH);
  else digitalWrite(pinOut, LOW);
  
}
