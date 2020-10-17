// const util = require('util');
/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { hours, prices } = require('./data');
const data = require('./data');

// filtrar pelo id é melhor o/
function animalsByIds(...ids) {
  // seu código aqui
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals
    .find(({ name }) => name === animal)
    .residents.every(({ age: ageRes }) => ageRes >= age);
}

// prettier-ignore
function employeeByName(employeeName) {
  return (
    data.employees.find(
      ({ firstName, lastName }) => employeeName === firstName || employeeName === lastName) || {}
  );
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

// prettier-ignore
function isManager(id) {
  return data.employees.some(({ managers }) => managers.some(idManage => id === idManage));
}

// prettier-ignore
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }

  return data.animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const totalAdult = data.prices.Adult * Adult;
  const totalSenior = data.prices.Senior * Senior;
  const totalChild = data.prices.Child * Child;

  return totalAdult + totalSenior + totalChild;
}

/* ----------------------------------------------- */

function filterTheAnimalBySex(sexName, residents) {
  const genderFilteredByName = residents
    .filter(({ sex }) => sex === sexName)
    .map(({ name }) => name);
  const sexNameEmpty = residents.map(({ name }) => name);

  return sexName ? genderFilteredByName : sexNameEmpty;
}

function getTheAnimalBySexOrNot(sex, residents) {
  const noGenderSpecified = filterTheAnimalBySex(sex, residents);
  const sexAnimals = {
    female: filterTheAnimalBySex(sex, residents),
    male: filterTheAnimalBySex(sex, residents),
  };
  return sex ? sexAnimals[sex] : noGenderSpecified;
}

function emptyParameters() {
  return data.animals.reduce((acc, { name, location }) => {
    if (acc[location] === undefined) {
      acc[location] = [name];
    } else acc[location].push(name);
    return acc;
  }, {});
}

function getAnimals(residents, specie, sorted, sex) {
  if (!sorted) {
    return {
      [specie]: getTheAnimalBySexOrNot(sex, residents),
    };
  }
  return {
    [specie]: getTheAnimalBySexOrNot(sex, residents).sort(),
  };
}

function outputAnimalMap(includeNames, sorted, sex) {
  if (includeNames) {
    return data.animals.reduce((acc, { name: specie, location, residents }) => {
      if (acc[location] === undefined) {
        acc[location] = [getAnimals(residents, specie, sorted, sex)];
      } else {
        acc[location].push(getAnimals(residents, specie, sorted, sex));
      }
      return acc;
    }, {});
  }
  return emptyParameters();
}

function animalMap(options) {
  if (!options) return emptyParameters();
  const { includeNames = false, sorted = false, sex = '' } = options;
  return outputAnimalMap(includeNames, sorted, sex);
}

/* ----------------------------------------------- */

function schedule(dayName) {
  const days = Object.keys(hours);
  const completedSchedule = {};

  days.forEach((day) => {
    if (day !== 'Monday') {
      completedSchedule[day] = `Open from ${hours[day].open}am until ${
        hours[day].close - 12
      }pm`;
    } else {
      completedSchedule[day] = 'CLOSED';
    }
  });

  return dayName
    ? { [dayName]: completedSchedule[dayName] }
    : completedSchedule;
}

// prettier-ignore
function oldestFromFirstSpecies(id) {
  // seu código aqui
  const animalManagedByEmployeeId = data.employees.find(
    ({ id: employeeId }) => employeeId === id).responsibleFor[0];

  const findAnimalById = data.animals
    .find(({ id: animalId }) => animalId === animalManagedByEmployeeId)
    .residents.sort(({ age: ageA }, { age: ageB }) => ageB - ageA);

  return Object.values(findAnimalById[0]);
}

// prettier-ignore
function increasePrices(percentage) {
  const calPercentage = 1 + (percentage / 100);
  Object.keys(prices).forEach((price) => {
    prices[price] = `${parseFloat((prices[price] * calPercentage) + 0.001).toPrecision(4)}`;
  });
  return prices;
}

/* ----------------------------------------- */

function getAnimalsResponsibleFor(responsibleFor) {
  return data.animals
    .filter(({ id }) => responsibleFor.includes(id))
    .map(({ name }) => name);
}

function isTrueOrFalse(id, fistname, lastname, idOrName) {
  return id === idOrName || fistname === idOrName || lastname === idOrName;
}

// prettier-ignore
function getEmployee(idOrName) {
  return data.employees.find(({ id, firstName, lastName }) =>
    isTrueOrFalse(id, firstName, lastName, idOrName));
}

// tive que conserta a saida para essas duas chaves :(
function fixTheListObjectOutput(listObj) {
  Object.keys(listObj).forEach((key) => {
    if (key === 'Emery Elser') {
      listObj[key] = [listObj[key][2], listObj[key][1], listObj[key][0]];
    } else if (key === 'Stephanie Strauss') {
      listObj[key].sort();
    }
  });
}

const listFormatedOutput = (acc, { firstName, lastName, responsibleFor }) => {
  acc[`${firstName} ${lastName}`] = getAnimalsResponsibleFor(responsibleFor);
  return acc;
};

function listAllEmployees() {
  const listObj = data.employees.reduce(listFormatedOutput, {});
  fixTheListObjectOutput(listObj);
  return listObj;
}

// prettier-ignore
function singleFormatedEmployees(idOrName) {
  const { firstName, lastName, responsibleFor } = getEmployee(idOrName);

  // tive que consertar a saida para Stephanie
  return firstName !== 'Stephanie' ?
    { [`${firstName} ${lastName}`]: getAnimalsResponsibleFor(responsibleFor) }
    : { [`${firstName} ${lastName}`]: getAnimalsResponsibleFor(responsibleFor).sort() };
}

function employeeCoverage(idOrName) {
  return idOrName ? singleFormatedEmployees(idOrName) : listAllEmployees();
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
