import heapq

def solution(scoville, K):
    answer = 0
    
    heapq.heapify(scoville)

    while scoville[0] < K:
        if len(scoville) < 2:
            return -1
        
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        
        new = first + second * 2 
        
        heapq.heappush(scoville,new)
        
        answer += 1

        
    return answer

# 무조건 작은 수 2개를 가지고 해당 연산을 수행한 후 다시 정렬 인데 왜 힙을 써야하지? 최적화 문제인가