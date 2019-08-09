export interface ServerEvent {
  id: string | number;
  start: number;
  end: number;
  meta: {
    activity: {
      id: string | number,
      name: string
    }
    project: {
      id: string | number,
      name: string
    },
    relation: {
      id: string | number,
      name: string,
    },
    status: string
  };
}
