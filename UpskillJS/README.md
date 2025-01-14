
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
- 머리 : 남아있는 원소 중 가장 먼저 들어온 데이터를 가르키는 포인터
- 꼬리 : 남아있는 원소 중 가장 마지막으로 들어온 데이터를 가르키는 포인터
- 삽입, 삭제 연산시에 각 포인터를 옮겨주면 된다.

<img width="688" alt="image" src="https://github.com/user-attachments/assets/7cd5e3df-5f05-4f36-818d-a2adba29c2a7" />

<img width="688" alt="image" src="https://github.com/user-attachments/assets/55f71dcb-a647-468c-8636-3d0feea8d25b" />


---
> 나동빈 강사님의 [UPSKILL : Javascript 코딩테스트 131개 예제 & CS 지식으로 끝내기]를 듣고 정리한 내용입니다.
