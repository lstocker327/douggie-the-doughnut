class Hero{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = ['i\'m fresher than day old pizza',
 'you can\'t count my calories']
  }

  talkSass(){
    console.log(this.catchPhrases[Math.floor(Math.random() * 2)])
  }
  announceHealth(){
    console.log(this.health)
  }
  fight(){
    ("im ready to rumble")
  }
}

const dougieTheDonut = new Hero("Dougie")

class Enemy{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = [
      'i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer'
    ]
    }

  talkSmack(){
    console.log(this.catchPhrases[Math.floor(Math.random() * 2)])
  }
  announceHealth(){
    console.log(this.health)
  }
  fight(){
    console.log("im gonna flatten you like a slice of pepperoni")
  }
}

const pizzaRat = new Enemy("Pizza Rat");



dougieTheDonut.talkSass();
pizzaRat.talkSmack();
dougieTheDonut.announceHealth();
pizzaRat.announceHealth();
