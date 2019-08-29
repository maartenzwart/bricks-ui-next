const BASE = 'http://localhost:4000';
const REGISTRATION = '/timeRegistrations';

const events = {
  all: () => {
    return BASE + REGISTRATION;
  },
  byId: (id: string | number) => {
    return `${BASE}${REGISTRATION}/${id}`;
  }
};

export const BRX_REGISTER_API = {
  events
};

