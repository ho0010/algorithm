from collections import deque

def solution(priorities, location):
    answer = 0
    
    items = deque()
    
    # 초기 list 세팅
    for i in range (len(priorities)):
        items.append([i,priorities[i]])
    
    count = 0
    
    now_pop = [-1,-1]
    
    while items:
        now_pop = items.popleft()
        
        if any(now_pop[1] < item[1] for item in items):
            items.append(now_pop)
        else: 
            count += 1
        
            if now_pop[0] == location:
                return count
    
    answer = count
    
    return answer

# 동작 자체는 서술한 바를 따라가자
# list에 처음 인덱스(0부터 시작), priorities를 같이 넣는다.
# 서술한대로 동작하고 인덱스 == location이면 순서(따로 count) return

# queue 용도로 쓸 때는 deque가 확실히 메리트 있음 다만 인덱스 접근은 안됨.
# any -> 다 돌면서 확인해야할 때 좋음
# while 조건문에 리스트 넣을 수 있다.