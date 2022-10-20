python_functions_colour=80
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