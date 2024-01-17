import { Transform } from 'class-transformer'

export function ToNumber(){
  return function (target: any, propertyName: string ): any {
    const value = 11

    target[propertyName] = 1111

    console.log(target)

    return {
      get: () => value
    }
  }
}

export function ToNum(){
  return Transform(v => Number(v.value))
}