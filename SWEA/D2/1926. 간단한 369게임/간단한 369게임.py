N = int(input())
arr = []
    
for i in range(1,N+1):
    count_dash = 0
    nowI = i
    while nowI > 0:  
        if nowI%10 == 3 or nowI%10 == 6 or nowI%10 == 9:
            count_dash += 1
        nowI //= 10

    if count_dash == 0:
        arr.append(i)
    else:
        arr.append("-" * count_dash)
    
print(*arr)


# 배열에 N까지의 수를 차례대로 넣는다.
# 각 수에 대해서 자릿수 검사를 해서 3, 6, 9가 있으면 그 개수만큼의 "-"를 붙여서 출력