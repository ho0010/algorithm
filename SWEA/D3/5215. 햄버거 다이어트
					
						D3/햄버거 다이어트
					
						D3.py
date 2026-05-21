max_taste = 0
food_list = []


def dfs(index, now_cal, now_taste):
    global max_taste

    if now_cal > L:
        return

    if index == N:
        max_taste = max(max_taste, now_taste)
        return

    food_cal = food_list[index][1]
    food_taste = food_list[index][0]

    dfs(index + 1, now_cal + food_cal, now_taste + food_taste)
    dfs(index + 1, now_cal, now_taste)


T = int(input())

for test_case in range(1, T + 1):
    N, L = map(int, input().split())

    for _ in range(N):
        food_list.append(list(map(int, input().split())))

    dfs(0, 0, 0)

    print(f"#{test_case} {max_taste}")

    max_taste = 0
    food_list = []

# 모든 경우의 수 탐색 그 중 최댓값 -> DFS 재귀
# 재료의 수를 보아하니 visited는 괜찮지 않을까?

# 첫 음식부터 넣는 경우와 안넣는 경우 모두를 계산하며 dfs를 호출
