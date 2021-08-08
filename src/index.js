// export function testFn(nombre) {
function testFn(nombre) {
    // Déclarez en dessous :
    if (typeof(+nombre) != "number" || isNaN(+nombre)){
        return  'Pas un nombre'
    }
    const arrondi = Math.pow(10, 3);
    nombre *= arrondi;
    nombre = (Math.round(nombre)) / arrondi;
    // Ne touchez pas au return :
    return nombre;
  }

console.log("Refresh ?");