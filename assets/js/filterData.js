class FilterData {
    constructor(textToFilterBy, filterColumn) {
        this.textToFilterBy = textToFilterBy;
        this.filterColumn = filterColumn;
    }

    getTextToFilterBy() {
        return this.textToFilterBy;
    }

    getFilterColumn() {
        return this.filterColumn;
    }
}
