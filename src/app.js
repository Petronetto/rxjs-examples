import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

const source$ = new Rx.Observable(observer => {
  console.log('Creating a new observable')

  observer.next('Value One...')

  observer.next('Value Two...')

  observer.error(new Error('Error: Something is wrong'))
  
  setTimeout(() => {
    observer.next('Value Three...')
    observer.complete()
  }, 3000)

})

source$.subscribe(getSubscriber('MyObs'))