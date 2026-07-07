def solution(word):
    dictionary = []
    words = ['A','E','I','O','U']
    
    def dfs(current_word):
        if len(current_word) == 5:
            return
        
        for w in words:
            next_word = current_word + w
            dictionary.append(next_word)
            dfs(next_word)
        
    dfs('')
    
    
    return dictionary.index(word) + 1

# 총 5+25+125+625+3125 = 약 4000개
# 완탐 가능

