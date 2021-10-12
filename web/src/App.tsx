import { Stack, Text } from "@fluentui/react";
import Task from "./components/Task";

function App() {
  return (
    <Stack
      style={{ marginLeft: 16, marginRight: 16 }}
      verticalAlign="center"
      horizontalAlign="center"
    >
      <Text variant="xxLargePlus">我的待办</Text>
      <Task />
    </Stack>
  );
}

export default App;
