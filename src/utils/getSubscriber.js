export function getSubscriber(id) {
  return {
    next(x) {
      console.log(`${id}-> Name: ${x.name} E-mail: ${x.email}`)
    },
    error(err) {
      console.log(`${id}-> ${err}`)
    },
    complete(err) {
      console.log(`${id}-> Completed!`)
    }
  }
}