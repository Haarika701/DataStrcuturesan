// return nodes in every other level, starting and including the level with the root.
/* function helper(root, lvl = 0, arr = []) {
        if (!root) return true;
        
        if (lvl % 2 == 0 && root.val % 2 == 0) return false;
        if (lvl % 2 != 0 && root.val % 2 != 0) return false;
        
        if (arr[lvl] !== undefined) {
            if (lvl % 2 == 0 && root.val <= arr[lvl]) return false;
            if (lvl % 2 != 0 && root.val >= arr[lvl]) return false;
        }
        
        arr[lvl] = root.val;
        return helper(root.left, lvl+1, arr) && helper(root.right, lvl+1, arr);
    }
    
    return helper(root);*/