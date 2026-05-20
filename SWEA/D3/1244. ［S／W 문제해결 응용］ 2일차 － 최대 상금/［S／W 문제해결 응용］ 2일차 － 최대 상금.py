

max_num = 0
visited = set()


def dfs(count, now_num, limit):
    global max_num

    if count == limit:
        max_num = max(max_num, int(now_num))
        return

    for i in range(len(now_num)):
        for j in range(i + 1, len(now_num)):
            list_num = list(now_num)
            list_num[i], list_num[j] = list_num[j], list_num[i]
            swapped_num = "".join(list_num)

            if (count + 1, swapped_num) not in visited:
                visited.add((count + 1, swapped_num))
                dfs(count + 1, swapped_num, limit)


T = int(input())

for test_case in range(1, T + 1):
    num, k = input().split()
    k = int(k)

    max_num = 0
    visited.clear()

    dfs(0, num, k)
    print(f"#{test_case}", max_num)

# 모든 경우의 수로 비교해서 정렬해야 함.
