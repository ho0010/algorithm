def solution(name):
    answer = 0
    
    name_len = len(name)
    
    min_move = name_len - 1
    
    for i in range(name_len):
        char = name[i]

        answer += min(ord(char)-ord('A'),ord('Z')-ord(char)+1)
        
        next_i = i+1
        while next_i < name_len and name[next_i] == 'A':
            next_i += 1
        
        min_move = min(min_move, 2*i + name_len - next_i, i+2 * (name_len - next_i))
        
    answer += min_move
        
    return answer

# 하나씩 확인하면서 타겟과 맞춘다.
# 단어를 변경할 때는 아스키코드로 계산해서 최솟값을 더한다
# 해당 단어로 이동시에는 다음 이동할 곳이 A면 카운팅하지 않는다. 이러면 왼쪽으로 안가도 됨
# Z와 a 사이에는 6개의 특수문자가 있다.

# 이동과 변경을 분리해서 생각. 이동할 수 있는 모든 경우의 수를 고려해서 min을 골라야 하는 것.
# 1. 좌우 이동의 최댓값 = 오른쪽으로만 계속 이동
# 2. 오른쪽으로 갔다가 다시 왼쪽으로 턴
# 3. 왼쪽으로 먼저 갔다가 오른쪽으로 턴