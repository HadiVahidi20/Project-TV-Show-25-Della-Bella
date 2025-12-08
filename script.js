//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  console.log (allEpisodes);
}

// name: "The Kingsroad";
// number: 2;
// runtime: 60;
// season: 1;
// summary: "<p>An incident on the Kingsroad threatens Eddard and Robert's friendship. Jon and Tyrion travel to the Wall, where they discover that the reality of the Night's Watch may not match the heroic image of it.</p>";
// url: "http://www.tvmaze.com/episodes/4953/game-of-thrones-1x02-the-kingsroad";

function makePageForEpisodes(episodeList) {
   const rootElem = document.getElementById("root");
   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
   rootElem.innerHTML = "";

   // Loop through every episode in the list
   //padStart only work on strings

   episodeList.forEach((episode) => {
      const seasonPad = episode.season.toString().padStart(2, "0");
      const episodePad = episode.number.toString().padStart(2, "0");
      const episodeCode = `S${seasonPad}E${episodePad}`;

      //Cards 

      const card = document.createElement("div");
      card.className = "episode-card";

      //epsidoe Name
      const titleName = document.createElement("h1");
      titleName.innerText = `${episode.name} - ${episodeCode}`;
      card.appendChild(titleName);

      // Epsidode image
      const image = document.createElement("img");
      image.src = episode.image.medium;
      card.appendChild(image);

      // Episode Summary
     const summary = document.createElement("div");
     summary.innerHTML = episode.summary;
     card.appendChild(summary);

     rootElem.appendChild(card);

   }); 
}


window.onload = setup;
