
// eu escolhi deixa as variaveis global dos select para mim usar em diferentes funções
const comprimentosOrigem = document.getElementById('comprimentosOrigem')
const comprimentosDestino = document.getElementById('comprimentosDestino')
const pesosOrigem = document.getElementById('pesosOrigem')
const pesosDestino = document.getElementById('pesosDestino')
const temperaturasOrigem = document.getElementById('temperaturasOrigem')
const temperaturasDestino = document.getElementById('temperaturasDestino')

pesosOrigem.style.display = 'none'
pesosDestino.style.display = 'none'
temperaturasOrigem.style.display = 'none'
temperaturasDestino.style.display = 'none'

function opcoesCategorias() {
    const categorias = document.querySelector('#categorias').value
    
    if (categorias === 'comprimento') {
        comprimentosOrigem.style.display = 'block'
        comprimentosDestino.style.display = 'block'
        pesosOrigem.style.display = 'none'
        pesosDestino.style.display = 'none'
        temperaturasOrigem.style.display = 'none'
        temperaturasDestino.style.display = 'none'
        
    } else if (categorias === 'peso') {
        pesosOrigem.style.display = 'block'
        pesosDestino.style.display = 'block'
        comprimentosOrigem.style.display = 'none'
        comprimentosDestino.style.display = 'none'
        temperaturasOrigem.style.display = 'none'
        temperaturasDestino.style.display = 'none'
        
    } else if (categorias === 'temperatura') {
        temperaturasOrigem.style.display = 'block'
        temperaturasDestino.style.display = 'block'
        pesosOrigem.style.display = 'none'
        pesosDestino.style.display = 'none'
        comprimentosOrigem.style.display = 'none'
        comprimentosDestino.style.display = 'none'
    }
}

document.querySelector('#categorias').addEventListener('change', opcoesCategorias)


// esse campo e para o usuario não consequi digita no campo resultado 
var resultado = document.getElementById('resultado');
resultado.setAttribute('readonly', 'true');


var msgDeErro = document.getElementById('mensagemDeErro');
var resultado = document.querySelector('#resultado');
var valorDigitado;
var categoriasValor;
var comprimentosOrigemValor;
var comprimentosDestinoValor;
var pesosOrigemValor
var pesosDestinoValor
var temperaturasOrigemValor;
var temperaturasDestinoValor;

function exibirMsgDeErro(event) {
    event.preventDefault()

    if (valorDigitado == 0 || categoriasValor === 'selecione' || comprimentosOrigemValor === 'selecione' || comprimentosDestinoValor === 'selecione') {
        msgDeErro.innerText = 'preencha ou selecione os campos'
        msgDeErro.style.backgroundColor = '#e70000'
        resultado.value = ''
    }
}

