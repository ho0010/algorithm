
T = int(input())

for test_case in range(1, T + 1):

    N,M = list(map(int,input().split()))
    arr = []
    
    for _ in range(N):
        arr.append(list(map(int,input().split())))
    answer = 0

    for i in range(N):
        count = 0
        for j in range(N):
            if arr[i][j]==1:
                count +=1
            else:
                if count == M:
                    answer +=1
                count = 0
            
            if j == N-1:
                if count == M:
                    answer +=1

    for i in range(N):
        count = 0
        for j in range(N):
            if arr[j][i]==1:
                count +=1
            else:
                if count == M:
                    answer +=1
                count = 0
                
            if j == N-1:
                if count == M:
                    answer +=1
    print(f"#{test_case}",answer)


# 입력을 리스트에 넣기
# 각 1에서 특정 방향으로 뻗어나갈 수 있는 모든 경우의 수를 본다
# 다만 중간에 낀 수를 고려해서 확인하는 방향의 반대 방향으로 뻗어갈 수 있는 경우를 예외처리 즉, 제외한다.
# 근데 구성 요소가 겹쳐도 됨, 완전히 같으면 안되지만

# 위 방식은 너무 복잡.
# 각 행과 열에서 연속된 1의 수를 계산하면 어떨까