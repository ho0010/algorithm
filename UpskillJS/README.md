
# Ch 01. 코딩 테스트 개요 및 문제 풀이를 위한 JS 문법

**코딩 테스트에 관하여 - 시간 복잡도를 고려해 구현할 것**
<img width="918" alt="image" src="https://github.com/user-attachments/assets/2c08b7c6-645f-4bcb-a709-464cfc903eec" />

## JS 핵심 문법

**코딩 테스트 빠른 출력을 위한 방법**
<img width="915" alt="image" src="https://github.com/user-attachments/assets/71f43c2c-62e3-4d5c-8aef-3636ed8f460b" />

**코딩 테스트용 JS 기본 입력 - fs모듈**
<img width="915" alt="image" src="https://github.com/user-attachments/assets/ef5e13b0-cb9b-45f9-9060-60ecefde1471" />
<img width="915" alt="image" src="https://github.com/user-attachments/assets/2c6a0f98-a567-4aed-9a37-7dc79245600f" />

**사용자 입력 처리 - readline 모듈 사용**
<img width="915" alt="image" src="https://github.com/user-attachments/assets/b2f0acb0-b6d6-465d-b9e5-3c327cd32e89" />

**집합 자료형 - Set**
<img width="602" alt="image" src="https://github.com/user-attachments/assets/8f641bcc-8e06-43b4-b03b-a1a160d6eb2e" />

**이스케이프 시퀀스**
<img width="602" alt="image" src="https://github.com/user-attachments/assets/ec440615-7b40-423f-b57a-c7a9e05692e4" />

# Ch 02. JS 핵심 자료구조

## 자료구조

1. 선형 구조
- 배열
- 연결 리스트
- 스택
- 큐

선형 구조 - 하나의 데이터 뒤에 다른 데이터가 하나 존재하는 자료구조, 일렬로 연속적으로(순차적으로) 연결되어 있다.

2. 비선형 구조
- 트리
- 그래프

비선형 구조 - 하나의 데이터 뒤에 다른 데이터가 여러 개 올 수 있는 자료구조이다.
<br />

> 프로그램의 성능 측정 방법

시간 복잡도 - 연산 횟수

공간 복잡도 - 메모리의 양

Big-O 표기법 - 특정한 알고리즘이 얼마나 효율적인지 수치적으로 표현 가능, 가장 빠르게 증가하는 항만을 고려한다.

<img width="602" alt="image" src="https://github.com/user-attachments/assets/aefa9f43-d388-41e8-b0c8-5613b8ad42d5" />

<img width="596" alt="image" src="https://github.com/user-attachments/assets/7b7617d3-0b38-45ee-abaa-446e7aec3bc8" />

## 배열과 리스트

### 배열

- 여러 개의 변수를 담는 공간
- 인덱스가 존재하며, 인덱스는 0부터 시작한다.
- 배열의 공간은 연속적으로 할당된다.
- 캐시 히트 가능성이 높으며, 조회가 빠르다.
- 배열의 크기를 미리 지정해야 하는 것이 일반적이므로, 데이터의 추가 및 삭제에 한계가 있다.

### 연결 리스트

- 컴퓨터의 메인 메모리상에서 주소가 연속적이지 않다.
- 크기는 동적으로 변경 가능하다.
- 포인터를 통해 다음 데이터의 위치를 가르킨다는 점에서 삽입과 삭제가 간편하다.
- 알고리즘에서 구현해야하는 경우는 많지 않음

### JS 배열

- 일반 배열처럼 임의의 인덱스를 이용해 직접적인 접근이 가능하다.
- JS의 배열은 동적 배열의 기능을 제공해, 원소의 추가가 가능하다.
- 배열의 용량이 가득 차면, 자동으로 크기를 증가시킨다.
- 내부적으로 포인터를 사용해, 연결 리스트의 장점도 가지고 있다.
- 배열 혹은 스택의 기능이 필요할 때 사용할 수 있다.
- 큐의 기능을 제공하지는 못한다.

<img width="688" alt="image" src="https://github.com/user-attachments/assets/7d7af1fe-83d1-4005-9eea-6db9c66e1d43" />

## 스택

<img width="688" alt="image" src="https://github.com/user-attachments/assets/ee07d482-48c5-4c50-a00b-f6d0a8a8f334" />

