from collections import deque

dr = [-1,1,0,0]
dc = [0,0,-1,1]

def block_sort(block):
    min_r = min(b[0] for b in block)
    min_c = min(b[1] for b in block)
    
    sorted_block = [[r-min_r,c-min_c] for r,c in block]
    sorted_block.sort()
    
    return sorted_block

def rotate(block):
    rotated = [[c,-r] for r,c in block]
    return block_sort(rotated)

def get_blocks(board,target_num):
    
    row = len(board)
    
    # 블럭 수집
    blocks = []
    visited = [[False] * row for _ in range(row)]
    
    for i in range(row):
        for j in range(row):
            if board[i][j] == target_num and visited[i][j] == False:
                block = []
                q = deque()
                
                q.append([i,j])
                visited[i][j] = True
                block.append([i,j])
                while(q):
                    r,c = q.popleft()
                    
                    for k in range(4):
                        nr = r+dr[k]
                        nc = c+dc[k]
                        
                        # 유효 범위, 미방문, 블럭
                        if 0 <= nr < row and 0 <= nc <row and visited[nr][nc] == False and board[nr][nc] == target_num:
                            q.append([nr,nc])
                            visited[nr][nc] = True
                            block.append([nr,nc])
                            
                blocks.append(block_sort(block))             
    return blocks

def solution(game_board, table):
    answer = 0
    
    empty_spaces = get_blocks(game_board,0)
    
    blocks = get_blocks(table,1)
    
    used = [False] * len(blocks)
    
    for empty in empty_spaces:
        for i, block in enumerate(blocks):
            if used[i]:
                continue
            if len(empty) != len(block):
                continue
            
            is_matched = False
            current_block = block
            
            for _ in range(4):
                if empty == current_block:
                    is_matched = True
                    break
                current_block = rotate(current_block)
            
            if is_matched:
                used[i] = True
                answer += len(block)
                break
    
    
    return answer

# table에서 먼저 블럭에 대한 정보를 수집
## 정보를 어떤 형태로 다루어야하지? 
### 일단 좌표 뽑아내고 각 좌표 더미에서 min 값으로 다 빼주면 좌표 정규화 가능
# game_board 빈칸마다 넣어보는 것 

# 1. 좌표 정규화 2. rotate zip 안됨. 좌표들 모음이라 3. 둘다 뽑아내서 모양 맞춘다고 생각하면 함수 분리 
