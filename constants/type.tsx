export type Todo = {
  id: string;
  memo: string;
  isFinished: boolean;
};

export enum Tabs {
  all = "all",
  finished = "finished",
  unfinished = "unfinished",
}
