import { Stack, Text } from "@fluentui/react";
import { Provider } from "react-redux";
import Tasks from "./components/Task";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Stack
        style={{ marginLeft: 16, marginRight: 16 }}
        verticalAlign="center"
        horizontalAlign="center"
      >
        <Text variant="xxLargePlus">我的待办</Text>
        <Tasks />
      </Stack>
    </Provider>
  );
}

export default App;
