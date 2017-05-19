# B+ Tree Node Swap

This is a library for generating a simple demo of a b+ tree that takes into account memory constraints.  Nodes are swapped in and out of "memory" when there is too much data in the tree.

From http://www.cburch.com/cs/340/reading/btree/

--Every node has one more references than it has keys.
--All leaves are at the same distance from the root.
--The maximum number of children for a node is _d_
--For every non-leaf node N with k being the number of keys in N: all keys
in the first child's subtree are less than N's first key; and all keys
in the ith child's subtree (2 ≤ i ≤ k) are between the (i − 1)th key of
n and the ith key of n.
--The root has at least two children.
--Every non-leaf, non-root node has at least floor(_d_ / 2) children.
--Each leaf contains at least floor(_d_ / 2) keys.
--Every key from the table appears in a leaf, in left-to-right sorted order.

My implementation:
Node class that stores: order(_d_), parent, if it is root, keys, children, nearest siblings
Leaf class extends node, # children = # keys
Root class extends node, min children = 2
nodesInMem linked list of nodes stored in memory (length is set by user)

Starting the tree, the first node is a Leaf until it has enough inserts to split.
