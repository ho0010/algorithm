def solution(s):
    answer = True
    
    pCnt = 0
    yCnt = 0
    
    for x in s.lower():
        if x == 'p':
            pCnt += 1
        elif x == 'y':
            yCnt += 1
        
    
    if pCnt == yCnt:
        answer = True
    else: 
        answer = False

    return answer