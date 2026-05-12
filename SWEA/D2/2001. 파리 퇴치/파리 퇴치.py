T = int(input())

for test_case in range(1, T + 1):

    N,M = map(int,input().split())
    arr = []
    max_count = 0
    
    for _ in range(N):
        arr.append(list(map(int,input().split())))
    
    for i in range(0,N-M+1):
        for j in range(0,N-M+1):
            now_count = 0
            for x in range(i,i+M):
                for y in range(j,j+M):
                    now_count += arr[x][y]
            max_count= max(max_count,now_count)
    
    print(f"#{test_case}",max_count)

    
    



# 기준 인덱스에서 오른쪽 그리고 아래로 M 크기만큼 뻗어나가서 더하면 됨