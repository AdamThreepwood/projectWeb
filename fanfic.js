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

let randMember = members[Math.floor(Math.random() * members.length)];
let randMember2 = members[Math.floor(Math.random() * members.length)];
let  randAction2 = actions[Math.floor(Math.random() * actions.length)];
let  randAction = actions[Math.floor(Math.random() * actions.length)];

function randomized() {
  return "There was a beautiful idol named " + randMember + " who loved another cute idol named " + randMember2 + ". ";
}
function action(){
    
  return "They often " + randAction + " before they went home. In fact, before they brushed their teeth they " + randAction2 + ".";
  
}
document.getElementById("fanfic").innerHTML = randomized("") + action("");
