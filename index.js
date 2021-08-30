function scuberGreetingForFeet(num){
  if (num <= 400) {
    return "This one is on me!";
  } else if (num >= 2000 && num < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(money){
  let result = "";

  switch (money) {
    case "generous":
      result = "Thank you so much.";
      break;
    case "not as generous":
      result = "Thank you.";
      break;
    default:
      result = "Bye."; 
    }
  
    return result;
}

/*
describe('index.js', function () {
  describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
  });
});

*/