exports.renderIndex = function(req, res){
  res.render('index');
};

exports.renderResults = function(req, res){
  res.render('results');
  var oneChoice = req.body.oneChoice;
  var twoChoice = req.body.twoChoice;
  var cpuChoice = computerChoice();

  //  Compare Results

  console.log("Player One Choice: ", req.body.oneChoice);
  console.log("Player Two Choice: ", req.body.twoChoice);
  console.log("CPU Choice: ", computerChoice());
}


//  Non exported functions


var computerChoice = function(){
  var coinFlip = Math.floor(Math.random() * 2) + 1;

  //  Check if flip is heads or Tails

  if (coinFlip === 1) {
    coinFlip = "Heads";
  } else {
    coinFlip = "Tails";
  }
  return coinFlip;
}
