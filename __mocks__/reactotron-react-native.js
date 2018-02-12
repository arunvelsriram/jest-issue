const reactotron = jest.genMockFromModule("reactotron-react-native");
reactotron.configure = jest.fn();

reactotron.reset = () => {
  reactotron.configure.mockReset();
};

export default reactotron;
