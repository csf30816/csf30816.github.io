window.onload = function(){
  // Notification functions
  var notif = {
    clear: function () {document.getElementById('notif').innerHTML = "";},
    new: function (n, t) {document.getElementById('notif').innerHTML += `<div class="notif"><b>`+t+`</b>: `+n+`</div>`;},
  }

  // Notify
  notif.clear();
  notif.new('Please consider donating! <a href="donate.html">Donate</a> is the place to go.', 'Alert');
  };
