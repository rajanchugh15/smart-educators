function toggleMenu(){document.getElementById('nav').classList.toggle('nav-open')}
function speak(word){
  if('speechSynthesis' in window){
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(word));
  }
}
function answer(btn, correct){
  const result=document.getElementById('result');
  if(correct){
    result.textContent='🎉 Correct! Great job!';
    result.style.color='green';
  }else{
    result.textContent='💡 Try again!';
    result.style.color='#d97706';
  }
}
