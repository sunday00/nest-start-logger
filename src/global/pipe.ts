import { INestApplication, ValidationPipe } from '@nestjs/common'

export const activateGlobalValidateWithTransform = (app) => {
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
}