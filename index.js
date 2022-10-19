var numberOfButtons = document.querySelectorAll(".drum").length; //gets the number of buttons in array format

for (let i=0; i<document.querySelectorAll(".drum").length; i++){
    //i++ because it affects the buttons in increments of 1
    document.querySelectorAll(".drum")[i].addEventListener("click",clickSound); //click= event; makeSound= function
    
    // the function that is executed when click event occurs on buttons
    function clickSound() {
      var buttonInnerHTML = this.innerHTML; //selects the clicked element
      makeSound(buttonInnerHTML); //clicked element carries out the makeSound() below
      buttonAnimation(buttonInnerHTML); //performs button animation function
    }
    
    function makeSound(key) { 
      
      //To add sound to the webpage using switch statements
      
      switch (key) {
        case "w":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;

        case "a":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;

        case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

        case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "j":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

        case "k":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

        case "l":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

        default: 
        console.log(buttonInnerHTML);
      }
    } 

 }

 //Adding Keyboard listeners
 document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key)
 });

 //button animations
//create function for the animation that can be called by the sound and key listeners
 function buttonAnimation(curentKey){ 
  var activeButton = document.querySelector("."+ curentKey);
   //adds a styling from the css style sheet using add class list
   // Key Note the (.pressed) already has been styles in styles.css
  activeButton.classList.add("pressed");
  // time out this animation after the button is pressed
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
 }

 /**Explaining the loop statement code --- 
  * document.SellectorAll("drum") -- used to select all the elements with the class drum
  * [i] --- loop through from i= 0 to i=6;
  * addEventListener --- used to add an event when any of the buttons is clicked
  * when button is clicked the function is triggered to perform
  */
// var audio = new Audio("sounds/tom-1.mp3"); // calls an audio HTML element and puts a 
// audio.play();//play() method plays an audio element\

/**Explaining the switch statement as used in the code ---
 * create a variable that will have the "this" property
 * this property will be used to apply sound to the variable when it is called
 * hence: var variableName= this.variableName;
 * 
 * switch statement is then called with the variableName 
 * The case for each button is written and each button is assigned a sound
 * using by
 * - creating a variable with the corresponding sound name 
 * equating the variable with the new HTMLMedia Element(Audio) 
 * along with the path
 * just beneath it: the play method is called on the variable
 * break is applied to stop the code after event occurs
 * 
 * You are strongly encouraged to have a default case when writing a swuitch statement
 */