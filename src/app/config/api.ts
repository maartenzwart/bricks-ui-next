const BASE = 'http://localhost:3000';
const PROJECTS = '/projects';

const projects = {
  all: () => {
    return BASE + PROJECTS;
  },
  byId: (id: string | number) => {
    return `${BASE}${PROJECTS}/${id}`;
  }
};

export const BRX_API = {
  projects
};

