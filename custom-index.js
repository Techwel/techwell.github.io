// JavaScript File
var slide_index = 1;
carousel(slide_index);

function moveSlides(value){
   slide_index += value;
   
   var this_slide = slide_index;
   // console.log('Here 1');
   carousel(this_slide);
}

function this_slide(value){
   // console.log('Here 2');
   slide_index = value;
   carousel(slide_index);
}

function carousel(value_index){
   var index;
   // console.log('Here 3');   
   var parent_slide = document.getElementsByClassName("slides");
   var parent_dot = document.getElementsByClassName("dot");
   
   // console.log(parent_dot);
   
   if(value_index > parent_slide.length){
      slide_index = 1;
   }
   if(value_index < 1){
      slide_index = parent_slide.length;
   }
   for(index = 0; index < parent_slide.length; index++){
      parent_slide[index].style.display = "none";
   }
   
   for(index = 0; index < parent_dot.length; index++){
      parent_dot[index].className = parent_dot[index].className.replace(" active", "");
   }

   parent_slide[slide_index-1].style.display = "block";
   // console.log(parent_dot[slide_index-1]);
   parent_dot[slide_index-1].className += " active";
}

var button_index;
var invert_ = [false, false];
var default_ = [true, true];

function this_button(value){
   button_index = value;
   if(invert_[value] == false){
      invert_background(button_index)
   }else{
      default_background(button_index);
   }
}

function invert_background(button_index){
   var location = document.getElementsByClassName("night_mode");
   location[button_index].style.backgroundColor = '#494949';
   var parent = document.getElementsByClassName("st-btn");
   var text_note = document.createTextNode('Turn on the backlight');
   parent[button_index].removeChild(parent[button_index].firstChild);
   parent[button_index].appendChild(text_note);

   invert_[button_index] = true;
   default_[button_index] = false;
}

function default_background(button_index){
 var location = document.getElementsByClassName("night_mode");
   location[button_index].style.backgroundColor = 'transparent';
   var parent = document.getElementsByClassName("st-btn");   
   var text_note = document.createTextNode('Turn off the backlight');
   parent[button_index].removeChild(parent[button_index].firstChild);
   parent[button_index].appendChild(text_note);

   invert_[button_index] = false;
   default_[button_index] = true;
}