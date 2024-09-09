const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth
}

const findTheOldest = function (arr) {
    return arr.reduce((oldest, currentPerson) => {
        const oldestPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldestPerson > currentPersonAge ? oldest : currentPerson
    })
};

// Do not edit below this line
module.exports = findTheOldest;
