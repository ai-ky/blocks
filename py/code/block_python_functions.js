python_functions_colour=80
//<block type="print_"></block>
//======================================
Blockly.Blocks['print_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("print(");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("end=\"\\n\""), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['print_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'print('+value_name1+','+text_name2+')\n';
  if(text_name2=="end=\"\\n\"")
	  code = 'print('+value_name1+')\n';
  return code;
};
//<block type="str_"></block>
//======================================
Blockly.Blocks['str_'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("str(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['str_'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
//<block type="ifelse"></block>
//======================================
Blockly.Blocks['ifelse'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("if");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("else :");
    this.appendStatementInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['ifelse'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  var statements_name3 = Blockly.Python.statementToCode(block, 'NAME3');
  // TODO: Assemble Python into code variable.
  var code = 'if '+value_name1+':'+'\n'+
				statements_name2+
				'else:\n'+
				statements_name3;
  return code;
};
//<block type="if"></block>
//======================================
Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("if");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['if'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'if '+value_name1+':'+'\n'+
				statements_name2+'\n';
  return code;
};
//<block type="logic_operation"></block>
//======================================
Blockly.Blocks['logic_operation'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["==","=="], [">",">"], [">=",">="], ["<","<="], ["!=","!="], ["in","in"], ["is","is"], ["and","and"], ["or","or"], ["+=","+="], ["-=","-="], ["+","+"], ["-","-"], ["*","*"], ["/","/"], ["%","%"]]), "NAME3");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['logic_operation'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name3 = block.getFieldValue('NAME3');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+dropdown_name3+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="logic_boolean"></block>
//======================================
Blockly.Blocks['logic_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "NAME1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['logic_boolean'] = function(block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'True';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="while"></block>
//======================================
Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("while");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME1")
        .setCheck(null)
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['while'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'while '+value_name+':\n'+statements_name1;
  return code;
};
//======================================
Blockly.Blocks['string_strip'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".strip(")
        .appendField(new Blockly.FieldTextInput(""), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['string_strip'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.strip('+text_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['string_decode'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".decode( encoding='")
        .appendField(new Blockly.FieldTextInput("'utf-8'"), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['string_decode'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.decode('+text_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['string_split'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".split(")
        .appendField(new Blockly.FieldTextInput(""), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['string_split'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.split('+text_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['try_except'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("try:");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("except Exception as");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['try_except'] = function(block) {
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var statements_name3 = Blockly.Python.statementToCode(block, 'NAME3');
  // TODO: Assemble Python into code variable.
  var code = 'try:\n'+statements_name1+
			'except Exception as '+value_name2+':\n'+
			statements_name3;
  return code;
};
//========================================================
Blockly.Blocks['python_int'] = {
  init: function() {
    this.appendValueInput("python_int_V")
        .setCheck(null)
        .appendField("int(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_int'] = function(block) {
  var value_python_int_v = Blockly.Python.valueToCode(block, 'python_int_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int('+value_python_int_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//========================================================
Blockly.Blocks['python_ord'] = {
  init: function() {
    this.appendValueInput("python_ord_V")
        .setCheck(null)
        .appendField("ord(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_ord'] = function(block) {
  var value_python_ord_v = Blockly.Python.valueToCode(block, 'python_ord_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ord('+value_python_ord_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//========================================================
Blockly.Blocks['python_str'] = {
  init: function() {
    this.appendValueInput("python_str_V")
        .setCheck(null)
        .appendField("str(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_str'] = function(block) {
  var value_python_str_v = Blockly.Python.valueToCode(block, 'python_str_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'str('+value_python_str_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//========================================================
Blockly.Blocks['python_time_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import time");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_time_import'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import time\n';
  return code;
};
//========================================================
Blockly.Blocks['python_time_sleep'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("time.sleep(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_time_sleep'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+value_name+')\n';
  return code;
};
//===========================================
Blockly.Blocks['plus2'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
}
Blockly.Python['plus2'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'+'+value_name2;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=============================================
Blockly.Blocks['for_i_in_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("for")
        .appendField(new Blockly.FieldVariable("i"), "NAME2")
        .appendField("in");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['for_i_in_'] = function(block) {
  //var variable_name2 = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME2'), Blockly.Variables.NAME_TYPE);
  var variable_name2 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME2'), Blockly.Names.NameType.VARIABLE);
  
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_3 = Blockly.Python.statementToCode(block, '3');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for '+variable_name2+' in '+value_name1+':\n'+statements_3;
			
  return code;
};
//=================================================
Blockly.Blocks['python_range'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("range(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_range'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'range('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//================================
Blockly.Blocks['python_range2'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("Number")
        .appendField("range(");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_range2'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'range('+value_name1+','+value_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//==================================================
Blockly.Blocks['python_continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("continute");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_continue'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'continue\n';
  return code;
};

//==================================================
Blockly.Blocks['python_with_open'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with open(");
    this.appendValueInput("NAME1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(") as f:");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_with_open'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'with open('+value_name1+') as f:\n'+statements_name;
  return code;
};
//=============================================
Blockly.Blocks['python_f_readlines'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("f.readlines()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_f_readlines'] = function(block) {
  var code = 'f.readlines()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//=============================================
Blockly.Blocks['python_f_readline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("f.readline()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_f_readline'] = function(block) {
  var code = 'f.readline()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="python_f_write"></block>
//======================================
Blockly.Blocks['python_f_write'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("f.write(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_f_write'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'f.write('+value_name+')';
  return code;
};
//============================================
Blockly.Blocks['python_mark1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("#");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_mark1'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '#'+value_name+'\n';
  return code;
};
//======================================
Blockly.Blocks['python_any'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("'\\n'"), "NAME");
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_any'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['python_bytes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("bytes(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_bytes'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'bytes('+value_name1+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['python_big_parantheses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("{");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_big_parantheses'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '{'+value_name1+'}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['python_in'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("in");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_in'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+' in '+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['python_global'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("global ");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(python_functions_colour);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip("");
	this.setHelpUrl("");
  }
};
Blockly.Python['python_global'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'global '+value_name+'\n';
  return code;
};
//======================================
Blockly.Blocks['string_encode'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".encode(")
        .appendField(new Blockly.FieldTextInput("'utf-8'"), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['string_encode'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.encode('+text_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma"></block>
//======================================
Blockly.Blocks['block_comma'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+','+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="python_any_statement"></block>
//======================================
Blockly.Blocks['python_any_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("#any statement"), "NAME1");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_any_statement'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = text_name1+'\n';
  return code;
};
//<block type="block_get_anyconcat"></block>
//======================================
Blockly.Blocks['block_get_anyconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("."), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_get_anyconcat'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+text_name2+value_name3;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
  //return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_anyconcat"></block>
//======================================
Blockly.Blocks['block_anyconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("="), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_anyconcat'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+text_name2+value_name3+'\n';
  return code;
};


//<block type="any_indent_statement"></block>
//======================================
Blockly.Blocks['any_indent_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("def func():"), "NAME");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_indent_statement'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = text_name+'\n'+statements_name;
  return code;
};
//<block type="create_arrayin"></block>
//======================================
Blockly.Blocks['create_arrayin'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['create_arrayin'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '['+value_name1+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="for_loop"></block>
//======================================
Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("for");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("in");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['for_loop'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var statements_name3 = Blockly.Python.statementToCode(block, 'NAME3');
  // TODO: Assemble Python into code variable.
  var code = 'for '+value_name1+' in '+
			value_name2+ ':\n'+
			statements_name3+'\n';
  return code;
};
