const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-converted")
const currencySelect2 = document.querySelector(".currency-select-to-convert")

async function convertValues() {
    
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    try {
        
    // Busca todas as cotações em relação ao Real (BRL) de uma só vez
    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL"
    const response = await fetch(url)
    const data = await response.json()

    // Atualiza as variáveis com os valores reais de mercado (bid)
    const dolarToday = parseFloat(data.USDBRL.bid)
    const euroToday = parseFloat(data.EURBRL.bid)
    const libraToday = parseFloat(data.GBPBRL.bid)
    const bitcoinToday = parseFloat(data.BTCBRL.bid)


        // resultado conversão Real para demais moedas
    if (currencySelect2.value == "Real" && currencySelect.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
    }
    if (currencySelect2.value == "Real" && currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect2.value == "Real" && currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect2.value == "Real" && currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect2.value == "Real" && currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToday)
    }

    // resultado conversão Dolar para demais moedas
    if (currencySelect2.value == "Dolar" && currencySelect.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL" }).format(inputCurrencyValue * dolarToday)
     }
     if (currencySelect2.value == "Dolar" && currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD" }).format(inputCurrencyValue)
     }
    if (currencySelect2.value == "Dolar" && currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR" }).format((inputCurrencyValue * dolarToday) / euroToday)
     }
     if (currencySelect2.value == "Dolar" && currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP" }).format((inputCurrencyValue * dolarToday) / libraToday)
     }
     if (currencySelect2.value == "Dolar" && currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC" }).format((inputCurrencyValue * dolarToday) / bitcoinToday)
     }

     //resultado conversão Euro para demais moedas
     if (currencySelect2.value == "Euro" && currencySelect.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL" }).format(inputCurrencyValue * euroToday)
     }
     if (currencySelect2.value == "Euro" && currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD" }).format((inputCurrencyValue * euroToday) / dolarToday)
     }
    if (currencySelect2.value == "Euro" && currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR" }).format(inputCurrencyValue)
     }
     if (currencySelect2.value == "Euro" && currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP" }).format((inputCurrencyValue * euroToday) / libraToday)
     }
     if (currencySelect2.value == "Euro" && currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC" }).format((inputCurrencyValue * euroToday) / bitcoinToday)
     }

     //resultado conversão Libra para demais moedas
     if (currencySelect2.value == "Libra" && currencySelect.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL" }).format(inputCurrencyValue * libraToday)
     }
     if (currencySelect2.value == "Libra" && currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD" }).format((inputCurrencyValue * libraToday) / dolarToday)
     }
    if (currencySelect2.value == "Libra" && currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR" }).format((inputCurrencyValue * libraToday) / euroToday)
     }
     if (currencySelect2.value == "Libra" && currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP" }).format(inputCurrencyValue)
     }
     if (currencySelect2.value == "Libra" && currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC" }).format((inputCurrencyValue * libraToday) / bitcoinToday)
     }

     //resultado conversão Bitcoin para demais moedas
     if (currencySelect2.value == "Bitcoin" && currencySelect.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL" }).format(inputCurrencyValue * bitcoinToday)
     }
     if (currencySelect2.value == "Bitcoin" && currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD" }).format((inputCurrencyValue * bitcoinToday) / dolarToday)
     }
    if (currencySelect2.value == "Bitcoin" && currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR" }).format((inputCurrencyValue * bitcoinToday) / euroToday)
     }
     if (currencySelect2.value == "Bitcoin" && currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP" }).format((inputCurrencyValue * bitcoinToday) / libraToday)
     }
     if (currencySelect2.value == "Bitcoin" && currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC" }).format(inputCurrencyValue)
     }
  
     //formata o valor na esquerda

     if (currencySelect2.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", currency: "BRL" 
        }).format(inputCurrencyValue)
    }
    if (currencySelect2.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency", currency: "USD" 
        }).format(inputCurrencyValue)
    }
    if (currencySelect2.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { 
            style: "currency", currency: "EUR" 
        }).format(inputCurrencyValue)
    }
    if (currencySelect2.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", { 
            style: "currency", currency: "GBP" 
        }).format(inputCurrencyValue)
    }
    if (currencySelect2.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency", currency: "BTC" 
        }).format(inputCurrencyValue)
    }
    }
    catch (error) {
        alert("Erro ao buscar as cotações em tempo real. Verifique sua conexão.")
        console.error(error)}
    

    

}


function changeCurrency() {
    //atualiza moeda e imagem a direita

    if (currencySelect.value == "Real") {
        document.querySelector(".currency-converted-name").innerHTML = "Real"

        document.querySelector(".currency-converted-img").src = "./assets/Real.png"
    }

    if (currencySelect.value == "Dolar") {
        document.querySelector(".currency-converted-name").innerHTML = "Dolar"

        document.querySelector(".currency-converted-img").src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "Euro") {
        document.querySelector(".currency-converted-name").innerHTML = "Euro"

        document.querySelector(".currency-converted-img").src = "./assets/Euro.png"
    }

    if (currencySelect.value == "Libra") {
        document.querySelector(".currency-converted-name").innerHTML = "Libra"

        document.querySelector(".currency-converted-img").src = "./assets/Libra.png"
    }

    if (currencySelect.value == "Bitcoin") {
        document.querySelector(".currency-converted-name").innerHTML = "Bitcoin"

        document.querySelector(".currency-converted-img").src = "./assets/Bitcoin.png"
    }

    //atualiza moeda e imagem a esquerda

    if (currencySelect2.value == "Real") {
        document.querySelector(".currency").innerHTML = "Real"

        document.querySelector(".currency-img-to-convert").src = "./assets/Real.png"
    }

    if (currencySelect2.value == "Dolar") {
        document.querySelector(".currency").innerHTML = "Dolar"

        document.querySelector(".currency-img-to-convert").src = "./assets/Dolar.png"
    }

    if (currencySelect2.value == "Euro") {
        document.querySelector(".currency").innerHTML = "Euro"

        document.querySelector(".currency-img-to-convert").src = "./assets/Euro.png"
    }

    if (currencySelect2.value == "Libra") {
        document.querySelector(".currency").innerHTML = "Libra"

        document.querySelector(".currency-img-to-convert").src = "./assets/Libra.png"
    }

    if (currencySelect2.value == "Bitcoin") {
        document.querySelector(".currency").innerHTML = "Bitcoin"

        document.querySelector(".currency-img-to-convert").src = "./assets/Bitcoin.png"
    }



    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
currencySelect2.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)