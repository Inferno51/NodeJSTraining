'use strict'

function Person(first, last, interests, friends, family){
    this.firstName = first;
    this.lastName = last;
    this.interests = interests;
    this.friends = friends;
    this.family = family;
    this.fullName = this.firstName + " " + this.lastName;
    // let logInfo = (function(array){      <---Not working!
    //     return array.join(", ");
    // });   
}

let jon = new Person(
    "Jon", 
    "Pack",
    [`Warhammer`, `TV`, `Movies`],
    [`John`, `Ben`, `Dave`],
    [`Erin`, `Larry`, `Diane`, `Liz`],
)

console.log(jon);

const me = {
    firstName: "Jon",
    lastName: "Pack",
    interests:[`Warhammer`, `TV`, `Movies`],
    friends:[`John`, `Ben`, `Dave`],
    family:[`Erin`, `Larry`, `Diane`, `Liz`],
    fullName: () => {
        return me.firstName + " " + me.lastName;
    },
    logInfo: ((array) => {
        return array.join(", ");
    })

}
document.getElementById("name").innerHTML = "My name is " + me.fullName();
document.getElementById("interests").innerHTML = `Interests: ` + me.logInfo(me  .interests);
document.getElementById("family").innerHTML = `Family: ` + me.logInfo(me.family);
document.getElementById("friends").innerHTML = `Friends: ` + me.logInfo(me.friends);

// console.log(me.firstName);
// console.log(me.lastName);
// console.log("Interests: " + me.logInfo(me.interests));
// console.log("Friends: " + me.logInfo(me.friends));
// console.log("Family: " + me.logInfo(me.family));