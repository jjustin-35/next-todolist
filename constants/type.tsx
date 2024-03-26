export type Todo = {
  id: string;
  memo: string;
  isFinished: boolean;
};

export enum Tabs {
  all = "tab-all",
  finished = "tab-finished",
  unfinished = "tab-unfinished",
}

export type TFucntionType = (key: string) => string;
