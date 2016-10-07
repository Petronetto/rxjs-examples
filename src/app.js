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

// First
source$
  .first()
  .subscribe(getSubscriber('First'))

// Last
source$
  .last()
  .subscribe(getSubscriber('Last'))

// Find - retorna undefined caso não encontre o valor
source$
  .find((value, index, obs) => {
    return value === 'Hello'
  })
  .subscribe(getSubscriber('Find'))

// FindIndex - retorna -1 caso não encontre o valor
source$
  .findIndex((value, index, obs) => {
    return value === 'Hello'
  })
  .subscribe(getSubscriber('FindIndex'))

// Take
source$
  .take(2)
  .subscribe(getSubscriber('Take'))

// TakeWhile
source$
  .takeWhile(i => i.length >= 6)
  .subscribe(getSubscriber('TakeWhile'))

// Skip
source$
  .skip(2)
  .subscribe(getSubscriber('Skip'))

// SkipWhile
source$
  .skipWhile(i => i.length >= 6)
  .subscribe(getSubscriber('SkipWhile'))

// TakeUntil e SkipUntil
Rx.Observable.interval(500)
  .takeUntil(Rx.Observable.timer(4000))
  .skipUntil(Rx.Observable.timer(2000))
  .subscribe(getSubscriber('TakeUntil e SkipUntil'))

// Filter
Rx.Observable.range(0, 10)
  .filter((x, i, obs) => {
    return x % 2 === 0
  })
  .subscribe(getSubscriber('Filter'))

// Distinct
Rx.Observable.of(11,11,20,20,53,21,11,35,98,45,33,33)
  .distinct()
  .subscribe(getSubscriber('Distinct'))

// DistinctUntilChanged
Rx.Observable.of(11,11,11,11,20,20,53,22,11,11,11,11,11,35,98,45,33,33)
  .distinctUntilChanged()
  .subscribe(getSubscriber('DistinctUntilChanged'))

// DefaultIfEmpty
Rx.Observable.of()
  .defaultIfEmpty('MY_DEFAULT_VALUE')
  .subscribe(getSubscriber('DefaultIfEmpty'))

// Every - Retorna true se todos os elementos atenderem à condição, caso contrário retorna falso
Rx.Observable.of(2,4,6)
  .every(v => v % 2 === 0)
  .subscribe(getSubscriber('Every'))

// Do
Rx.Observable.of(1,2,3,4,5,6)
  .do(v => console.log('Do-> Before Map: ' + v))
  .map(v => v * 100)
  .do(v => console.log('Do-> After Map: ' + v))
  .subscribe(getSubscriber('Do'))

// Merge e Delay
const merge$ = Rx.Observable.of(null)
Rx.Observable.merge(
  merge$.mapTo('First').delay(11000),
  merge$.mapTo('Second').delay(6000),
  merge$.mapTo('Third').delay(7000),
  merge$.mapTo('Fourth').delay(10000)
).subscribe(getSubscriber('Merge/Delay'))

// DelayWhen
const delay$ = Rx.Observable.interval(1000)
delay$
  .take(5)
  .delayWhen(() => Rx.Observable.timer(11000))
  .subscribe(getSubscriber('DelayWhen'))

// Let
const letSource$ = Rx.Observable.from([1,2,3,4,5])
letSource$
  .let(obs => obs.map(v => v * 2))
  .subscribe(getSubscriber('Let'))

// ToPromise
const myFunc$ = (v) => {
  return Rx.Observable.of(v).delay(1000)
}
myFunc$('Hello Rx')
  .toPromise()
  .then((result) => {
    console.log('From Promise: ' + result + "\n")
  })