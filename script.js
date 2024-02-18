function stringifyDate(day, month, year) {
    return `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/${String(year).padStart(4, '0')}`
};

function inputTreatment(date_values) { 
    const main = document.querySelector('.age-calculator');
    main.classList.remove('on-error');
    const warner1 = document.querySelector('.division-error1');
    const warner2 = document.querySelector('.division-error2');
    const warner3 = document.querySelector('.division-error3');
    warner1.textContent = "";
    warner2.textContent = "";
    warner3.textContent = "";
    
    if (date_values.year === "" || date_values.year === undefined) {
        main.classList.add('on-error');
        warner3.textContent = "This field is required";
        return;
    } else if (date_values.year <= 1900) {
        main.classList.add('on-error');
        warner3.textContent = "Must be after 1900";
        return;
    }
};

const calculate_button = document.querySelector('.calculator-button');
calculate_button.addEventListener('click', () => {
    const date_values = {
        day: undefined,
        month: undefined,
        year: undefined,
    };
    const day_input = document.querySelector('#day-input');
    date_values.day = Number(day_input.value);
    const month_input = document.querySelector('#month-input');
    date_values.month = Number(month_input.value);
    const year_input = document.querySelector('#year-input');
    date_values.year = Number(year_input.value);
    inputTreatment(date_values);
});

