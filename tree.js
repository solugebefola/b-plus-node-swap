

class Node {
    constructor(id, order, nodesInMem,
        parent, isRoot = false, keyList = [], children = []) {

        this.id = id;
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
        this.nodesInMem.remove(this);
    }

    searchFor(key) {
        for (let i = 0; i < this.keyList.length; i++) {
            if (key < this.keyList[i]) {
                return this.children[i].searchFor(key);
            }
        }
        return false;
    }

    insert(key, value, node = null) {
        if (!node) {
            // pass insert call down to the correct leaf
            for (let i = 0; i < this.keyList.length; i++) {
                if (key < this.keyList[i]) {
                    this.children[i].insert(key, value);
                    break;
                }
            }
        } else {
            // lower node is calling insert on this node
            if (this.keyList.length < (this.order - 1)) {
                // not full
                let insertIndex = this.keyList.findIndex((val) => {
                    return val > key;
                });
                this.keyList.splice(insertIndex, 0, key);
                this.children.splice(insertIndex, 0, node);
            } else {
                // full and needs to split
                ***
            }
        }
    }
}
