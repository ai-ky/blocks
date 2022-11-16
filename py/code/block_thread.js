python_functions_colour=80
//======================================
Blockly.Blocks['create_threading_lock'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=threading.Lock()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['create_threading_lock'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name+'=threading.Lock()\n';
  return code;
};
//======================================
Blockly.Blocks['with_var'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("with");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['with_var'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'with '+value_name1+':\n'+statements_name2;
  return code;
};
//======================================
Blockly.Blocks['threading_thread'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("thread1"), "NAME1")
        .appendField("= threading.Thread( target =")
        .appendField(new Blockly.FieldTextInput("thread_job"), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['threading_thread'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'= threading.Thread( target='+text_name2+')\n';
  return code;
};
//======================================
Blockly.Blocks['import_threading'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import threading");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_threading'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import threading\n';
  return code;
};
//======================================
Blockly.Blocks['thread_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("thread1"), "NAME1")
        .appendField(".start()");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['thread_start'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'.start()\n';
  return code;
};
//======================================
Blockly.Blocks['thread_join'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("thread1"), "NAME1")
        .appendField(".join()");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['thread_join'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'.join()\n';
  return code;
};
//======================================
Blockly.Blocks['threading_thread2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("thread1"), "NAME1")
        .appendField("=threading.Thread(target=")
        .appendField(new Blockly.FieldTextInput("thread_job"), "NAME2")
        .appendField(",args=(")
        .appendField(new Blockly.FieldTextInput("\"up\""), "NAME3")
        .appendField(",)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['threading_thread2'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var text_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'= threading.Thread( target='+text_name2+',args=('+text_name3+',))\n';
  return code;
};