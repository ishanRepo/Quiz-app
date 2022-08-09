const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

console.log(highScores);

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;    //disabled so that we can't save empty username feild.
});

saveHighScore = (e) => {
    e.preventDefault();

    const score ={
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);    //sort function we defined to put highscores before.
    highScores.splice(5);   // as we need to 5 scores

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html");    //after we save going to home.\
    
};

