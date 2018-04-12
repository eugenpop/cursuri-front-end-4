var a = 2;//global

function displayVariables () {
  var b = 3;
  
  c = 4;
  
  console.log('a inside function', a); //2
  console.log('b inside function', b); //3
  console.log('c inside function', c); //4
}

displayVariables();

  console.log('a outside function', a); //2
  console.log('b outside function', typeof b); //uncought ReferenceError:
  console.log('c outside function', c); //4

//-----------------------------------------------------------------------


var x = 1;//global

function firstFunction () {
  var y = 2;//local into firstFunction
  
  function secondFunction () {
    var z = 3;
    console.log('second x = ', x); //1
    console.log('second y = ', y); //2
    console.log('second z = ', z); //3
    
    function thirdFunction(z) {
      z = 5;//not global
      
       console.log('Third x = ', x) //1
       console.log('Third y = ', y) //2
       console.log('Third z = ', z) //5
    }
    
    thirdFunction(z);
    
  }
  secondFunction();
  
    console.log('First x = ', x); //1
    console.log('First y = ', y); //2
    console.log('First z = ',typeof z); //
}
firstFunction();


//----------------------------------------

(function demoHoisting(){
  var a = 1000;
  console.log(a  + " " + b);
  var b = 2000;
})(); //IIFE

// this is identical with

(function demoHoisting(){
  var a = 1000;
  var b;
  console.log(a  + " " + b);
  var b = 2000;
})(); //IIFE

//--------------------------------------------------












