
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

---
> 나동빈 강사님의 [UPSKILL : Javascript 코딩테스트 131개 예제 & CS 지식으로 끝내기]를 듣고 정리한 내용입니다.
