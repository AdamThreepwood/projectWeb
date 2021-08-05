let actions = [
  "laughed",
  "cried",
  "played",
  "ate",
  "swam",
  "baked cookies",
  "rode horses",
  "jogged to Busan",
  
  ]
  
let members = [
  "Jin",
  "Jimin",
  "RM",
  "Jungkook",
  "V",
  "Suga",
  "Jin",
]

function createFic(){
  function randomized() {
    let randMember = members[Math.floor(Math.random() * members.length)];
    let randMember2 = members[Math.floor(Math.random() * members.length)];
  return "There was a beautiful idol named " + randMember + " who loved another cute idol named " + randMember2 + ". ";
  }

  function action(){
    let  randAction2 = actions[Math.floor(Math.random() * actions.length)];
    let  randAction = actions[Math.floor(Math.random() * actions.length)];
    
  return "They often " + randAction + " before they went home. In fact, before they brushed their teeth they " + randAction2 + ".";
  
  }

  let fanfic =   document.getElementById("fanfic").innerHTML = randomized("") + action("");
}

createFic()



let resetButton = document.querySelector("#resetFic")

resetButton.addEventListener("click", ()=>{
  createFic()
})


