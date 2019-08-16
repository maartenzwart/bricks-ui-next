export interface BrxListHeader {
  index: number;
  key: number | string;
  title: string;
  sortable?: boolean;
  meta?: any;
}

export type BrxListHeaders = BrxListHeader[];
