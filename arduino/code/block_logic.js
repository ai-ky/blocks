//<block type="if"></block>
//======================================
Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("if(");
    this.appendDummyInput()
        .appendField("){");
    this.appendStatementInput("NAME2")
        .setCheck(null);
	this.appendDummyInput()
        .appendField("}");
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
  var code = 'if('+value_name1+'){\n'+statements_name2+"}\n";
	return code;
};
//<block type="ifelse"></block>
//======================================
Blockly.Blocks['ifelse'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("if(");
    this.appendDummyInput()
        .appendField("){");
    this.appendStatementInput("NAME2")
        .setCheck(null);
	this.appendDummyInput()
		.appendField("}");
    this.appendDummyInput()
        .appendField("else{");
    this.appendStatementInput("NAME3")
        .setCheck(null);
	this.appendDummyInput()
        .appendField("}");
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
  var code = 'if('+value_name1+'){\n'+
				statements_name2+
				'}\nelse{\n'+
				statements_name3+"}\n";
  return code;
};
//<block type="elseIf"></block>
//======================================
Blockly.Blocks['elseIf'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("else if(");
    this.appendDummyInput()
        .appendField("){");
    this.appendStatementInput("NAME2")
        .setCheck(null);
	this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['elseIf'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'else if('+value_name1+'){'+'\n'+statements_name2+"}\n";
  return code;
};
//<block type="else"></block>
//======================================
Blockly.Blocks['else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("else{");
    this.appendStatementInput("NAME2")
        .setCheck(null);
	this.appendDummyInput()
        .appendField("}");
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
  var code = 'else{\n'+  statements_name2+"}\n";
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
        .appendField(new Blockly.FieldDropdown([["==","=="], [">",">"], [">=",">="], ["<","<="], ["!=","!="], ["&","&"], ["|","|"], ["&&","&&"], ["||","||"], ["+=","+="], ["-=","-="], ["+","+"], ["-","-"], ["*","*"], ["/","/"], ["%","%"],[">>",">>"],["<<","<<"]]), "NAME3");
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
//<block type="block_true_false"></block>
//======================================
Blockly.Blocks['block_true_false'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "NAME1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_true_false'] = function(block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};