class Teachers {
    constructor(name, sub) {
        this.name = name;
        this.sub = sub;
    }

    dept() {
        console.log(`I Love this ${this.sub}`);
    }
}

const tusar = new Teachers("Tusar", "Web");
console.log(tusar);