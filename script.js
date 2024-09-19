
let company = {

    sales: [{name: 'John', salary: 1000}, {name:'Alice', salary: 600}],

    development: {

        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]

    }
};

function totalSalary(obj) {

    if (Array.isArray(obj)) {
        return obj.reduce((acc, elem) => acc + elem.salary, 0);
    } else {

        let sum = 0;

        for (let key of Object.values(obj)) {
            sum += totalSalary(key);
        }
        return sum;
    }
};

let result = totalSalary(company);
console.log(result);