// essa função e para converter os valores de comprimentos
function comprimento(event) {
    event.preventDefault()
   
    valorDigitado = parseFloat(document.querySelector('#valorDigitado').value);
    categoriasValor = document.querySelector('#categorias').value;
    comprimentosOrigemValor = document.querySelector('#comprimentosOrigem').value;
    comprimentosDestinoValor = document.querySelector('#comprimentosDestino').value;
      
    if (valorDigitado == 0 || isNaN(valorDigitado) || categoriasValor === 'selecione' || comprimentosOrigemValor === 'selecione' || comprimentosDestinoValor === 'selecione' ) {
        msgDeErro.innerText = 'preencha ou selecione os campos'
        msgDeErro.style.backgroundColor = '#e70000'
        resultado.value = ''
        
        // metros para centimetros
    } else if (categoriasValor === 'comprimento' && comprimentosOrigemValor === 'metros' && comprimentosDestinoValor === 'centimetros') {
        var metrosParaCm = valorDigitado * 100
        resultado.value = parseFloat(metrosParaCm.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''
        
        // metros para polegadas  
    } else if (categoriasValor === 'comprimento' && comprimentosOrigemValor === 'metros' && comprimentosDestinoValor === 'polegadas') {
        var metrosParaPol = valorDigitado * 39.37
        resultado.value = parseFloat(metrosParaPol.toFixed(2))

        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''
        
        // centimetros para metros  
    } else if (categoriasValor === 'comprimento' && comprimentosOrigemValor === 'centimetros' && comprimentosDestinoValor === 'metros') {
        var centimetrosParaMt = valorDigitado / 100
        resultado.value = parseFloat(centimetrosParaMt.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''
        
        // centimetros para polegadas   
    } else if (categoriasValor === 'comprimento' && comprimentosOrigemValor === 'centimetros' && comprimentosDestinoValor === 'polegadas') {
        var centimetrosParaPol = valorDigitado * 0.393701
        resultado.value = parseFloat(centimetrosParaPol.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''
        
       // polegadas para metros
    }  else if (categoriasValor === 'comprimento' && comprimentosOrigemValor === 'polegadas' && comprimentosDestinoValor === 'metros') {
        var polegadasParaMt = valorDigitado * 0.0254
        resultado.value = parseFloat(polegadasParaMt.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''
        
        // polegadas para centimetros  
    } else if (categoriasValor === 'comprimento' && comprimentosOrigemValor === 'polegadas' && comprimentosDestinoValor === 'centimetros') {
        var polegadasParaCm = valorDigitado * 2.54
        resultado.value = parseFloat(polegadasParaCm.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''
        
    }
}

// essa função e para converter os valores de pesos
function peso(event) {
    event.preventDefault()

    valorDigitado = parseFloat(document.querySelector('#valorDigitado').value);
    categoriasValor = document.querySelector('#categorias').value;
    pesosOrigemValor = document.querySelector('#pesosOrigem').value
    pesosDestinoValor = document.querySelector('#pesosDestino').value
    
    if (valorDigitado == 0 || isNaN(valorDigitado) || categoriasValor === 'selecione' || pesosDestinoValor === 'selecione' || pesosOrigemValor === 'selecionne') {
        msgDeErro.innerText = 'preencha ou selecione os campos'
        msgDeErro.style.backgroundColor = '#e70000'
        resultado.value = ''
      
      // quilogramas para gramas
    } else if (categoriasValor === 'peso' && pesosOrigemValor === 'quilogramas' && pesosDestinoValor === 'gramas') {
        var quilogramasParaGr = valorDigitado * 1000
        resultado.value = parseFloat(quilogramasParaGr.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // quilogramas para gramas
    } else if (categoriasValor === 'peso' && pesosOrigemValor === 'quilogramas' && pesosDestinoValor === 'libras') {
        var quilogramasParaPl = valorDigitado * 2.20462
        resultado.value = parseFloat(quilogramasParaPl.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // gramas para quilogramas  
    } else if (categoriasValor === 'peso' && pesosOrigemValor === 'gramas' && pesosDestinoValor === 'quilogramas') {
        var gramasParaQl = valorDigitado / 1000
        resultado.value = parseFloat(gramasParaQl.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // gramas para libras  
    } else if (categoriasValor === 'peso' && pesosOrigemValor === 'gramas' && pesosDestinoValor === 'libras') {
        var gramasParaLb = valorDigitado * 0.00220462
        resultado.value = parseFloat(gramasParaLb.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // libras para quilogramas  
    } else if (categoriasValor === 'peso' && pesosOrigemValor === 'libras' && pesosDestinoValor === 'quilogramas') {
        var librasParaQl = valorDigitado * 0.453592
        resultado.value = parseFloat(librasParaQl.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // libras para gramas  
    } else if (categoriasValor === 'peso' && pesosOrigemValor === 'libras' && pesosDestinoValor === 'gramas') {
        var librasParaGr = valorDigitado / 0.00220462
        resultado.value = parseFloat(librasParaGr.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''
    }
}

// essa função e para converter os valores de temperaturas
function temperatura(event) {
    event.preventDefault()

    valorDigitado = parseFloat(document.querySelector('#valorDigitado').value);
    categoriasValor = document.querySelector('#categorias').value; 
    temperaturasOrigemValor = document.querySelector('#temperaturasOrigem').value
    temperaturasDestinoValor = document.querySelector('#temperaturasDestino').value

    if (valorDigitado == 0 || isNaN(valorDigitado) || categoriasValor === 'selecione' || temperaturasOrigemValor === 'selecione' || temperaturasDestinoValor === 'selecione') {
        msgDeErro.innerText = 'preencha ou selecione os campos'
        msgDeErro.style.backgroundColor = '#e70000'
        resultado.value = ''

      // celsius para fahrenheit  
    } else if (categoriasValor === 'temperatura' && temperaturasOrigemValor === 'celsius' && temperaturasDestinoValor === 'fahrenheit') {
        var celsiusParaFr = (valorDigitado * 9/5) + 32 
        resultado.value = parseFloat(celsiusParaFr.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // celsius para kelvin  
    } else if (categoriasValor === 'temperatura' && temperaturasOrigemValor === 'celsius' && temperaturasDestinoValor === 'kelvin') {
        var celsiusParaKv = valorDigitado + 273.15 
        resultado.value = parseFloat(celsiusParaKv.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // fahrenheit para celsius  
    } else if (categoriasValor === 'temperatura' && temperaturasOrigemValor === 'fahrenheit' && temperaturasDestinoValor === 'celsius') {
        var fahrenheitParaCl = (valorDigitado - 32) * 5/9 
        resultado.value = parseFloat(fahrenheitParaCl.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // fahrenheit para kelvin  
    } else if (categoriasValor === 'temperatura' && temperaturasOrigemValor === 'fahrenheit' && temperaturasDestinoValor === 'kelvin') {
        var fahrenheitParaKv = (valorDigitado + 459.67) * 5/9 
        resultado.value = parseFloat(fahrenheitParaKv.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // kelvin para celsius  
    } else if (categoriasValor === 'temperatura' && temperaturasOrigemValor === 'kelvin' && temperaturasDestinoValor === 'celsius') {
        var kelvinParaCl = valorDigitado - 273.15 
        resultado.value = parseFloat(kelvinParaCl.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''

      // kelvin para fahrenheit  
    } else if (categoriasValor === 'temperatura' && temperaturasOrigemValor === 'kelvin' && temperaturasDestinoValor === 'fahrenheit') {
        var kelvinParaFr = (valorDigitado * 9/5) - 459.67 
        resultado.value = parseFloat(kelvinParaFr.toFixed(2))
        
        msgDeErro.innerText = 'Selecione e digite nos campos'
        msgDeErro.style.backgroundColor = ''
    }
    
}

document.getElementById('botaoParaConverter').addEventListener('click', function(event) {
    event.preventDefault()

    categoriasValor = document.querySelector('#categorias').value;

    if (categoriasValor === 'selecione') {
        exibirMsgDeErro(event)
    } else if (categoriasValor === 'comprimento') {
        comprimento(event);
    } else if (categoriasValor === 'peso') {
        peso(event);
    } else if (categoriasValor === 'temperatura') {
        temperatura(event);
    }
});
