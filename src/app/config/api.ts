const BASE = 'http://localhost:4000';
const PROJECTS = '/projects';
const RELATIONS = '/relations';
const TENANTS = '/tenants';
const USERS = '/users';

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

const tenants = {
  all: () => {
    return BASE + TENANTS;
  }
};

const users = {
  all: () => {
    return BASE + USERS;
  }
};

const addresses = {
  findByPostalCodeAndHouseNumber: (postalCode: string, houseNumber: number | string) => {
    return `http://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCode}&fq=huisnummer:${houseNumber}`;
  }
};

const adminSettings = {
  tenants: {
    all: () => {
      return `${BASE}${TENANTS}`;
    }
  }
};

export const BRX_API = {
  projects,
  relations,
  tenants,
  addresses,
  users,
  adminSettings
};
