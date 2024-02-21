function stringifyDate(day, month, year) {
    return `${String(year)}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

function calculateAge(currentDate, inputDate) {
    let DifferenceYears = currentDate.getUTCFullYear() - inputDate.getUTCFullYear();
    let DifferenceMonths = currentDate.getUTCMonth() - inputDate.getUTCMonth();
    let DifferenceDays = currentDate.getUTCDate() - inputDate.getUTCDate();

    console.log(currentDate);
    console.log(inputDate);

    if (DifferenceMonths < 0) {
        DifferenceYears --;
        DifferenceMonths = 12 + DifferenceMonths;
    }

    if (DifferenceDays < 0) {
        if (DifferenceMonths > 0) {
            DifferenceMonths --;
            
        } else {
            DifferenceYears --;
            DifferenceMonths = 11;
        }
        DifferenceDays = (new Date(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), 0).getDate()) + DifferenceDays;
    }

    const days_output = document.querySelector('.days-results');
    const months_output = document.querySelector('.months-results'); 
    const years_output = document.querySelector('.years-results');

    days_output.textContent = DifferenceDays;
    months_output.textContent = DifferenceMonths;
    years_output.textContent = DifferenceYears;
    return;
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
        const days_output = document.querySelector('.days-results');
        const months_output = document.querySelector('.months-results'); 
        const years_output = document.querySelector('.years-results');

        days_output.textContent = "- -";
        months_output.textContent = "- -";
        years_output.textContent = "- -";
        return;
    } else {
        const currentDate = new Date;
        currentDate.setUTCHours(0,0,0,0);
        const temp_inputDate = new Date(stringifyDate(date_values.day, date_values.month, date_values.year));
        const inputDate = new Date(temp_inputDate.toISOString());

        if (isNaN(inputDate) || !(inputDate.getUTCFullYear() === date_values.year &&
        inputDate.getUTCMonth() + 1 === date_values.month &&
        inputDate.getUTCDate() === date_values.day)) {
            main.classList.add('on-error');
            warner1.textContent = "Must be a valid date";
            return;
        } else if ((inputDate > currentDate)) {
            main.classList.add('on-error');
            warner1.textContent = "Must be on past";
            return;
        } else {
            calculateAge(currentDate, inputDate);
            return;
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
    return;
});


// const date_test = new Date("2004-02-21");
// console.log(date_test);

// var now_utc = Date.UTC(date_test.getUTCFullYear(), date_test.getUTCMonth(),
//                 date_test.getUTCDate(), date_test.getUTCHours(),
//                 date_test.getUTCMinutes(), date_test.getUTCSeconds());

// console.log(new Date(now_utc));
// console.log(date_test.toISOString());