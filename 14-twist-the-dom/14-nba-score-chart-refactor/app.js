// Starter array of objects
const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

// A function expression that dynamically generate a chart
const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");

  for (let game of games) {
    const { awayTeam, homeTeam } = game;

    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);

    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");

    ulParent.appendChild(gameLi);
  }

  return ulParent;
};

// A function expression that generates the content of each <li> child element
const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const teamName = `${aTeam} @ ${hTeam}`;
  let scoreLine;

  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }

  return `${teamName} ${scoreLine}`;
};

// A function expression that returns the winning team
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

// Target <section> based on their correponding 'id' attribute
const gsSection = document.querySelector("#gs");
const hrSection = document.querySelector("#hr");

// Dynamically generate corresponding char
const gsChart = makeChart(warriorsGames, "Golden State");
const hrChart = makeChart(warriorsGames, "Houston");

// Append chart to their corresponding <section> element
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);
