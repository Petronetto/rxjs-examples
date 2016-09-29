import $ from 'jquery'
import Rx from 'rxjs/Rx'

var nums = [33,45,12,88,15,98,20,23,58]
var nums$ = Rx.Observable.from(nums)

nums$.subscribe(
  x => {
    console.log(x)
  },
  err => {
    console.log(err)
  },
  complete => {
    console.log('Completed')
  }
)