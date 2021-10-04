if(sessionStorage)
{
  if(!sessionStorage.contador) sessionStorage.contador = 0;
   sessionStorage.contador++;
   document.getElementById('contador').innerHTML = 'Acesso: '+sessionStorage.contador;
}