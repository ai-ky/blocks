var Colour_mediapipe=40;
//======================================
Blockly.Blocks['import_mediapipe_as_mp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import mediapipe as mp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_mediapipe_as_mp'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import mediapipe as mp\n';
  return code;
};
//======================================
Blockly.Blocks['mp_pose_predefine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("#前置宣告");
    this.appendDummyInput()
        .appendField("mp_drawing = mp.solutions.drawing_utils");
    this.appendDummyInput()
        .appendField("landmark_drawing_spec=mp.solutions.drawing_styles.get_default_pose_landmarks_style()");
    this.appendDummyInput()
        .appendField("mp_pose = mp.solutions.pose");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['mp_pose_predefine'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '#前置宣告\n'+
			"mp_drawing = mp.solutions.drawing_utils\n"+
			"landmark_drawing_spec=mp.solutions.drawing_styles.get_default_pose_landmarks_style()\n"+
			"mp.solutions.pose\n";
  return code;
};
//======================================
Blockly.Blocks['with_mp_pose_as_pose'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with mp_pose.Pose() as pose:");
    this.appendStatementInput("NAME3")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['with_mp_pose_as_pose'] = function(block) {
  var statements_name3 = Blockly.Python.statementToCode(block, 'NAME3');
  // TODO: Assemble Python into code variable.
  var code = 'with mp_pose.Pose() as pose:\n'+statements_name3;
  return code;
};
//======================================
Blockly.Blocks['pose_process'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("poseResult"), "NAME1")
        .appendField("=pose.process(");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pose_process'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'=pose.process('+value_name+')\n';
  return code;
};
//======================================
Blockly.Blocks['pose_landmarks'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldVariable("poseLandmarks"), "NAME1")
        .appendField("=")
        .appendField(new Blockly.FieldVariable("poseResult"), "NAME2")
        .appendField(".pose_landmarks");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pose_landmarks'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var variable_name2 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME2'), Blockly.Names.NameType.VARIABLE);
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'='+variable_name2+
			'.pose_landmarks\n';
  return code;
};
//======================================
Blockly.Blocks['get_poselandmark'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldVariable("poseLandmarks"), "NAME1")
        .appendField(".landmark[");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("].")
        .appendField(new Blockly.FieldDropdown([["x","x"], ["y","y"], ["z","z"]]), "NAME")
		.appendField("#取座標");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['get_poselandmark'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.landmark['+value_name2+'].'+dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//======================================
Blockly.Blocks['mp_drawing_draw_landmarks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mp_drawing.draw_landmarks(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("poseLandmarks"), "NAME2")
        .appendField(",mp_pose.POSE_CONNECTIONSlandmark_drawing_spec)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['mp_drawing_draw_landmarks'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var variable_name2 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME2'), Blockly.Names.NameType.VARIABLE);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
/*
//======================================
Blockly.Blocks['pose_process'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pose.process(")
        .appendField(new Blockly.FieldVariable("img"), "NAME")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pose_process'] = function(block) {
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Names.NameType.VARIABLE);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
//======================================
Blockly.Blocks['_pose_landmarks_landmark_'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("results"), "NAME1")
        .appendField(".pose_landmarks.landmark[")
        .appendField(new Blockly.FieldNumber(0, 0, 31), "NAME2")
        .appendField("].")
        .appendField(new Blockly.FieldDropdown([["x","x"], ["y","y"], ["z","z"]]), "NAME3");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['_pose_landmarks_landmark_'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var number_name2 = block.getFieldValue('NAME2');
  var dropdown_name3 = block.getFieldValue('NAME3');
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'.pose_landmarks.landmark['+number_name2+'].'+dropdown_name3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//mp_drawing = mp.solutions.drawing_utils
//======================================
Blockly.Blocks['mp_drawing___mp_solutions_drawing_utils'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mp_drawing = mp.solutions.drawing_utils");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['mp_drawing___mp_solutions_drawing_utils'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mp_drawing = mp.solutions.drawing_utils\n';
  return code;
};


//======================================
Blockly.Blocks['mp_solutions_drawing_styles'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("landmark_drawing_spec=mp.solutions.drawing_styles.")
        .appendField(new Blockly.FieldDropdown([["get_default_pose_landmarks_style","get_default_pose_landmarks_style"], ["get_default_hand_connections_style","get_default_hand_connections_style"], ["get_default_hand_landmarks_style","get_default_hand_landmarks_style"], ["get_default_face_mesh_tesselation_style","get_default_face_mesh_tesselation_style"], ["get_default_face_mesh_contours_style","get_default_face_mesh_contours_style"], ["get_default_face_mesh_iris_connections_style","get_default_face_mesh_iris_connections_style"]]), "NAME")
        .appendField("()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['mp_solutions_drawing_styles'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'landmark_drawing_spec=mp.solutions.drawing_styles.'+dropdown_name+'()\n';
  return code;
};
//======================================
Blockly.Blocks['mp_drawing_draw_landmarks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mp_drawing.draw_landmarks(")
        .appendField(new Blockly.FieldVariable("img"), "NAME")
        .appendField(",mp_pose.POSE_CONNECTIONS, landmark_drawing_spec)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['mp_drawing_draw_landmarks'] = function(block) {
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Names.NameType.VARIABLE);
  // TODO: Assemble Python into code variable.
  var code = 'mp_drawing.draw_landmarks('+variable_name+
			',mp_pose.POSE_CONNECTIONS, landmark_drawing_spec)\n';
  return code;
};
*/