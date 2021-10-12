import {
  ActivityItem,
  Checkbox,
  DocumentCard,
  DocumentCardDetails,
  Stack,
  StackItem,
  Text,
} from "@fluentui/react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import taskDataForTest from "../tests/taskDataForTest";
import MetaTaskProps from "../types/MetaTaskProps";

const MetaTask = ({ metaTask }: { metaTask: MetaTaskProps }) => {
  return (
    <>
      <Stack horizontal verticalAlign="center">
        <StackItem>
          <Checkbox checked={metaTask.finished} />
        </StackItem>
        <StackItem>
          <ActivityItem
            comments={metaTask.description}
            timeStamp={
              metaTask.finalDate &&
              format(metaTask.finalDate, "MM-dd HH:mm:ss", {
                locale: zhCN,
              })
            }
          />
        </StackItem>
      </Stack>
    </>
  );
};

const Task = () => {
  return (
    <>
      {taskDataForTest.tasks.map((task) => (
        <DocumentCard key={task.id}>
          <DocumentCardDetails>
            <Stack tokens={{ childrenGap: 2 }} horizontalAlign="center">
              <StackItem style={{ margin: 5 }}>
                <Text variant="large">{task.description}</Text>
              </StackItem>
              {task.metaTasks.map((metaTask) => {
                return (
                  <StackItem key={metaTask.id}>
                    <MetaTask metaTask={metaTask} />
                  </StackItem>
                );
              })}
              <StackItem>
                <Checkbox label="完成" />
              </StackItem>
            </Stack>
          </DocumentCardDetails>
        </DocumentCard>
      ))}
    </>
  );
};

export default Task;
