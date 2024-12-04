var btn = document.querySelector('#btn'),
    out = document.querySelector('#out'),
    room = document.querySelector('#room'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    range = document.querySelector('#range'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    rooms = 100,
    plo = 100;
    
btn.onclick = function(){
  if (room.value != '' && vol.value != '') {
      if (load.checked){ 
          load.value = 1000; }
        else 
        {
          load.value = 0;
      }
      if (del.checked){ 
          del.value = 500; }
        else 
        {
          del.value = 0;
      }
      if (frag.checked){ 
          frag.value = 2000; }
        else 
        {
          frag.value = 0;
      }
 
var sum = (room.value * rooms) + (vol.value * plo) + Number(load.value) + + Number(del.value) + Number(frag.value);
      out.innerHTML = sum;
  }else{
alert('Введите количество комнат и площадь квартиры!');
}
}