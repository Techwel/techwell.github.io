var button_index;
var invert_ = false;
var default_ = true;

function QA_button(value){
   button_index = value;
   if(invert_ == false){
      invert_background(button_index)
   }else{
      default_background(button_index);
   }
}

function invert_background(button_index){
   var index;
   var location = document.getElementsByClassName("night_mode");
   location[button_index].style.backgroundColor = '#494949';
   
   var local_text_headerH1 = document.getElementById('text-header-h1');
   local_text_headerH1.style.color = '#e0e0e0';
   
   var local_text_par = document.getElementsByClassName('text-par');
   for(index = 0; index < local_text_par.length; index++ ){
      local_text_par[index].style.color = '#b7b7b7';   
   }
   
   
   var parent = document.getElementsByClassName("st-btn");
   var text_note = document.createTextNode('Turn on the backlight');
   parent[button_index].removeChild(parent[button_index].firstChild);
   parent[button_index].appendChild(text_note);

   invert_ = true;
   default_ = false;
}

function default_background(button_index){
   var index;
   var location = document.getElementsByClassName("night_mode");
   location[button_index].style.backgroundColor = 'transparent';
   
   var local_text_headerH1 = document.getElementById('text-header-h1');
   local_text_headerH1.style.color = 'black';
   
   var local_text_par = document.getElementsByClassName('text-par');
   for(index = 0; index < local_text_par.length; index++){
      local_text_par[index].style.color = 'black';
   }
   
   var parent = document.getElementsByClassName("st-btn");   
   var text_note = document.createTextNode('Turn off the backlight');
   parent[button_index].removeChild(parent[button_index].firstChild);
   parent[button_index].appendChild(text_note);

   invert_ = false;
   default_ = true;
}