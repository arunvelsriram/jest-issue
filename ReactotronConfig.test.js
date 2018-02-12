jest.mock("./DebugConfig", () => ({
  useReactotron: false
}));

import Reactotron from "reactotron-react-native";
import "./ReactotronConfig";

describe("Reactotron config", () => {

  beforeEach(() => {
    jest.resetModules();
  });

  test("when not using reactotron", () => {
    expect(Reactotron.configure).not.toBeCalled();
  });

  test("when using reactotron", () => {
    jest.doMock("./DebugConfig", () => ({
      useReactotron: true
    }));
    require("./ReactotronConfig");

    console.log("Before expect");
    console.log(Reactotron.configure.mock);
    expect(Reactotron.configure).toBeCalled();
  });
});
