export interface BrxListHeader {
  index: number;
  key: number | string;
  title: string;
  sortable?: boolean;
  meta?: any;
  type?: BrxListType;
}

export type BrxListHeaders = BrxListHeader[];

export enum BrxListType {
  STRING = 'string',
  IMAGE = 'image',
  BOOLEAN = 'boolean'
}
