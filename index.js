
const scanf = require('scanf');


console.log("****Hello User ,Welcome to the mixed messags game****\n\n")



console.log("you can choose from  what type of messages you want to be in the output below:\n")


console.log("1:Inspirational Messages")
console.log("2:Funny Messages")
console.log("3:Sport Facts\n")
console.log("4:Terminate\n")



    console.log('Please choose:');
    const choice = scanf('%d'); // Reads a string

   

let allQuotes = [

  {

    topic:"Inspirational Messages",
    author:"Steve Jobs",
    quote:"The only way to do great work is to love what you do."
 },

  {

    topic:"Inspirational Messages" ,
    author:" Vince Lombardi ",
    quote: "It's not whether you get knocked down. It's whether you get up."
 },
  {

    topic:"Inspirational Messages" ,
    author: " Francis of Assisi "  ,
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible."
    
   
 },
  {

    topic:"Inspirational Messages" ,
    author:"Norman Vincent Peale"   ,
    quote: "Change your thoughts and you change your world."
 },
  {

    topic:"Inspirational Messages" ,
    author: "Ayn Rand " ,
    quote: "The question isn't who is going to let me; it's who is going to stop me." 
 },
  {

    topic:"Inspirational Messages" ,
    author:"Michael Jordan "  ,
    quote: "I have failed over and over and over again in my life, and that is why I succeed."
 },
  {

    topic:"Inspirational Messages" ,
    author:"Charles R. Swindoll "  ,
    quote: "Life is 10% what happens to you and 90% how you react to it."
 },
  {

    topic:"Inspirational Messages" ,
    author:" Will Rogers "  ,
    quote: "Don't let yesterday take up too much of today."
 },
  {

    topic:"Inspirational Messages" ,
    author: "Ernest Hemingway",
   quote: "“There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.”"
 },
  {

    topic:"Inspirational Messages" ,
    author: "Frederick Douglass" ,
    quote: "“If there is no struggle, there is no progress.”"
 },
 {
     topic:"Funny Messages",
     message:"Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink."
 },
 {
     topic:"Funny Messages",
     message:"I used to have a job at a calendar factory, but I got fired because I took a couple of days off."
 },
 {
     topic:"Funny Messages",
     message:"What did the big flower say to the little flower? Hi, bud!"
 },
 {
     topic:"Funny Messages",
     message:"Did you hear about the guy who invented Lifesavers? They say he made a mint!"
 },
 {
     topic:"Funny Messages",
     message:"How do you catch a squirrel? Climb a tree and act like a nut!"
 },
 {
  topic:"Sport Facts",
  fact:"The ancient Greek Olympic Games began around 776 BC and initially featured a single running event."
 },
 {
  topic:"Sport Facts",
  fact:"Basketball was invented in 1891 by James Naismith as an indoor sport."
 },
 {
  topic:"Sport Facts",
   fact:"The first international football match was held in 1872 between England and Scotland."
 },
 {
  topic:"Sport Facts",
  fact:"Michael Phelps holds the record for the most Olympic gold medals with 23."
 },
 {
  topic:"Sport Facts",
  fact:"The longest professional tennis match lasted 11 hours and 5 minutes."
 }




]
  

while (true) {
  console.log("\nChoose a category:");
  console.log("1: Inspirational Messages");
  console.log("2: Funny Messages");
  console.log("3: Sport Facts");
  console.log("4: Terminate\n");

  console.log("Please choose:");
  const choice = scanf('%d');

  if (choice === 4) {
    console.log("👋 Goodbye!");
    break; // stop the loop
  }

  let selectedCategory;

  if (choice === 1) selectedCategory = "Inspirational Messages";
  else if (choice === 2) selectedCategory = "Funny Messages";
  else if (choice === 3) selectedCategory = "Sport Facts";
  else {
    console.log("⚠️ Invalid choice. Try again!");
    continue;
  }

  // Filter messages by selected category
  const filtered = allQuotes.filter(q => q.topic === selectedCategory);

  // Pick one random message from the filtered list
  const randomIndex = Math.floor(Math.random() * filtered.length);
  const selected = filtered[randomIndex];

  // Display message depending on type
  if (selectedCategory === "Inspirational Messages") {
    console.log(`💬 ${selected.quote} — ${selected.author}`);
  } else if (selectedCategory === "Funny Messages") {
    console.log(`😂 ${selected.message}`);
  } else if (selectedCategory === "Sport Facts") {
    console.log(`🏅 ${selected?.fact}`);
  }
}
while (true) {
  console.log("\nChoose a category:");
  console.log("1: Inspirational Messages");
  console.log("2: Funny Messages");
  console.log("3: Sport Facts");
  console.log("4: Terminate\n");

  console.log("Please choose:");
  const choice = scanf('%d');

  if (choice === 4) {
    console.log("👋 Goodbye!");
    break; // stop the loop
  }

  let selectedCategory;

  if (choice === 1) selectedCategory = "Inspirational Messages";
  else if (choice === 2) selectedCategory = "Funny Messages";
  else if (choice === 3) selectedCategory = "Sport Facts";
  else {
    console.log("⚠️ Invalid choice. Try again!");
    continue;
  }

  // Filter messages by selected category
  const filtered = allQuotes.filter(q => q.topic === selectedCategory);

  // Pick one random message from the filtered list
  const randomIndex = Math.floor(Math.random() * filtered.length);
  const selected = filtered[randomIndex];

  // Display message depending on type
  if (selectedCategory === "Inspirational Messages") {
    console.log(`💬 ${selected.quote} — ${selected.author}`);
  } else if (selectedCategory === "Funny Messages") {
    console.log(`😂 ${selected.message}`);
  } else if (selectedCategory === "Sport Facts") {
    console.log(`🏅 ${selected.fact}`);
  }
}

