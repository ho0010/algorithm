function solution(k, dungeons) {
    let maxCount = 0;
    const n = dungeons.length;
    let visited = new Array(k).fill(false);
    
    function dfs(currentK, count){
        maxCount = Math.max(maxCount,count);
        
        for(let i =0; i<n;i++){
            const [minRequired, consumption] = dungeons[i];
            
            if(!visited[i] && currentK >= minRequired){
                visited[i] = true;
                
                dfs(currentK - consumption,count+1);
                
                visited[i] = false;
            }
        }
    }
    
    dfs(k,0);
    return maxCount;
}

// 던전 수가 적어서 그냥 단순 완탐 돌려도 된다.
// 모든 경우의 수의 순서 만들기
