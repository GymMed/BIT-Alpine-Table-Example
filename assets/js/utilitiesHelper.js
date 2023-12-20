class UtilitiesHelper {
    constructor() {}

    static isRecordShown(record, shownArray) {
        if (!(record instanceof Person)) return false;

        let recordData = record.getDataFromColumnName(
            Person.columnsNames[Person.COLUMNS_ENUM.All]
        );

        for (
            let currentShownRecord = 0;
            currentShownRecord < shownArray.length;
            currentShownRecord++
        ) {
            if (
                recordData ===
                shownArray[currentShownRecord].getDataFromColumnName(
                    Person.columnsNames[Person.COLUMNS_ENUM.All]
                )
            )
                return true;
        }

        return false;
    }
    //tries to get Repeating data index for provided repeatTimes
    static getRepeatedDataIndexForTimesInArray(
        array,
        valueToSearch,
        repeatTimes
    ) {
        let valueRepeatedTimes = 0;
        for (
            let currentElement = 0;
            currentElement < array.length;
            currentElement++
        ) {
            if (array[currentElement] === valueToSearch) {
                valueRepeatedTimes++;

                if (valueRepeatedTimes === repeatTimes) return currentElement;
            }
        }

        throw new Error(
            "Couldn't find in " +
                array +
                " repeating value " +
                valueToSearch +
                " index for times " +
                repeatTimes
        );
        return -1;
    }

    static getPeopleArrayAsStrings(peopleArray) {
        const peopleArraysAsStrings = [];

        for (
            let currentPerson = 0;
            currentPerson < peopleArray.length;
            currentPerson++
        ) {
            peopleArraysAsStrings.push(
                peopleArray[currentPerson].getDataFromColumnName(
                    Person.columnsNames[Person.COLUMNS_ENUM.All]
                )
            );
        }
        return peopleArraysAsStrings;
    }
    static dataRepeatingTimes(data, value) {
        if (!Array.isArray(data) || data.length < 1) return 0;

        let totalRepeating = 0;
        for (let currentData = 0; currentData < data.length; currentData++) {
            if (data[currentData] === value) totalRepeating++;
        }

        return totalRepeating;
    }

    static isInArraySize(array, value) {
        if (!Array.isArray(array)) {
            return false;
        } else if (
            isNaN(value) ||
            value < 0 ||
            !Array.isArray(array) ||
            value > array.length - 1
        ) {
            return false;
        }
        return true;
    }

    static isEmptyArray(array) {
        if (!Array.isArray(array)) return true;

        if (array.length < 1) return true;

        return false;
    }
}
