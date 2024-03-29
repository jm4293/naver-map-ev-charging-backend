export enum ResponseMessage {
  SUCCESS = '성공',
  VALIDATION_FAIL = '유효성 검사 실패',
  DUPLICATE_EMAIL = '중복된 이메일',
  DUPLICATE_NICKNAME = '중복된 닉네임',
  DUPLICATE_TEL_NUMBER = '중복된 전화번호',
  NO_EXIST_USER = '존재하지 않는 사용자',
  NO_EXIST_BOARD = '존재하지 않는 게시글',
  SIGN_IN_FAIL = '로그인 실패',
  AUTHORIZATION_FAIL = '권한 없음',
  NO_PERMISSION = '권한 없음',
  DATABASE_ERROR = '데이터베이스 오류',
}
