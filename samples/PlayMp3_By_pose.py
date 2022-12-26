#https://www.pygame.org/docs/ref/music.html#pygame.mixer.music.get_busy
import threading
import mediapipe as mp
import cv2
import pygame
import time
pygame.init()
pygame.mixer.init()
pygame.mixer.music.load("1.mp3")

state = 'init'
cap=cv2.VideoCapture(0,cv2.CAP_DSHOW)
#前置宣告
mp_drawing = mp.solutions.drawing_utils
landmark_drawing_spec=mp.solutions.drawing_styles.get_default_pose_landmarks_style()
mp_pose=mp.solutions.pose
with mp_pose.Pose() as pose:
  while True:
    ret,img=cap.read()
    if not ret:
      continue
    img=cv2.flip(img,1)
    img.flags.writeable=False
    poseResult=pose.process(img)
    poseLandmarks=poseResult.pose_landmarks
    if poseLandmarks:
      mp_drawing.draw_landmarks(img,poseLandmarks,mp_pose.POSE_CONNECTIONS, landmark_drawing_spec)
      y1 = poseLandmarks.landmark[15].y
      y2 = poseLandmarks.landmark[16].y
      print(''.join([str(x) for x in [y1, ',', y2]]))
      if pygame.mixer.music.get_busy() == False:
          state='stop'
      if y1 < 0.1 and y2 < 0.1:
          pygame.mixer.music.stop()
          state = 'stop'
          time.sleep(1)
      if state=='init' or state=='stop':
          if y1 < 0.1:
            pygame.mixer.music.play()
            state = 'play'
      elif state=='play':
          if y2 < 0.1:
            pygame.mixer.music.pause()
            state = 'pause'
      elif state=='pause':
          if y1 < 0.1:
            pygame.mixer.music.unpause()
            state = 'play'
        
    if cv2.waitKey(50) == ord('q'):
      break
    img.flags.writeable=True
    cv2.imshow('',img)
cap.release()
cv2.destroyAllWindows()
