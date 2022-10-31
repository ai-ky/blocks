var Colour_sklearn=15;
//from sklearn.cluster import KMeans
//======================================
Blockly.Blocks['from_sklearn_import_kmeans'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from sklearn.cluster import KMeans");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_sklearn);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['from_sklearn_import_kmeans'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from_sklearn_import_kmeans\n';
  return code;
};

//kmeans = KMeans(n_clusters=4)
//======================================
Blockly.Blocks['block_kmeans'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("kmeans"), "NAME1");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField("=KMeans(n_clusters=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_sklearn);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_kmeans'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name1+'=KMeans(n_clusters='+value_name2+')\n';
  return code;
};
//======================================
Blockly.Blocks['block_kmeans_fit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("kmeans.fit( ")
        .appendField(new Blockly.FieldVariable("X"), "NAME1")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_sklearn);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_kmeans_fit'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  // TODO: Assemble Python into code variable.
  var code = 'kmeans.fit('+variable_name1+')\n';
  return code;
};

//kmeans.predict(X)
//======================================
Blockly.Blocks['block_kmeans_predict'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("y_kmeans"), "NAME1")
        .appendField("= kmeans.predict(")
        .appendField(new Blockly.FieldVariable("X"), "NAME2")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_sklearn);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_kmeans_predict'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var variable_name2 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME2'), Blockly.Names.NameType.VARIABLE);
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'=kmeans.predict('+variable_name2+');\n';
  return code;
};