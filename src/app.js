import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

// Interval
const sourceOne$ = new Rx.Observable.interval(500)
  .take(5) // o take limita a quantidade de iterações, se for removido gera um loop infinito
  .subscribe(getSubscriber('Interval'))

// Timer
const sourceTwo$ = new Rx.Observable.timer(3000, 500)
  .take(5) // o take limita a quantidade de iterações, se for removido gera um loop infinito
  .subscribe(getSubscriber('Timer'))
