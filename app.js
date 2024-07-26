let text;
let textarea;

function criptografar() {

    const substitutions = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };

    text = document.getElementById("text").value; 
    if (!validaLetras(text)){
      return; 
    }
    // Função para substituir os caracteres de acordo com as regras especificadas
    let criptografar = text.replace(/[eiaou]/g, match => substitutions[match]);

    console.log("Texto Criptografado:", criptografar);
    document.getElementById("botaoCopia").style.display = "block";
    document.getElementById("imagem").style.display = "none";
    document.getElementById("textoSaida").style.display = "block";
    document.getElementById('textoSaida').value = criptografar;

    return criptografar;
  }
  
  function descriptografar() {

    text = document.getElementById("text").value; 

    // Função para substituir os caracteres de acordo com as regras especificadas (inversas)

    descriptografar = substitute(text)
    console.log("Texto Descriptografado:", descriptografar);
   
    document.getElementById("imagem").style.display = "none";
    document.getElementById("textoSaida").style.display = "block";

    document.getElementById('textoSaida').value = descriptografar;
    return descriptografar;
  }

  function substitute(text) {
    // Substituições especificadas (inversas)
    const substitutions = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
      return substitutions[match];
    });
  }

  function copyText() {
    // Seleciona o texto da textarea
    textarea = document.getElementById("textoSaida");
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Alerta para o usuário que o texto foi copiado
    alert("Seu texto foi copiado!");
}

document.getElementById("textoSaida").style.display = "none";
document.getElementById("botaoCopia").style.display = "none";
document.getElementById("imagem").style.display = "block";


function validaLetras(input){ 
        
    // Procurar caracteres que não são letras minúsculas
    let invalidChars = input.match(/[^a-z0-9.,;:!?'"()\- ]/g);
  
    // Se houver caracteres inválidos, gerar um alerta
    if (invalidChars) {
      alert('Apenas letras minúsculas são permitidas e sem acento!');
      return false;     
    }
    return true;
}
