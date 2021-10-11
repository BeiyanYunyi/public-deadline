import { IconButton, Stack, Text } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";

function App() {
  return (
    <Stack
      style={{ marginLeft: 16, marginRight: 16 }}
      verticalAlign="center"
      horizontalAlign="center"
    >
      <Text variant="xxLargePlus">1111</Text>
      <Stack horizontal>
        <Stack.Item>
          <TextField
            styles={{ suffix: { padding: 0 } }}
            iconProps={{ iconName: "AccountBrowserIcon" }}
            suffix="111"
            onRenderSuffix={() => (
              <IconButton
                iconProps={{ iconName: "Send" }}
                title="Emoji"
                ariaLabel="Emoji"
              />
            )}
          />
        </Stack.Item>
        <Stack.Item>
          <IconButton
            iconProps={{ iconName: "Send" }}
            title="Emoji"
            ariaLabel="Emoji"
          />
        </Stack.Item>
      </Stack>
    </Stack>
  );
}

export default App;
