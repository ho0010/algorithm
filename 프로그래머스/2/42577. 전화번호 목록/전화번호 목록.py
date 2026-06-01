def solution(phone_book):
    answer = True
    
    phone_book.sort()
    
    for i in range(len(phone_book)-1):
        if phone_book[i] == phone_book[i+1][:len(phone_book[i])]:
            return False
            
    return answer

# 그냥 sort하면 아무래도 문자열이다보니 사전순으로 정렬이 되는데 그럼 예시 3번처럼 정렬 됨.
# 그러면 그냥 바로 뒤에거랑만 비교하면 됨.
# 정렬은 숫자 중심으로 많이 쓰지만 문자 정렬도 잘 알고 있자.