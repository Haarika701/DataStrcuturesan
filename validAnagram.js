/**Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

function validAnagram(s,t){
    if(s.length !== t.length) return false
    let sMap = new Map();
    let tMap = new Map();
    for(let i = 0 ; i < s.length;i++){
        let sCount = (sMap.get(s[i]) || 0)+ 1
        let tCount = (tMap.get(t[i]) || 0) + 1
        sMap.set(s[i],sCount)
        tMap.set(t[i],tCount)
    }
    for(const[key,value] of sMap){
        if(tMap.get(key) !== value)
        return false
    }
    return true;
}