/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import taskDataForTest from "../tests/taskDataForTest";
import TaskProps from "../types/TaskProps";

// Define the initial state using that type
const initialState: TaskProps[] = taskDataForTest.tasks;

export const counterSlice = createSlice({
  name: "tasks",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 一个用传统redux的方式，一个用toolkit的方式，两相对比，简洁度立判。
    switchTaskFinish: (state, action: PayloadAction<string>) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          if (task.metaTasks)
            return {
              ...task,
              finished: !task.finished,
              metaTasks: task.metaTasks.map((metaTask) => ({
                ...metaTask,
                finished: !task.finished,
              })),
            };
          return { ...task, finished: !task.finished };
        }
        return task;
      });
    },
    switchMetaTaskFinish: (
      state,
      action: PayloadAction<{ taskId: string; metaTaskId: string }>
    ) => {
      state.forEach((task) => {
        if (task.id === action.payload.taskId && task.metaTasks) {
          task.metaTasks.forEach((metaTask) => {
            if (metaTask.id === action.payload.metaTaskId) {
              metaTask.finished = !metaTask.finished;
            }
          });
        }
      });
    },
  },
});

export const { switchTaskFinish, switchMetaTaskFinish } = counterSlice.actions;

export default counterSlice.reducer;
