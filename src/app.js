import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

let input = $('#input')
let length = $('#length')

// Buffer
Rx.Observable.interval(500)
  .take(10) // Limitar apenas 10 interações
  .buffer(Rx.Observable.interval(1000))
  .subscribe(getSubscriber('Buffer'))

// BufferCount
Rx.Observable.range(1, 100)
  .bufferCount(20)
  .subscribe(getSubscriber('BufferCount'))

// BufferTime
Rx.Observable.interval(1000)
  .take(10) // Limitar apenas 10 interações
  .bufferTime(2000)
  .subscribe(getSubscriber('BufferTime'))

// Exempplo de buffer com evento de click
const obs1$ = Rx.Observable.interval(100)
const obs2$ = Rx.Observable.fromEvent(document, 'click')

const myBuffer = obs1$.buffer(obs2$)
const subscriber = myBuffer.subscribe(getSubscriber('Buffer values'))