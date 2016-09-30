import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

// Cold Observer
const cold$ = new Rx.Observable(observer => {
  observer.next(Date.now())
})

cold$.subscribe(getSubscriber('Cold One'))
cold$.subscribe(getSubscriber('Cold Two'))

// Hot Observer
const hot$ = new Rx.Observable(observer => {
  observer.next(Date.now())
}).publish()

hot$.subscribe(getSubscriber('Hot One'))
hot$.subscribe(getSubscriber('Hot Two'))

hot$.connect()