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
//from keras.models import Sequential, load_model
Blockly.Blocks['keras_import_Sequential'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from keras.models import Sequential");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_import_Sequential'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from keras.models import Sequential\n';
  return code;
};
//===============================
//from keras.layers import Dense, Dropout, Flatten, Conv2D, MaxPool2D
Blockly.Blocks['keras_import_layers_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from keras.layers import Dense, Dropout, Flatten, Conv2D, MaxPool2D");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_import_layers_all'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from keras.layers import Dense, Dropout, Flatten, Conv2D, MaxPool2D\n';
  return code;
};
//===============================
//model = Sequential() 
Blockly.Blocks['keras_sequential'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(" = Sequential() ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_sequential'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'=Sequential()\n';
  return code;
};
//===============================
Blockly.Blocks['keras_dense'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("Number")
        .appendField("Dense( units =");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField(",input_dim=");
    this.appendDummyInput()
        .appendField(",activation=")
        .appendField(new Blockly.FieldDropdown([["'relu'","'relu'"], ["'sigmoid'","'sigmoid'"], ["'softmax'","'softmax'"]]), "NAME")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_dense'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'Dense('+value_name1+',input_dim='+value_name2+',activation='+dropdown_name+')';
  if(value_name2==='0')
	  code = 'Dense('+value_name1+',activation='+dropdown_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//===============================
//model.add
Blockly.Blocks['keras_model_add'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".add(");
    this.appendDummyInput()
        .appendField(") #增加layer到model中");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_model_add'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.add('+value_name2+')\n';
  return code;
};
//===============================
//model.compile(loss='categorical_crossentropy',optimizer='adam', metrics=['accuracy'])
Blockly.Blocks['keras_model_compile'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".compile(loss=")
        .appendField(new Blockly.FieldDropdown([["'categorical_crossentropy'","'categorical_crossentropy'"], ["'mean_squared_error'","'mean_squared_error'"], ["'mean_absolute_error'","'mean_absolute_error'"]]), "NAME1");
    this.appendDummyInput()
        .appendField(",optimizer=")
        .appendField(new Blockly.FieldDropdown([["'adam'","'adam'"], ["'SGD'","'SGD'"]]), "NAME2");
    this.appendDummyInput()
        .appendField(",metrics=")
        .appendField(new Blockly.FieldDropdown([["['accuracy']","['accuracy']"]]), "NAME3");
    this.appendDummyInput()
        .appendField(") #定義損失函數、優化函數、成效衡量指標");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_model_compile'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name1 = block.getFieldValue('NAME1');
  var dropdown_name2 = block.getFieldValue('NAME2');
  var dropdown_name3 = block.getFieldValue('NAME3');
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.compile(loss='+dropdown_name1+',optimizer='+dropdown_name2+',metrics='+dropdown_name3+')\n';
  return code;
};
//===============================
//model.fit(X_train, y_train, epochs=80, batch_size=64, verbose=1)
Blockly.Blocks['keras_model_fit'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".fit(");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck(null)
        .appendField(",epochs=");
    this.appendValueInput("NAME5")
        .setCheck(null)
        .appendField(",batch_size=");
    this.appendDummyInput()
        .appendField(",verbose=")
        .appendField(new Blockly.FieldDropdown([["0(安靜模式)","0"], ["1(進度條)","1"], ["2(每輪一行)","2"]]), "NAME6")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_keras);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['keras_model_fit'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name6 = block.getFieldValue('NAME6');
  // TODO: Assemble Python into code variable
  var code = value_name1+'.fit('+value_name2+','+value_name3+',epochs='+value_name4+',batch_size='+value_name5+',verbose='+dropdown_name6+')\n';
  return code;
};

//===============================
//loss, accuracy=model.evaluate(X_test, y_test)
Blockly.Blocks['keras_model_evalueate'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField("=");
    this.appendValueInput("NAME4")
        .setCheck(null)
        .appendField(".evaluate(");
    this.appendValueInput("NAME5")
        .setCheck(null)
        .appendField(",");
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
Blockly.Python['keras_model_evalueate'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+','+value_name2+'='+value_name3+'.evaluate('+value_name4+','+value_name5+')\n';
  return code;
};
//===============================
//===============================
//===============================

