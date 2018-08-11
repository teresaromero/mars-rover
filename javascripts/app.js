var rover = {
  direction:"N",
  x:0,
  y:0,
  travelLog:[[0,0]]
}

//--------ROVER DIRECTIONS N-NORTH / S-SOUTH / E-EAST / W- WEST
// ACCESO A PROPIEDAD -> rover.direction
// CAMBIO DE VALOR DE LA PROPIEDAD -> rover.direction = "W";
// ======================

// ======================
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
//LIMITAR A 10X10 
function valBetween(v, min, max) {
  return (Math.min(max, Math.max(min, v)));
}

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

        default:
        console.log("Please enter f-r-l sequence.")
        break;
      }
    }
    console.log("New direction is "+rover.direction);
    console.log("Current position is "+rover.x+" "+rover.y);
    console.log("Rover Travel Log:");
    
    for(j=0;j<rover.travelLog.length;j++) {
      console.log("Move number "+j+" ["+rover.travelLog[j]+"]");
    }
}
