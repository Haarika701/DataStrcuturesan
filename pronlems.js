class Test {
    constructor(test_name = "", printTests = false) {
        this.total_count = 0
        this.problem_count = 0
        this.total_score = 0
        this.problem_score = 0
        this.current_problem = ""
        this.failed_problems = []
        console.log(`Beginning Test: ${test_name}`)
    }
        
    // Test Helpers
    test(expected_outcome, outcome, case_num) {
        if (expected_outcome == outcome) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    testMultipleCases(possible_outcomes, outcome, case_num) {
        var possible_outcome
        for (possible_outcome of possible_outcomes) {
            if (this.compareArrays(possible_outcome, outcome)) {
                return this.passed(case_num)
            }
        }
        return this.failed(case_num)
    }
  
    testForArrays(expected_outcome, outcome, case_num) {
        if (this.compareArrays(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    compareArrays(array1, array2) {
        return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
    }
  
    testMatchAny(expected_outcome, outcome, case_num) {
        if (this.isEqual(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    isEqual(array1, array2) {
        var sortedArr1 = []
        var sortedArr2 = []
        for (var a1 of array1) {
            sortedArr1.push(a1.sort())
        }
        for (var a2 of array2) {
            sortedArr2.push(a2.sort())
        }
        return this.compareArrays(sortedArr1.sort(), sortedArr2.sort())
    }  
  
    // Test Logistics
    startProblem(problemName) {
        this.current_problem = problemName
        this.problem_score = 0
        this.problem_count = 0
        this.failed_problems = []
    }
    passed(case_num) {
        this.total_score += 1
        this.problem_score += 1
        this.problem_count += 1
        this.total_count += 1
    }
    failed(case_num) {
        this.problem_count += 1
        this.total_count += 1
        this.failed_problems.push(case_num)
    }
    endProblem() {
        console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
        if (this.failed_problems.length > 0) {
            console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
        }
    }
    printFinal() {
        console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
    }
  }
        
  var test = new Test("")
  
  class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
  }
  
  function arrayify(head) {
    var ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
  }
  
  class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
  }
  
  function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
  }
  
  function maxSumPath(root){
     let max = -Infinity
  
     function dfs(node){
      if(!node) return 0;
  
      const left = Math.max(dfs(node.left),0)
      const right = Math.max(dfs(node.right),0)
      max = Math.max(max,node.value + left + right)
      return node.value + Math.max(left,right)
     }
     dfs(root)
     return max === -Infinity ? 0 : max
  }
  
  // Test Cases
  test.startProblem("Max Path Sum")
  test.test(6, maxSumPath(new TreeNode(1, new TreeNode(2, new TreeNode(-1)), new TreeNode(3))), 1)
  test.test(18, maxSumPath(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))), 2)
  test.test(3, maxSumPath(new TreeNode(1, new TreeNode(2), new TreeNode(-4))), 3)
  test.test(7, maxSumPath(new TreeNode(1, new TreeNode(-5, new TreeNode(6)), new TreeNode(5))), 4)
  test.test(21, maxSumPath(new TreeNode(1, new TreeNode(-10, new TreeNode(3, new TreeNode(5, new TreeNode(13), new TreeNode(-1)), new TreeNode(-1))), new TreeNode(-5, new TreeNode(-20), new TreeNode(-21)))), 5)
  test.endProblem()
  
  // class TrieNode {
  //   constructor(key = null) {
  //     this.key = key;
  //     this.children = {};
  //     this.end = false;
  //   }
  // }
  
  //leftmost sum to rightmost sum
  
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
    let sums = [];
    calculcateBranchsums(root,0,sums);
    return sums;
  
  }
  
  function calculcateBranchsums(node,runningSums,sums){
    if(!node) return
    const newRunningSum = runningSums + node.value
    if(!node.left && node.right){
      sums.push(newRunningSum)
      return
    }
    calculcateBranchsums(node.left,newRunningSum,sums)
    calculcateBranchsums(node.right,newRunningSumm,sums)
  }
  
  // Prompt
  // Given a base-10 integer as a string, parse the integer and return it as an int. This problem can be done iteratively and recursively and it's worth doing both!
  
  function atoi(string){
    const map = {
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
      '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
    };
  
    let value = 0;
    const negative = string[0] === '-'
    let i = negative ? 1 : 0;
    for(; i < string.length ; i++){
      const digit = map[string[i]]
      value = value * 10 + digit
    }
    return negative ? -value : value
  }
  atoi("123") == 123
  atoi("4") == 4
  atoi("007") == 7
  atoi("-1") == -1
  
  