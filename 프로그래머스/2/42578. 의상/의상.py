from collections import defaultdict

def solution(clothes):
    answer = 0
    
    cloth_dict = defaultdict(int)
    
    for name, kind in clothes:
        cloth_dict[kind] += 1
    
    answer = 1
    for count in cloth_dict.values():
        answer *= (count+1)
        
    return answer - 1
    

# 해당 옷을 입는다 입지 않는다로 모든 경우의 수를 쉽게 찾을 수 있다.
# 아주 기본적인 수학인데.. 구현 자체에 몰두하면 이런 발상을 못할 수 있다.