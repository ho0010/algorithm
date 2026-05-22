
for test_case in range(1, 11):

    dump_count = int(input())
    height_list = list(map(int, input().split()))

    for _ in range(dump_count):
        height_list.sort()
        height_list[0] += 1
        height_list[len(height_list)-1] -= 1

    height_list.sort()
    answer = height_list[len(height_list)-1] - height_list[0]

    print(f"#{test_case} {answer}")

# 크기순으로 정렬한 후에 매 경우에 가장 큰 값의 상자를 가장 작은 값의 상자에 옮기면 된다.