let num1 = Number(prompt("Ingrese el primer número"));

let num2 = Number(prompt("Ingrese el segundo número"))

if (num1>num2) {
    console.log("El mayor es el primer número ", num1);
    alert("El mayor es el primer número: " + num1);
    document.write("El mayor es el primer número ingresado: " + num1);
}else {
    if (num2>num1){
        console.log("El mayor es el segundo número ", num2)
        alert("El mayor es el segundo número: " + num2);
        document.write("El mayor es el segundo número ingresado: " + num2);

        
    }else {
        console.log("Son iguales ambos números");
        alert("Son iguales ambos números");
        document.write("Ambos números son iguales");


    }
}