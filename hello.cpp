#include <iostream>
#include <vector>
using namespace std;
string findLCS(const string &str1, const string &str2)
{
    int m = str1.length();
    int n = str2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; ++i)
    {
        for (int j = 1; j <= n; ++j)
        {
            if (str1[i - 1] == str2[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    cout << "Final Iteration:\n";
    for (int row = 0; row <= m; ++row)
    {
        int length = dp[m][n];
        string lcs(length, ' ');
        int i = m, j = n;
        while (i > 0 && j > 0)
        {
            if (str1[i - 1] == str2[j - 1])
            {
                lcs[length - 1] = str1[i - 1];
                i--;
                j--;
                length--;
            }
            else if (dp[i - 1][j] > dp[i][j - 1])
            {
                i--;
            }
            else
            {
                j--;
            }
        }
        return lcs;
    }
    int main()
    {
        cout << endl;
        cout << "Welcome to my program to find Lowest Common Subsequence" << endl;
        string str1, str2;
        cout << "Enter the first string: ";
        cin >> str1;
        cout << "Enter the second string: ";
        cin >> str2;
        string lcs = findLCS(str1, str2);
        cout << "The Lowest Common Subsequence is: " << lcs << endl;
        cout << endl;
        cout << "Harshrajsinh Zala" << endl;
        cout << "22BCE2238";
        return 0;
    }
}