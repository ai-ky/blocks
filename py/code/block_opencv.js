var Colour_opencv=15;
//===========================================================
Blockly.Blocks['opencv_import'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("import cv2");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['opencv_import'] = function(block) {
  
  // TODO: Assemble Python into code variable.
  var code = "import cv2\n";
  return code;
};

//=======================================================
Blockly.Blocks['cv2_create_knn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("knn=cv2.KNearest_create()");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_create_knn'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'knn=cv2.ml.KNearest_create()\n';
  return code;
};
//=======================================================
Blockly.Blocks['cv2_knn_setdefaultk'] = {
  init: function() {
    this.appendValueInput("knn")
        .setCheck("Number")
        .appendField("knn.setDefaultK(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_knn_setdefaultk'] = function(block) {
  var value_knn = Blockly.Python.valueToCode(block, 'knn', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'knn.setDefaultK('+value_knn+')\n';
  return code;
};
//=======================================================
Blockly.Blocks['cv2_knn_setisclassifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("knn.setIsClassifier(")
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","True"]]), "NAME")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_knn_setisclassifier'] = function(block) {
  
  var dropdown_cv2_knn_setisclassifier_v = block.getFieldValue('NAME');//cv2_knn_setIsClassifier_V
  // TODO: Assemble Python into code variable.
  var code = 'knn.setIsClassifier('+dropdown_cv2_knn_setisclassifier_v+')\n';
  return code;
};
//=======================================================
Blockly.Blocks['cv2_knn_train'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("knn.train(x_train=");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["cv2.ml.ROW_SAMPLE","cv2.ml.ROW_SAMPLE"], ["cv2.ml.COL_SAMPLE","cv2.ml.COL_SAMPLE"]]), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(",y_train=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['cv2_knn_train'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'knn.train('+value_name1+','+dropdown_name2+','+value_name3+')\n';
  return code;
};
//==================================================
Blockly.Blocks['cv2_knn_predict'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("knn.predict(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['cv2_knn_predict'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'knn.predict('+value_name+')\n';
  return code;
};

//=======================================================
Blockly.Blocks['cv2_knn_save'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("knn.save(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_knn_save'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'knn.save('+value_name+')\n';
  return code;
};
//=======================================================
Blockly.Blocks['cv2_vdeocapture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cap=cv2.VideoCapture")
		.appendField("(")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "NAME")
		.appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_vdeocapture'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'cap=cv2.VideoCapture('+dropdown_name+')\n';
  return code;
};
//=======================================================
Blockly.Blocks['cv2_cap_read'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("ret"), "RET_NAME");
	this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("img"), "IMG_NAME");
    this.appendDummyInput()
        .appendField("=cap.read()");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_cap_read'] = function(block) {
  var RET_name=Blockly.Python.nameDB_.getName(block.getFieldValue('RET_NAME'), Blockly.Names.NameType.VARIABLE);
  var IMG_name=Blockly.Python.nameDB_.getName(block.getFieldValue('IMG_NAME'), Blockly.Names.NameType.VARIABLE);
  var code = RET_name+','+IMG_name+'=cv2.read()\n';
  return code;
};
//============================================
Blockly.Blocks['cv2_cap_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cap.set(")
        .appendField(new Blockly.FieldDropdown([["cv2.CAP_PROP_FRAME_WIDTH","cv2.CAP_PROP_FRAME_WIDTH"], ["cv2.CAP_PROP_FRAME_HEIGHT","cv2.CAP_PROP_FRAME_HEIGHT"]]), "CAP_PROP_FRAME");
    this.appendValueInput("CAP_PROP_FRAME_VALUE")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_cap_set'] = function(block) {
  var dropdown_cap_prop_frame = block.getFieldValue('CAP_PROP_FRAME');
  var value_cap_prop_frame_value = Blockly.Python.valueToCode(block, 'CAP_PROP_FRAME_VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'cap.set('+dropdown_cap_prop_frame+','+value_cap_prop_frame_value+')\n';
  return code;
};
//============================================
Blockly.Blocks['cv2_cap_release'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cap.release()");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_cap_release'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'cap.release()\n';
  return code;
};
//============================================
Blockly.Blocks['cv2_destroyallwindows'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cv2.destroyAllWindows()");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_destroyallwindows'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'cv2.destroyallwindows()\n';
  return code;
};

//============================================
Blockly.Blocks['cv2_movewindow'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("String")
        .appendField("cv2.moveWindow(windowName=");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField(",x=");
    this.appendValueInput("NAME3")
        .setCheck("Number")
        .appendField(",y=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_movewindow'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var code = 'cv2.moveWindow('+value_name1+','+value_name2+','+value_name3+')\n';
  return code;
};
//============================================
Blockly.Blocks['cv2_imshow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cv2.imshow")
        .appendField("(");
    this.appendValueInput("TITLE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("title");
    this.appendValueInput("IMG")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("image");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("frame為opencv影像格式");
 this.setHelpUrl("");
  }
};

Blockly.Python['cv2_imshow'] = function(block) {
  var value_title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC);
  var value_img = Blockly.Python.valueToCode(block, 'IMG', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'cv2.imshow('+value_title+','+value_img+')\n';
  return code;
};
//============================================
Blockly.Blocks['cv2_rectangle'] = {
  init: function() {
    this.appendValueInput("CV2_RECTANGLE_IMG")
        .setCheck(null)
        .appendField("cv2.rectangle(image=");
    this.appendValueInput("CV2_RECTANGLE_STARTPOINT")
        .setCheck(null)
        .appendField(",start_point=");
    this.appendValueInput("CV2_RECTANGLE_ENDPOINT")
        .setCheck(null)
        .appendField(",end_point=");
    this.appendValueInput("CV2_RECTANGLE_COLOR")
        .setCheck(null)
        .appendField(",color=");
    this.appendValueInput("CV2_RECTANGLE_THICKNESS")
        .setCheck("Number")
        .appendField(",thickness =");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_rectangle'] = function(block) {
  var value_cv2_rectangle_img = Blockly.Python.valueToCode(block, 'CV2_RECTANGLE_IMG', Blockly.Python.ORDER_ATOMIC);
  var value_cv2_rectangle_startpoint = Blockly.Python.valueToCode(block, 'CV2_RECTANGLE_STARTPOINT', Blockly.Python.ORDER_ATOMIC);
  var value_cv2_rectangle_endpoint = Blockly.Python.valueToCode(block, 'CV2_RECTANGLE_ENDPOINT', Blockly.Python.ORDER_ATOMIC);
  var value_cv2_rectangle_color = Blockly.Python.valueToCode(block, 'CV2_RECTANGLE_COLOR', Blockly.Python.ORDER_ATOMIC);
  var value_cv2_rectangle_thickness = Blockly.Python.valueToCode(block, 'CV2_RECTANGLE_THICKNESS', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'cv2.rectangle('+value_cv2_rectangle_img+','+value_cv2_rectangle_startpoint+','+value_cv2_rectangle_endpoint+','+
              value_cv2_rectangle_color+','+value_cv2_rectangle_thickness+')\n';
  return code;
};

//===============================
Blockly.Blocks['cv2_flip'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("cv2.flip(image=");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0-axis","0"], ["1-axis","1"], ["both","-1"]]), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['cv2_flip'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'cv2.flip('+value_name1+','+dropdown_name2+')\n';
  return code;
};
//===============================
Blockly.Blocks['cv2_threshold'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("ret"), "NAME5")
        .appendField(",")
        .appendField(new Blockly.FieldVariable("img"), "NAME6");
    this.appendValueInput("NAME1")
        .setCheck("String")
        .appendField("=cv2.threshold(image=");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField(",min=");
    this.appendValueInput("NAME3")
        .setCheck("Number")
        .appendField(",max=");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([["cv2.THRESH_BINARY_INV","cv2.THRESH_BINARY_INV"], ["cv2.THRESH_BINARY","cv2.THRESH_BINARY"], ["cv2.THRESH_TRUNC","cv2.THRESH_TRUNC"], ["cv2.THRESH_TOZERO","cv2.THRESH_TOZERO"], ["cv2.THRESH_TOZERO_INV","cv2.THRESH_TOZERO_INV"]]), "NAME4")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_threshold'] = function(block) {
  var variable_name5 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME5'), Blockly.Names.NameType.VARIABLE);
  var variable_name6 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME6'), Blockly.Names.NameType.VARIABLE);
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name4 = block.getFieldValue('NAME4');
  // TODO: Assemble Python into code variable.
  var code = variable_name5+','+variable_name6+'=cv2_threshold('+value_name1+','+value_name2+','+value_name3+','+dropdown_name4+')\n';
  return code;
};

//===============================
Blockly.Blocks['cv2_imwrite'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("cv2.imwrite(filename=");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",image=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['cv2_imwrite'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'cv2.imwrite('+value_name1+','+value_name2+')\n';
  return code;
};

//===============================
Blockly.Blocks['cv2_imread'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("im"), "NAME");
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("= cv2.read( filename=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['cv2_imread'] = function(block) {
  //var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Names.NameType.VARIABLE);
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_name+'=cv2.imread('+value_name1+')\n';
  return code;
};

//==================================================
Blockly.Blocks['cv2_resize'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("cv2.resize(image=");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",size=(");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField("), interpolation=")
        .appendField(new Blockly.FieldDropdown([["cv2.INTER_AREA","cv2.INTER_AREA"], ["cv2.INTER_NEAREST","cv2.INTER_NEAREST"], ["cv2.INTER_LINEAR","cv2.INTER_LINEAR"], ["cv2.INTER_CUBIC","cv2.INTER_CUBIC"], ["cv2.INTER_LANCZOS4","cv2.INTER_LANCZOS4"]]), "NAME4");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_resize'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name4 = block.getFieldValue('NAME4');
  // TODO: Assemble Python into code variable.
  var code = 'cv2.resize('+value_name1+',('+value_name2+','+value_name3+'),'+dropdown_name4+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//==================================================
Blockly.Blocks['cv2_waitkey'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("cv2.waitKey(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_opencv);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cv2_waitkey'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var code = 'cv2.waitKey('+value_name1+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
