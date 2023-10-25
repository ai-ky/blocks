
//<block type="block_assign"></block>
//======================================
Blockly.Blocks['block_assign'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_assign'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+" = "+value_name2+'\n';
  return code;
};
//<block type="block_equal_"></block>
//======================================
Blockly.Blocks['block_equal_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("=");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_equal_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'='+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="tb_connection"></block>
//======================================
Blockly.Blocks['tb_connection'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['tb_connection'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name+'\n';
  return code;
};
//<block type="block_anyconcat"></block>
//======================================
Blockly.Blocks['block_anyconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("="), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_anyconcat'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+text_name2+value_name3+'\n';
  return code;
};
//<block type="block_get_anyconcat"></block>
//======================================
Blockly.Blocks['block_get_anyconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("."), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_get_anyconcat'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+text_name2+value_name3;
  // TODO: Change ORDER_NONE to the correct strength.
  //return code;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_parentheses"></block>
//======================================
Blockly.Blocks['block_parentheses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_parentheses'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '('+value_name1+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['block_big_parantheses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("{");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_big_parantheses'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '{'+value_name1+'}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="create_arrayin"></block>
//======================================
Blockly.Blocks['create_arrayin'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['create_arrayin'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '['+value_name1+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="cammaconcat"></block>
//======================================
Blockly.Blocks['cammaconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput(","), "NAME3");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cammaconcat'] = function(block) {
  var text_name3 = block.getFieldValue('NAME3');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name3+value_name1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_string"></block>
//======================================
Blockly.Blocks['block_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("'")
        .appendField(new Blockly.FieldTextInput(""), "NAME")
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = "\'"+text_name+"\'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_string_double_quotes"></block>
//======================================
Blockly.Blocks['block_string_double_quotes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput(""), "NAME")
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string_double_quotes'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '\"'+text_name+'\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['block_any_'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("'\\n'"), "NAME");
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_any_'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//============================================
Blockly.Blocks['block_transform_mode'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_transform_mode'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_name+'\n';
  return code;
};
//<block type="block_loopfunc"></block>
//======================================
Blockly.Blocks['block_loopfunc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("void loop() {");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_loopfunc'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  var code = 'void loop(){\n'+statements_name+"}\n";
  return code;
};

//<block type="block_setupfunc"></block>
//======================================
Blockly.Blocks['block_setupfunc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("void setup() {");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_setupfunc'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  var code = 'void setup(){\n'+statements_name+"}\n";
  return code;
};

//<block type="block_serial"></block>
//======================================
Blockly.Blocks['block_serial'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("Serial.")
        .appendField(new Blockly.FieldDropdown([["begin","begin"], ["print","print"], ["println","println"], ["available","available"], ["write","write"], ["read","read"], ["readBytes","readBytes"], ["readBytesUntil","readBytesUntil"], ["readString","readString"], ["readStringUntil","readStringUntil"], ["flush","flush"], ["setTimeout","setTimeout"], ["end","end"]]), "NAME2")
        .appendField("(");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_serial'] = function(block) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'Serial.'+dropdown_name2+'('+value_name1+');\n';
  return code;
};
//<block type="block_serial_"></block>
//======================================
Blockly.Blocks['block_serial_'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Serial.");
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["available","available"], ["read","read"], ["readBytes","readBytes"], ["readBytesUntil","readBytesUntil"], ["readString","readString"], ["readStringUntil","readStringUntil"],["begin","begin"], ["print","print"], ["println","println"], ["write","write"], ["flush","flush"], ["setTimeout","setTimeout"], ["end","end"]]), "NAME2")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_serial_'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME2');
  var value_name = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'Serial.'+dropdown_name+'('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_digitalwrite"></block>
//======================================
Blockly.Blocks['block_digitalwrite'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("digitalWrite(");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_digitalwrite'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "digitalWrite("+value_name1+","+value_name2+');\n';
  return code;
};

//<block type="block_digitalread"></block>
//======================================
Blockly.Blocks['block_digitalread'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("digitalRead(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
	this.setOutput(true, null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_digitalread'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "digitalRead("+value_name1+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_highlow"></block>
//======================================
Blockly.Blocks['block_highlow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_highlow'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_analogwrite"></block>
//======================================
Blockly.Blocks['block_analogwrite'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("analogWrite(");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_analogwrite'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "analogWrite("+value_name1+","+value_name2+');\n';
  return code;
};

//<block type="block_analogread"></block>
//======================================
Blockly.Blocks['block_analogread'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("analogRead(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
	this.setOutput(true, null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_analogread'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "analogRead("+value_name1+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_semicolon"></block>
//======================================
Blockly.Blocks['block_semicolon'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_semicolon'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+';';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_semicolon_"></block>
//======================================
Blockly.Blocks['block_semicolon_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_semicolon_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+';\n';
  return code;
};

//<block type="block_typedef"></block>
//======================================
Blockly.Blocks['block_typedef'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["int","int"], ["long","long"], ["float","float"], ["double","double"], ["short","short"], ["byte","byte"], ["char","char"], ["String","String"], ["bool","bool"], ["unsigned char","unsigned char"], ["unsigned int","unsigned int"], ["unsigned long","unsigned long"]]), "NAME2");
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_typedef'] = function(block) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_name2+" "+value_name1+';\n';
  return code;
};
//<block type="block_tostring"></block>
//======================================
Blockly.Blocks['block_tostring'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("String(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_tostring'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'String('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_string_convert"></block>
//======================================
Blockly.Blocks['block_string_convert'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["toInt","toInt"],["toFloat","toFloat"], ["toDouble","toDouble"], ["toCharArray","toCharArray"]]), "NAME2")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string_convert'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+"."+dropdown_name2+"("+value_name2+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_string_"></block>
//======================================
Blockly.Blocks['block_string_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["length","length"], ["c_str","c_str"],["substring","substring"],["trim","trim"]]), "NAME2")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+"."+dropdown_name2+"("+value_name2+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_string_start_end"></block>
//======================================
Blockly.Blocks['block_string_start_end'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([[" startsWith"," startsWith"], ["endsWith","endsWith"]]), "NAME2")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string_start_end'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+"."+dropdown_name2+"("+value_name2+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_plusplus"></block>
//======================================
Blockly.Blocks['block_plusplus'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("++");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_plusplus'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'++\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_mathfunc"></block>
//======================================
Blockly.Blocks['block_mathfunc'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["round","round"], ["floor","floor"], ["ceil","ceil"], ["sin","sin"], ["cos","cos"], ["tan","tan"], ["asin","asin"], ["acos","acos"], ["atan","atan"], ["sqrt","sqrt"], ["random","random"], ["abs","abs"], ["min","min"], ["max","max"]]), "NAME")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_mathfunc'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_name+"("+value_name1+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_include"></block><block type="block_include"></block><block type="block_include"></block>
//======================================
Blockly.Blocks['block_include'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("#include");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_include'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '#include '+value_name+'\n';
  return code;
};
//<block type="block_delay"></block>
//======================================
Blockly.Blocks['block_delay'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("delay(");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_delay'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'delay('+value_name+');\n';
  return code;
};
//<block type="block_comment"></block>
//======================================
Blockly.Blocks['block_comment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("//註解"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comment'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = text_name+'\n';
  return code;
};
//<block type="block_comment_"></block>
//======================================
Blockly.Blocks['block_comment_'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("//註解"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comment_'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_func1"></block>
//======================================
Blockly.Blocks['block_func1'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_func1'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'('+value_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_func2"></block>
//======================================
Blockly.Blocks['block_func2'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_func2'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  value_name1+'('+value_name2+','+value_name3+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_big_parantheses_statement"></block>
//======================================
Blockly.Blocks['block_big_parantheses_statement'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("{");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_big_parantheses_statement'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = value_name1+'{\n'+statements_name2+'}\n';
  return code;
};

//<block type="block_dot1"></block>
//======================================
Blockly.Blocks['block_dot1'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_dot1'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.'+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};