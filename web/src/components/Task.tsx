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
import { useAppDispatch, useAppSelector } from "../redux/store";
import { switchMetaTaskFinish, switchTaskFinish } from "../redux/tasksReducer";
import MetaTaskProps from "../types/MetaTaskProps";
import TaskProps from "../types/TaskProps";

const formatDate = (date: number) => {
  return format(date, "MM-dd HH:mm", {
    locale: zhCN,
  });
};

const FinalDate = ({
  date,
  finished,
}: {
  date: number | undefined;
  finished: boolean;
}) => {
  if (!date) {
    return <></>;
  }
  const timeNow = Date.now();
  if (finished || date >= timeNow) {
    return (
      <Text variant="tiny" style={{ color: "gray" }}>
        {formatDate(date)}
      </Text>
    );
  }
  return (
    <Text variant="tiny" style={{ color: "red" }}>
      {formatDate(date)}
    </Text>
  );
};

const MetaTask = ({
  metaTask,
  taskId,
}: {
  metaTask: MetaTaskProps;
  taskId: string;
}) => {
  const dispatch = useAppDispatch();

  return (
    <Stack horizontal verticalAlign="center">
      <StackItem>
        <Checkbox
          checked={metaTask.finished}
          onChange={() => {
            dispatch(switchMetaTaskFinish({ taskId, metaTaskId: metaTask.id }));
          }}
        />
      </StackItem>
      <StackItem>
        <ActivityItem
          comments={metaTask.description}
          timeStamp={
            <FinalDate date={metaTask.finalDate} finished={metaTask.finished} />
          }
        />
      </StackItem>
    </Stack>
  );
};

const Task = ({ task }: { task: TaskProps }) => {
  const dispatch = useAppDispatch();
  return (
    <DocumentCard key={task.id}>
      <DocumentCardDetails>
        <Stack tokens={{ childrenGap: 2 }} horizontalAlign="center">
          <StackItem style={{ margin: 5 }}>
            <Stack horizontalAlign="center">
              <Text variant="large">{task.description}</Text>
              <StackItem>
                <FinalDate date={task.finalDate} finished={task.finished} />
              </StackItem>
            </Stack>
          </StackItem>
          {task.metaTasks.map((metaTask) => {
            return (
              <StackItem key={metaTask.id}>
                <MetaTask metaTask={metaTask} taskId={task.id} />
              </StackItem>
            );
          })}
          <StackItem>
            <Checkbox
              label="完成"
              checked={task.finished}
              onChange={() => {
                dispatch(switchTaskFinish(task.id));
              }}
            />
          </StackItem>
        </Stack>
      </DocumentCardDetails>
    </DocumentCard>
  );
};

const Tasks = () => {
  const tasks = useAppSelector((state) => state.tasks);
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </>
  );
};

export default Tasks;
