export interface BrxListHeader {
  index: number;
  key: number | string;
  title: string;
  sortable?: boolean;
}

export type BrxListHeaders = BrxListHeader[];
