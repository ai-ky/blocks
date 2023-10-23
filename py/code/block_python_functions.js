
python_functions_colour=80
//<block type="import_as"></block>
//======================================
Blockly.Blocks['import_as'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("import");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("as");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_as'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var code = 'import '+value_name1+' as '+value_name2+"\n";
  return code;
};
//<block type="tb_connection"></block>
//======================================
Blockly.Blocks['tb_connection'] = {
  init: function() {
    this.appendValueInput("NAME")
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
Blockly.Python['tb_connection'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name+'\n';
  return code;
};
//<block type="from_import"></block>
//======================================
Blockly.Blocks['from_import'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("from");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("import");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['from_import'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'from '+value_name1+" import "+value_name2+"\n";
  return code;
};
//<block type="import_var"></block>
//======================================
Blockly.Blocks['import_var'] = {
  init: function() {
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("import");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_var'] = function(block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'import '+value_name2+'\n';
  return code;
};
//<block type="return"></block>
//======================================
Blockly.Blocks['return'] = {
  init: function() {
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("return");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['return'] = function(block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'return '+value_name2;
  return code;
};
//<block type="any_in_brackets"></block>
//======================================
Blockly.Blocks['any_in_brackets'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_in_brackets'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'('+value_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="statement_var"></block>
//======================================
Blockly.Blocks['statement_var'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("with"), "NAME");
	this.appendDummyInput()
		.appendField(":");
    this.appendStatementInput("NAME1")
		.setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['statement_var'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  // TODO: Assemble Python into code variable.
  var code = text_name+" "+value_name+":\n"+statements_name1+'\n';
  return code;
};
//<block type="cammaconcat"></block>
//======================================
Blockly.Blocks['cammaconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput(","), "NAME3");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cammaconcat'] = function(block) {
  var text_name3 = block.getFieldValue('NAME3');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name3+value_name1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="obj_method"></block>
//======================================
Blockly.Blocks['obj_method'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("mic"), "NAME1")
        .appendField(".");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("record"), "NAME2")
        .appendField("(");
    this.appendValueInput("NAME2")
        .setCheck(null);
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
Blockly.Python['obj_method'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name1+"."+text_name2+"("+value_name2+')\n';
  return code;
};
//<block type="import_any_as_any"></block>
//======================================
Blockly.Blocks['import_any_as_any'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("pyMicVoiceDetection"), "NAME1");
    this.appendDummyInput()
        .appendField("as")
        .appendField(new Blockly.FieldTextInput("mic"), "NAME2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_any_as_any'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'import '+text_name1+' as '+text_name2+"\n";
  return code;
};
//<block type="any_func_value"></block>
//======================================
Blockly.Blocks['any_func_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("time.sleep"), "NAME");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_func_value'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="any_func_call_value"></block>
//======================================
Blockly.Blocks['any_func_call_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("random"), "NAME1")
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("randint"), "NAME2")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("0,9"), "NAME3")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_func_call_value'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  // TODO: Assemble Python into code variable.
  var code = text_name1+'.'+text_name2+'('+text_name3+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_func"></block>
//======================================
Blockly.Blocks['block_func'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME2")
        .setCheck(null);
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
Blockly.Python['block_func'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+"("+value_name2+")\n";
  return code;
};
//<block type="any_func_call"></block>
//======================================
Blockly.Blocks['any_func_call'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=")
        .appendField(new Blockly.FieldTextInput("random"), "NAME1")
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("randint"), "NAME2")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("0,9"), "NAME3")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_func_call'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var text_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  // TODO: Assemble Python into code variable.
  var code = value_name+'='+text_name1+'.'+text_name2+'('+text_name3+')\n';
  return code;
};
//<block type="import_any"></block>
//======================================
Blockly.Blocks['import_any'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("time"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_any'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'import '+text_name+'\n';
  return code;
};
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
  var code = 'str('+value_name+')\n';
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
//<block type="elif"></block>
//======================================
Blockly.Blocks['elif'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("elif");
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
Blockly.Python['elif'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'elif '+value_name1+':'+'\n'+
				statements_name2;
  if(statements_name2.indexOf('\n')<0) code+="\n";
  return code;
};

//<block type="else"></block>
//======================================
Blockly.Blocks['else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("else:");
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
Blockly.Python['else'] = function(block) {
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'else :\n'+
				statements_name2;
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
  var code = 'if '+value_name1+':'
  if(statements_name2.indexOf('\n')<0)
    code+=statements_name2+"\n";
  else	code+='\n'+statements_name2;
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
Blockly.Blocks['python_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_break'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'break\n';
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
  var code = 'f.write('+value_name+')\n';
  return code;
};
//============================================
Blockly.Blocks['python_transform_mode'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_transform_mode'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name+'\n';
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

//<block type="block_assign"></block>
//======================================
Blockly.Blocks['block_assign'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_assign'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+" = "+value_name2+'	\n';
  return code;
};
//<block type="block_string_double_quotes"></block>
//======================================
Blockly.Blocks['block_string_double_quotes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput(""), "NAME")
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string_double_quotes'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '\"'+text_name+'\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_string"></block>
//======================================
Blockly.Blocks['block_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("'")
        .appendField(new Blockly.FieldTextInput(""), "NAME")
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = "\'"+text_name+"\'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_fstring"></block>
//======================================
Blockly.Blocks['block_fstring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("f\"")
        .appendField(new Blockly.FieldTextInput(""), "NAME1")
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_fstring'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'f\"'+text_name1+'\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_colon_a_b"></block>
//======================================
Blockly.Blocks['block_colon_a_b'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_colon_a_b'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+':'+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_colon_a_b_c"></block>
//======================================
Blockly.Blocks['block_colon_a_b_c'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(":");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(":");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_colon_a_b_c'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+':'+value_name2+':'+value_name3;
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
//<block type="block_parentheses"></block>
//======================================
Blockly.Blocks['block_parentheses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("(");
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
Blockly.Python['block_parentheses'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '('+value_name1+')';
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
  //return code;
  return [code, Blockly.Python.ORDER_ATOMIC];
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

//<block type="block_def"></block>
//======================================
Blockly.Blocks['block_def'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("def");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_def'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = "def "+value_name1+':\n'+statements_name2;
  return code;
};
//<block type="block_class"></block>
//======================================
Blockly.Blocks['block_class'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("class");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_class'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = "class "+value_name1+':\n'+statements_name2;
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
