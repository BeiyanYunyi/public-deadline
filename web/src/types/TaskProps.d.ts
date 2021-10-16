import MetaTaskProps from "./MetaTaskProps";

export default interface TaskProps {
  description: string;
  id: string;
  metaTasks: MetaTaskProps[];
  finished: boolean;
  finalDate?: number;
}
