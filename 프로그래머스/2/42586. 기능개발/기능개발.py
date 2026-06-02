def solution(progresses, speeds):
    answer = []
    
    index = 0
    
    while index < len(progresses):
        for i in range(0,len(progresses)):
            progresses[i] += speeds[i]
        
        nowCnt = 0
        
        while progresses[index] >= 100:
            nowCnt += 1
            index += 1
            if index == len(progresses):
                break
        if nowCnt != 0:
            answer.append(nowCnt)
    
    
    return answer

# 순서는 중요. 바꿀 수 없음
# 일단 맨 앞에 있는거 기준으로 progress를 계속 높이다가 100보다 크거나 같으면
# return에 카운팅만큼 추가