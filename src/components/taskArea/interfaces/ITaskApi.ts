import { Priority } from '../../createTaskForm/enums/Priority';
import { Status } from '../../createTaskForm/enums/Status';

export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  status: `${Status}`;
  priority: `${Priority}`;
}
