def solution(n, times):
    answer = 0
    
    left = 1
    right = max(times) * n
    
    while left < right:
        mid = (left + right) // 2
        
        count = 0
        
        for t in times:
            count += mid // t
        
        if count >= n:
            right = mid 
            answer = right
        else:
            left = mid + 1
    

    
    return answer

# times의 배수들을 배열에 넣고 인덱스로 탐색하면 이론상 가능하지만 10억이라 터진다.

# max 기준을 잡는게 중요한데. max_time * n으로 잡으면 된다.
# 1부터 시작해서 이분탐색하면 됨.