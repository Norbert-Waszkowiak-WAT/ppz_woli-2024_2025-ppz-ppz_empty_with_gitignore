import { HttpException, HttpStatus } from '@nestjs/common';


const messages = [
    {
        "Unauthorized": { responseCode: 600, message: 'Unauthorized' },
        "Email needs verification": { responseCode: 601, message: 'Email needs verification' },
        "Email is incorrect": { responseCode: 602, message: 'Email is incorrect' },
        "Password is incorrect": { responseCode: 603, message: 'Password is incorrect' }
    }
] 

throwEmailNeedVerification();
throwException("Email needs verification");

export function throwException(whichOne: string): never {
    throw new HttpException(
        {
            statusCode: HttpStatus.UNAUTHORIZED,
            responseCode: messages[whichOne].responseCode,
            message: messages[whichOne].message,
        },
        HttpStatus.UNAUTHORIZED,
    );  
}

export function throwEmailNeedVerification(): never {
  throw new HttpException(
    {
      statusCode: HttpStatus.UNAUTHORIZED,
      responseCode: 601,
      message: 'Email needs verification',
    },
    HttpStatus.UNAUTHORIZED,
  );
}

export function throwIncorrectEmail(): never {
  throw new HttpException(
    {
      statusCode: HttpStatus.UNAUTHORIZED,
      responseCode: 602,
      message: 'Email is incorrect',
    },
    HttpStatus.UNAUTHORIZED,
  );
}

export function throwIncorrectPassword(): never {
  throw new HttpException(
    {
      statusCode: HttpStatus.UNAUTHORIZED,
      responseCode: 603,
      message: 'Password is incorrect',
    },
    HttpStatus.UNAUTHORIZED,
  );
}
