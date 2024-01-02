import { Module } from '@nestjs/common';
import { ConsolerService } from './consoler.service'

@Module({
  providers: [ConsolerService],
  exports: [ConsolerService]
})
export class ConsolerModule {}
