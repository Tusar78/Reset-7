const myFunc = (cb, name) => {
    cb(name);
}

const cb = (name) => {
    console.log(`My name is ${name}`);
}

myFunc(cb, 'Tusar');