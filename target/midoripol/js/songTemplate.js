let pageContent = document.querySelector(".pageContent");
let spotify = document.createElement("img");

// assegno il nome delle mie immagini nella cartella loghi
let arrLoghi = ["spotify", "youTube", "amazonMusicEdited", "appleMusicEdited"];

console.log(arrLoghi);

let wrapContent = document.createDocumentFragment();

let div = document.createElement("div");
div.id = "trackLength";
div.innerHTML = `
  <audio id="track" preload="metadata">
    <source type="audio/mpeg" />
  </audio>
  <div class="timeInfo">
    <div class="slider">
      <input type="range" min="1" max="100" value="0" id="seek_slider" />
    </div>
    <span id="current-time">00:00</span>
    <span id="total-duration">00:00</span>
  </div>
  <div class="card">
    <img alt="" class="artworkImg" />
    <img src="playerBtns/play.svg" alt="" id="play" />
    <img src="playerBtns/pause.svg" alt="" id="pause" />
  </div>
  <h3 class="title"></h3>
  ${arrLoghi
    .map(
      (logo) => `
    <div class="wrap">
      <span class="socialLogo">
      <!-- assegno le immagini, service corrisponde ad una singola img di arrLogo -->
        <img src="loghi/${logo}.png" alt="" />
      </span>
      <span class="button">
        <button>
          <a href="" target="_blank" class="links"></a>
        </button>
      </span>
    </div>
  `
    )
    .join("")}
`;


// map restituisce un nuovo array, per questo è possibile utilizzarlo all'interno dei template literals.
// il metodo join('') è necessario per trasformare l'array in stringa.
// in questo modo le immagini saranno "linkate" correttamente.

wrapContent.appendChild(div);
pageContent.appendChild(wrapContent);

// setto il nome in base al button (spotify, youtube, amazon music, apple music)
let linksName = document.querySelectorAll(".links");
console.log(linksName)
for (let i=0; i < linksName.length; i++) {
    console.log("singoli", linksName[i])
    linksName[0].textContent = "listen"
    linksName[1].textContent = "view"
    linksName[2].textContent = "listen"
    linksName[3].textContent = "listen"
}

let backgroundImage = document.body.style.backgroundImage;
console.log(backgroundImage);

let songTitle = document.querySelector(".title");
let audioSource = document.getElementById("track");
let imgCard = document.querySelector(".artworkImg");
let links = document.querySelectorAll(".links");

function songParams(title, audio, img, hrefs) {
  songTitle.innerHTML = title;
  audioSource.src = audio;
  imgCard.src = img;
  /*
    links[0].href = hrefs; // spotify
    links[1].href = hrefs; // youtube
    links[2].href = hrefs; // amazon music
    links[3].href = hrefs; // apple music
    */

  // ciclo sull'array, estraggo singolo elemento e indice
  // in base all'indice assegno il link
  hrefs.forEach((href, index) => {
    links[index].href = href;
  });
}

// assign title
if (backgroundImage.includes("MeMyselfAndIArtworkBlurred")) {
  songParams(
    "Me Myself And I",
    "../songs/audio/MeMyselfAndI.mp3",
    "../songs/artworks/MeMyselfAndIArtwork.png",
    [
      // spotify
      "https://open.spotify.com/intl-it/track/51sBaSiQfi3LGMcddC8KyO",
      // youtube
      "https://www.youtube.com/watch?v=n4r6SiqDNWw",
      // amazon music
      "https://www.amazon.it/Me-Myself-I-Midori-Pol/dp/B0C9PPBYS3",
      // apple music
      "https://music.apple.com/it/album/me-myself-and-i/1694393600?i=1694393605",
    ]
  );

} else if (backgroundImage.includes("LadyBastetArtwork")) {
  songParams(
    "Lady Bastet",
    "../songs/audio/LadyBastet.mp3",
    "../songs/artworks/LadyBastetArtwork.png",
    [
      // spotify
      "https://open.spotify.com/intl-it/track/4uvrxazq2zLKvvdlotJjdX",
      // youtube
      "https://www.youtube.com/watch?v=Iz63Uhq8HAU",
      // amazon music
      "https://music.amazon.com/albums/B0D1VV68BW",
      // apple music
      "https://music.apple.com/it/album/lady-bastet-feat-narvil-single/1741533192",
    ]
  );
} else if (backgroundImage.includes("ToxicArtworkBlurred.jpg")) {
  songParams(
    "Toxic",
    "../songs/audio/Toxic.mp3",
    "../songs/artworks/ToxicArtwork.jpg",
    [
      // spotify
      "https://open.spotify.com/intl-it/track/0oPiOrV3gP69oc7b42tf3A",
      // youtube
      "https://www.youtube.com/watch?v=N_hr86iGjuQ",
      // amazon music
      "https://music.amazon.com/albums/B0C7K9LJF8",
      // apple music
      "https://music.apple.com/it/album/toxic-single/1691817933",
    ]
  );
} else if (backgroundImage.includes("TheHighestThroneArtworkBlurred.jpg")) {
  songParams(
    "The Highest Throne",
    "../songs/audio/TheHighestThrone.mp3",
    "../songs/artworks/TheHighestThroneArtwork.jpg",
    [
      // spotify
      "https://open.spotify.com/intl-it/track/4S2QafRnlDxg4wKLDkrc7I",
      // youtube
      "https://www.youtube.com/watch?v=h3_GDXov5Nw&list=OLAK5uy_kOa7O-tYgwTwbr_xMY1rg03ecjrEG4eeI",
      // amazon music
      "https://www.amazon.it/music/player/albums/B0CMW8DFGZ?trackAsin=B0CMVX3JVT",
      // apple music
      "https://music.apple.com/it/album/the-highest-throne-single/1715603037",
    ]
  );
} else if (backgroundImage.includes("WavesArtworkBlurred.jpg")) {
  songParams(
    "Waves",
    "../songs/audio/Waves.mp3",
    "../songs/artworks/WavesArtwork.png",
    [
      // spotify
      "https://open.spotify.com/intl-it/track/15akmG9X9Aov6W2u53doMK",
      // youtube
      "https://www.youtube.com/watch?v=3WOr8GIgMmI",
      // amazon music
      "https://music.amazon.com/albums/B0C8LL8F79",
      // apple music
      "https://music.apple.com/it/album/waves-feat-cheakpeas-single/1693071374",
    ]
  );
} else if (
  backgroundImage.includes("RulersOfPollutedLandsArtworkBlurred.jpg")
) {
  songParams(
    "Rulers Of Polluted Lands",
    "../songs/audio/RulersOfPollutedLands.mp3",
    "../songs/artworks/RulersOfPollutedLandsArtwork.png",
    [
      // spotify
      "https://open.spotify.com/intl-it/album/31nF7qaDNUFvfvfJp8cHvy",
      // youtube
      "https://www.youtube.com/watch?v=kz7Kqz76o_M&list=OLAK5uy_kZrf2Z-5LSAsA7SRtAJwFKHrIoFvUdpRY",
      // amazon music
      "https://music.amazon.com/albums/B0D2SZHC5L",
      // apple music
      "https://music.apple.com/it/album/rulers-of-polluted-lands-single/1743586729",
    ]
  );
}
