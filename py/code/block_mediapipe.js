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
			"mp_pose=mp.solutions.pose\n";
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
  var code = variable_name1+'='+variable_name2+'.pose_landmarks\n';
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
  var code = variable_name1+'.landmark['+value_name2+'].'+dropdown_name;
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
        .appendField(",mp_pose.POSE_CONNECTIONS,landmark_drawing_spec)");
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
  var code = 'mp_drawing.draw_landmarks('+value_name1+','+variable_name2+
			',mp_pose.POSE_CONNECTIONS, landmark_drawing_spec)\n';
  return code;
};

//<block type="with_mp_hands_hands"></block>
//======================================
Blockly.Blocks['with_mp_hands_hands'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with mp_hands.Hands as hands:");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['with_mp_hands_hands'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'with mp_hands.Hands() as hands:\n'+
				statements_name+'\n';
  return code;
};
//<block type="mediapipe_hands_predefine"></block>
//======================================
Blockly.Blocks['mediapipe_hands_predefine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("#前置宣告");
    this.appendDummyInput()
        .appendField("mp_drawing = mp.solutions.drawing_utils");
    this.appendDummyInput()
        .appendField("mp_drawing_styles = mp.solutions.drawing_styles");
    this.appendDummyInput()
        .appendField("mp_hands = mp.solutions.hands");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['mediapipe_hands_predefine'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '#前罝宣告\n'+
			'mp_drawing = mp.solutions.drawing_utils\n'+
			'mp_drawing_styles = mp.solutions.drawing_styles\n'+
			'mp_hands = mp.solutions.hands\n';
  return code;
};
//<block type="mediapipe_hands_process"></block>
//======================================
Blockly.Blocks['mediapipe_hands_process'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=hands.process(");
    this.appendValueInput("NAME2")
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
Blockly.Python['mediapipe_hands_process'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'=hands.process('+value_name2+')\n';
  return code;
};
//<block type="multi_hand_landmarks"></block>
//======================================
Blockly.Blocks['multi_hand_landmarks'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["multi_hand_landmarks","multi_hand_landmarks"], ["multi_hand_world_landmarks","multi_hand_world_landmarks"], ["multi_handedness","multi_handedness"]]), "NAME2");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['multi_hand_landmarks'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.'+dropdown_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="hands_mp_drawing"></block>
//======================================
Blockly.Blocks['hands_mp_drawing'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("mp_drawing.draw_landmarks(");
	this.appendValueInput("NAME2")
        .setCheck(null)
		.appendField(",");
    this.appendDummyInput()
        .appendField(",mp_hands.HAND_CONNECTIONS")
        .appendField(",mp_drawing_styles.get_default_hand_landmarks_style()")
        .appendField(",mp_drawing_styles.get_default_hand_connections_style()")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_mediapipe);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['hands_mp_drawing'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mp_drawing.draw_landmarks('+value_name1+','+value_name2+',mp_hands.HAND_CONNECTIONS,mp_drawing_styles.get_default_hand_landmarks_style(),mp_drawing_styles.get_default_hand_connections_style())\n';
  return code;
};

//======================================
Blockly.Blocks['get_handslandmark'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldVariable("hand_landmarks"), "NAME1")
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
Blockly.Python['get_handslandmark'] = function(block) {
  var variable_name1 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME1'), Blockly.Names.NameType.VARIABLE);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = variable_name1+'.landmark['+value_name2+'].'+dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};