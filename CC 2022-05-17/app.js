const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    
    const rules = {paper: 'rock', rock: 'scissors', scissors: 'paper'}
    return rules[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!'
  };
  
  
  console.log(rps('paper', 'rock'));
  console.log(rps('paper', 'paper'));
  console.log(rps('paper', 'scissors'));
  console.log(rps('rock', 'scissors'));