# 총 10개의 평점 (비율에 맞춰 할당됨)
grades = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']

T = int(input())
for test_case in range(1, T + 1):
    # N: 학생 수, K: 학점을 알고 싶은 학생의 번호
    N, K = map(int, input().split())
    
    scores = []
    # N명의 학생 점수 입력 받아 총점 계산하기
    for _ in range(N):
        mid, final, assign = map(int, input().split())
        # 중간 35%, 기말 45%, 과제 20%
        total = (mid * 0.35) + (final * 0.45) + (assign * 0.20)
        scores.append(total)
    
    # K번째 학생의 점수 미리 저장해두기 (인덱스는 0부터 시작하므로 K-1)
    target_score = scores[K - 1]
    
    # 점수들을 내림차순(높은 순)으로 정렬
    scores.sort(reverse=True)
    
    # 정렬된 리스트에서 타겟 학생의 등수(인덱스) 찾기
    rank = scores.index(target_score)
    
    # N명의 학생에게 10개의 평점을 동일한 비율로 부여하므로,
    # 한 평점당 (N // 10)명의 학생이 배정됨.
    # 등수(rank)를 (N // 10)으로 나눈 몫이 평점 리스트의 인덱스가 됨.
    grade_idx = rank // (N // 10)
    
    answer = grades[grade_idx]
    
    # SWEA 출력 양식에 맞춰 출력
    print(f"#{test_case} {answer}")