//<block type="block_servofunction"></block>
//======================================
Blockly.Blocks['block_servofunction'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["write","write"], ["attach","attach"], ["writeMicroseconds","writeMicroseconds"], ["read","read"], ["attached","attached"], ["detach","detach"]]), "NAME2")
        .appendField("(");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_servofunction'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};