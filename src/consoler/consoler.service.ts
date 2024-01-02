import { Injectable } from '@nestjs/common'

@Injectable()
export class ConsolerService {
  constructor() {}

  invoke() {
    const s: string = 'start!'

    console.log(s)
  }
}
