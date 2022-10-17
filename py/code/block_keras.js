var Colour_keras=15;
//===============================
Blockly.Blocks['keras_import_load_model'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from keras.models import load_model");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_import_load_model'] = function(block) {
  var code = 'from keras.models import load_model\n';
  return code;
};
//===============================
Blockly.Blocks['keras_load_model'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("String");
    this.appendValueInput("NAME2")
        .setCheck("String")
        .appendField("= load_model(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_load_model'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'=load_model('+value_name2+')\n';
  return code;
};
//===============================
Blockly.Blocks['keras_predict'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".predict(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_predict'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var code = value_name1+'.predict('+value_name2+')\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//===============================
//from keras.utils import np_utils
Blockly.Blocks['keras_import_np_utils'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from keras.utils import np_utils");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_import_np_utils'] = function(block) {
  var code = 'from keras.utils import np_utils\n';
  return code;
};
//===============================
Blockly.Blocks['np_utils_to_categorical'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("np_utils.to_categorical(");
    this.appendDummyInput()
        .appendField(") #獨熱編碼(one hot encoding)");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['np_utils_to_categorical'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "np_utils.to_categorical("+value_name1+")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//===============================
//===============================
//===============================
//===============================
