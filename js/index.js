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

    let lastMatch;
    for (let i = 0; i < json.data.length; i++) {
      const awayTeamId = json.data[i].away_team.team_id;
      const homeTeamId = json.data[i].home_team.team_id;
      const status = json.data[i].status;

      if (awayTeamId === 2546 || homeTeamId === 2546)
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
  const awayTeamName = data.away_team.name;
  const awayTeamLogo = data.away_team.logo;
  const homeTeamName = data.home_team.name;
  const homeTeamLogo = data.home_team.logo;
  const fullTimeScore = data.stats.ft_score;
  const startDate = new Date(data.match_start).toLocaleString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  resultsContainer.innerHTML += `
                             <div class="latestResult">
                                <div class="homeTeam"><img src="${homeTeamLogo}" alt="${homeTeamName}" /></div>
                                <div class="fulltime">
                                  <p class="date">FT ${startDate}</p>
                                  <p class="result">${fullTimeScore}</p>
                                </div>
                                <div class="awayTeam"><img src="${awayTeamLogo}" alt="${awayTeamName}" /></div>
                              </div>
                                `;
}

getScore();

// --- WORDPRESS --- //

const url = "https://headless.superdupersiden.com//wp-json/wp/v2/posts?per_page=4";

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const slideOne = document.querySelector(".one");
const slideTwo = document.querySelector(".two");
const slideThree = document.querySelector(".three");
const slideFour = document.querySelector(".four");
const indicatorParent = document.querySelector(".control ul");
const indicators = document.querySelectorAll(".control li");
let index = 0;

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

      indicators.forEach((indicator, e) => {
        indicator.addEventListener("click", () => {
          document.querySelector(".control .selected").classList.remove("selected");
          indicator.classList.add("selected");
          slider.style.transform = "translateX(" + e * -25 + "%)";
          index = e;
        });
      });
    }

    left.addEventListener("click", function () {
      index = index > 0 ? index - 1 : 0;
      document.querySelector(".control .selected").classList.remove("selected");
      indicatorParent.children[index].classList.add("selected");
      slider.style.transform = "translateX(" + index * -25 + "%)";
    });

    right.addEventListener("click", function () {
      index = index < 4 - 1 ? index + 1 : 3;
      document.querySelector(".control .selected").classList.remove("selected");
      indicatorParent.children[index].classList.add("selected");
      slider.style.transform = "translateX(" + index * -25 + "%)";
    });
  } catch (error) {
    console.log(error);
  }
}
getPosts();