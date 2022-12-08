import serial
from scratchclient import ScratchSession
import threading
projectID = 725470383#718312829
username = "ccsh_ky";password = "123456987"
serialPort=serial.Serial(port ='COM5',baudrate=9600)

session = ScratchSession(username, password)
connection = session.create_cloud_connection(projectID)

@connection.on("set")
def on_set(variable):
    global serialPort
    if serialPort.writable():
        v = bytes([int(variable.value)])
        serialPort.write(v) 
        #print(variable.name, variable.value,v)
i = 0
lastV = 0
print('start...')
while True:
  if serialPort.in_waiting > 0:
      i+=1
      line = serialPort.readline()
      if i==100:
          i=0
          V=int(line.decode('utf-8').strip())
          if V==-1:
              connection.set_cloud_variable("D6_R", 1)
              V=lastV
          else:
              if abs(V-lastV)>5:
                  connection.set_cloud_variable("A0_R", V)
                  print(V)
              lastV=V  
           
      
      
      
