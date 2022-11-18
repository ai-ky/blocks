var Colour_google_colab=15;
//=======================================================
//import colabcam
Blockly.Blocks['googlecolab_import_colabcam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import colabcam #引入colab 中webcam控制工具");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_google_colab);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['googlecolab_import_colabcam'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import colabcam #引入colab 中webcam控制工具\n';
  return code;
};
//=======================================================
//from google.colab.patches import cv2_imshow
Blockly.Blocks['googlecolab_import_cv2_imshow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("#引入colab中秀圖函式");
    this.appendDummyInput()
        .appendField("from google.colab.patches import cv2_imshow");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_google_colab);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['googlecolab_import_cv2_imshow'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '#引入colab中秀圖函式\n'+
			 'from google.colab.patches import cv2_imshow\n';
  return code;
};

//=======================================================
//colabcam.take_img()
Blockly.Blocks['googlecolab_colabcam_take_img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("colabcam.take_img() #使用webcam拍照後回傳影像之numpyArray");
    this.setOutput(true, null);
    this.setColour(Colour_google_colab);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['googlecolab_colabcam_take_img'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'colabcam.take_img()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['googlecolab_cv2_imshow'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("cv2_imshow(image=");
    this.appendDummyInput()
        .appendField(") #秀出image圖");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_google_colab);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['googlecolab_cv2_imshow'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'cv2_imshow('+value_name+')\n';
  return code;
};
