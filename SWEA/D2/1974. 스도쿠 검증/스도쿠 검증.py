T = int(input())

for test_case in range(1, T + 1):

    arr = []
    for _ in range(9):
        arr.append(list(map(int,input().split())))
    answer = 1

    # 행
    for i in range(9):
        count_arr = [0] * 10
        for j in range(9):
            # 이미 카운팅 된 수라면
            if(count_arr[arr[i][j]] != 0):
                answer = 0
            else:
                count_arr[arr[i][j]] += 1

    # 열
    for i in range(9):
        count_arr = [0] * 10
        for j in range(9):
            # 이미 카운팅 된 수라면
            if(count_arr[arr[j][i]] != 0):
                answer = 0
            else:
                count_arr[arr[j][i]] += 1

    # 3*3
    for i in range(0,7,3):
        for j in range(0,7,3):
            count_arr = [0] * 10
            for x in range(i,i+3):
                for y in range(j,j+3):
                    if(count_arr[arr[x][y]] != 0):
                        answer = 0
                    else:
                        count_arr[arr[x][y]] += 1

    print(f"#{test_case}",answer)


# 모든 행, 열, 각 섹션의 사각형을 확인하면 된다.
# 더 쉬운 방법이 있을까?