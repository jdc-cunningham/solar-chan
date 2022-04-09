// code mostly from https://techtutorialsx.com/2016/07/21/esp8266-post-requests/

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

bool hasSlept = false;
String nodeServerAddress = "http://192.168.1.144:5005/esp-emit-solar";

void setup() {
  Serial.begin(115200); 
}

void connectWifi() {
  WiFi.begin("SSID", "PASS");

  while (WiFi.status() != WL_CONNECTED) {
    delay(250);
    Serial.println("Waiting for connection");
  }
  
  transmit();
}

void transmit() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(nodeServerAddress);
    http.addHeader("Content-Type", "text/plain");
    int httpCode = http.POST("From ESP8266");
    String payload = http.getString();
    Serial.println(httpCode);
    Serial.println(payload);
    http.end();  
  } else {
    Serial.println("Error in WiFi connection");
  }
}

void loop() {
  connectWifi();
  delay(60000);
}
