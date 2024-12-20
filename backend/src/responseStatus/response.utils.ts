import { HttpException } from '@nestjs/common';

export function createCustomException(
  responseCode: number,
  statusCode: number,
): never {
  throw new HttpException(
    {
      statusCode,
      responseCode,
    },
    statusCode,
  );
}
