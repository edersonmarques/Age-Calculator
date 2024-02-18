function stringifyDate(day, month, year) {
    return `${String(year)}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
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

    const day_input = document.querySelector('#day-input');
    const month_input = document.querySelector('#month-input');
    const year_input = document.querySelector('#year-input');

    date_values.day = Number(day_input.value);
    date_values.month = Number(month_input.value);
    date_values.year = Number(year_input.value);
        
    if (day_input.value === "") {
        main.classList.add('on-error');
        warner1.textContent = "This field is required";
    } else if (isNaN(date_values.day) || date_values.day < 1 || date_values.day > 31) {
        main.classList.add('on-error');
        warner1.textContent = "Must be a valid day";
    }

    if (month_input.value === "") {
        main.classList.add('on-error');
        warner2.textContent = "This field is required";
    } else if (isNaN(date_values.month) || date_values.month < 1 || date_values.month > 12) {
        main.classList.add('on-error');
        warner2.textContent = "Must be a valid month";
    }
    
    if (year_input.value === "") {
        main.classList.add('on-error');
        warner3.textContent = "This field is required";
    } else if (isNaN(date_values.year)) {
        main.classList.add('on-error');
        warner3.textContent = "Must be a valid year";
    } else if (date_values.year <= 1900) {
        main.classList.add('on-error');
        warner3.textContent = "Must be after 1900";
    }


    if (main.classList.contains('on-error')) {
        return;
    } else {
        const currentDate = new Date();
        const inputDate = new Date(stringifyDate(date_values.day, date_values.month, date_values.year));

        if (isNaN(inputDate) || !(inputDate.getUTCFullYear() === date_values.year &&
        inputDate.getUTCMonth() + 1 === date_values.month &&
        inputDate.getUTCDate() === date_values.day)) {
            main.classList.add('on-error');
            warner1.textContent = "Must be a valid date";
            console.log(date_values);
            console.log(inputDate.getUTCFullYear());
            console.log(inputDate.getUTCMonth());
            console.log(inputDate.getUTCDate());
        } else if ((inputDate > currentDate)) {
            main.classList.add('on-error');
            warner1.textContent = "Must be on past";
        } else {
            calculateAge(currentDate, inputDate);
        }
    }
};

const calculate_button = document.querySelector('.calculator-button');
calculate_button.addEventListener('click', () => {
    const date_values = {
        day: undefined,
        month: undefined,
        year: undefined,
    };
    inputTreatment(date_values);
});

