function mostrar(numero){
    document.getElementById('resultado').value += numero;
}
function borrar(){
    document.getElementById('resultado').value = " ";
}
function borrarUltimo(){
    let texto = document.getElementById('resultado').value;
        let idF = texto.length-1;
        let nuevo="";
        for(let i =0;i<idF;i++){
            nuevo += texto[i];
        }
        document.getElementById('resultado').value = nuevo
}
function punto(){
    document.getElementById('resultado').value += ".";
}
function sumar(){
    document.getElementById('resultado').value += "+";
}
function restar(){
    document.getElementById('resultado').value += "-";
}
function multiplicar(){
    document.getElementById('resultado').value += "*";
}
function dividir(){
    document.getElementById('resultado').value += "/";
}
function porcentaje(){
    document.getElementById('resultado').value += "%";
}
function raiz(){
    document.getElementById('resultado').value += "¬";
}

function mostrarRes(){
    let texto = document.getElementById('resultado').value;
    let operacion ="";
    for(let i =0;i<texto.length;i++){
        switch(texto[i]){
            case "+":
                operacion="+";
                break;
            case "-":
                operacion="-";
                break;
            case "*":
                operacion="*";
                break;
            case "/":
                operacion="/";
                break;
            case "%":
                operacion="%";
                break;
            case "¬":
                operacion="¬";
                break;
        }
    }
    let arr = texto.split(operacion);
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    switch(operacion){
        case "+":
            document.getElementById('resultado').value = (num1+num2);
            break;
        case "-":
            document.getElementById('resultado').value = (num1-num2);
            break;
        case "*":
            document.getElementById('resultado').value = (num1*num2);
            break;
        case "/":
            document.getElementById('resultado').value = (num1/num2);
            break;
        case "%":
            document.getElementById('resultado').value = (num1%num2);
            break;
        case "¬":
            document.getElementById('resultado').value = (Math.sqrt(num1));
            break;
    }
}

