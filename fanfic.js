let actions = [
  "laughed all day",
  "cried of joy",
  "played chess",
  "ate",
  "swam",
  "baked cookies",
  "rode horses",
  "jogged to Busan",
  "danced the night away",
  "played the piano",
  "took a ferry to London",
  "sang a sad song",
  
  ]
  
let members = [
  "Jin",
  "Jimin",
  "RM",
  "Jungkook",
  "Galadriel",
  "Suga",
  "Jin",
  "Sherlock",
  "Moriarty",
  "Shelby",
  "Hiddleston",
  "Hardy",
  "Sean",
  "Castiel",
  
]

let beginnings = [
  "Once upon a time",
  "Ages ago",
  "Long ago",
  "In the beginning of time",
  "Not so long ago",
  "Quite recently"
  ]

let adjectives = [
  "a wise but foolish",
  "a handsome and clever",
  "a mysterious and brooding",
  "an intelligent and charming",
  "a quiet but romantic",
  ]







function createFic(){
  function randomized1() {
    let randMember = members[Math.floor(Math.random() * members.length)];
    let randMember2 = members[Math.floor(Math.random() * members.length)];
  return " idol named " + randMember 
}
  
   function randomized2() {
    let randMember2 = members[Math.floor(Math.random() * members.length)];
  return " idol named " + randMember2 
}


  function action(){
    let  randAction2 = actions[Math.floor(Math.random() * actions.length)];
    let  randAction = actions[Math.floor(Math.random() * actions.length)];
    let  randAction3 = actions[Math.floor(Math.random() * actions.length)];
    
  return " met and became friends. They often " + randAction + " before they went home. In fact, before they "+ randAction3 + " they " + randAction2 + ".";
  
}
  function beginning(){
    let  randBeginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    
  return randBeginning + " ";
  }
  
  function adjective(){
    let  randAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
  return randAdjective;
 }
  
  
  function adjective2(){
    let  randAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
  return " and " + randAdjective;
 }
  
  let fanficResult =  document.getElementById("fanfic").textContent = beginning("") + adjective("") + randomized1("") + adjective2("") + randomized2("") + action("");
  fanfic.style.fontSize = "large";

  }

createFic()



let resetButton = document.querySelector("#resetFic")

resetButton.addEventListener("click", ()=>{
  createFic()
})

