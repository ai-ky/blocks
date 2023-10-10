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

//<block type="block_comma_a_b_c_d"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d'] = {
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
Blockly.Python['block_comma_a_b_c_d'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma_a_b_c_d_e"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e'] = {
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
Blockly.Python['block_comma_a_b_c_d_e'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma_a_b_c_d_e_f"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e_f'] = {
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
Blockly.Python['block_comma_a_b_c_d_e_f'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma_a_b_c_d_e_f_g"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e_f_g'] = {
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
Blockly.Python['block_comma_a_b_c_d_e_f_g'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma_a_b_c_d_e_f_g_h"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e_f_g_h'] = {
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
Blockly.Python['block_comma_a_b_c_d_e_f_g_h'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  var value_name8 = Blockly.Python.valueToCode(block, 'NAME8', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_comma_a_b_c_d_e_f_g_h_i"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e_f_g_h_i'] = {
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
Blockly.Python['block_comma_a_b_c_d_e_f_g_h_i'] = function(block) {
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
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma_a_b_c_d_e_f_g_h_i_j"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e_f_g_h_i_j'] = {
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
Blockly.Python['block_comma_a_b_c_d_e_f_g_h_i_j'] = function(block) {
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
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma_a_b_c_d_e_f_g_h_i_j_k"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e_f_g_h_i_j_k'] = {
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
Blockly.Python['block_comma_a_b_c_d_e_f_g_h_i_j_k'] = function(block) {
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
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma_a_b_c_d_e_f_g_h_i_j_k_l"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e_f_g_h_i_j_k_l'] = {
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
Blockly.Python['block_comma_a_b_c_d_e_f_g_h_i_j_k_l'] = function(block) {
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
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_comma_a_b_c_d_e_f_g_h_i_j_k_l_m"></block>
//======================================
Blockly.Blocks['block_comma_a_b_c_d_e_f_g_h_i_j_k_l_m'] = {
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
Blockly.Python['block_comma_a_b_c_d_e_f_g_h_i_j_k_l_m'] = function(block) {
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
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};