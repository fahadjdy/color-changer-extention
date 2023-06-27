document.addEventListener('DOMContentLoaded', function() {
    var colorPicker = document.getElementById('colorPicker');
  
    colorPicker.addEventListener('change', function() {
      var selectedColor = colorPicker.value;
      chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + selectedColor + '";'
      });
    });
  });
  