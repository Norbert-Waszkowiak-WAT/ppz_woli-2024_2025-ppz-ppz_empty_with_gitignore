import { HttpException, HttpStatus } from '@nestjs/common';

class ThrowExceptionClass {
  public createCustomException(responseCode: number,  statusCode: number): never {
    throw new HttpException(
      {
        statusCode,
        responseCode,
      },
      statusCode,
    );
  }

  EmailNeedVerification(): never {
    this.createCustomException(601 /*Custom response code*/,401 /*Status Code */);
  }

  IncorrectEmail(): never {
    this.createCustomException(602,401);
  }

  IncorrectPassword(): never {
    this.createCustomException(603, 401);
  }
}

export const throwException = new ThrowExceptionClass();
