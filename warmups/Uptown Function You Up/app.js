var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function printLyrics(lyrics) {
    var joinedLyrics = lyrics.join(" ");
    console.log(joinedLyrics);
}

printLyrics(lyrics);

function toReverse(lyrics) {
    var lyricsReverse = lyrics.reverse();
    var toJoin = lyricsReverse.join(" ");
    console.log(toJoin);
}

toReverse(lyrics);

