// --- SPORTDATAAPI --- //

const resultsContainer = document.querySelector("#updatedResults");
const homeTeam = document.querySelector(".homeTeam");

const corsFix = "https://noroffcors.herokuapp.com/";
const sportsDataUrl = "https://app.sportdataapi.com/api/v1/soccer/matches";

// Turned the search-strings into variables for my own convenience
const apikey = "?apikey=c27529a0-aa73-11eb-b941-37fde2d8acd3";
const seasonId = "&season_id=352";
const leagueId = "&league_id=237";
const dateFrom = "&date_from=2021-04-28";
const dateTo = "&date_to=2021-08-01";
const teamId = "&team_id=2546";
const leedsUrl = corsFix + sportsDataUrl + apikey + seasonId + leagueId + dateFrom + dateTo + teamId;
console.log(leedsUrl);

async function getScore() {
  try {
    const json = await (await fetch(leedsUrl)).json();
    resultsContainer.innerHTML = "";
    console.log(json.data);
    let lastMatch;
    for (let i = 0; i < json.data.length; i++) {
      const awayTeamIdZ = json.data[i].away_team.team_id;
      const homeTeamIdZ = json.data[i].home_team.team_id;
      const status = json.data[i].status;

      if (awayTeamIdZ === 2546 || homeTeamIdZ === 2546)
        if (status === "finished") {
          lastMatch = json.data[i];
        }
    }
    result(lastMatch);
  } catch (error) {
    console.log(error);
  }
}

function result(data) {
  const awayTeamId = data.away_team.team_id;
  const homeTeamId = data.home_team.team_id;
  const awayTeamName = data.away_team.name;
  const homeTeamName = data.home_team.name;
  const fullTimeScore = data.stats.ft_score;
  const startDate = new Date(data.match_start).toLocaleString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  resultsContainer.innerHTML += `
                             <div class="latestResult">
                                <div class="homeTeam"><img src="" alt="${homeTeamName}" id="home" /></div>
                                <div class="fulltime">
                                  <p class="date">${startDate}</p>
                                  <p class="result">${fullTimeScore}</p>
                                </div>
                                <div class="awayTeam"><img src="" alt="${awayTeamName}" id="away" /></div>
                              </div>
                                `;

  const logoArsenal = "logoArsenal";
  const logoAstonVilla = "logoAstonVilla";
  const logoBrighton = "logoBrighton";
  const logoBurnley = "logoBurnley";
  const logoChelsea = "logoChelsea";
  const logoCrystalPalace = "logoCrystalPalace";
  const logoEverton = "logoEverton";
  const logoFulham = "logoFulham";
  const logoLeeds = "logoLeeds";
  const logoLeicester = "logoLeicester";
  const logoLiverpool = "logoLiverpool";
  const logoManchesterCity = "logoManchesterCity";
  const logoManchesterUnited = "logoManchesterUnited";
  const logoNewcastle = "logoNewcastle";
  const logoSheffieldUnited = "logoSheffieldUnited";
  const logoSouthampton = "logoSouthampton";
  const logoWestBromwich = "logoWestBromwich";
  const logoWestham = "logoWestham";
  const logoWolves = "logoWolves";

  let aTeam;
  let hTeam;

  if (awayTeamId === 2522) {
    aTeam = logoArsenal;
  } else if (homeTeamId === 2522) {
    hTeam = logoArsenal;
  }

  if (awayTeamId === 2520) {
    aTeam = logoAstonVilla;
  } else if (homeTeamId === 2520) {
    hTeam = logoAstonVilla;
  }

  if (awayTeamId === 2518) {
    aTeam = logoBrighton;
  } else if (homeTeamId === 2518) {
    hTeam = logoBrighton;
  }

  if (awayTeamId === 2513) {
    aTeam = logoBurnley;
  } else if (homeTeamId === 2513) {
    hTeam = logoBurnley;
  }

  if (awayTeamId === 2524) {
    aTeam = logoChelsea;
  } else if (homeTeamId === 2524) {
    hTeam = logoChelsea;
  }

  if (awayTeamId === 2515) {
    aTeam = logoCrystalPalace;
  } else if (homeTeamId === 2515) {
    hTeam = logoCrystalPalace;
  }

  if (awayTeamId === 2516) {
    aTeam = logoEverton;
  } else if (homeTeamId === 2516) {
    hTeam = logoEverton;
  }

  if (awayTeamId === 12429) {
    aTeam = logoFulham;
  } else if (homeTeamId === 12429) {
    hTeam = logoFulham;
  }

  if (awayTeamId === 2546) {
    aTeam = logoLeeds;
  } else if (homeTeamId === 2546) {
    hTeam = logoLeeds;
  }

  if (awayTeamId === 12424) {
    aTeam = logoLeicester;
  } else if (homeTeamId === 12424) {
    hTeam = logoLeicester;
  }

  if (awayTeamId === 2509) {
    aTeam = logoLiverpool;
  } else if (homeTeamId === 2509) {
    hTeam = logoLiverpool;
  }

  if (awayTeamId === 12400) {
    aTeam = logoManchesterCity;
  } else if (homeTeamId === 12400) {
    hTeam = logoManchesterCity;
  }

  if (awayTeamId === 2523) {
    aTeam = logoManchesterUnited;
  } else if (homeTeamId === 2523) {
    hTeam = logoManchesterUnited;
  }

  if (awayTeamId === 849) {
    aTeam = logoNewcastle;
  } else if (homeTeamId === 849) {
    hTeam = logoNewcastle;
  }

  if (awayTeamId === 2512) {
    aTeam = logoSheffieldUnited;
  } else if (homeTeamId === 2512) {
    hTeam = logoSheffieldUnited;
  }

  if (awayTeamId === 2959) {
    aTeam = logoSouthampton;
  } else if (homeTeamId === 2959) {
    hTeam = logoSouthampton;
  }

  if (awayTeamId === 2544) {
    aTeam = logoWestBromwich;
  } else if (homeTeamId === 2544) {
    hTeam = logoWestBromwich;
  }

  if (awayTeamId === 12401) {
    aTeam = logoWestham;
  } else if (homeTeamId === 12401) {
    hTeam = logoWestham;
  }

  if (awayTeamId === 850) {
    aTeam = logoWolves;
  } else if (homeTeamId === 850) {
    hTeam = logoWolves;
  }

  document.querySelector("#home").src = "img/teams/" + hTeam + ".png";
  document.querySelector("#away").src = "img/teams/" + aTeam + ".png";
}

