import Terminal from 'xterm'
import 'xterm/dist/addons/fit/fit.js'
import 'xterm/src/xterm.css'

export default (elementId) => {
  Terminal.loadAddon('fit');  // Load the `fit` addon

  var term;

  var terminalContainer = document.getElementById(elementId);

  /* function setTerminalSize () {
    var cols = 130,
        rows = 25;

    term.resize(cols, rows);
  } */

  function createTerminal() {
    term = new Terminal({
      cursorBlink: false,
      scrollback: 1000, //recommended to be same as server
      tabStopWidth: 8
    });

    term.open(terminalContainer, {focus: false});
    term.fit();

  }

  createTerminal();

  return term;
}
