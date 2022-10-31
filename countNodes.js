// Given a binary tree, count the number of nodes that are equal to a given target.
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
        
var test = new Test("Core Algorithms - Variation Set #4")
class TreeNode {
    constructor(val, left=null, right=null) {
      this.value = val; 
      this.left = left;
      this.right = right;
    }
  }

function countNodes(node){
    function dfs(node,target){
        if(node==null)
            return 0;
 if(node.val === target)return 1 + countNodes(node.left) + countNodes(node.right);     
    }
    dfs(node)   
}
// Test Cases
test.startProblem("4. Validate Leaf Node")
var tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6, new TreeNode(4), new TreeNode(7))), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
test.test(false, countNodes(null, 1), 1)
test.test(true, countNodes(tree, 1), 2)
test.test(false, countNodes(tree, 3), 3)
test.test(true, countNodes(tree, 4), 4)
test.test(true, countNodes(tree, 7), 5)
test.test(false, countNodes(tree, 8), 6)
test.test(true, countNodes(tree, 13), 7)
test.test(false, countNodes(tree, 14), 8)
test.test(false, countNodes(tree, 6), 9)
test.test(true, countNodes(new TreeNode(), 0), 10)
test.endProblem()