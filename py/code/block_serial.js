serial_colour=280;
//======================================
Blockly.Blocks['import_serial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import serial");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(serial_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_serial'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import serial\n';
  return code;
};
//======================================
Blockly.Blocks['serial_create'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=serial.Serial(port =");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(",baudrate=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(serial_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['serial_create'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'=serial.Serial(port ='+value_name2+',baudrate='+value_name3+')\n';
  return code;
};
//======================================
Blockly.Blocks['serialport_in_waiting'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".in_waiting");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(serial_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['serialport_in_waiting'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.in_waiting';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['serialport_readline'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".readline()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(serial_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['serialport_readline'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.readline()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['serialport_write'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".write(");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(serial_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['serialport_write'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'write('+value_name2+')\n';
  return code;
};