var Colour_Data_HandWrite=15;
//======================================
Blockly.Blocks['data_handwrite_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import Data_HandWrite");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_Data_HandWrite);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['data_handwrite_import'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import Data_HandWrite\n';
  return code;
};
//======================================
Blockly.Blocks['data_handwrite_downloadData'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data_HandWrite.downloadData()");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_Data_HandWrite);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['data_handwrite_downloadData'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'Data_HandWrite.downloadData()\n';
  return code;
};

//======================================
Blockly.Blocks['data_handwrite_loaddata'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck("String")
        .appendField("=Data_HandWrite.LoadData(");
    this.appendDummyInput()
        .appendField(",");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_Data_HandWrite);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['data_handwrite_loaddata'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var code = value_name1+','+value_name2+'=Data_HandWrite.LoadData('+value_name3+')\n';
  return code;
};
//======================================

//======================================

//======================================
//======================================
