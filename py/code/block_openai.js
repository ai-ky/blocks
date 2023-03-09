openai_colour=30;
//<block type="openai_image_create_"></block>
//======================================
Blockly.Blocks['openai_image_create_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("=")
        .appendField("openai.Image.create(");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(openai_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['openai_image_create_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'=openai.Image.create('+value_name2+','+value_name3+','+value_name4+')\n';
  return code;
};
//<block type="engines"></block>
//======================================
Blockly.Blocks['engines'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["'code-davinci-002'","'code-davinci-002'"], ["'text-davinci-002'","'text-davinci-002'"], ["'text-davinci-003'","'text-davinci-003'"], ["'text-curie-001'","'text-curie-001'"], ["'text-babbage-001'","'text-babbage-001'"], ["'text-ada-001'","'text-ada-001'"]]), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(openai_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['engines'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="openai_completion_create_"></block>
//======================================
Blockly.Blocks['openai_completion_create_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("openai.Completion.create(");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(")");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(openai_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['openai_completion_create_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "openai.Completion.create("+value_name1+","+value_name2+","+value_name3+","+value_name+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
