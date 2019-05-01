var response
var person = prompt("What's your name?")
  if (person === null) {
    alert("Okay, bye!")
    crash.script
  } else {
switch (person) {
   case "": 
    response = "Hi, stranger!"
    person = "stranger"
    break;
  case "Alexis":
  case "alexis":
   response = "Oh! Hi, Sweetie!"
    break;
  default:
    response = "Hi, " + person + "!"
    break;
}
}
alert(response)
var emotion = prompt("How are you feeling today?")
  switch (emotion) {
    case "sad":
    case "Sad":
    case ":(":
    case "SAD":
    case "sad :(":
    case "SAD :(":
      response = "Oh no, " + person + "! Don't be sad! Things will get better soon, I promise :)"
      break;
    case "angry":
    case "annoyed":
    case "frustrated":
      response = "I'm so sorry to hear that, " + person +  " :/ maybe go for a walk!"
      break;
    case "lonely":
      response = "Call Riley! He loves to talk!"
      break;
    case "bored":
      response = "Solitaire is a good way to pass the time!"
      break;
    case "nervous":
    case "anxious":
      response = "Oh no! Take some time to relax, it's all gonna be fine, promise!"
      break;
    default:
      response = "I don't know that feeling yet, but you are VALID!"
  }
  alert(response)
  alert("This is as far as I've gotten, the program will now crash, bye")