<img width="688" alt="image" src="https://github.com/user-attachments/assets/73db3648-8839-4c77-9822-e81c664e8371" />

## 큐

```js
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

```

### 연결 리스트로 큐 구현하기

- 삽입과 삭제에 있어서 O(1)을 보장할 수 있다.
- 머리와 꼬리 두 개의 포인터를 가진다.
- 머리: 남아있는 원소 중 가장 먼저 들어온 데이터를 가르키는 포인터
- 꼬리: 남아있는 원소 중 가장 마지막으로 들어온 데이터를 가르키는 포인터
- 삽입, 삭제 연산시에 각 포인터를 옮겨주면 된다.

<img width="688" alt="image" src="https://github.com/user-attachments/assets/7cd5e3df-5f05-4f36-818d-a2adba29c2a7" />

<img width="688" alt="image" src="https://github.com/user-attachments/assets/55f71dcb-a647-468c-8636-3d0feea8d25b" />

## 트리와 우선순위 큐

### 트리

- 계층적인 구조를 표현
- 루트 노드: 부모가 없는 최상위 노드
- 단말 노드(leaf): 자식이 없는 노드
- 부모와 자식 관계가 성립함
- 형제 관계: 같은 부모를 가지는 노드

<img width="531" alt="image" src="https://github.com/user-attachments/assets/39351ccc-5082-48d3-a665-ef951a13eb01" />

- 이진 트리: 최대 2개의 자식을 가질 수 있는 트리
- 포화 이진 트리: 리프 노드를 제외한 모든 노드가 두 자식을 가지고 있는 트리
- 완전 이진 트리: 모든 노드가 왼쪽 자식부터 차근차근 채워진 트리
- 높이 균형 트리: 왼쪽 자식 트리와 오른쪽 자식 트리의 높이가 1 이상 차이 나지 않는 트리


### 우선순위 큐

<img width="582" alt="image" src="https://github.com/user-attachments/assets/a89ac86b-afe0-4b87-824c-82b448a8b7bc" />

<img width="582" alt="image" src="https://github.com/user-attachments/assets/637f45c9-17a9-4048-8e03-8d6d32885d45" />

- 일반적인 형태의 큐는 선형적인 구조를 가진다.
- 우선순위 큐는 이진트리 구조를 사용하는 것이 일반적이다.

### 힙

- 원소들 중에서 최댓값 혹은 최솟값은 빠르게 찾아낼 수 있는 자료구조다.
- 최대 힙: 값이 큰 원소부터 추출한다.
- 최소 힙: 값이 작은 원소부터 추출한다.
- 힙은 원소의 삽입과 삭제를 위해 O(log N)의 수행 시간을 요구한다.
- 단순한 N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일하다. 이 경우 시간 복잡도는 O(NlogN)이다.

**최대 힙: 부모 노드가 자식 노드보다 값이 큰 완전 이진 트리**

<img width="582" alt="image" src="https://github.com/user-attachments/assets/eec4a16e-7619-4b9d-871f-57c5aab05c70" />

<img width="582" alt="image" src="https://github.com/user-attachments/assets/9d339dfe-ecd5-4945-92e5-e85db7cb95e5" />

<img width="603" alt="image" src="https://github.com/user-attachments/assets/22dd88ee-21aa-4aa5-b215-1f41794a4115" />

<img width="603" alt="image" src="https://github.com/user-attachments/assets/d232365f-b5c8-4624-8483-a0ea9ee64253" />

<img width="603" alt="image" src="https://github.com/user-attachments/assets/59ddd9c8-ee49-40e4-a65e-ed11a628f4dd" />

- 최단 경로 알고리즘 등에서 힙이 필요한 경우 별도의 라이브러리를 사용해야 한다.

<img width="603" alt="image" src="https://github.com/user-attachments/assets/05ef378c-6739-495c-8df9-e63914956715" />

## 그래프의 표현

