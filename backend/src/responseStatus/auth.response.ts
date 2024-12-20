import { createCustomException } from './response.utils';

class ThrowExceptionClass {
  EmailNeedVerification(): never {
    throw createCustomException(
      601 /*Custom response code*/,
      401 /*Status Code */,
    );
  }

  IncorrectEmail(): never {
    throw createCustomException(602, 401);
  }

  IncorrectPassword(): never {
    throw createCustomException(603, 401);
  }
}

export const throwException = new ThrowExceptionClass();
