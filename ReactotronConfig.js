import Reactotron from "reactotron-react-native";
import DebugConfig from "./DebugConfig";

if (DebugConfig.useReactotron) {
  console.log("DebugConfig:");
  console.log(DebugConfig);

  console.log("Before calling:");
  console.log(Reactotron.configure.mock);

  Reactotron
    .configure({ name: "SomeApp" })

  console.log("After calling:");
  console.log(Reactotron.configure.mock);
}
