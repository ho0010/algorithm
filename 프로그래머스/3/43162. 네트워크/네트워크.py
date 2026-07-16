from collections import deque

def solution(n, computers):
    answer = 0
    q = deque()
    
    computers_visited = [0] * n
    
    for i in range(n):
        if computers_visited[i] == 1:
            continue
            
        q.append(i)
        computers_visited[i] = 1
        answer += 1
        
        while(q):
            now_computer_idx = q.popleft()
            
            for index in range(n):

                if computers_visited[index] == 0 and computers[now_computer_idx][index] == 1:
                    q.append(index)
                    computers_visited[index] = 1

    return answer

# 해당 컴퓨터 인덱스를 봤을 때 자기 인덱스가 아닌 다른 인덱스가 1이면 연결되어 있다.
# 네트워크를 덩어리로 보고 덩어리 수를 세면 된다.
# 0번 컴퓨터부터 시작해서 갈 수 있는 컴퓨터를 확인해서 그 인덱스 확인
# 컴퓨터 visited 만들어서 true면 pass

# BFS + visited
