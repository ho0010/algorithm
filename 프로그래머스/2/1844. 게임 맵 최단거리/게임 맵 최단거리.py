from collections import deque

dr = [-1,1,0,0]
dc = [0,0,-1,1]

def solution(maps):
    
    n = len(maps)
    m = len(maps[0])
    q = deque()
    
    dist = [[-1]*m for _ in range (n)]
    
    dist[0][0] = 1
    q.append([0,0])
    
    while q:
        r, c = q.popleft()
        
        for i in range(4):
            nr = r + dr[i]
            nc = c + dc[i]
            
            # 범위에 벗어남
            if nr < 0 or nr >= n or nc < 0 or nc >= m:
                continue
            
            # 방문한적 없고 길임
            if dist[nr][nc] == -1 and maps[nr][nc] == 1:
                q.append([nr,nc])
                dist[nr][nc] = dist[r][c] + 1
    
    # print(dist)
    
    answer = dist[n-1][m-1]
    return answer

# 전형적인 BFS dist 문제
# 범위에 벗어남, 이미 방문한 곳 pass