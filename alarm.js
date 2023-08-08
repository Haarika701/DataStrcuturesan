/*
'''
❓ PROMPT
You're exhausted after a long day and heading to bed, but you still have to set the alarm clock on your phone. You already have one you set the day before, so all you have to do is update it.

To set your alarm, the hours and minutes are set independently, each by scrolling upwards or downwards. One shift changes an hour or minute value by one, up or down. The values are organized cyclically, which means that dragging 0 minutes downwards turns it into 59, and dragging 59 upwards turns it into 0 (similarly, 0 hours can become 23 in one shift and vice versa).

Given the time of the previous alarm and the new desired time, what is the minimum number of scroll moves to set the new time?

Example(s)
For setTime = "07:30" and timeToSet = "08:00", the output should be
minScrollToSet(oldTime, newTime) = 31.

Shifting hours upwards once will change the alarm to "08:30", and shifting minutes 30 times downwards will change it to "08:00".

minScrollToSet("7:30", "8:00") === 31
minScrollToSet("7:00", "6:31") === 30
minScrollToSet("7:00", "6:25") === 26
 

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
function minScrollToSet(oldTime, newTime) {
def minScrollToSet(oldTime: str, newTime: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function minScrollToSet(oldTime, newTime) {
    const [oldHrs, oldMins] = oldTime.split(":").map((x) => parseInt(x));
    const [newHrs, newMins] = newTime.split(":").map((x) => parseInt(x));

    const hoursDiff = Math.abs(oldHrs - newHrs);
    const hoursMoves = Math.min(hoursDiff, 24 - hoursDiff);

    const minsDiff = Math.abs(oldMins - newMins);
    const minsMoves = Math.min(minsDiff, 60 - minsDiff);

    return hoursMoves + minsMoves;
}