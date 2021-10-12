import {
  ActivityItem,
  Checkbox,
  DocumentCard,
  DocumentCardDetails,
  Stack,
  StackItem,
  Text,
} from "@fluentui/react";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import taskDataForTest from "../tests/taskDataForTest";
import MetaTaskProps from "../types/MetaTaskProps";

const MetaTask = ({ metaTask }: { metaTask: MetaTaskProps }) => {
  return (
    <>
      <Stack horizontal verticalAlign="center">
        <StackItem>
          <Checkbox />
        </StackItem>
        <StackItem>
          <ActivityItem
            comments={metaTask.description}
            timeStamp={
              metaTask.finalDate &&
              formatDistanceToNow(metaTask.finalDate, {
                addSuffix: true,
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
    <DocumentCard>
      <DocumentCardDetails>
        <Stack tokens={{ childrenGap: 2 }} horizontalAlign="center">
          <StackItem style={{ margin: 5 }}>
            <Text variant="large">{taskDataForTest.task.description}</Text>
          </StackItem>
          {taskDataForTest.metaTasks.map((metaTask) => {
            return (
              <StackItem key={metaTask.id}>
                <MetaTask metaTask={metaTask} />
              </StackItem>
            );
          })}
          <StackItem>
            <Checkbox />
          </StackItem>
        </Stack>
      </DocumentCardDetails>
    </DocumentCard>
  );
};

export default Task;
