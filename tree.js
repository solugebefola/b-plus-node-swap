/*
From http://www.cburch.com/cs/340/reading/btree/

--Every node has one more references than it has keys.
--All leaves are at the same distance from the root.
--For every non-leaf node N with k being the number of keys in N: all keys
in the first child's subtree are less than N's first key; and all keys
in the ith child's subtree (2 ≤ i ≤ k) are between the (i − 1)th key of
n and the ith key of n.
--The root has at least two children.
--Every non-leaf, non-root node has at least floor(d / 2) children.
--Each leaf contains at least floor(d / 2) keys.
--Every key from the table appears in a leaf, in left-to-right sorted order.

My implementation:
Node class that stores: order, parent, if it is root, keys, children, nearest siblings
Leaf class extends node, # children = # keys
Root class extends node, min children = 2
nodesInMem linked list of nodes stored in memory (length is set by user)

Starting the tree, the first node is a Leaf until it has enough inserts to split.
*/

class Node {
    constructor(order, nodesInMem, parent, isRoot = false, keyList = [], children = []) {
        this.order = order;
        this.parent = parent;
        this.isRoot = isRoot;
        this.keyList = keyList;
        this.children = children;
        this.inMemory = true; //should be loaded when created
        this.nodesInMem = nodesInMem;
        nodesInMem.add(this); //add self to linked list of in memory nodes
        this.greaterSibling = null;
        this.lesserSibling = null;
    }

    addGreaterSibling(siblingNode) {
        this.greaterSibling = siblingNode;
    }

    removeGreaterSibling() {
        this.greaterSibling = null;
    }

    addLesserSibling(siblingNode) {
        this.lesserSibling = siblingNode;
    }

    removeLesserSibling() {
        this.lesserSibling = null;
    }

    removeSelf() {
        //if the node is merged, this removes it completely from the list
        this.nodeList.remove(this);
    }

    searchFor(key) {
        for (let i = 0; i < this.keyList.length; i++) {
            if (key < this.keyList[i]) {
                return this.children[i].searchFor(key);
            }
        }
        return false;
    }

    insert(key, value) {

    }
}