- 그래프란 사물을 정점과 간선으로 나타내기 위한 도구이다.
- 두 가지 방식으로 구현할 수 있다.
  - 인접 행렬: 2차원 배열을 사용하는 방식
    <img width="603" alt="image" src="https://github.com/user-attachments/assets/afcd2c61-fd47-4297-b739-7e3dc60712d2" />
    <img width="603" alt="image" src="https://github.com/user-attachments/assets/f7731d91-8d6a-4158-8880-f5b2c485fe37" />
    <img width="603" alt="image" src="https://github.com/user-attachments/assets/adbfa2ea-55b3-4707-9dfc-1dee8a153311" />

  - 인접 리스트: 연결 리스트를 이용하는 방식
    <img width="603" alt="image" src="https://github.com/user-attachments/assets/8281c815-50be-49da-a923-666eb37c6651" />
    <img width="621" alt="image" src="https://github.com/user-attachments/assets/8fd3222d-0da8-48df-baae-fcf30251c88e" />
    <img width="621" alt="image" src="https://github.com/user-attachments/assets/685aae6f-b3dc-4d50-bdb9-9b2ca1fc679b" />

<img width="621" alt="image" src="https://github.com/user-attachments/assets/bdfbab2c-f6d1-4b59-8edd-fa7a803b9ce9" />
- 인접 행렬 vs 인접 리스트
  
최단 경로 알고리즘을 구현할 때, 어떤 자료구조가 유용할까?

각각 근처의 노드와 연결되어 있는 경우가 많으므로, 간선 개수가 적어 인접 리스트가 유리하다.
   
# Ch 03. JS정렬(sorting) 알고리즘

## 1) 선택 정렬

- 매 단계에서 가장 작은 원소를 선택해 앞으로 보내는 정렬
- 앞으로 보내진 원소는 더 이상 위치가 변경되지 않는다.
- 매 단계에서 가장 작은 것을 선택하는 데에 약 N번의 연산이 필요하다.(선형 탐색)
- 결과적으로 약 N개의 단계를 거친다는 점에서 최악의 경우 O(N^2)의 시간 복잡도를 가진다.
- 시간 복잡도 O(N^2)로 비효율적인 정렬 알고리즘 중 하나다.

```js
// 선택 정렬 함수
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // 스왑 (swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
```

## 2) 버블 정렬

- 인접한 두 원소를 확인하여, 정렬이 안 되어 있다면 위치를 서로 변경한다.
- 한 번의 단계가 수행되면, 가장 큰 원소가 맨 뒤로 이동한다. => 각 단계를 거칠 때마다 가장 큰 값을 하나씩 확실하게 결정하는 것으로 이해할 수 있다.
- 그 다음 단계에서는 맨 뒤로 이동한 데이터는 정렬에서 제외한다.
- 최악의 경우 시간 복잡도 O(N^2)을 보장한다.
- 시간 복잡도 O(N^2)로 비효율적인 정렬 알고리즘 중 하나다.

```js
// 버블 정렬 함수
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) { // 내림차순 정렬
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```

## 3) 삽입 정렬

- 각 숫자를 적절한 위치에 삽입하는 정렬 기법이다.
- 각 단계에서 현재 원소가 삽입될 위치를 찾는다.
- 적절한 위치에 도달할 때까지 반복적으로 왼쪽으로 이동한다.
- 삽입 정렬을 수행할 때는 처음에 첫 번째 원소는 정렬이 되어 있다고 고려한다.
- 매 단계에서 현재 처리 중인 원소가 삽입될 위치를 찾기 위해 약 N번의 연산이 필요하다.
- 결과적으로 약 N개의 단계를 거친다는 점에서 최악의 경우 O(N^2)의 시간 복잡도를 가진다.

```js
// 삽입 정렬 함수
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동 (스왑)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
}

```

## 4) 병합 정렬

- 전형적인 분할 정복 알고리즘이다.

- 분할 정복(Divide and Conquer)
  1. 분할: 큰 문제를 작은 부분 문제(쉬운 문제)로 분할한다.
  2. 정복: 작은 부분 문제를 각각 해결한다.
  3. 조합: 해결한 부분 문제의 답을 이용해 다시 큰 문제를 해결한다.
     
  - 일반적으로 재귀 함수를 이용해 구현한다.
  - 그 이유는? 큰 문제를 작은 문제로 "분할하는 방식이 동일한" 경우가 많기 때문이다.
  - 더 이상 쪼갤 수 없는 크기가 될 때까지 계속해 분할한다.

  <img width="537" alt="image" src="https://github.com/user-attachments/assets/f55f2cdc-dd21-4a50-a342-a75d28dee307" />

  - 단점: 일반적으로 재귀 함수를 사용한다는 점에서 함수 호출 횟수가 많이 발생한다. => 오버헤드로 이어진다.

