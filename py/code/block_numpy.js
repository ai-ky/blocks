var Colour_numpy=0;
//=======================================================
Blockly.Blocks['numpy_import'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("import numpy as np");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpy_import'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "import numpy as np\n";
  return code;
};
//=======================================================
Blockly.Blocks['np_array'] = {
  init: function() {
    this.appendValueInput("np_array_ARRAYNAME")
        .setCheck(null)
        .appendField("np.array(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['np_array'] = function(block) {
  var value_np_array_arrayname = Blockly.Python.valueToCode(block, 'np_array_ARRAYNAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'np.array('+value_np_array_arrayname+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['numpyarray_copy'] = {
  init: function() {
    this.appendValueInput("COPY_ARRAY_NAME")
        .setCheck(null)
        .appendField("陣列");
    this.appendDummyInput()
        .appendField(".cpoy()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpyarray_copy'] = function(block) {
  var value_copy_array_name = Blockly.Python.valueToCode(block, 'COPY_ARRAY_NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_copy_array_name+'.copy()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['numpyarray_astype'] = {
  init: function() {
    this.appendValueInput("numpyArray_astype_ARRAYNAME")
        .setCheck(null)
        .appendField("陣列");
    this.appendDummyInput()
        .appendField(".astype(")
        .appendField(new Blockly.FieldDropdown([["np.float32","np.float32"], ["np.float64","np.float64"], ["np.int32","np.int32"], ["np.int32","np.int32"]]), "numpyArray_astype_type")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpyarray_astype'] = function(block) {
  var value_numpyarray_astype_arrayname = Blockly.Python.valueToCode(block, 'numpyArray_astype_ARRAYNAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_numpyarray_astype_type = block.getFieldValue('numpyArray_astype_type');
  // TODO: Assemble Python into code variable.
  var code = value_numpyarray_astype_arrayname+'.astype('+dropdown_numpyarray_astype_type+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['numpyarray_reshape3'] = {
  init: function() {
    this.appendValueInput("numpyArray_reshape3_ARRAYNAME")
        .setCheck(null)
        .appendField("陣列");
    this.appendValueInput("numpyArray_reshape3_d1")
        .setCheck("Number")
        .appendField(".reshape(");
    this.appendValueInput("numpyArray_reshape3_d2")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("numpyArray_reshape3_d3")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
	this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpyarray_reshape3'] = function(block) {
  var value_numpyarray_reshape3_arrayname = Blockly.Python.valueToCode(block, 'numpyArray_reshape3_ARRAYNAME', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape3_d1 = Blockly.Python.valueToCode(block, 'numpyArray_reshape3_d1', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape3_d2 = Blockly.Python.valueToCode(block, 'numpyArray_reshape3_d2', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape3_d3 = Blockly.Python.valueToCode(block, 'numpyArray_reshape3_d3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if(value_numpyarray_reshape3_d1==='0')value_numpyarray_reshape3_d1='';
  if(value_numpyarray_reshape3_d3==='0')value_numpyarray_reshape3_d3='';
  var code = value_numpyarray_reshape3_arrayname+'.reshape('+value_numpyarray_reshape3_d1+','+
				value_numpyarray_reshape3_d2+','+value_numpyarray_reshape3_d3+')';
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['numpyarray_reshape4'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("陣列");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField(".reshape(");
    this.appendValueInput("NAME3")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("NAME4")
        .setCheck("Number")
        .appendField(",");
	this.appendValueInput("NAME5")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
	this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpyarray_reshape4'] = function(block) {
  var value_numpyarray_reshape3_arrayname = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape3_d1 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape3_d2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape3_d3 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape3_d4 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if(value_numpyarray_reshape3_d1==='0')value_numpyarray_reshape3_d1='';
  if(value_numpyarray_reshape3_d4==='0')value_numpyarray_reshape3_d4='';
  var code = value_numpyarray_reshape3_arrayname+'.reshape('+value_numpyarray_reshape3_d1+','+
				value_numpyarray_reshape3_d2+','+value_numpyarray_reshape3_d3+','+
				value_numpyarray_reshape3_d4+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['numpyarray_reshape2'] = {
  init: function() {
    this.appendValueInput("numpyArray_reshape2_ARRAYNAME")
        .setCheck(null)
        .appendField("陣列");
    this.appendValueInput("numpyArray_reshape2_d1")
        .setCheck("Number")
        .appendField(".reshape(");
    this.appendValueInput("numpyArray_reshape2_d2")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpyarray_reshape2'] = function(block) {
  var value_numpyarray_reshape2_arrayname = Blockly.Python.valueToCode(block, 'numpyArray_reshape2_ARRAYNAME', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape2_d1 = Blockly.Python.valueToCode(block, 'numpyArray_reshape2_d1', Blockly.Python.ORDER_ATOMIC);
  var value_numpyarray_reshape2_d2 = Blockly.Python.valueToCode(block, 'numpyArray_reshape2_d2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if(value_numpyarray_reshape2_d1==='0')value_numpyarray_reshape2_d1='';
  if(value_numpyarray_reshape2_d2==='0')value_numpyarray_reshape2_d2='';
  var code = value_numpyarray_reshape2_arrayname+'.reshape('+value_numpyarray_reshape2_d1+','+
															 value_numpyarray_reshape2_d2+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['numpyarray_flatten'] = {
  init: function() {
    this.appendValueInput("numpyArray_flatten_ARRAYNAME")
        .setCheck(null)
        .appendField("陣列");
    this.appendDummyInput()
        .appendField(".flatten()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpyarray_flatten'] = function(block) {
  var value_numpyarray_flatten_arrayname = Blockly.Python.valueToCode(block, 'numpyArray_flatten_ARRAYNAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_numpyarray_flatten_arrayname+'.flatten()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['numpy_var_dim1'] = {
  init: function() {//
	this.appendDummyInput()
		.appendField("陣列")
        .appendField(new Blockly.FieldVariable("A"), "ARRAY_NAME");
    this.appendValueInput("DIM1_START")
        .setCheck("Number")
        .appendField("[");
    this.appendValueInput("DIM1_END")
        .setCheck("Number")
        .appendField(":");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpy_var_dim1'] = function(block) {
  var value_array_name=Blockly.Python.nameDB_.getName(block.getFieldValue('ARRAY_NAME'), Blockly.Names.NameType.VARIABLE);
  var value_dim1_start = Blockly.Python.valueToCode(block, 'DIM1_START', Blockly.Python.ORDER_ATOMIC);
  var value_dim1_end = Blockly.Python.valueToCode(block, 'DIM1_END', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_array_name+'['+value_dim1_start+':'+value_dim1_end+']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['numpy_var_dim2'] = {
  init: function() {//
	this.appendDummyInput()
		.appendField("陣列")
        .appendField(new Blockly.FieldVariable("A"), "ARRAY_NAME");
    this.appendValueInput("DIM21_START")
        .setCheck("Number")
        .appendField("[");
    this.appendValueInput("DIM21_END")
        .setCheck("Number")
        .appendField(":");
		
	this.appendValueInput("DIM22_START")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("DIM22_END")
        .setCheck("Number")
        .appendField(":");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpy_var_dim2'] = function(block) {
  var value_array_name=Blockly.Python.nameDB_.getName(block.getFieldValue('ARRAY_NAME'), Blockly.Names.NameType.VARIABLE);
  var value_dim1_start = Blockly.Python.valueToCode(block, 'DIM21_START', Blockly.Python.ORDER_ATOMIC);
  var value_dim1_end = Blockly.Python.valueToCode(block, 'DIM21_END', Blockly.Python.ORDER_ATOMIC);
  var value_dim2_start = Blockly.Python.valueToCode(block, 'DIM22_START', Blockly.Python.ORDER_ATOMIC);
  var value_dim2_end = Blockly.Python.valueToCode(block, 'DIM22_END', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_array_name+'['+value_dim1_start+':'+value_dim1_end+','+value_dim2_start+':'+value_dim2_end+']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=======================================================
Blockly.Blocks['var_equal'] = {
  init: function() {
    this.appendValueInput("VAR_LEFT")
        .setCheck(null);
    this.appendValueInput("VAR_RIGHT")
        .setCheck(null)
        .appendField("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['var_equal'] = function(block) {
  var value_var_left = Blockly.Python.valueToCode(block, 'VAR_LEFT', Blockly.Python.ORDER_ATOMIC);
  var value_var_right = Blockly.Python.valueToCode(block, 'VAR_RIGHT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_var_left+'='+value_var_right+'\n';
  return code;
};
//===================================================
Blockly.Blocks['list_by2'] = {
  init: function() {
    this.appendValueInput("VALUE2_DIM1")
        .setCheck("Number")
        .appendField("[");
    this.appendValueInput("VALUE2_DIM2")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['list_by2'] = function(block) {
  var value_value_dim1 = Blockly.Python.valueToCode(block, 'VALUE2_DIM1', Blockly.Python.ORDER_ATOMIC);
  var value_value_dim2 = Blockly.Python.valueToCode(block, 'VALUE2_DIM2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '['+value_value_dim1+','+value_value_dim2+']'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//===================================================
Blockly.Blocks['list_by3'] = {
  init: function() {
    this.appendValueInput("VALUE_DIM1")
        .setCheck("Number")
        .appendField("[");
    this.appendValueInput("VALUE_DIM2")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("VALUE_DIM3")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['list_by3'] = function(block) {
  var value_value_dim1 = Blockly.Python.valueToCode(block, 'VALUE_DIM1', Blockly.Python.ORDER_ATOMIC);
  var value_value_dim2 = Blockly.Python.valueToCode(block, 'VALUE_DIM2', Blockly.Python.ORDER_ATOMIC);
  var value_value_dim3 = Blockly.Python.valueToCode(block, 'VALUE_DIM3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '['+value_value_dim1+','+value_value_dim2+','+value_value_dim3+']'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=====================================================
Blockly.Blocks['build_tuple2'] = {
  init: function() {
    this.appendValueInput("TUPLE2_V1")
        .setCheck("Number")
        .appendField("(");
    this.appendValueInput("TUPLE2_V2")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['build_tuple2'] = function(block) {
  var value_tuple_v1 = Blockly.Python.valueToCode(block, 'TUPLE2_V1', Blockly.Python.ORDER_ATOMIC);
  var value_tuple_v2 = Blockly.Python.valueToCode(block, 'TUPLE2_V2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '('+value_tuple_v1+','+value_tuple_v2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=====================================================
Blockly.Blocks['build_tuple3'] = {
  init: function() {
    this.appendValueInput("TUPLE3_V1")
        .setCheck("Number")
        .appendField("(");
    this.appendValueInput("TUPLE3_V2")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("TUPLE3_V3")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['build_tuple3'] = function(block) {
  var value_tuple_v1 = Blockly.Python.valueToCode(block, 'TUPLE3_V1', Blockly.Python.ORDER_ATOMIC);
  var value_tuple_v2 = Blockly.Python.valueToCode(block, 'TUPLE3_V2', Blockly.Python.ORDER_ATOMIC);
  var value_tuple_v3 = Blockly.Python.valueToCode(block, 'TUPLE3_V3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '('+value_tuple_v1+','+value_tuple_v2+','+value_tuple_v3+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
//====================================================
Blockly.Blocks['list_append'] = {
  init: function() {
    this.appendValueInput("list_append_V1")
        .setCheck(null)
        .appendField("串列");
    this.appendValueInput("list_append_V2")
        .setCheck(null)
        .appendField(".append(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
}
Blockly.Python['list_append'] = function(block) {
  var value_list_append_v1 = Blockly.Python.valueToCode(block, 'list_append_V1', Blockly.Python.ORDER_ATOMIC);
  var value_list_append_v2 = Blockly.Python.valueToCode(block, 'list_append_V2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list_append_v1+'.append('+value_list_append_v2+')\n';
  return code;
};
//=============================================
Blockly.Blocks['np_clip'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("np.clip(陣列=");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",min=");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(",max=");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['np_clip'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'np.clip('+value_name1+','+value_name2+','+value_name3+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=================================================
Blockly.Blocks['list_getDim1'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("取值");
    this.appendDummyInput()
        .appendField("[");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['list_getDim1'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'['+value_name2+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=================================================
Blockly.Blocks['numpy_array_shape'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("陣列");
    this.appendDummyInput()
        .appendField(".shape");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpy_array_shape'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.shape';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================================
Blockly.Blocks['np_argmax'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("np.argmax(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['np_argmax'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'np.argmax('+value_name1+')';;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//========================================
Blockly.Blocks['build_empty_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("L"), "NAME")
        .appendField("= [ ] #建立空串列");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['build_empty_list'] = function(block) {
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Names.NameType.VARIABLE);
  var code = variable_name+'=[]\n';
  return code;
};
//======================================
Blockly.Blocks['empty_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" [  ]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Colour_numpy);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['empty_list'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '[]';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
