import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

const source$ = new Rx.Observable.interval(500)
  .take(5) // o take limita a quantidade de iterações, se for removido gera um loop infinito
  .subscribe(getSubscriber('Interval'))
