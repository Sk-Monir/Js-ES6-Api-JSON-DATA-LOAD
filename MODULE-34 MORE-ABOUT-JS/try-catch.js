function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    console.log(11111);

    try {
        const age = parseInt(ageText)
        if (isNaN(age)) {
            throw "Please Enter a number";
        }
        else if (age < 18) {
            throw "Bacha not allowed";
        }
        else if (age > 30) {
            throw "morobbi morobbi ohomm ohomm"
        }
        errorTag.innerHTML = '';
    }
    catch (error) {
        console.log('ERROR :', error);
        errorTag.innerHTML = 'Error ' + error;
    }
    finally {
        console.log(' I can Execute always');
    }
    console.log(11111);

}