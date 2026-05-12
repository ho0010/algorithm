T = int(input())

for test_case in range(1, T + 1):

    n = int(input())
    
    arr = list(map(int, input().split()))
    
    answer = 0

    max_num = 0

    for num in arr[::-1]:
        if num > max_num:
            max_num = num
        else:
            answer += max_num-num
        
    
    print(f"#{test_case} {answer}")
    

# 해당 인덱스 뒤에 자기보다 큰 수가 있느냐가 기준
# 뒤에서부터 생각
# max에 맨 끝 인덱스의 수를 넣고 시작
# 그 앞 인덱스에서 그 값과 비교해서 max 갱신과 값 처리까지 진행