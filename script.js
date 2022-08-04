let p = 0, c = 0;

    function getComputerChoice() {
    let x =  Math.floor(Math.random() * 3);
    if (x==0) return "rock";
    else if (x==1) return "paper";
    else if (x==2) return "scissors";
    }

    function playRound(ps, cs) {
      if(ps=="rock" && cs=="scissors") { p++;
        window.alert("You Win this round!! Rock beats Scissors");
      }
      if(ps=="paper" && cs=="rock") { p++;
        window.alert("You Win this round!! Paper beats Rock");
      }
      if(ps=="scissors" && cs=="paper") { p++;
        window.alert("You Win this round!! Scissors beats Paper");
      }
      if(ps=="scissors" && cs=="rock") { c++;
        window.alert("You Lose this round :( Scissors lost to Rock");
      }
      if(ps=="rock" && cs=="paper") { c++;
        window.alert("You Lose this round :( Rock lost to Paper");
      }
      if(ps=="paper" && cs=="scissors") { c++;
        window.alert("You Lose this round :( Paper lost to Scissors");
      }
    }

    function game() {
      const rounds = window.prompt("how many rounds do you want to play?");
      for (let i = 0; i < rounds; i++) {
        let playerSelection = getComputerChoice().toLowerCase();;
        let computerSelection = window.prompt("What move do you choose?").toLowerCase();
        playRound(playerSelection, computerSelection);
      }
      console.log()
      if (p>c) window.alert(`The score is ${p} - ${c}\nYou Won the tournament!!`);
      else if (p==c) window.alert(`The score is ${p} - ${c}\nYou lost the tournament :(`);
      else window.alert(`The score is ${p} - ${c}\nIt's a tie -_-`);
    }
