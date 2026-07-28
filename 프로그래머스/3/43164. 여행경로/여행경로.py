from collections import defaultdict

def solution(tickets):
    answer = ['ICN']
    ticket_len = len(tickets)
    
    graph = defaultdict(list)
    
    tickets.sort(reverse=True)
    
    for start, end in tickets:
        graph[start].append(end)
    
    def dfs(departure, depth):
        if depth == ticket_len:
            return True

        if departure in graph and graph[departure]:
            
            for i in range(len(graph[departure])):
                next = graph[departure].pop()
                
                answer.append(next)
                if dfs(next,depth+1):
                    return True
            
                answer.pop()
                graph[departure].insert(0,next)
                
        return False
    
    dfs('ICN',0)
    
    return answer

# 알파벳 순서가 앞서는 경로 -> 이 조건으로 인해 DFS가 필요 없는 건가? -> 그건 아닐 것
# 모든 항공권을 사용했는지 여부 -> depth로 DFS
## 처음 배열 길이 == depth -> 종료 조건
## 출발지에 맞는 티켓을 조회해서 가장 빠른 알파벳 사용 다음 dfs에는 그 출발지 넘겨주고 반복
### 근데 무조건 가장 빠른 알파벳 사용을 하면 모든 경우를 못봐서 문제가 생길 수 있나?

### 출발지 찾을 때 일단 for문은 터지니까 다른 방법이 필요 -> 인접 리스트로 정리하면 해결