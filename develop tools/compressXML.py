#將剪貼簿中之 block html 化簡並縮為一行
import pyperclip
text=pyperclip.paste()
S=''
i=text.find("<block")
j=text.find("</xml>")
text = text[i:j]
for line in text.split("\n"):
    ii=line.find('id=')
    
    if ii>0:
        jj=line.find('>',ii)
        S+=line[:ii].strip()+line[jj:].strip()
    else: S+=line.strip()

print(S)
pyperclip.copy(S)