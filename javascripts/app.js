//------ITERATION 1 - THE ROVER OBJECT
var rover = {
  direction:"N",
  x:0,
  y:0,
  travelLog:[[0,0]]
}


//------------------STARTING INSTRUCTIONS--------------------
console.log("Welcome to the Rover Mars Kata Game by T.Romero");
console.log("Please enter (f)Forward (b) Backwards (r) turn Right (l) turn Left");
console.log("Type the list of commands inside the function commands() and press ENTER");


//------------------ITERATION 2 - TURNING THE ROVER-----------------------

function turnLeft(rover){
  
  switch (rover.direction) {
    case "N":
    rover.direction="W";
    break;

    case "W":
    rover.direction="S";
    break;

    case "S":
    rover.direction="E";
    break;

    case "E":
    rover.direction="N";
    break;
  }
  return rover.direction;
  
}

function turnRight(rover){
  
  switch (rover.direction) {
    case "N":
    rover.direction="E";
    break;

    case "E":
    rover.direction="S";
    break;

    case "S":
    rover.direction="W";
    break;

    case "W":
    rover.direction="N";
    break;
  }
  
}

//------------------ITERATION 3 - MOVING THE ROVER-----------------------

function moveForward(rover){
  
  if (rover.direction==="W") {
    rover.x -=1;
  } else if (rover.direction==="N") {
    rover.y -=1;
  } else if (rover.direction==="S") {
    rover.y +=1;
  } else if (rover.direction==="E") {
    rover.x +=1;
  } 
  rover.x= valBetween(rover.x,-10,10); 
  rover.y= valBetween(rover.y,-10,10);
  rover.travelLog.push([rover.x,rover.y]);
}
//------------------BONUS - MOVING BACKWARDS-----------------------

function moveBackwards(rover){
  
  if (rover.direction==="W") {
    rover.x +=1;
  } else if (rover.direction==="N") {
    rover.y +=1;
  } else if (rover.direction==="S") {
    rover.y -=1;
  } else if (rover.direction==="E") {
    rover.x -=1;
  } 
  rover.x= valBetween(rover.x,-10,10); 
  rover.y= valBetween(rover.y,-10,10);
  rover.travelLog.push([rover.x,rover.y]);
}

//----------------BONUS: ENFORCE BOUNDRIES ---------------------------
function valBetween(v, min, max) {
  return (Math.min(max, Math.max(min, v)));
}


//------------------ITERATION 4 - COMMANDS-----------------------
function commands(listCommands) {
  var commandsArr=listCommands.split("");

    for (var i=0; i<commandsArr.length ; i++) {
      switch (commandsArr[i]) {
       case "f":
        moveForward(rover);
        break;

       case "r":
        turnRight(rover);
        break;

        case "l":
        turnLeft(rover);
        break;

        case "b":
        moveBackwards(rover);
        //--------------------BONUS: VALIDATE INPUTS
        default:
        console.log("Please enter (f)Forward (b) Backwards (r) turn Right (l) turn Left");
        break;
      }
    }

    //-----------OUTPUT OF THE GAME---------------------------
    console.log("New direction is "+rover.direction);
    console.log("Current position is "+rover.x+" "+rover.y);

    //------------------ITERATION 5 - TRACKING-----------------------
    console.log("Rover Travel Log:");
    
    for(j=0;j<rover.travelLog.length;j++) {
      console.log("Movement number "+j+" ["+rover.travelLog[j]+"]");
    }
}

//---------END GAME


