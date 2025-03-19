// Strings - Destructuring based on sounds animals make
const farmAnimals = "cow horse sheep pig chicken".split(" ");
const [bessie, dolly, babe, little] = farmAnimals;
console.log(bessie, dolly, babe, little); // cow horse sheep pig

// Extract specific colors from an array using destructuring
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [r, o, y, g, b, , v] = colors; // Skipping 'indigo'
console.log(r, o, y, g, b, v); // red orange yellow green blue violet

// Assign indigo to a specific variable using destructuring
const [, , , , , indg] = colors;
console.log(indg); // indigo

// Object Destructuring
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  songs: [
    "Never Before, Never Again",
    "Rainbow Connection",
    "I Hope That Something Better Comes Along",
  ],
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const {
  muppetName,
  color: muppetColor,
  songs: [, song2, song4],
  job,
  partner,
} = muppet;
console.log(muppetName, muppetColor, song2, song4, job, partner);

// Nested Object Destructuring
const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    song1: "Rainbow Connection",
    song2: "Movin' Right Along",
    song3: "Never Before, Never Again",
    song4: "I Hope That Something Better Comes Along",
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

const {
  nestedName,
  nestedColor,
  album: { song2: favSong, song4: anotherSong },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
console.log(
  nestedName,
  nestedColor,
  favSong,
  anotherSong,
  nestedJob,
  nestedPartner
);
