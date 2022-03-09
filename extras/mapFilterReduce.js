console.log('===== Array Map / Filter / Recude =====\n')

const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];


console.log('=== Filter ===')

const anoDeCriacao = empresas.filter(empresas => (empresas.anoDeCriacao > 2000))
console.log(anoDeCriacao)
console.log('')


console.log('=== Map ===')

const info = empresas.map(empresa => `${empresa.nome} CEO: ${empresa.CEO}`)
console.log(info)
console.log('')


console.log('=== Reduce ===')

const total = empresas.reduce((result, amount) => {
  return (result + amount.valorDeMercado)
}, 0)
console.log(total)