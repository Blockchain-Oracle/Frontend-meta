public class Main {

    public static int exponent(int x, int n) {
        if (n == 0) {
            return 1;
        } else {
            return x * exponent(x, n - 1);
        }
    }

    public static double recur(int n) {
        if (n == 0) {
            return 1;
        }
        return n * recur(n - 1);
    }

    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        int fibResult = fibonacciMemo(100, new int[101]);
        long endTime = System.currentTimeMillis();
        long duration = endTime - startTime;
        System.out.println(" fibonacci " + fibResult);
        System.out.println("Time taken for fibonacci(100): " + duration + " milliseconds");
    }

    public static int fibonacciMemo(int n, int[] memo) {
        // The time complexity for this memoized Fibonacci function is O(n)
        if (n <= 1) {
            return n;
        }
        if (memo[n] == 0) {
            memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
        }
        return memo[n];
    }
}
