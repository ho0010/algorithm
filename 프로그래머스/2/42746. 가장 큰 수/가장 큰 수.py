from functools import cmp_to_key

def compare(a, b):
    if a + b > b + a:
        return -1  
    elif a + b < b + a:
        return 1  
    else:
        return 0  

def solution(numbers):
    numbers_str = list(map(str, numbers))
    
    numbers_str.sort(key=cmp_to_key(compare))
    
    answer = ''.join(numbers_str)
    
    return "0" if answer[0] == '0' else answer

# 단순히 생각하면 모든 경우의 수를 확인하면 된다.
# 가장 앞자리 기준으로 큰 수 정렬 같으면 그 다음 자리까지