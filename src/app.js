import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

const nums = [33,45,12,88,15,98,20,23,58]
const nums$ = Rx.Observable.from(nums)

nums$.subscribe(getSubscriber('nums'))