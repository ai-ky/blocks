//<block type="block_comma2"></block>
//======================================

Blockly.Blocks['block_comma2'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma2'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma3"></block>
//======================================
Blockly.Blocks['block_comma3'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma3'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma4"></block>
//======================================
Blockly.Blocks['block_comma4'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma4'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma5"></block>
//======================================
Blockly.Blocks['block_comma5'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma5'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma6"></block>
//======================================
Blockly.Blocks['block_comma6'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME6")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma6'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5+","+value_name6;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma7"></block>
//======================================
Blockly.Blocks['block_comma7'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME6")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME7")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma7'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5+","+value_name6+","+value_name7;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma8"></block>
//======================================
Blockly.Blocks['block_comma8'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME6")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME7")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME8")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma8'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  var value_name8 = Blockly.Python.valueToCode(block, 'NAME8', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5+","+value_name6+","+value_name7+","+value_name8;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_comma9"></block>
//======================================
Blockly.Blocks['block_comma9'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME6")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME7")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME8")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME9")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma9'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  var value_name8 = Blockly.Python.valueToCode(block, 'NAME8', Blockly.Python.ORDER_ATOMIC);
  var value_name9 = Blockly.Python.valueToCode(block, 'NAME9', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5+","+value_name6+","+value_name7+","+value_name8+","+value_name9;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma10"></block>
//======================================
Blockly.Blocks['block_comma10'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME6")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME7")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME8")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME9")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME10")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma10'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  var value_name8 = Blockly.Python.valueToCode(block, 'NAME8', Blockly.Python.ORDER_ATOMIC);
  var value_name9 = Blockly.Python.valueToCode(block, 'NAME9', Blockly.Python.ORDER_ATOMIC);
  var value_name10 = Blockly.Python.valueToCode(block, 'NAME10', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5+","+
			value_name6+","+value_name7+","+value_name8+","+value_name9+","+value_name10;

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma11"></block>
//======================================
Blockly.Blocks['block_comma11'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME6")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME7")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME8")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME9")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME10")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME11")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma11'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  var value_name8 = Blockly.Python.valueToCode(block, 'NAME8', Blockly.Python.ORDER_ATOMIC);
  var value_name9 = Blockly.Python.valueToCode(block, 'NAME9', Blockly.Python.ORDER_ATOMIC);
  var value_name10 = Blockly.Python.valueToCode(block, 'NAME10', Blockly.Python.ORDER_ATOMIC);
  var value_name11 = Blockly.Python.valueToCode(block, 'NAME11', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5+","+
			value_name6+","+value_name7+","+value_name8+","+value_name9+","+value_name10+","+value_name11;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma12"></block>
//======================================
Blockly.Blocks['block_comma12'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME6")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME7")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME8")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME9")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME10")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME11")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME12")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma12'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  var value_name8 = Blockly.Python.valueToCode(block, 'NAME8', Blockly.Python.ORDER_ATOMIC);
  var value_name9 = Blockly.Python.valueToCode(block, 'NAME9', Blockly.Python.ORDER_ATOMIC);
  var value_name10 = Blockly.Python.valueToCode(block, 'NAME10', Blockly.Python.ORDER_ATOMIC);
  var value_name11 = Blockly.Python.valueToCode(block, 'NAME11', Blockly.Python.ORDER_ATOMIC);
  var value_name12 = Blockly.Python.valueToCode(block, 'NAME12', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5+","+
			value_name6+","+value_name7+","+value_name8+","+value_name9+","+value_name10+","+value_name11+","+value_name12;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma13"></block>
//======================================
Blockly.Blocks['block_comma13'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME6")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME7")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME8")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME9")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME10")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME11")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME12")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME13")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma13'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  var value_name8 = Blockly.Python.valueToCode(block, 'NAME8', Blockly.Python.ORDER_ATOMIC);
  var value_name9 = Blockly.Python.valueToCode(block, 'NAME9', Blockly.Python.ORDER_ATOMIC);
  var value_name10 = Blockly.Python.valueToCode(block, 'NAME10', Blockly.Python.ORDER_ATOMIC);
  var value_name11 = Blockly.Python.valueToCode(block, 'NAME11', Blockly.Python.ORDER_ATOMIC);
  var value_name12 = Blockly.Python.valueToCode(block, 'NAME12', Blockly.Python.ORDER_ATOMIC);
  var value_name13 = Blockly.Python.valueToCode(block, 'NAME13', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+","+value_name2+","+value_name3+","+value_name4+","+value_name5+","+
			value_name6+","+value_name7+","+value_name8+","+value_name9+","+value_name10+","+value_name11+","+value_name12+","+value_name13;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};