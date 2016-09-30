import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

// Range
const range$ = new Rx.Observable.range(0, 10)
  .subscribe(getSubscriber('Range'))

// Interval
const interval$ = new Rx.Observable.interval(500)
  .take(5) // o take limita a quantidade de iterações, se for removido gera um loop infinito
  .subscribe(getSubscriber('Interval'))

// Timer
const timer$ = new Rx.Observable.timer(3000, 500)
  .take(5) // o take limita a quantidade de iterações, se for removido gera um loop infinito
  .subscribe(getSubscriber('Timer'))

// Of
const of$ = new Rx.Observable.of(86, 'Hello World', [2,3,4,5,6], {name: 'Jon Doe'})
  .subscribe(getSubscriber('Of'))

// Defer
let i = 0
const defer$ = new Rx.Observable.defer(() => {
  i++
  return Rx.Observable.of(i)
})

defer$.subscribe(getSubscriber('Defer 1'))
defer$.subscribe(getSubscriber('Defer 2'))
defer$.subscribe(getSubscriber('Defer 3'))

