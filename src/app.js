import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

// Range
const sourceOne$ = new Rx.Observable.range(0, 10)
  .subscribe(getSubscriber('Range'))

// Interval
const sourceTwo$ = new Rx.Observable.interval(500)
  .take(5) // o take limita a quantidade de iterações, se for removido gera um loop infinito
  .subscribe(getSubscriber('Interval'))

// Timer
const sourceThree$ = new Rx.Observable.timer(3000, 500)
  .take(5) // o take limita a quantidade de iterações, se for removido gera um loop infinito
  .subscribe(getSubscriber('Timer'))

