//<block type="while"></block>
//======================================
Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("while(");
    this.appendDummyInput()
        .appendField("){");
    this.appendStatementInput("NAME1")
        .setCheck(null)
        .appendField("");
	this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['while'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'while('+value_name+'){\n'+statements_name1+"}\n";
  return code;
};

//<block type="block_for_"></block>
//======================================
Blockly.Blocks['block_for_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("for(");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(";");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(";");
    this.appendDummyInput()
        .appendField(") {");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_for_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'for('+value_name1+';'+value_name2+';'+value_name3+'){\n+'+statements_name+'}\n';
  return code;
};

//<block type="block_continue"></block>
//======================================
Blockly.Blocks['block_continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("continute;");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_continue'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'continue;\n';
  return code;
};
//<block type="block_break"></block>
//==================================================
Blockly.Blocks['block_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break;");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_break'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'break;\n';
  return code;
};