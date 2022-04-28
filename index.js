const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array,query){
    return array.filter(function(driver) {
        return driver.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
}

console.log(findMatching(drivers, 'Bobby'));

function fuzzyMatch(array,query){
    return array.filter( (element) => element.charAt(0) === query.charAt(0));
}



function matchName(drivers, value){
    return drivers.filter((element) => element.name === value);
}