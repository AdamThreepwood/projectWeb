let actions = [
  "laughed",
  "cried",
  "played",
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
  "V",
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
  "There once was",
  "Long ago",
  "In the beginning of time",
  
  
  ]







function createFic(){
  function randomized() {
    let randMember = members[Math.floor(Math.random() * members.length)];
    let randMember2 = members[Math.floor(Math.random() * members.length)];
  return "a beautiful idol named " + randMember + " loved another cute idol named " + randMember2 + ". ";
}

  function action(){
    let  randAction2 = actions[Math.floor(Math.random() * actions.length)];
    let  randAction = actions[Math.floor(Math.random() * actions.length)];
    
  return "They often " + randAction + " before they went home. In fact, before they brushed their teeth they " + randAction2 + ".";
  
}
  function beginning(){
    let  randBeginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    
  return randBeginning + " ";
  }

  let fanficResult =  document.getElementById("fanfic").textContent = beginning("") + randomized("") + action("");
  fanfic.style.fontSize = "large";

  }

createFic()



let resetButton = document.querySelector("#resetFic")

resetButton.addEventListener("click", ()=>{
  createFic()
})


