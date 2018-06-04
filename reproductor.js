function iniciar() {
  maximo=600;
  medio=document.getElementById('medio');
  play=document.getElementById('play');
  barra=document.getElementById('barra');
  progreso=document.getElementsByClassName('progreso');

  play.addEventListener('click',presionar,false);
  barra.addEventListener('click',mover,false);
}
function presionar(){
  if(!medio.paused && !medio.ended){
    medio.pause();
    play.innerHTML = 'reproducir';
    window.clearInterval(bucle);
  }else{
    medio.play();
    play.innerHTML='Pausa';
    bucle=setInterval(estado,1000);
  }
}

function estado(){
  if(!medio.ended){
    var total=parseInt(medio.currentTime*maximo/medio.duracion);
    progreso.style.width=total+'px';
  }else{
    progreso.style.width='0px';
    play.innerHTML='Play';
    window.clearInterval(bucle);
  }
}
function mover(e){
  if(!medio.paused && !medio.ended){
    var raton=e.pageX-barra.offsetLeft;
    var nuevoTiempo=ratonX*medio.duracion/maximo;
    medio.currentTime=nuevoTiempo;
    progreso.style.width=ratonX+'px';
  }
}
window.addEventListener('load',iniciar,false);
