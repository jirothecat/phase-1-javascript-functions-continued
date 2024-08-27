// code your solution here
function saturdayFun(activity) {
    return `This Saturday, I want to ${activity ? activity : "roller-skate"}!`;
  }

function mondayWork(activity) {
    return `This Monday, I will ${activity ? activity : "go to the office"}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }