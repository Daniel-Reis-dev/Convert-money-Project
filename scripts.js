const button = document.getElementById("Convert-button")





// async e await é usado sempre para poder buscar algo em uma api, e sempre deve ser usado dentro de uma função.

const convertVallues = async () => {

    const inputReal = document.getElementById("input-real").value
    const real = document.getElementById("result-in-real")
    const currencyValue = document.getElementById("dolar-value")

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json())


    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitCoin = data.BTCBRL.high


    real.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(inputReal)




    if (select.value === "US$ Dólar americano") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputReal / dolar)
    }


    if (select.value === "€ Euro") {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputReal / euro)
    }

    if (select.vallue === "₿ Bitcoin") {

        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputReal / bitCoin)
    }


}




const select = document.getElementById("select-id-dolar")



const changeResult = () => {

    const currencyName = document.getElementById("currency-dolar")
    const currencyImg = document.getElementById("currency-img")


    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/euro.png.png"


    }

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./Assets/estados-unidos.png.jpg"


    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/BitCoin.png.png"


    }
    convertVallues()


}


button.addEventListener("click", convertVallues)
select.addEventListener("change", changeResult)