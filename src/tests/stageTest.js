const stage= require("../core.js");

const assert = require('assert');

describe("Stage", function() {

  describe("checkVersion", function() {
    beforeEach(() => {});
    it("checkVersion", (done) => {
      assert.deepStrictEqual(stage.version, "1.0.0");
      return done();
    });
  });

  describe("mixer", () => {
    it("mixer", (done) => {
      assert(stage.mixer);
      return done();
    });
  });

});
