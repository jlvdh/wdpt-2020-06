class Rover {
  constructor(position, direction, roverDirections) {
      this.position = position
      this.direction = direction
      this.roverDirections = roverDirections
  }
  goForward () {
    switch(this.direction) {
      case 'N':
        this.position[0]--;
        break;
      case 'E':
        this.position[1]--;
        break;
      case 'S':
        this.position[0]++;
        break;
      case 'W':
        this.position[1]++;
        break;
    }
    console.log(`New Rover Position: [${this.position[0]},  ${this.position[1]}]`);
    console.log(`New Rover Direction: ${this.direction}`);
  }
  turnLeft() {
    switch (this.direction) {
        case 'N':
            this.direction = 'W';
            break;
        case 'E':
            this.direction = 'N';
            break;
        case 'S':
            this.direction = 'E';
            break;
        case 'W':
            this.direction = 'S';
            break;
    }
    console.log(`New Rover Position: [${this.position[0]},  ${this.position[1]}]`);
    console.log(`New Rover Direction: ${this.direction}`);
}

turnRight() {
    switch (this.direction) {
        case 'N':
            this.direction = 'E';
            break;
        case 'E':
            this.direction = 'S';
            break;
        case 'S':
            this.direction = 'W';
            break;
        case 'W':
            this.direction = 'N';
            break;
    }
    console.log(`New Rover Position: [${this.position[0]},  ${this.position[1]}]`);
    console.log(`New Rover Direction: ${this.direction}`);
}

}

class Curiousity extends Rover {
constructor(position, direction, batteryLevel) {
  super(position, direction)
  this.batteryLevel = batteryLevel
}

analyseRocks() {
  console.log('analyzing rocks')
}
}

const rover = new Rover([0,0], 'N')

const curiousity = new Curiousity([3,3], 'w', 'charged')

console.log(curiousity)

rover.goForward()