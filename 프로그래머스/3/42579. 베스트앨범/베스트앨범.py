from collections import defaultdict

def solution(genres, plays):
    answer = []
    
    song_len = len(plays)
    
    songs = defaultdict(list)
    song_rank = defaultdict(int)
    
    for i in range(song_len):
        songs[genres[i]].append([plays[i],i])
        song_rank[genres[i]] += plays[i]
    
    sorted_genres = sorted(song_rank.keys(), key=lambda x: song_rank[x], reverse = True)
    
    for g in sorted_genres:
        songs[g].sort(key=lambda x: (-x[0],x[1]))
        
        for song in songs[g][:2]:
            answer.append(song[1])
    
    return answer

# 장르를 key로 plays 값이랑 인덱스를 같이 리스트에 넣자.
# 장르별로 plays 값을 더해서 내림차순 정렬하고 내부 리스트도 play 값에 따라 내림차순 정렬

# lambda x 활용한 정렬