T = int(input())

for test_case in range(1, T + 1):

    num = int(input())

    arr = list(map(int,input().split()))

    count_list = [0] * 101

    for num in arr:
        count_list[num] += 1

    max_idx = 0

    for i in range(len(count_list)):
        if count_list[i] >= count_list[max_idx]:
            max_idx = i

    print(f"#{test_case}", max_idx)

# DAA