const BASE = 'http://localhost:3000';
const PROJECTS = '/projects';
const RELATIONS = '/relations';

const projects = {
  all: () => {
    return BASE + PROJECTS;
  },
  byId: (id: string | number) => {
    return `${BASE}${PROJECTS}/${id}`;
  }
};

const relations = {
  all: () => {
    return BASE + RELATIONS;
  },
  byId: (id: string | number) => {
    return `${BASE}${RELATIONS}/${id}`;
  }
};

export const BRX_API = {
  projects,
  relations
};

