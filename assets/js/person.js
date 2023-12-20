class Person {
    static columnsNames = [
        "#N.O",
        "First Name",
        "Last Name",
        "Age",
        "Nationality",
    ];

    static COLUMNS_ENUM = {
        Number: 0,
        FirstName: 1,
        LastName: 2,
        Age: 3,
        Nationality: 4,
        All: 5,
    };

    constructor(firstName, lastName, age, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.nationality = nationality;
    }

    static getPeopleFromArrayOfObjects(array) {
        const peopleArray = [];

        for (
            let currentObject = 0;
            currentObject < array.length;
            currentObject++
        ) {
            peopleArray.push(Person.formPersonFromObject(array[currentObject]));
        }

        return peopleArray;
    }

    static formPersonFromObject(object) {
        if (typeof object !== "object")
            throw new Error("Provided not an object!");

        return new Person(
            object.firstName,
            object.lastName,
            object.age,
            object.nationality
        );
    }

    getDataFromColumnName(columnName) {
        switch (columnName) {
            case Person.columnsNames[Person.COLUMNS_ENUM.FirstName]: {
                return this.getFirstName();
            }
            case Person.columnsNames[Person.COLUMNS_ENUM.LastName]: {
                return this.getLastName();
            }
            case Person.columnsNames[Person.COLUMNS_ENUM.Age]: {
                return this.getAge();
            }
            case Person.columnsNames[Person.COLUMNS_ENUM.Nationality]: {
                return this.getNationality();
            }
            default: {
                return (
                    this.getFirstName() +
                    this.getLastName() +
                    this.getAge() +
                    this.getNationality()
                );
            }
        }
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getAge() {
        return this.age;
    }

    getNationality() {
        return this.nationality;
    }

    setFirstName(newFirstName) {
        this.firstName = newFirstName;
    }

    setLastName(newLastName) {
        this.lastName = newLastName;
    }

    setAge(newAge) {
        this.age = newAge;
    }

    setNationality(newNationality) {
        this.nationality = newNationality;
    }
}
