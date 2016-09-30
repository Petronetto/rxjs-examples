import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

// Stream de um Set
console.log('Stream de um Set')
const s = new Set(['Foo', 43, {name: 'John Doe'}])

const s$ = Rx.Observable.from(s)

s$.subscribe(getSubscriber('set'))

// Stream de um Map
console.log('Stream de um Map')
const m = new Map([[1,2], [3,4], [5,6]])

const m$ = Rx.Observable.from(m)

m$.subscribe(getSubscriber('map'))

// Stream de uma String
console.log('Stream de uma String')
const str = 'Hello World!'

const str$ = Rx.Observable.from(str)

str$.subscribe(getSubscriber('string'))