def solution(numbers):
    check_list = [0,0,0,0,0,0,0,0,0,0]
    
    answer = 0
    
    for x in numbers:
        check_list[x] = 1
    
    for k in range(10):
        if check_list[k] == 0:
            answer += k
    
    return answer