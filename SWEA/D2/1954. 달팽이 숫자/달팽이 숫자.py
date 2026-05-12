
T = int(input())

direction = [[0,1],[1,0],[0,-1],[-1,0]]

for test_case in range(1, T + 1):

    num = int(input())

    arr = [[0] * num for _ in range(num)]

    dIdx = 0
    nowP = [0,0]

    for i in range(1,num*num+1):
        arr[nowP[0]][nowP[1]] = i
        
        nr = direction[dIdx][0] + nowP[0]
        nc = direction[dIdx][1] + nowP[1]

        # 이미 방문한 곳이거나 범위에 어긋나면 direction 변경
        if nr >= num or nc >=num or nr <0 or nc<0 or arr[nr][nc]!= 0:
            dIdx = (dIdx+1)%4
        
        nowP[0] += direction[dIdx][0]
        nowP[1] += direction[dIdx][1]

    print(f"#{test_case}")

    for inArr in arr:
        print(*inArr)  

# 규칙
# 각각에서 위, 오른, 아래, 왼 라고 생각하니 쉽지 않다.

# 각 방향에서 끝까지 가면 어떨까?
# 범위 끝에 닿거나, visited를 만나면 방향을 틀도록

# direction을 관리하면 어떨까

# size로 생각해보면? -> 2로 나눈 오름차순만큼의 연산이 필요 -> 일단 구체화가 안됨