export function getSubscriber(id) {
  return {
    next(x) {
      console.log(`${id}-> ${x}`)
    },
    error(err) {
      console.log(`${id}-> ${err}`)
    },
    complete(err) {
      console.log(`${id}-> Completed!`)
    }
  }
}