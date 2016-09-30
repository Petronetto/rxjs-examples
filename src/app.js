import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'


// const source$ = new Rx.Observable.interval(1000).publish()

// source$.connect()

// setTimeout(() => {
//   source$.subscribe(getSubscriber('####'))
//   setTimeout(() => {
//     source$.subscribe(getSubscriber('>>>>'))
//   }, 4000)
// }, 2000)


const source$ = new Rx.Observable.interval(1000).publish().refCount()

setTimeout(() => {
  source$.subscribe(getSubscriber('####'))
  setTimeout(() => {
    source$.subscribe(getSubscriber('>>>>'))
  }, 4000)
}, 2000)