getScore();

// --- WORDPRESS --- //

const url = "https://headless.superdupersiden.com//wp-json/wp/v2/posts?per_page=4";

const back = document.querySelector(".left");
const forth = document.querySelector(".right");
const slider = document.querySelector(".slider");
const slideOne = document.querySelector(".one");
const slideTwo = document.querySelector(".two");
const slideThree = document.querySelector(".three");
const slideFour = document.querySelector(".four");
const indicatorContainer = document.querySelector(".control ul");
const indicators = document.querySelectorAll(".control li");
let position = 0;

async function getPosts() {
  try {
    const response = await fetch(url);
    const post = await response.json();
    console.log(post);

    for (let i = 0; i < post.length; i++) {
      const postDate = new Date(post[i].date).toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      slideOne.innerHTML = `
                            <div class="flex">
                            <h2>
                            <a href="post.html?id=${post[0].id}">${post[0].title.rendered}<a>
                            </h2>
                            <a href="post.html?id=${post[0].id}"><img src="${post[0].jetpack_featured_media_url}" class="postImg" alt="${post[0].title.rendered}"></a>
                            <p class="posted">Posted: ${postDate}</p>
                            </div>
                           `;
      slideTwo.innerHTML = `
                            <div class="flex">
                            <h2>
                            <a href="post.html?id=${post[1].id}">${post[1].title.rendered}<a>
                            </h2>
                            <a href="post.html?id=${post[1].id}"><img src="${post[1].jetpack_featured_media_url}" class="postImg" alt="${post[1].title.rendered}"></a>
                            <p class="posted">Posted: ${postDate}</p>
                            </div>
                           `;
      slideThree.innerHTML = `
                            <div class="flex">
                            <h2>
                            <a href="post.html?id=${post[2].id}">${post[2].title.rendered}<a>
                            </h2>
                            <a href="post.html?id=${post[2].id}"><img src="${post[2].jetpack_featured_media_url}" class="postImg" alt="${post[2].title.rendered}"></a>
                            <p class="posted">Posted: ${postDate}</p>
                            </div>
                           `;
      slideFour.innerHTML = `
                            <div class="flex">
                            <h2>
                            <a href="post.html?id=${post[3].id}">${post[3].title.rendered}<a>
                            </h2>
                            <a href="post.html?id=${post[3].id}"><img src="${post[3].jetpack_featured_media_url}" class="postImg" alt="${post[3].title.rendered}"></a>
                            <p class="posted">Posted: ${postDate}</p>
                            </div>
                           `;

      indicators.forEach((indicator, move) => {
        indicator.addEventListener("click", () => {
          document.querySelector(".control .selected").classList.remove("selected");
          indicator.classList.add("selected");
          slider.style.transform = "translateX(" + move * -25 + "%)";
          position = move;
        });
      });
    }

    back.addEventListener("click", function () {
      if (position > 0) {
        position = position - 1;
      } else if (position > 1) {
        position = position - 1;
      } else {
        position = 0;
      }
      document.querySelector(".control .selected").classList.remove("selected");
      indicatorContainer.children[position].classList.add("selected");
      slider.style.transform = "translateX(" + position * -25 + "%)";
    });

    forth.addEventListener("click", function () {
      if (position < 3) {
        position = position + 1;
      } else if (position < 2) {
        position = position + 1;
      } else {
        position = 3;
      }
      document.querySelector(".control .selected").classList.remove("selected");
      indicatorContainer.children[position].classList.add("selected");
      slider.style.transform = "translateX(" + position * -25 + "%)";
    });
  } catch (error) {
    console.log(error);
  }
}
getPosts();
