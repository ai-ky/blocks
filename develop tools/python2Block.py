import ast

def traverse(node, level=0):
    for child in ast.iter_child_nodes(node):
        lines = ast.unparse(child).split('\n')
        if level==0:
            print(f"====block====");
            print(lines[0])
            if len(lines)>1:
                traverse(child, level + 1)
        if level>=1:
            print('\t'*level,lines[0])
            if len(lines)>1:
                traverse(child, level + 1)
            
def trimIndent(text,i):
    ret = ''
    for line in text.split('\n'):
        ret+= line[i:]+'\n'
    return ret

def importBlock(fieldText):
    return f'<block type="import_var"><value name="NAME2"><block type="python_any"><field name="NAME">{fieldText}</field></block></value></block>\n'

def any_lineBlock(fieldText):
    return f'<block type="block_any_line"><field name="NAME">{fieldText}</field></block>\n'

def if_block(condiction,statement):
    C='';S=''    
    return f'<block type="if"><value name="NAME1">{C}</value><statement name="NAME2">{S}</statement></block>'

def parseCode(code, level=0):
    node = ast.parse(code)
    for child in ast.iter_child_nodes(node):
        subcode = ast.unparse(child)
        lines = subcode.split('\n')
        #目前這一行
        line = lines[0]
        print(level*4*' '+line)
        if len(lines)>1:
            #如果有子敘述的話
            #...子敘述如果有 else: 或 elif   :的話還是會有問題，要當特殊狀況繼續解
            subcode =trimIndent(subcode[len(line)+1:],4)
            #print(subcode)
            parseCode(subcode, level + 1)
                   

# 輸入的程式碼
code = """
if a>3:
    print(a)
    a = 4
    if c ==1 :
        print(1)
        print(2)
    else:
        print(3)
        print(4)

if a>3:
    print(a)
    a = 4
print(x,3)
print(x,4)
print(x,5)
print(x,6)"""
parseCode(code)
# 輸出最上層區塊的程式碼
#node = ast.parse(code)
#traverse(node)