- 시간 복잡도 O(NlogN)을 보장하는 빠른 정렬 알고리즘 중 하나다.

1. 분할: 정렬할 배열을 같은 크기의 부분 배열 2개로 분할한다.
2. 정복: 부분 배열을 정렬한다.
  - 각 부분 배열은 이미 정렬된 상태로 본다.
  - 각 부분 배열에 대해 첫째 원소부터 시작해 하나씩 확인한다.
  - 총 원소의 개수가 N개일 때, O(N)의 시간 복잡도가 요구된다.
  <img width="537" alt="image" src="https://github.com/user-attachments/assets/7b555f46-295e-4b2d-80e8-2e72f6508f6f" />
  <img width="588" alt="image" src="https://github.com/user-attachments/assets/7cfe90af-03d2-4f16-a7c8-0659784b53b9" />
  
  - 높이는 두 개씩 쪼갤 때를 의미하고 너비는 정복하는 부분을 의미한다고 생각된다.
    
3. 조합: 정렬된 부분 배열을 하나의 배열로 다시 병합한다.

---

```js
// 병합(merge) 수행 함수
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; // 결과 배열의 인덱스
  let sorted = []; // 정렬된 결과를 임시로 저장할 배열

  // 두 배열을 비교하여 정렬
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }

  // 왼쪽 배열에 대한 처리가 다 끝난 경우
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  }
  // 오른쪽 배열에 대한 처리가 다 끝난 경우
  else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }

  // 정렬된 배열 결과를 원본 배열에 반영하기
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);

    // 왼쪽과 오른쪽을 재귀적으로 정렬
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    // 정렬된 두 부분 배열을 병합
    merge(arr, left, mid, right);
  }
}

// 예제
let arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); // 출력: [3, 9, 10, 27, 38, 43, 82]


```

## 5) JS 정렬 라이브러리

- JS에서는 배열에 포함된 데이터를 정렬하는 sort() 함수를 제공한다.
- 최악의 경우 시간 복잡도 O(NlogN)을 보장한다.
- 알고리즘 및 코딩 테스트 문제를 해결할 때 정렬 기능이 필요하다면, 단순히 sort() 함수를 사용하는 것을 권장한다.
- 만약, sort()함수의 사용이 제한된다면, 병합 정렬과 같은 알고리즘을 직접 구현해 사용하자.

`arr.sort(compareFuction);`

compareFuction => 정렬 기준을 정해주는 함수

두 개의 원소 a,b를 입력으로 받는다.

1. 반환 값이 0보다 작은 경우 -> a가 우선순위가 높아, 앞에 위치한다.
2. 반환 값이 0보다 큰 경우 -> b가 우선순위가 높아, 앞에 위치한다.
3. 반환 값이 0인 경우 -> a와b의 순서를 변경하지 않는다.

정렬 기준 함수를 사용하지 않으면 각 원소는 문자열로 취급된다. => 유니코드 값 순서대로 정렬된다.

<img width="599" alt="image" src="https://github.com/user-attachments/assets/c096d3b2-5dd5-44e3-a08f-f04ec57b0c0d" />

## 6) 추가 사항

### JS의 sort()

JS의 sort 메서드는 JS 엔진마다 다르게 구현되어 있는데 V8엔진(크롬, Node.js)에서는 Timsort라는 정렬 알고리즘을 사용한다.

Timsort는 데이터가 이미 정렬되어 있거나 부분적으로 정렬된 경우 매우 빠르게 작동하는 알고리즘이다.

최선의 경우: O(n) = 데이터가 이미 정렬되어 있을 때

평균 및 최악의 경우: O(nlogn)

JS로 알고리즘 풀이를 할 때에는 보통 sort를 많이 사용하기 때문에 시간 복잡도 측면에서 알고리즘 성능을 고려해 풀이하자~

### Map 객체

백준 18870 좌표 압축

위 문제를 통과하려면 시간 복잡도 O(n^2)가 아닌 O(nlogn)으로 구현해야한다.

아이디어는 잘 생각해냈으나 각 숫자 값에 인덱스를 매겨줄 적절한 방법을 찾기 못했다.

