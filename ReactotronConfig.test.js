jest.mock("./DebugConfig", () => ({
  useReactotron: false
}));

describe("Reactotron config", () => {

  beforeEach(() => {
    jest.resetModules();
  });

  test("when not using reactotron", () => {
    const reactotron = require("reactotron-react-native");
    require("./ReactotronConfig");

    expect(reactotron.default.configure).not.toBeCalled();
  });

  test("when using reactotron", () => {
    jest.doMock("./DebugConfig", () => ({
      useReactotron: true
    }));

    const reactotron = require("reactotron-react-native");
    require("./ReactotronConfig");

    console.log("Before expect");
    console.log(reactotron.default.configure.mock);
    expect(reactotron.default.configure).toBeCalled();
  });
});
