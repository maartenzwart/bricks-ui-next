const mockBase = 'http://localhost:4000';
let apiBase = 'http://bricks.key2solutions.nl:3000/api/';

const apiVersion = 'v0.1';
apiBase += apiVersion;

const projectBase = '/projects';
const relationBase = '/relations';
const tenantBase = '/tenants';
const userBase = '/users';
const activityBase = '/activities';

const authentication = {
  login: () => {
    return `${apiBase}/login`;
  }
};

const projects = {
  all: (): string => {
    return mockBase + projectBase;
  },
  byId: (id: string | number): string => {
    return `${mockBase}${projectBase}/${id}`;
  }
};

const relations = {
  all: (): string => {
    return mockBase + relationBase;
  },
  byId: (id: string | number) => {
    return `${mockBase}${relationBase}/${id}`;
  },
  organisation: {
    all: (): string => {
      return mockBase + relationBase + '-organisations';
    }
  }
};

const tenants = {
  all: (): string => {
    return mockBase + tenantBase;
  }
};

const users = {
  all: (): string => {
    return mockBase + userBase;
  },
  byId: (id: string): string => {
    return `${mockBase}${userBase}/${id}`;
  }
};

const addresses = {
  findByPostalCodeAndHouseNumber: (postalCode: string, houseNumber: number | string) => {
    postalCode = postalCode.replace(/\s/g, '');
    return `http://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCode}&fq=huisnummer:${houseNumber}`;
  }
};

const adminSettings = {
  tenants: {
    all: () => {
      return `${mockBase}${tenantBase}`;
    }
  }
};

const activities = {
  all: (): string => {
    return `${mockBase}${activityBase}`;
  },
  byId: (id: string): string => {
    return `${mockBase}${activityBase}/${id}`;
  }
};

export const BRX_API = {
  authentication,
  projects,
  relations,
  tenants,
  addresses,
  users,
  adminSettings,
  activities
};
