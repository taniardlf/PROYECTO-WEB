let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #362769;">No tienes que mirar toda la escalera. Para empezar, solo concéntrate en dar el primer paso.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();