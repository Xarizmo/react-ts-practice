type CityType = {
  title: string;
  countryTitle: string;
};

type AddressType = {
  streetTitle: string;
  city: CityType;
};

type TechType = {
  id: number;
  title: string;
};

type StudentType = {
  id: number;
  name: string;
  age: number;
  address: AddressType;
  technologies: Array<TechType>;
};

export const student: StudentType = {
  id: 1,
  name: "Mike",
  age: 34,
  address: {
    streetTitle: "Startovaya",
    city: {
      title: "Moscow",
      countryTitle: "Russia",
    },
  },
  technologies: [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "JS",
    },
  ],
};
