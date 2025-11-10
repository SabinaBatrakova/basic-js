const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    //возвращает текущую длину цепочки в виде числа;
    return this.chain.length;
  },
  addLink(value) {
    //добавляет ссылку, содержащую string представление valueв цепочку;
    this.chain.push(`( ${value !== undefined ? value : ""} )`);
    return this;
  },

  removeLink(position) {
    //удаляет звено цепи в указанном положении;
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    //переворачивает цепь;
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //заканчивает цепочку и returnsэто.
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
