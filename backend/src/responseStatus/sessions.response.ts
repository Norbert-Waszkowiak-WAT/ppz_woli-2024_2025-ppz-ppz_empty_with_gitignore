import { createCustomException } from './response.utils';

class ThrowAuthExceptionClass {
  SessionDoesnotExist(): never {
    throw createCustomException(
      701 /*Custom response code*/,
      401 /*Status Code  401*/,
    );
  }
  SessionNotFound(): never {
    throw createCustomException(702, 404);
  }
  AllSessionsDestroyedSuccessfully() {
    throw createCustomException(703, 200);
  }
  AllSessionsFetchedSuccessfully(data) {
    throw createCustomException(704, 200, data);
  }
}

export const throwSessionException = new ThrowAuthExceptionClass();
