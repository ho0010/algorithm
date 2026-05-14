
T = int(input())

def rotate(arr,n):

    newArr = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            newArr[i][j] = arr[n-j-1][i]

    return newArr

for test_case in range(1, T + 1):

    k = int(input())
    arr = []

    for _ in range(k):
        arr.append(list(map(int,input().split())))
    
    arr_90 = rotate(arr,k)
    arr_180 = rotate(arr_90,k)
    arr_270 = rotate(arr_180,k)


    print(f"#{test_case}")

    for i in range(k):
        s_90 = "".join(map(str,arr_90[i]))
        s_180 = "".join(map(str,arr_180[i]))
        s_270 = "".join(map(str,arr_270[i]))

        print(s_90,s_180,s_270)


# 90도 로테이션 시켜주는 함수를 만들면 된다.