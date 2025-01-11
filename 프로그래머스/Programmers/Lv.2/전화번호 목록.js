function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].substr(0, phone_book[i].length)) {
      return false;
    }
  }
  return true;
}

// phone_book의 0번째 요소와 phone_book의 다른 요소의 앞 부분이 일치하는 지 여부 확인
