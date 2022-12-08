//=======================================================
Blockly.Blocks['Flask_import'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("from flask import Flask");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['Flask_import'] = function(block) {
  
  // TODO: Assemble Python into code variable.
  var code = "from flask import Flask\n";
  return code;
};
//================================/=======================
Blockly.Blocks['Flask_on_request_value'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("def on_request_value:#當接收到Http要求並收到value時...")
		.appendField(new Blockly.FieldVariable("value"), "VALUE");
    this.appendStatementInput("content")
        .setCheck(null);
	this.appendValueInput("RET")
        .setCheck("String")
        .appendField("return(回應要求)");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['Flask_on_request_value'] = function(block) {
  var variable_value = Blockly.Python.nameDB_.getName(block.getFieldValue('VALUE'), Blockly.Variables.NAME_TYPE);
  var value_ret = Blockly.Python.valueToCode(block, 'RET', Blockly.Python.ORDER_ATOMIC);
  var statements_content = Blockly.Python.statementToCode(block, 'content');
  // TODO: Assemble Python into code variable.
  //app = Flask(__name__)
  //@app.route("/<value>")
  //def on_request_value(value):
  var code = "app = Flask(__name__)\n@app.route(\"/<value>\")\n";
  code+="def on_request_value(value):#當接收到Http要求並收到value時\n";
  code+=  statements_content;
  code+=  "  return "+value_ret+'\n';
  return code;
};	
//======================================
Blockly.Blocks['app_run'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("app.run(host=");
    this.appendDummyInput()
        .appendField(",port=")
        .appendField(new Blockly.FieldTextInput("80"), "NAME")
        .appendField(") #http");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['app_run'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'app.run(host='+value_name1+',port='+text_name+') #http\n';
  return code;
};
//======================================
Blockly.Blocks['app_run_https'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("app.run(host=");
    this.appendDummyInput()
        .appendField(",port=")
        .appendField(new Blockly.FieldTextInput("80"), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(",ssl_context=");
    this.appendDummyInput()
        .appendField(") #https");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['app_run_https'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'app.run(host='+value_name1+',port='+text_name2+',ssl_context='+value_name3+') #https\n';
  return code;
};