pyautoguiColour=120
//<block type="pyautoui_any"></block>
//======================================
Blockly.Blocks['pyautoui_any'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pyautogui.")
        .appendField(new Blockly.FieldTextInput("keyDown('shift')"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pyautoui_any'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.'+text_name+'\n';
  return code;
};
//<block type="pyautogui_getpixel_"></block>
//======================================
Blockly.Blocks['pyautogui_getpixel_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".getpixel(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pyautogui_getpixel_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.getpixel('+value_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="pyautogui_screenshot_"></block>
//======================================
Blockly.Blocks['pyautogui_screenshot_'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pyautogui.screenshot(")
        .appendField(new Blockly.FieldTextInput("\"1.png\",region=(0,0,300,200)"), "NAME1");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pyautogui_screenshot_'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.screenshot('+text_name1+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="pyautogui_position__"></block>
//======================================
Blockly.Blocks['pyautogui_position__'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pyautogui.position()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pyautogui_position__'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.position()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=====================================================
Blockly.Blocks['import_pyautogui'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import pyautogui");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_pyautogui'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import pyautogui\n';
  return code;
};
//=====================================================
Blockly.Blocks['pyautogui_click'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("pyautogui.click(x=");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",y=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pyautogui_click'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.click('+value_name1+','+value_name2+')\n';
  return code;
};
//=====================================================
Blockly.Blocks['pyautogui_press'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("String")
        .appendField("pyautogui.press(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['pyautogui_press'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var code = 'pyautogui.press('+value_name1+')\n';
  return code;
};
//=====================================================
Blockly.Blocks['pyautogui_moveto'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("pyautogui.moveTo(x=");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",y=");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(",duration=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['pyautogui_moveto'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.moveTo('+value_name1+','+value_name2+',duration='+value_name3+')\n';
  return code;
};
//========================================================
Blockly.Blocks['pyautogui_locatecenteronscreen'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("String")
        .appendField("pyautogui.locateCenterOnScreen(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pyautogui_locatecenteronscreen'] = function(block) {
  var value_1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.locateCenterOnScreen('+value_1+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//========================================================
Blockly.Blocks['pyautogui_pixel'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("pyautogui.pixel(x=");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",y=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Python['pyautogui_pixel'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.pixel('+value_name1+','+value_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
//========================================================
Blockly.Blocks['pyautogui_mousedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pyautogui.mouseDown()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pyautogui_mousedown'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.mouseDown()\n';
  return code;
};
//========================================================
Blockly.Blocks['pyautogui_mouseup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pyautogui.mouseUp()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pyautoguiColour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pyautogui_mouseup'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pyautogui.mouseUp()\n';
  return code;
};
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================

//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================