const livros = require('./database')


//1º pegar um input da pessoa usuaria se ela quer escolher um livro por categoria

const readline = require('readline-sync')

const entradaIncial = readline.question('Deseja buscar um Livro? S/N ')

// se for sim , mostramos as categorias disponveis  e perguntamso qual categoria ela escolhe
// se escolher não, mostramlos todos livros em ordem crescentes pela quantidade de paginas

if(entradaIncial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias Disponiveis:')
    console.log('Produtividade e estilo de Vida','/Religioso','/Auto Biografia','/Roamance','/Cientifico','/Comédia','/Beleza e Estética')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
    console.log ('Obrigado pela Escolha! Boa Leitura!')   
     
}   else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os Livros disponiveis:')
    console.table(livrosOrdenados)
    }   

