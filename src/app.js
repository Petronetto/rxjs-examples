import $ from 'jquery'
import Rx from 'rxjs/Rx'

const input = $('#input')
const button = $('#button')
const coords = $('#coords')

const btnStream$ = Rx.Observable.fromEvent(button, 'click')
btnStream$.subscribe(
  x => {
    console.log('Button was clicked!')
    console.log(x)
  },
  err => {
    console.log(err)
  },
  complete => {
    console.log('Completed!')
  }
)

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup')
inputStream$.subscribe(
  x => {
    console.log(x.target.value)
  },
  err => {
    console.log(err)
  },
  complete => {
    console.log('Completed!')
  }
)

const coordsStream$ = Rx.Observable.fromEvent(document, 'mousemove')
coordsStream$.subscribe(
  x => {
    coords.html('X:' + x.clientX + ' Y:' + x.clientY)
  }
)