Map 객체는 키-값 형태로 이루어져있으며 또한 중복 키를 허용하지 않는다. 이를 이용하면 요구사항에 맞으며 편리하게 구현할 수 있다. 

또한, Set으로 값을 등록하는 것과 get으로 값을 가져오는 메서드를 이용해 해결할 수 있었다.

### Stable Sort 보장

백준 10814 나이순 정렬

위 문제에서는 요구사항으로 나이가 같으면 들어온 순서대로 처리하라고 명시되어 있다. 

이를 고려하여 sort()안에 조건문으로 구현했지만 사실 js sort()는 stable sort를 보장하기 때문에 그냥 나이순으로 정렬하게 되면 나이가 같은 경우에 들어온 순서대로 처리되기 때문에 이 부분을 따로 구현할 필요는 없다.

# Ch 04. JS 탐욕법(greedy) 알고리즘

## 그리디 알고리즘 이해

- 현재 상황에서 당장 가장 좋아 보이는 상황만을 선택하는 알고리즘이다.
- 최적의 해를 구하기 위한 근사적인 방법으로 사용될 때가 많다. => 근사 해를 구하는 목적으로 사용

### 탐욕 알고리즘의 접근 방법

- 탐욕 알고리즘 문제를 해결할 때는 일반적으로 다음의 과정을 거친다.

1. 방법 고안하기: 현재 상황에서 어떤 것을 선택할지 알고리즘을 고안한다.
2. 정당성 확인하기: 자신이 고안한 알고리즘이 항상 최적의 해를 보장하는지 확인한다. (증명단계)

## 그리디 문제 풀이

### 동전 0

거스름 돈 문제의 해결 포인트가 배수관계에 있었던 것처럼 주어진 화폐의 단위가 서로 배수 관계이기 때문에 그리디 알고리즘으로 문제를 해결할 수 있음

# Ch 05. JS 이진 탐색 알고리즘

## 이진 탐색 알고리즘 이해하기

**순차 탐색: 앞에서부터 하나씩 확인 O(N)**

**이진 탐색: 탐색 범위를 절반씩 좁혀가며 확인 O(logN)**

<img width="586" alt="image" src="https://github.com/user-attachments/assets/4f9987e7-6ae8-4553-9e11-0995a54d3b40" />

### 이진 탐색 문제 유형의 대표적인 사례

1. 매우 넓은 (억 단위 이상) 탐색 범위에서 최적의 해를 찾아야 하는 경우
2. 데이터를 정렬한 뒤에 다수의 쿼리를 날려야 하는 경우

<img width="586" alt="image" src="https://github.com/user-attachments/assets/6d9c7063-7331-4deb-b3fb-f33f053e5803" />

<img width="586" alt="image" src="https://github.com/user-attachments/assets/c7753ba0-632c-4c51-8927-390885fc34fb" />

##  정렬된 배열에서 특정한 값을 가지는 원소의 개수 구하기

- 정렬된 배열에서 값이 특정 범위에 해당하는 원소의 개수를 계산하는 경우가 종종 있다.
- 이때, lowerBound() 함수와 upperBound() 함수를 사용할 수 있다.
- countByRange()

<img width="661" alt="image" src="https://github.com/user-attachments/assets/85631bcb-59ba-4ac1-9f0c-b0ee9b1a8a58" />

<img width="576" alt="image" src="https://github.com/user-attachments/assets/f71161b1-1b8c-4165-99dc-3dd5bfaff837" />

<img width="592" alt="image" src="https://github.com/user-attachments/assets/43a05c9a-91b6-467e-926d-7593d009c96d" />

## 파라메트릭 서치 이해하기

<img width="645" alt="image" src="https://github.com/user-attachments/assets/cc8d7b65-c48c-4c7b-ae75-f410397ac4c0" />

- 최적화 문제를 결정 문제(yes of no)로 바꾸어 해결하는 기법이다. ( ex) 특정한 조건을 만족하는 가장 알맞은 값을 빠르게 찾는 최적화 문제
- 일반적으로 코딩 테스트에서 파라메트릭 서치 문제는 이진 탐색을 이용해 해결할 수 있다. 





---
> 나동빈 강사님의 [UPSKILL : Javascript 코딩테스트 131개 예제 & CS 지식으로 끝내기]를 듣고 정리한 내용입니다.
