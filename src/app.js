import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

const myPromise = new Promise((resolve, reject) => {
  console.log('Creating Promise...')
  setTimeout(() => {
    console.log('Do something...')
    resolve('Resolved!')
  }, 2000)
})

// Usando Promises
// myPromise.then(data => {
//   console.log(data)
// })

// Usando Observables
Rx.Observable.fromPromise(myPromise)
  .subscribe(getSubscriber('Promise'))