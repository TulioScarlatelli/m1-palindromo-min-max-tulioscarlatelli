function isPalindrome(str){
    /* Seu código aqui */

    function limparTexto(t){
        return t.toLowerCase().replace(/[^a-z0-9]/gi, '');
    }

    let textoLimpo = limparTexto(str);

    for (let indice1 = 0, indice2 = textoLimpo.length - 1; indice1 < indice2; indice1++, indice2--){
        if (textoLimpo[indice1] !== textoLimpo[indice2]){
            return false;
        }
    }

    return true;
}

function arrayMaxMin(arr){
    /* Seu código aqui */

    if (arr.length === 0){
        return {Max: null, Min: null};
    }

    let arrayMax = arr[0];
    let arrayMin = arr[0];

    for (let i = 0; i < arr.length; i++){

        if (arr[i] > arrayMax){
            arrayMax = arr[i];
        }

        if (arr[i] < arrayMin){
            arrayMin = arr[i];
        }
    }

    return [arrayMin, arrayMax];
}
