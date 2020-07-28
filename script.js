"use strict";

let name = "Erin Breen";
let age = 25;
let birthday = "August 2";
let detroitGC = true;
let lifeEvents = [
  "I was stung by a bee for the first time when I was 25 years old.",
  "I went to Central Michigan",
  "I live in Detroit.",
  "I have a dog named Thanos.",
];

if (detroitGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.  I am currently ${age} years old and my birthday is ${birthday}`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);

  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5===5.  It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
