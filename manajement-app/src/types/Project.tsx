export type Project = {
  id?: string;
  title?: string;
  desc?: string;
  date?: string;
  task?: Tasks[];
};

export type Tasks = {
  id: string;
  todo: string;
};
