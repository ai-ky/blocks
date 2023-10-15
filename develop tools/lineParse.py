import ast
htmlCode = ""
htmlEnd = ""
def parseImport(node):
    N=len(node.names)
    ret = ""
    if N>1:
        ret+=f"""<block type="import_var"><value name="NAME2"><block type="block_comma{N}">"""
        for i in range(N):
            htmlCode+=f"""<value name="NAME{i+1}"><block type="python_any"><field name="NAME">{node.names[i].name}</field></block></value>"""
        ret+="""</block></value>"""
    else:
        ret+=f"""<block type="import_var"><value name="NAME2"><block type="python_any"><field name="NAME">{node.names[0].name}</field></block></value>"""
    return ret

def parseDef(node,indent):
    global htmlCode
    N = len(node.args.args)
    htmlCode+=f"""<block type="block_def"><value name="NAME1"><block type="any_in_brackets"><value name="NAME1"><block type="python_any"><field name="NAME">{node.name}</field></block></value><value name="NAME2"><block type="block_comma{N}">"""
    offset_a = len(node.args.args) - len(node.args.defaults)
    for i in range(len(node.args.args)):
        htmlCode+=f"""<value name="NAME{i+1}">"""
        if i>=offset_a:
            if isinstance(node.args.defaults[i-offset_a].value,str): 
                htmlCode+=f"""<block type="block_a_equal_b"><value name="NAME1"><block type="python_any"><field name="NAME">{node.args.args[i].arg}</field></block></value><value name="NAME2"><block type="block_string_double_quotes"><field name="NAME">{node.args.defaults[i-offset_a].value}</field></block></value></block>"""
            else:
                htmlCode+=f"""<block type="block_a_equal_b"><value name="NAME1"><block type="python_any"><field name="NAME">{node.args.args[i].arg}</field></block></value><value name="NAME2"><block type="python_any"><field name="NAME">{node.args.defaults[i-offset_a].value}</field></block></value></block>"""
        else: htmlCode+=f"""<block type="python_any"><field name="NAME">{node.args.args[i].arg}</field></block>"""
        htmlCode+="</value>"
    htmlCode+="""</block></value></block></value><statement name="NAME2">"""
    
        
    

def parseAssign(node,indent):
    global htmlCode
    htmlCode+="""<block type="block_assign"><value name="NAME1">"""
    if len(node.targets)==1:
        print_ast_properties(node.targets[0],indent+2)
    else:
        for item in node.targets: print_ast_properties(item, indent + 2)
    htmlCode+="""</value><value name="NAME2">"""
    print_ast_properties(node.value,indent+2)
    htmlCode+="""</value>"""
    
def parseBinOp(node,indent):
    global htmlCode
    htmlCode+="""<block type="block_get_anyconcat"><field name="NAME2">"""
    if isinstance(node.op,ast.Add):htmlCode+="""+</field><value name="NAME1">"""
    if isinstance(node.op,ast.Sub):htmlCode+="""-</field><value name="NAME1">"""
    if isinstance(node.op,ast.Mult):htmlCode+="""*</field><value name="NAME1">"""
    if isinstance(node.op,ast.Div):htmlCode+="""/</field><value name="NAME1">"""
    print_ast_properties(node.left, indent + 2)
    htmlCode+="""</value><value name="NAME3">"""
    print_ast_properties(node.right, indent + 2)
    htmlCode+="""</value></block>"""   
    
def parserReturn(node,indent):
    global htmlCode
    htmlCode+='<block type="return">'
    print_ast_properties(node.value,indent + 2)
    
    
def print_ast_properties(node, indent=0):
    global htmlCode
    """
    遞迴地列印 AST 物件的屬性
    """
    properties = vars(node)
    # 打印當前節點的類型
    #print(ast.dump(node))
    if isinstance(node,ast.Constant): print('  ' * indent +f"{node.value}");return htmlCode
    #print('  ' * indent + f"Type: {node.__class__.__name__}")
    if node.__class__.__name__ == "Import": htmlCode+=parseImport(node);return
    if node.__class__.__name__ == "FunctionDef": parseDef(node,indent);return
    if node.__class__.__name__ == "Assign": parseAssign(node,indent);return
    if node.__class__.__name__ == "Name": htmlCode+=f"""<block type="python_any"><field name="NAME">{node.id}</field></block>""";return
    if node.__class__.__name__ == "BinOp":parseBinOp(node,indent);return
    if node.__class__.__name__ == "Return":parserReturn(node,indent);return
        
    # 打印當前節點的屬性
    for prop, value in properties.items():
        if isinstance(value, ast.AST):
            if f"{prop}" =="ctx": return
            # 如果屬性是 AST 物件，遞迴地處理它
            #print('  ' * (indent + 1) + f"{prop}:")
            print_ast_properties(value, indent + 2)
        elif isinstance(value, list) and all(isinstance(item, ast.AST) for item in value):
            # 如果屬性是 AST 物件的列表，遞迴地處理每個元素
            #print('  ' * (indent + 1) + f"{prop}:")
            for item in value:
                print_ast_properties(item, indent + 2)
        else:
            # 否則，打印屬性的值
            if f"{prop}" == "lineno" or f"{prop}" =="ctx": return
            #print('  ' * (indent + 1) + f"{prop}: {value}")

# 使用範例
if __name__ == "__main__":
    htmlCode = ""
    parsed_tree = ast.parse("""import pyautogui""")
    print_ast_properties(parsed_tree)
    print(htmlCode)
    print("==============================")
    htmlCode = ""
    parsed_tree = ast.parse("""def foo(x, y="5",z=2):pass""")
    print_ast_properties(parsed_tree)
    print(htmlCode)
    print("==============================")
    htmlCode = ""
    parsed_tree = ast.parse("""z = x + y""")
    print_ast_properties(parsed_tree)
    print(htmlCode)
    print("==============================")
    htmlCode = ""
    parsed_tree = ast.parse("""return z""")
    print_ast_properties(parsed_tree)
    print(htmlCode)
    print("==============================")
    #print(f"<xml>{htmlCode}</xml>")
"""
import pyautogui
def foo(x, y="5",z=2):
    z = x + y
    return z
if foo(3,2)==4:
    xx =[1,2,3,4]
    y = (2+4+y)*p
pyautogui.click((2,3))
*b+a
"""