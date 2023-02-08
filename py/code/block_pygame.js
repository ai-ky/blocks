//<block type="import_pygame"></block>
//======================================
Blockly.Blocks['import_pygame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import pygame");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_pygame'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import pygame\n';
  return code;
};

//<block type="pygame_init__"></block>
//======================================
Blockly.Blocks['pygame_init__'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pygame.init()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pygame_init__'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pygame.init()\n';
  return code;
};

//<block type="pygame_mixer_init__"></block>
//======================================
Blockly.Blocks['pygame_mixer_init__'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pygame.mixer.init()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pygame_mixer_init__'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pygame.mixer.init()\n';
  return code;
};

//<block type="pygame_mixer_music_load"></block>
//======================================
Blockly.Blocks['pygame_mixer_music_load'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("pygame.mixer.music.load(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pygame_mixer_music_load'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pygame.mixer.music.load('+value_name1+')\n';
  return code;
};


//<block type="pygame_mixer_music_get_busy"></block>
//======================================
Blockly.Blocks['pygame_mixer_music_get_busy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pygame.mixer.music.get_busy()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pygame_mixer_music_get_busy'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pygame.mixer.music.get_busy()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//<block type="pygame_mixer_music_funcs"></block>
//======================================
Blockly.Blocks['pygame_mixer_music_funcs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pygame.mixer.music.")
        .appendField(new Blockly.FieldDropdown([["play()","play()"], ["stop()","stop()"], ["pause()","pause()"], ["unpause()","unpause()"]]), "NAME1");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['pygame_mixer_music_funcs'] = function(block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'pygame.mixer.music.'+dropdown_name1+'\n';
  return code;
};