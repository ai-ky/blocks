/*
 * Generated using BlocklyDuino:
 *
 * https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt
 *
 * Date: Tue, 29 Nov 2022 22:49:42 GMT
 */
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>

char _lwifi_ssid[] = "KY";
char _lwifi_pass[] = "0912106664";
void initWiFi() {

  for (int i=0;i<2;i++) {
    WiFi.begin(_lwifi_ssid, _lwifi_pass);

    delay(1000);
    Serial.println("");
    Serial.print("Connecting to ");
    Serial.println(_lwifi_ssid);

    long int StartTime=millis();
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        if ((StartTime+5000) < millis()) break;
    }

    if (WiFi.status() == WL_CONNECTED) {
      Serial.println("");
      Serial.println("STAIP address: ");
      Serial.println(WiFi.localIP());
      Serial.println("");

      break;
    }
  }
}

String httpRes = "";

String tcp_http_esp32(String type,String domain,String request,int port,int waittime) {
  String getAll="", getBody="";
  WiFiClient client_tcp;
  if (client_tcp.connect(domain.c_str(), port)) {
	//Serial.println("Connected to "+domain+" successfully.");
	client_tcp.println(type + " " + request + " HTTP/1.1");
	client_tcp.println("Host: " + domain);
	client_tcp.println("Connection: close");
   client_tcp.println("Content-Length: 0");
	client_tcp.println();
	boolean state = false;
	long startTime = millis();
	while ((startTime + waittime) > millis()) {
	  while (client_tcp.available()) {
		char c = client_tcp.read();
		if (c == '\n') {
		  if (getAll.length()==0) state=true;
		  getAll = "";
		}
		else if (c != '\r')
		  getAll += String(c);
		if (state==true) getBody += String(c);
		startTime = millis();
	  }
	  if (getBody.length()!= 0) break;
	}
	client_tcp.stop();
  }
  else {
	getBody="Connected to "+domain+" failed.";
	Serial.println("Connected to "+domain+" failed.");
  }
  return getBody;
}

void setup()
{
  initWiFi();
  pinMode(D8, OUTPUT);
  // D8 接震動馬達，初始化時設定馬達不動
  digitalWrite(D8, LOW);
  pinMode(D6, INPUT_PULLUP);
}

void loop()
{
  // A0接手搖馬達，讀取手搖類比訊號後，經無線傳輸送到 PC 端
  httpRes = tcp_http_esp32("GET", "192.168.252.150", (String("/")+String(analogRead(A0))+String(",")+String(digitalRead(D6))), 80, 3000);
  // D8 接震動馬達，收到來自PC端之控制訊號後，控制馬達動作
  analogWrite(D8, (httpRes.toInt()));
  delay(200);
}
