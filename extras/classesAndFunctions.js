console.log('===== Classes and Functions =====')

const Book1 = function(name, publisher, pages) {
  tName = name,
  tPublisher = publisher,
  tPages = pages

  this.getName = function() {
    return tName
  }
  this.getPublisher = function() {
    return tPublisher
  }
  this.getPages = function() {
    return tPages
  }
}

const Javascript = new Book1('Javascript 1', 'Casa do Código', 145)

//console.log(`Name: ${Javascript.getName()}\nPublisher: ${Javascript.getPublisher()}\nPages: ${Javascript.getPages()}`)


class Book {
  constructor(name, publisher, pages) {
    this.name = name
    this.publisher = publisher
    this.pages = pages
  }
  getTitle() {
    console.log(`Title: ${this.name}`)
  }
  getDetails() {
    console.log(`Title: ${this.name}\nPublisher: ${this.publisher}\nPages: ${this.pages}`)
  }
}

const NodeJS = new Book('First steeps with NodeJS', "Casa do Código", 145)
// NodeJS.getTitle()
// NodeJS.getDetails()

class Collection extends Book {
  constructor(name, publisher, collectionName) {
    super(name, publisher)
    this.collectionName = collectionName
  }
  collectionDetails() {
    console.log(`The book ${this.name} is part of the collection ${this.collectionName} published by ${this.publisher}`)
  }
}

const Algorithm = new Collection('Basic Math', 'Casa do Código',  'Algorithm Fundamentals')
//Algorithm.collectionDetails()