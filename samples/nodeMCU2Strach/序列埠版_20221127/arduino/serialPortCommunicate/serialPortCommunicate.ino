// C++ code
//
#define D5 5
void setup(){ 
  Serial.begin(9600);
  analogWrite(D8,0);
  pinMode(D6,INPUT_PULLUP);
}
int state = 0;
int power = 0;
int count =0;
void loop()
{
  Serial.println(analogRead(A0));
  //delay(100);
  int a = Serial.read();
  if(digitalRead(D6)==0) 
  {
    analogWrite(D8,255);
    Serial.println(-1);
  }
  else  
  {
    if(state==0)
      if(a>0){state=1; power=a; count=0;  }
      else analogWrite(D8,0);
    else if(state==1)
    { 
        analogWrite(D8,power);
        count+=1;
        if(count==100)state=0;
        
    }
  }
  
  /*
  if(a=='0') analogWrite(D8,0);
  if(a=='1') analogWrite(D8,255);
  */
 
}
