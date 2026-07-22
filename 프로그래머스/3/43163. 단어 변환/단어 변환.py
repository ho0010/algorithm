min_value = 51

def solution(begin, target, words):
    answer = 0
    changable_value = len(begin) - 1
    
    # 0 예외 처리
    if target not in words:
        return 0
    
    # 초기 세팅
    used = []
    
    def dfs(now, count):
        global min_value
        if now == target:
            min_value = min(count,min_value)
            return 0
        
        for word in words:
            # 이미 있으면 pass
            if word in used:
                continue
            # 2개 일치하는지 확인, used에 추가 -> dfs 호출 -> remove
            if changable_value == sum(a == b for a,b in zip(word, now)):
                used.append(word)
                dfs(word, count + 1)
                used.remove(word)
    
    dfs(begin,0)
        
    return min_value

# begin 단어를 시작으로 하나를 제외하고 전부 일치하는지를 확인한 후 교체해야하는데
# 여러 경우의 수가 있을 수 있어서 백트래킹이 필요해 보임
# begin (혹은 현재)와 2자 일치 and target이랑은 완전 일치하는지만 확인하고 모든 경우의 수를 확인?

# 처음에 words에 cog가 없으면 0 반환하고 끝
# 이후에는 words랑 하나씩 비교한다.
## begin(현재)와 2자 일치하면 재귀 호출(현재 단어, count), visited 사용 (한 번 바꾸면 다시 앞에서부터 확인)
### 2자 일치를 확인하는 방법? 길이가 3 고정이 아님. 
