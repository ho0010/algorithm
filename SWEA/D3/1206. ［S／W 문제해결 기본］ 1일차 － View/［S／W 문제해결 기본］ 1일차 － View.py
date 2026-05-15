
for test_case in range(1,11):
    N = int(input())
    arr = list(map(int,input().split()))

    answer = 0

    for n in range(2,len(arr)-1):
        now_max = max(arr[n-2:n+3])
        if(arr[n]==now_max):
            second_max = max(arr[n-2:n] + arr[n+1:n+3])
            answer += now_max - second_max

    print(f"#{test_case}",answer)




# 각 수에 대해서 자신의 위치를 기준으로 -2,-1,1,2 의 위치에 있는 값의 크기를 확인
# 그 범위안의 가장 큰 수가 자신이다 -> answer += 자신 - 두 번째 큰 수
# 자기신이 공동 1위이거나 그 이하다 -> pass