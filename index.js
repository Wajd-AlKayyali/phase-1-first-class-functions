receivesAFunction = (spy) => spy();

returnsANamedFunction = () => {
  receivesAFunction = () => console.log(5);
  return receivesAFunction;
};

returnsAnAnonymousFunction = () =>
  function () {
    console.log("wajd");
  };
