export default class Consoler {
  invoke() {
    const s: string = 'start!'

    console.log(s)
  }
}

const c = new Consoler()
c.invoke()
//
