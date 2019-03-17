class SharedProperties {
  constructor() {
    this.className = 'SomeObject';
    this.classVersion = '2.1';
    this.revisionId = 19;
    this.isMounted = true;
  }
}

class SomeYellowObject extends SharedProperties {
  [Symbol.iterator]() {
    const objectProperties = Object.getOwnPropertyNames(this);
    let propertyIndex = 0;

    return {
      next() {
        if (propertyIndex < objectProperties.length) {
          return { done: false, value: objectProperties[propertyIndex++] }
        } else {
          return { done: true }
        }
      }
    };
  }
}

class SomeOrangeObject extends SharedProperties {
  *[Symbol.iterator]() {
    const objectProperties = Object.getOwnPropertyNames(this);

    for(const propertyIndex in objectProperties) {
      yield objectProperties[propertyIndex];
    }
  }
}

const print = (ClassName) => {
  for (const propertyName of new ClassName()) {
    console.log(` ${propertyName} of class ${ClassName.name}`);
  }
  for (const propertyName in new ClassName()) {
    console.log(` ${propertyName} in class ${ClassName.name}`);
  }
};

print(SomeYellowObject);
console.log('------======-----');
print(SomeOrangeObject);
