const crypto = require('crypto')
const isPrime = require('prime-number')
const prompt = require('prompt-sync')()

let pIsPrime = false

function getRandomInt (max = 10000) {
  return Math.floor(Math.random() * Math.floor(max))
}


console.log('---------------------------------------------------')
console.log('1. Choose a prime number p. Everybody the value of p.')
console.log('---------------------------------------------------')

let p = null

do {
  p = prompt('Enter a prime number: ')
  pIsPrime = isPrime(p)
  if (!pIsPrime) {
    console.log('p must be prime!')
  }
} while(!pIsPrime)

console.log('---------------------------------------------------')
console.log('2. Generate q from p and a random number k.')
console.log('---------------------------------------------------')

console.log('> Get a random integer')
const k = getRandomInt()
console.log(`k = ${k}`)

console.log('> calculate q = k * p + 1')
const q = k * p + 1
console.log(`q = ${q}`)

console.log('---------------------------------------------------')
console.log('3. Generate blinding factors for Alice & Bob')
console.log('---------------------------------------------------')
const blindingFactorAlice = getRandomInt()
const blindingFactorBob = getRandomInt()
console.log(`Alice blinding factor = Xa = ${blindingFactorAlice}`)
console.log(`Bob blinding factor = Xb = ${blindingFactorBob}`)

console.log('---------------------------------------------------')
console.log('4. Send BTC from Alice to Bob')
console.log('---------------------------------------------------')

const amountAlice = prompt('How many Bitcoins does Alice pledge to send? ')
console.log(`amount commited by Alice: a (Alice) = ${amountAlice}`)

const amountBob = prompt('How many Bitcoins did Bob say he got? ')
console.log(`amount commited by Bob: a (Bob) = ${amountBob}`)

console.log('calculate commitments: C = X * p + a * q')
const Ca = blindingFactorAlice * p + amountAlice * q
const Cb = blindingFactorBob * p + amountBob * q
console.log(`Bob commitment: ${Ca}`)
console.log(`Alice commitment: ${Cb}`)

console.log('---------------------------------------------------')
console.log('5. verify only with the commitments')
console.log('---------------------------------------------------')

const diff = Ca - Cb
console.log(`Ca - Cb = ${diff}`)
const result = diff % p
console.log(`(Ca - Cb) % ${p} = ${result}`)

if (result === 0) {
  console.log('result = 0 ==> TRANSACTION CONFIRMED')
  console.log('amount commited by Alice = amount commited by bob')
} else {
  console.log('result != 0 ==> TRANSACTION NOT CONFIRMED')
  console.log('amount commited by Alice != amount commited by bob')
}

