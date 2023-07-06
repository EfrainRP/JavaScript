let compras = ['Huevo', 'Pan', 'Leche', 'Papas fritas', 'Palomitas'];

compras.push('Aceite de Girasol');

console.log(compras);

compras.pop()

console.log(compras);

let peliculas = [
    {titulo: 'Jurassic Park', director: 'Steven', fecha:new Date(1999,5,6)},
    {titulo: 'Pacific Rim', director: 'Nollan', fecha:  new Date(2010,9,7)},
    {titulo: 'Shrek', director: 'Christopher', fecha:   new Date(2004,4,14)}]

peliculaspost2010 = peliculas.filter(pel => pel.fecha > new Date(2010,1,1));

console.log(peliculaspost2010);

peliculasDirectores = peliculas.map((obj) => (obj.director));

console.log(peliculasDirectores);

peliculasTitulos = peliculas.map((obj) => (obj.titulo));

console.log(peliculasTitulos);

peliculasDirTitulo = peliculasDirectores.concat(peliculasTitulos);

console.log(peliculasDirTitulo);

peliculasDirTitulo2 = [...peliculasDirectores,...peliculasTitulos]; //Factor de Propagacion

console.log(peliculasDirTitulo2);
