import pyperclip
text=pyperclip.paste()
S=''
for line in text.split("\n"):
    ii=line.find('id=')
    
    if ii>0:
        jj=line.find('>',ii)
        S+=line[:ii].strip()+line[jj:].strip()
    else: S+=line.strip()
print(S)
pyperclip.copy(S)