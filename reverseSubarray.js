// public static String reverseStringInK(String str, int k) {
//     int n = str.length();
//     char[] ch = str.toCharArray();

//     for(int i =0; i < n; i = i + k) {
//         int left = i;
//         int right = Math.min(i + k - 1, n - 1);

//         while(left < right) {
//           char temp = ch[left];
//           ch[left] = ch[right];
//           ch[right] = temp;

//           left++;
//           right--;
//         }
//     }

//     return new String(ch);

//   } 