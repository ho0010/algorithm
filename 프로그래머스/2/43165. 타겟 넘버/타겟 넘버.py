def solution(numbers, target):
    answer = 0
    
    length = len(numbers)
    
    def dfs(depth, value):
        nonlocal answer
        
        if depth == length:
            if value == target:
                answer += 1
            return
                
        # +, - 모두 해야하는데 어캐하지?   
        value += numbers[depth]
        dfs(depth+1,value)
        value -= numbers[depth]
    
        value -= numbers[depth]
        dfs(depth+1,value)
        value += numbers[depth]        
    
    dfs(0,0)
    
    return answer

# DFS
# 2의 제곱승이라 다 해도 백만 완탐도 가능
# 가지치기 가능해보임
# 트리 생각해서 각 자리에서 +,- 선택한다고 생각하고 depth가 길이만큼 되었을때 타겟과 비교