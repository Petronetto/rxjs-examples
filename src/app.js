import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

const users = [
  {name: 'Jon Snow', email: 'youknownothing@mail.com'},
  {name: 'Daenerys Targaryen', email: 'khaleesi@gmail.com'},
  {name: 'Tyrion Lannister', email: 'halfman@gmail.com'}
]

const users$ = Rx.Observable.from(users)

users$.subscribe(getSubscriber('users'))