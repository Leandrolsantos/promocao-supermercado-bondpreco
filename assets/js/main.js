 /* animação 'h1'*/

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 20 * i);
    });
  }

  const titulo = document.querySelector('h1');
  typeWriter(titulo);

  /* animação 'h2'*/

  function typeWriter2(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 40 * i);
    });
  }

  const mensagem = document.querySelector('h2');
  typeWriter2(mensagem);