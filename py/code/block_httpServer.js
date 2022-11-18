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
		.appendField("當接收到Http要求並收到value時...def on_request_value")
		.appendField(new Blockly.FieldVariable("value"), "VALUE");
    this.appendStatementInput("content")
        .setCheck(null);
	this.appendValueInput("RET")
        .setCheck("String")
        .appendField("return(回應要求)");
	this.setPreviousStatement(true, null);
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
  code+="def on_request_value(value):\n";
  code+=  statements_content;
  code+=  "  return "+value_ret;
  return code;
};	
