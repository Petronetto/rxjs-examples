import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

let input = $('#input')
let length = $('#length')

// Map
Rx.Observable.interval(1000)
  .take(10)
  .map(v => v * 2)
  .subscribe(getSubscriber('Map'))

// MapTo
Rx.Observable.interval(1000)
  .take(10)
  .mapTo(Date.now())
  .subscribe(getSubscriber('MapTo'))

// Punck
Rx.Observable.fromEvent(input, 'keyup')
  //.map(e => e.target.value)
  .pluck('target', 'value') // Mesmo que o map da linha anterior
  .map(v => {
    return {
      value: v,
      length: v.length
    }
  })
  .subscribe(x => {
    length.text(x.length)
  })