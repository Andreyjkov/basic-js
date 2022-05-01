const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  temp: [],

  getLength() {
    return this.temp.length;
  },
  addLink(value) {
    this.temp.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === "number" && (position ^ 0) === position) {
      if (position < 1 || position > this.getLength()) {
        this.temp.length = 0;
        throw new Error("You can't remove incorrect link!");
      }
      const index = position - 1;
      this.temp.splice(index, 1);
      return this;
    }
    this.temp.length = 0;
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.temp.reverse();
    return this;
  },
  finishChain() {
    const result = this.temp.join("~~");
    this.temp.length = 0;
    return result;
  },
};

module.exports = {
  chainMaker,
};
