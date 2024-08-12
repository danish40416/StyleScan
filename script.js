
function hideAllPanels() {
  var panels = document.querySelectorAll('.control-panel');
  panels.forEach(function (panel) {
    panel.style.display = "none";
  });
}

function openPopup() {
  hideAllPanels();
  document.querySelectorAll('.popup, .feature-panel, #box1, #box2 ').forEach(function (panel) {
    panel.style.display = "block";
  });
  document.querySelector('.main-panel').style.display = 'none'
}

function closePopup(popupClass) {
  document.querySelector('.' + popupClass).style.display = 'none';
}

function erasePanel() {
  document.querySelectorAll('.feature-panel, .main-panel').forEach(function (panel) {
    panel.style.display = "none";
  });
  document.querySelector('.erase-panel').style.display = 'block'

}
function wrapPanel() {
  document.querySelectorAll('.feature-panel, .main-panel').forEach(function (panel) {
    panel.style.display = "none";
  });
  document.querySelector('.wrap-panel').style.display = 'block'

}
function shadowPanel() {
  document.querySelectorAll('.feature-panel, .main-panel').forEach(function (panel) {
    panel.style.display = "none";
  });
  document.querySelector('.shadow-panel').style.display = 'block'
}

function canvasPanel() {
  document.querySelector('.feature-panel').style.display = "none"
  document.querySelector('.canvas-panel').style.display = 'block'

}
function savePanel() {
  document.querySelector('.save-panel').style.display = 'block';

}
function backgroundPanel() {
  document.querySelector('.background-panel').style.display = 'block';

}
function removeControls(panelClass) {
  document.querySelector('.' + panelClass).style.display = 'none'
  document.querySelector('.feature-panel').style.display = "block"
}
