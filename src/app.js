import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

const source$ = new Rx.Observable(observer => {
  observer.next('Some value')
  observer.next('Another different value')
  observer.next('Hello')
  observer.next('World')
  observer.complete()
})

const single$ = new Rx.Observable(observer => {
  observer.next('Single value...')
  observer.complete()
})

// Single - Retorna undefined se Observable retornar multiplos valores
single$
  .single()
  .subscribe(getSubscriber('Single'))
console.log("\n")

// First
source$
  .first()
  .subscribe(getSubscriber('First'))
console.log("\n")

// Last
source$
  .last()
  .subscribe(getSubscriber('Last'))
console.log("\n")

// Find - retorna undefined caso não encontre o valor
source$
  .find((value, index, obs) => {
    return value === 'Hello'
  })
  .subscribe(getSubscriber('Find'))
console.log("\n")

// FindIndex - retorna -1 caso não encontre o valor
source$
  .findIndex((value, index, obs) => {
    return value === 'Hello'
  })
  .subscribe(getSubscriber('FindIndex'))
console.log("\n")

// Take
source$
  .take(2)
  .subscribe(getSubscriber('Take'))
console.log("\n")

// TakeWhile
source$
  .takeWhile(i => i.length >= 6)
  .subscribe(getSubscriber('TakeWhile'))
console.log("\n")

// Skip
source$
  .skip(2)
  .subscribe(getSubscriber('Skip'))
console.log("\n")

// SkipWhile
source$
  .skipWhile(i => i.length >= 6)
  .subscribe(getSubscriber('SkipWhile'))
console.log("\n")

// TakeUntil e SkipUntil
Rx.Observable.interval(500)
  .takeUntil(Rx.Observable.timer(4000))
  .skipUntil(Rx.Observable.timer(2000))
  .subscribe(getSubscriber('TakeUntil e SkipUntil'))
console.log("\n")

// Filter
Rx.Observable.range(0, 10)
  .filter((x, i, obs) => {
    return x % 2 === 0
  })
  .subscribe(getSubscriber('Filter'))
console.log("\n")

// Distinct
Rx.Observable.of(11,11,20,20,53,21,11,35,98,45,33,33)
  .distinct()
  .subscribe(getSubscriber('Distinct'))
console.log("\n")
