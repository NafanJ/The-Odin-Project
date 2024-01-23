const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

  class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
