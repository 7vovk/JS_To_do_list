window.onload = function(){
    var tl = document.forms["tasksList"];
    var act = document.forms["action"];
    function getId(a) {
        return document.getElementById(a);
    }
    function getCl(a) {
        return document.getElementsByClassName(a);
    }
    
//    Add task:
    
        act.taskBtn.onclick = function(){
            var x = act.taskText.value;
            if (x == "") {
                alert("Enter some task");
            } else {
                getId("task").innerHTML += '<p><input type="checkbox" name="task"> ' + x +  '</p>' + " ";
                act.taskText.value = "";
            }
        }
//        Uncheck all elements
        
        var checkboxes = document.getElementsByTagName('input');

        for (var i=0; i<checkboxes.length; i++)  {
          if (checkboxes[i].type == 'checkbox')   {
            checkboxes[i].checked = false;
          }
        }
        
//        Remove task:

      document.querySelector("form").onchange = function() {
        var cb = document.getElementsByTagName('input');
        var p = document.getElementsByTagName('p');
        for(var i = 0; i < cb.length; i++) {
          if(cb[i].checked) {
            cb[i].parentNode.removeChild(cb[i]);
            p[i].parentNode.removeChild(p[i]);
          }
        }
        return false;
      }
}