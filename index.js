// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    // Returns the number of blocks given a value
    return Math.abs(someValue - 42);
  }
  
  function distanceFromHqInFeet(someValue) {
    // Call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    const blocks = distanceFromHqInBlocks(someValue);
    // Calculate feet based on the assumption that a block is 264 feet long
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    // Calculate the number of feet traveled
    const blocks = Math.abs(destination - start);
    // Calculate feet based on the assumption that a block is 264 feet long
    return blocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
  
    if (distance <= 400) {
      // The first 400 feet are free
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      // Distance between 400 and 2000 feet: 2 cents per foot
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      // Distance over 2000 feet and under 2500 feet: flat fare of 25 dollars
      fare = 25;
    } else if (distance > 2500) {
      // Rides over 2500 feet are not allowed
      return 'cannot travel that far';
    }
  
    return fare;
  }
  
  
  