document.addEventListener('DOMContentLoaded', () => {

    const values = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    const copyValues = values.filter((values) => {
        return values > 40;
    });

    console.log(copyValues);
});