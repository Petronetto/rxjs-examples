import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

let input = $('#input')
let profile = $('#profile')
profile.hide()

/**
Rx.Observable.fromEvent(input, 'keyup')
  .distinct()
  .debounceTime(1000)
  .subscribe(e => {
    profile.show()
    Rx.Observable.fromPromise(getGithubUser(e.target.value))
      .subscribe(user => {
        $('#name').text(user.data.name)
        $('#login').text(user.data.login)
        $('#blog').text(user.data.blog)
        $('#avatar').attr('src', user.data.avatar_url)
        $('#repos').text(user.data.public_repos)
        $('#followers').text(user.data.followers)
        $('#following').text(user.data.following)
        $('#link').attr('href', user.data.html_url)
      })
  })
*/

// Usando swithMap
Rx.Observable.fromEvent(input, 'keyup')
  .distinct()
  .debounceTime(1000)
  .map(e => e.target.value)
  .switchMap((v) => {
    profile.show()
    return Rx.Observable.fromPromise(getGithubUser(v))
  })
  .subscribe(user => {
    $('#name').text(user.data.name)
    $('#login').text(user.data.login)
    $('#blog').text(user.data.blog)
    $('#avatar').attr('src', user.data.avatar_url)
    $('#repos').text(user.data.public_repos)
    $('#followers').text(user.data.followers)
    $('#following').text(user.data.following)
    $('#link').attr('href', user.data.html_url)
  })

function getGithubUser(username) {
  let api = 'https://api.github.com/users/' + username
  let clientId = 'cf7ca1f7e09474c4a1fa'
  let clientSecret = '57fd3140acec74dc09efe5a9f03145007aa70383'

  return $.ajax({
    url: `${api}?client_id=${clientId}&client_secret=${clientSecret}`,
    dataType: 'jsonp'
  }).promise()
}