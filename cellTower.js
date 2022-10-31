// You are given an array representing the positions of cell towers along a 1-dimensional line. You are given a second array representing the positions of customers along the same line. Given these two inputs, you must determine a signal strength k such that every customer is covered by at least one cell tower. All cell towers must have the exact same signal strength and covers customers to their left and right equally.
// These arrays can be imagined as street addresses along a road. At each address, there might be a customer and there might also be a tower at that location.
// Function Signature: 
// def search(customers, towers):
// Target runtime and space complexity:
// Runtime: O(n)
// Space: O(1)
// Examples:
// Let's say cell towers are at: [0, 2, 6, 10]
// and customers are at: [0, 5, 11]
// In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.
// If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10.


//max distance between the cell tower and the customer to recieve the strength equally.
//it says left and right , so we can use the greedy approach so that it covers all the towers 
//since it says dtermine the signal strenght k, is covered by atleast 1 tower., so distance between tower and the customer

/* Let's say cell towers are at: [0, 2, 6, 10]
and customers are at:             [0, 4, 13]
In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.
If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10.

Have one customer pointer and one cell tower pointer. Iterate through the customers array. If the customer is closer to the next cell tower than the current one, move the cell tower pointer forward. Keep track of the max distance seen so far.

Approach
- initialize max distance
- customerpointer 
- twopointer
- find the current distance between the tower and the customer pointer
- if tower is nearby the customer and the current distance is less, increment the pointer to 1
- find max between the current distance and update the max far
0 increment the customer*/
function search(customers, towers) {
    let maxSoFar = 0
    let customerPointer = 0
    let towerPointer = 0

    while (customerPointer < customers.length) {
        let distanceToCurrentTower = () => Math.abs(customers[customerPointer] - towers[towerPointer]);

        while (
            towerPointer < towers.length - 1
            && Math.abs(customers[customerPointer] - towers[towerPointer + 1]) < distanceToCurrentTower()
        ) {
            towerPointer += 1;
        }

        maxSoFar = Math.max(maxSoFar, distanceToCurrentTower());

        customerPointer += 1;
    }

    return maxSoFar;
}

console.log(search([0, 5, 11], [0, 2, 6, 10]));
console.log(search([0, 4, 13], [0, 2, 6, 10]));