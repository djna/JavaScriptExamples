

var expect = require("chai").expect;
const  { Collection } = require('../src/list-collection.js');

describe("Linked List", function() {
  describe("Simple CRUD", function() {
    it("adds an item", function() {
         let list = new Collection();
         list.addItem("bill");
         expect(list.size).to.equal(1);
    });
  })
});