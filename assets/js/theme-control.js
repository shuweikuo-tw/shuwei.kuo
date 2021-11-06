document.addEventListener("DOMContentLoaded", function(event) {
  var date = new Date();
  if(date.getHours()>=18 || date.getHours()<6){
    document.documentElement.setAttribute("nighteye", "active");
  }
  else{
    document.documentElement.setAttribute("nighteye", "disabled");
  }
});