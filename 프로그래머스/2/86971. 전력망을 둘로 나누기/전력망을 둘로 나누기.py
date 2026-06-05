from collections import deque

def solution(n, wires):
    answer = n
    
    graph =[[] for _ in range(n+1)]
    for v1, v2 in wires:
        graph[v1].append(v2)
        graph[v2].append(v1)
        
    for v1, v2 in wires:
        
        visited = [False] * (n+1)
        
        # v1에서 시작할 건데 v2를 방문처리 해야 넘어가지 못함
        visited[v2] = True
        visited[v1] = True
        
        queue = deque([v1])
        count = 1
        
        while queue:
            cur = queue.popleft()
            for next_node in graph[cur]:
                if visited[next_node] == False:
                    visited[next_node] = True
                    queue.append(next_node)
                    count += 1
        answer = min(answer, abs(count-(n-count)))

    return answer

# 각 연결 정보 중에 하나를 뺐을 때 가장 비슷한 크기로 나눠지는 값을 리턴
# 하나씩 제외해서 모든 경우의 수를 다뤄야 함

# 각 원소를 제외한 배열 생성 (왼쪽 원소는 first, 오른쪽은 second에 포함)
# set 집합 활용해서 개수로 비교

# 왼쪽 오른쪽이 각각 이어져있다는 보장이 없다.
# 결국 그래프를 만들어서 연결된 송전탑 정보를 각각에 저장해야 한다.
# BFS와 visited 활용해서 시작 지점부터 연결된 모든 노드를 돌며 count