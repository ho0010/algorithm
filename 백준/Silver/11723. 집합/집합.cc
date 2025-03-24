#include <iostream>
#include <string>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int M;
    cin >> M;

    int bit = 0; 

    while (M--) {
        string cmd;
        int x;
        cin >> cmd;

        if (cmd == "add") {
            cin >> x;
            bit |= (1 << x);
        } else if (cmd == "remove") {
            cin >> x;
            bit &= ~(1 << x);
        } else if (cmd == "check") {
            cin >> x;
            cout << ((bit & (1 << x)) ? 1 : 0) << '\n';
        } else if (cmd == "toggle") {
            cin >> x;
            bit ^= (1 << x);
        } else if (cmd == "all") {
            bit = (1 << 21) - 1; 
        } else if (cmd == "empty") {
            bit = 0;
        }
    }

    return 0;
}

// js는 제출 불가 (메모리 초과이슈)
// 비트마스크 사용