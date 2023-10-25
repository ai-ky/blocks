//<block type="block_emptystring"></block>
//======================================
Blockly.Blocks['block_emptystring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"\"");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_emptystring'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\"\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="bytestring"></block>
//======================================
Blockly.Blocks['bytestring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("b'")
        .appendField(new Blockly.FieldTextInput(""), "NAME")
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['bytestring'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'b\''+text_name+"\'";
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
