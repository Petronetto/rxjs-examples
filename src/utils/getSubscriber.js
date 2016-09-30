export function getSubscriber(id) {
  return {
    next(x) {
      console.log(`${id}-> ${x}`)
    },
    error(err) {
      console.log(`${id}-> ${err.stack}`)
    },
    complete(err) {
      console.log(`${id}-> Completed!`)
    }
  }
}