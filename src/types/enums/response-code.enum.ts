export enum ResponseCode {
  SUCCESS = 'SUCCESS',
  VALIDATION_FAIL = 'VALIDATION_FAIL',
  DUPLICATE_EMAIL = 'DUPLICATE_EMAIL',
  DUPLICATE_NICKNAME = 'DUPLICATE_NICKNAME',
  DUPLICATE_TEL_NUMBER = 'DUPLICATE_TEL_NUMBER',
  NO_EXIST_USER = 'NO_EXIST_USER',
  NO_EXIST_BOARD = 'NO_EXIST_BOARD',
  SIGN_IN_FAIL = 'SIGN_IN_FAIL',
  AUTHORIZATION_FAIL = 'AUTHORIZATION_FAIL',
  NO_PERMISSION = 'NO_PERMISSION',
  DATABASE_ERROR = 'DATABASE_ERROR',
}
