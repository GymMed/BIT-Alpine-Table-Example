class Person {
    static columnsNames = [
        "#N.O",
        "First Name",
        "Last Name",
        "Age",
        "Nationality",
    ];

    constructor(firstName, lastName, age, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.nationality = nationality;
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
