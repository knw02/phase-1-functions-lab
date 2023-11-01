function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    return Math.abs(location - hqLocation);
  }
  function distanceFromHqInFeet(location) {
    const hqLocation = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(location - hqLocation);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264; // Assuming the conversion rate is 264 feet per block
    const distanceInBlocks = Math.abs(end - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const farePrice = (distanceInFeet - 400) * 0.02;
      console.log(farePrice); // Add this line for debugging
      return parseFloat(farePrice.toFixed(2)); // Convert to number
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }