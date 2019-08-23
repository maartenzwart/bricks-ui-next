const BASE = 'http://localhost:3000';
const PROJECTS = '/projects';
const RELATIONS = '/relations';
const TENANTS = '/tenants';

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

const addresses = {
  findByPostalCodeAndHouseNumber: (postalCode: string, houseNumber: number | string) => {
    return `http://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCode}&fq=huisnummer:${houseNumber}`;
  }
};

export const BRX_API = {
  projects,
  relations,
  tenants,
  addresses
};
