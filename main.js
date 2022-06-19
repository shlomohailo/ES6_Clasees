class Table {
    width;
    height;
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }
}

const newObj = new Table(2, 3);
const lastObj = new Table(21, 3);
console.log(lastObj.height);


class user {

    constructor(firstName, calssRom, Id) {
        this.firstName = firstName;
        this.calssRom = calssRom;
        this.Id = Id;
    }
}
const userObject = new user('shlomo', 'b', 2033875);
const userObject1 = new user('shlomo', 'b', 2875);


console.log(userObject, userObject1);


class user1 {

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}
const userObject2 = new user1('shlomo', 'hailo', 29, 'shloloo,@sadf.com');
const userObject3 = new user1('shlomo', 'hailo', 2, 'shloloo,@sadf.com');
const userObject4 = new user1('shlomo', 'hailo', 9, 'shloloo,@sadf.com');
console.log(userObject2, userObject3, userObject4);
const allAray = [userObject2, userObject3, userObject4]

allAray.forEach(element => {


    h1print.innerHTML += " " + element.firstName + " " + element.lastName + " " + element.age + " " + element.email;





});






class user2 {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

function sameFank() {

    const nameuser = document.getElementById('nameinput').value;
    const lastnameuser = document.getElementById('lastnameinput').value;
    const ageuser = document.getElementById('ageinput').value;

    const inputobject = new user2(nameuser, lastnameuser, ageuser)
    console.log(inputobject)
    for (const key in inputobject) {

        inputtbody.appechild(document.createElement('th'))
        th.innerHTML = key + ":" + " ";
        th.innerHTML = '<td>${inputobject[key]}</td>'
    }

}


// .צרו מחלקה של כלב עם שדות של שם, סוג ותאריך לידה. 

class dog {
    constructor(namedog, typedog, datedog) {
        this.namedog = namedog;
        this.typedog = typedog;
        this.datedog = datedog;
    }
}
// צרו מערך עם 5 מופעים והדפיסו אותם ללוג. 
const dog1 = new dog('shimon', 'pitbol', '2/2/2021');
const dog2 = new dog('shimon', 'pitbol', '2/2/2021');
const dog3 = new dog('shimon', 'pitbol', '2/2/2021');
const dog4 = new dog('shimon', 'pitbol', '2/2/2021');
const dog5 = new dog('shimon', 'pitbol', '2/2/2021');

const arrayDog = [dog1, dog2, dog3, dog4, dog5];

arrayDog.forEach(element => {
    console.log(element);
});


// .צרו מחלקה של מורה עם שדות של שם פרטי, שם משפחה, כיתה ואימייל

class teacher {
    constructor(nameteacher, lastnameteacher, calssteacher, eamilteacher) {
        this.nameteacher = nameteacher;
        this.lastnameteacher = lastnameteacher;
        this.calssteacher = calssteacher;
        this.eamilteacher = eamilteacher;
    }
}
const valueinputname = document.getElementById('inputnametechaer');
const valueinputlastname = document.getElementById('inputlastnameteacher');
const valueinputage = document.getElementById('inputageteacher');
const valueinputemail = document.getElementById('inputemailteacher');
const tbody = document.getElementById('tcodyid')
// צרו מערך של 4 מופעים עם נתונים מהמשתמש והדפיסו אותם לטבלה.
const arrayTechers = [];
function inputclasstechers() {


    const teachers = new teacher(valueinputname.value, valueinputlastname.value, valueinputage.value, valueinputemail.value);


    arrayTechers.push(teachers);
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td> ${valueinputlastname.value}</td>
    <td> ${valueinputlastname.value}</td>
    <td> ${valueinputage.value}</td>
    <td>  ${valueinputemail.value}</td>`;

    tbody.appendChild(tr);


    valueinputname.value = '';
    valueinputlastname.value = '';
    valueinputage.value = '';
    valueinputemail.value = '';


}


class lecturer {
    constructor(firstName, Istherelecturer, Gradelist, students) {
        this.firstName = firstName;
        this.Istherelecturer = true;
        this.Gradelist = Gradelist;
        this.students = students;
    }
}

const mylecturer = new lecturer("shlomo", true, [7, 8, 9, 4,99], ['shlomo', 'shimon', 'sara', "avj"]);




for (const key in mylecturer) {

    htwo.innerHTML += " " + mylecturer[key];

}
namesstudent.innerHTML = mylecturer['students'].sort();
gree.innerHTML = mylecturer['Gradelist'].sort((a,b) => b - a);