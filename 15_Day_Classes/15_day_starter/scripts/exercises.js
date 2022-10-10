class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

}

class Dog extends Animal {
    constructor(name, age, color, legs) {

    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, clawLength) {
      super(name, age, color, legs)
      this.clawLength = clawLength

    }
}

class Statistics {
    constructor(count, sum, min, max, range, mean, median, mode, variance, standardDeviation, frequencyDistribution)
}

//unclear what it is asking here