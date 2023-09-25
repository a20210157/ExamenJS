alert("buenos dias")
alert("Cuestionario sobre el Turismo en el Perú")
alert("Bienvenido/a al cuestionario sobre Turismo")
nom=prompt("ingresa tu nombre")
document.write("hola ", nom)
res1=prompt("1. ¿En qué departamento se encuentra el lago Titicaca?\A. Tacna\B. Puno \C. Cusco")
if (res1=="A"){
    res1=0
}
else if(res1=="B"){
    res1=33
}
else if(res1=="C"){
    res1=0
}
else{
    alert(nom, "no es un opcion valida")}
res2=prompt("2-¿Desde qué parte del Perú se pueden avistar ballenas jorobadas? \ A. Lima e Ica\B. Arequiupa y Tacna \C. Piura y Tumbes")
if (res2=="A"){
    res2=0
}
else if(res2=="B"){
    res2=0
}
else if(res2=="C"){
    res2=33
}
else{
    alert(nom, "no es un opcion valida")}

    res3=prompt("3. Plato típico de la Selva peruana \A. Tacacho con cecina \B. Arroz con pollo\C. Lomo saltado ")
    if (res3=="A"){
        res3=3
    }
    else if(res3=="B"){
        res3=0
    }
    else if(res3=="C"){
        res3=0
    }
    else{
        alert(nom, "no es un opcion valida")}

 var total=res1+res2+res3
 if (total=99){
document.write("Lo has hecho bien " , nom)
 }
 else if (total=33){
    document.write("Vuelve a intentarlo…" )
 }
 else if (total=66){
    document.write("Puedes hacerlo mejor" , nom)
 }
 else{
    document.write("Vuelve a intentarlo…" )
 }

