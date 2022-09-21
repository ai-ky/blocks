//=======================================================
Blockly.Blocks['scratchclient_import'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("from scratchclient import ScratchSession");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['scratchclient_import'] = function(block) {
  
  // TODO: Assemble Python into code variable.
  var code = "from scratchclient import ScratchSession\n";
  return code;
};

//=======================================================
Blockly.Blocks['scratchclient_createsession'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("建立Session");
    this.appendValueInput("USER")
        .setCheck("String")
        .appendField("username");
    this.appendValueInput("PW")
        .setCheck("String")
        .appendField("password");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['scratchclient_createsession'] = function(block) {
  var value_user = Blockly.Python.valueToCode(block, 'USER', Blockly.Python.ORDER_ATOMIC);
  var value_pw = Blockly.Python.valueToCode(block, 'PW', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "session = ScratchSession("+value_user+","+value_pw+")\n";
  return code;
};
//=======================================================

Blockly.Blocks['scratchclient_set_cloud_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("設定雲端變數");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("name");
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['scratchclient_set_cloud_variable'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //connection.set_cloud_variable('A0_R', int(value))
  var code = 'connection.set_cloud_variable('+value_name+','+value_value+')\n';
  return code;
};
//=======================================================
Blockly.Blocks['scratchclient_createconnection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("建立connection");
    this.appendValueInput("PID")
        .setCheck("String")
        .appendField("projectID");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['scratchclient_createconnection'] = function(block) {
  var value_pid = Blockly.Python.valueToCode(block, 'PID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //connection = session.create_cloud_connection(projectID)
  var code = 'connection = session.create_cloud_connection('+value_pid+')\n';
  return code;
};
//=======================================================
Blockly.Blocks['scratchclient_on_set'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("當接收到雲端變數變化時...def on_set")
		.appendField(new Blockly.FieldVariable("variable.name"), "NAME")
        .appendField(new Blockly.FieldVariable("variable.value"), "VALUE");
    this.appendStatementInput("content")
        .setCheck(null);
	this.setPreviousStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['scratchclient_on_set'] = function(block) {
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var variable_value =Blockly.Python.nameDB_.getName(block.getFieldValue('VALUE'), Blockly.Variables.NAME_TYPE);
  
  var statements_content = Blockly.Python.statementToCode(block, 'content');
  // TODO: Assemble Python into code variable.
  statements_content=statements_content.replace('variable_name', 'variable.name');
  statements_content=statements_content.replace('variable_value', 'variable.value');
  var code = "@connection.on(\"set\")\ndef on_set(variable):\n"+statements_content;
  return code;
};
