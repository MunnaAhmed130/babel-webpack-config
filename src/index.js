class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  identity() {
    console.log(`My name is ${this.name} & I am ${this.age} years old`);
  }
}

const adam = new Person("adam", 23);
console.log(adam);
adam.identity();

function resolveLater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");

  const result = await resolveLater();
  console.log(result);
}
