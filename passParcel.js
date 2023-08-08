/*
'''
❓ PROMPT
In this game, a group of players stands in a circle and passes a parcel around.
When the game starts, a player is chosen to hold the parcel.
The players then pass the parcel to their adjacent player in clockwise order.
At a random point in time, a timer goes off, and the player holding the parcel is removed from the circle.
The passing continues until only one player is left.

Example(s)
We have a list  ["Alice", "Bob", "Charlie", "David", "Eve"]
Assume we have a timer value of 3.
Iteration 1: David removed
Iteration 2: Charlie removed
Iteration 3: Eve removed
Iteration 4: Bob Removed
Winner: Alice.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function passTheParcel(players, timer) {}
def passTheParcel(players, timer):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function passTheParcel(players, timer) {
    let circle = players.slice();
    while (circle.length > 1) {
        // Pass the parcel to the next player
        for (let i = 0; i < timer; i++) {
            circle.push(circle.shift());
        }
        // Remove the player holding the parcel
        circle.shift();
    }
    return circle[0];
}