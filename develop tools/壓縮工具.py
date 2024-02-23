#將剪貼簿中之 block html 化簡並縮為一行
import pyperclip
import os
import tkinter as tk
from tkinter import filedialog
from tkinter import simpledialog
root = tk.Tk()
root.withdraw()  # 隐藏主窗口
user_input = simpledialog.askstring(
        title="選取已建立之方塊模組檔案並壓縮內容",
        prompt="請輸入希望新增之方塊類別名稱，若沒有直接按下OK或Enter"
    )
print(user_input)
# 设置初始目录为用户的下载文件夹
initial_dir = os.path.expanduser("~\\Downloads")
file_path = filedialog.askopenfilename(
        initialdir=initial_dir,
        title="選擇已建立之方塊模組 XML檔案並進行壓縮",
        filetypes=[("XML files", "*.xml")],
        # 按创建时间排序
        initialfile=sorted(os.listdir(initial_dir), key=lambda f: os.path.getctime(os.path.join(initial_dir, f)), reverse=True)[0]
        )
    
with open(file_path,encoding='utf-8') as f:
    text=f.read()
    #print(text)
    S=''
    i=text.find("<block")
    j=text.find("</xml>")
    text = text[i:j]
    for line in text.split("\n"):
        ii=line.find('" id="')
        
        if ii>0:
            jj=line.find('>',ii)
            S+=line[:ii+1].strip()+line[jj:].strip()
        else: S+=line.strip()
    if user_input!='':
        S=f'<category name={user_input} colour="#8ca55b">\n\t\t'+S+'\n\t</category>'
    print(S)
    print('方塊壓縮html碼已複制至剪貼簿')
    pyperclip.copy(S)
    input('press enter to end')
