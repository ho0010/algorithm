from collections import deque

def solution(rectangle, characterX, characterY, itemX, itemY):
    MAX = 102
    
    board = [[-1]* MAX for _ in range(MAX)]
    
    # 사각형들을 배열에 그리기 (2배)
    for r in rectangle:
        x1,y1,x2,y2 = map(lambda x: x*2,r)
        
        for i in range(x1,x2+1):
            for j in range(y1,y2+1):
                # 현재 좌표가 사각형 완전 내부라면
                if x1<i<x2 and y1<j<y2:
                    board[i][j] = 0
                # 현재 좌표가 테두리인 경우
                elif board[i][j] != 0:
                    board[i][j] = 1
    
    q = deque()
    
    q.append((characterX*2, characterY * 2,0))
    
    visited = [[False]*MAX for _ in range(MAX)]
    visited[characterX*2][characterY *2] = True
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    
    while q:
        x,y,dist = q.popleft()
        
        if x == itemX * 2 and y == itemY *2:
            return dist //2
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            # 맵 범위 예외 처리
            if 0 <= nx < MAX and 0 <= ny <MAX:
                # 테두리면서 아직 방문하지 않은 곳
                if board[nx][ny] == 1 and not visited[nx][ny]:
                    visited[nx][ny] = True
                    q.append((nx,ny,dist+1))
    
    
    return answer

# 어차피 이어져있어서 BFS 순차적으로 닿는대로 가면 됨.
# 모든 도형을 합쳐서 색칠하고 바깥 가장자리 좌표만 모으는 방법
## 좌표로 받은것 -> 내부로 칠하기 how?
## 도형 한칸을 좌표로 생각하면? 왼쪽 아래 모서리를 한칸이라고 생각
## 전부 색칠 -> 1,1부터 확인하며 가장자리 확보 -> 시뮬레이션
### 가로 혹은 세로로만 갈 수 있음. 이미 색칠된 곳이면 갈 수 있음. 

# 다만 문제는 