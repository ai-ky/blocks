import ast

htmlCode = ""

def print_ast_properties(node, indent=0):
    global htmlCode
    """
    遞迴地列印 AST 物件的屬性
    """
    properties = vars(node)
    # 打印當前節點的類型
    if isinstance(node,ast.Constant): print('  ' * indent +f"{node.value}");return
    print('  ' * indent + f"Type: {node.__class__.__name__}")
    # 打印當前節點的屬性
    if node.__class__.__name__ == "Import":
        N=len(node.names)
        if N>1:
            htmlCode+=f"""<block type="import_var"><value name="NAME2"><block type="block_comma{N}">"""
            for i in range(N):
                htmlCode+=f"""<value name="NAME{i+1}"><block type="python_any"><field name="NAME">{node.names[i].name}</field></block></value>"""
            htmlCode+="""</block></value></block>"""
        else:
            htmlCode+=f"""<block type="import_var"><value name="NAME2"><block type="python_any"><field name="NAME">{node.names[0].name}</field></block></value></block>"""
        return
    for prop, value in properties.items():
        if isinstance(value, ast.AST):
            if f"{prop}" =="ctx": return
            # 如果屬性是 AST 物件，遞迴地處理它
            print('  ' * (indent + 1) + f"{prop}:")
            print_ast_properties(value, indent + 2)
        elif isinstance(value, list) and all(isinstance(item, ast.AST) for item in value):
            # 如果屬性是 AST 物件的列表，遞迴地處理每個元素
            print('  ' * (indent + 1) + f"{prop}:")
            for item in value:
                print_ast_properties(item, indent + 2)
        else:
            # 否則，打印屬性的值
            if f"{prop}" == "lineno" or f"{prop}" =="ctx": return
            print('  ' * (indent + 1) + f"{prop}: {value}")

# 使用範例
if __name__ == "__main__":
    code = """
import pyautogui
def foo(x, y=1):
    z = x + y
    return z
if foo(3,2)==4:
    xx =[1,2,3,4]
    y = (2+4+y)*p
pyautogui.click((2,3))
*b+a
"""


    parsed_tree = ast.parse(code)
    
    # 遞迴地列印 AST 物件的屬性
    print_ast_properties(parsed_tree)
    print(htmlCode)
