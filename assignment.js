// https://github.com/Shuvasish/assignmentThree

//problem one

function kilometerToMeter(kilo){
    if(typeof kilo === 'number'){
        return kilo*1000;
    }
    //considered negative number as a valid input
    return 'this is not a valid input';
}

console.log(kilometerToMeter(-33));
console.log(kilometerToMeter(13));
console.log(kilometerToMeter(-1));
console.log(kilometerToMeter(0));
console.log(kilometerToMeter(1));
console.log(kilometerToMeter(13));
console.log(kilometerToMeter('dfkdsl'));
console.log(kilometerToMeter([0,3,'d']));
console.log(kilometerToMeter({na:'shu'}));

//problem two
console.log('----------------------------------proble-2-------------------------');
function budgetCalculator(watch,phone,laptop){
    let watchPrice = 0;
    let phonePrice = 0;
    let laptopPrice = 0;
    if(typeof watch === 'number' && watch > 0){
        watchPrice = watch * 50;
    }
    if(typeof phone === 'number' && phone > 0){
        phonePrice = phone * 100;
    }
    if(typeof laptop === 'number' && laptop > 0){
        laptopPrice = laptop * 500;
    }
    return watchPrice+phonePrice+laptopPrice;
}

console.log(budgetCalculator(10,5,2));
console.log(budgetCalculator(0,5,2));
console.log(budgetCalculator(0,-50,2));
console.log(budgetCalculator(['kdfdks']));



//problem three
console.log('----------------------------------proble-3-------------------------');

function hotelCost(days){
    let cost ;
    if(days>0){
        if(days<=10){
            cost = days * 100;
            return cost;
        }else if(days <= 20){
            cost = (10*100) + ((days-10)*80);
            return cost;
        }else{
            cost = (10*100) + (10 * 80) + ((days-20)*50);
            return cost;
        }
        return 'this is a valid input';
    }else{
        //considered 0 as a invalid input
        return 'this is not a valid input';
    }
}

console.log(hotelCost(10));
console.log(hotelCost(11));
console.log(hotelCost(0));
console.log(hotelCost(1));
console.log(hotelCost(19));
console.log(hotelCost(20));
console.log(hotelCost(21));

console.log(hotelCost('dflsf'));
console.log(hotelCost([3,'dkfj']));
console.log(hotelCost({sh:'shf'}));


//problem four
console.log('----------------------------------proble-4-------------------------');



function megaFriend(arr){
    if(typeof arr !== 'number' && typeof arr !== 'string' && typeof arr !== 'boolean' && typeof arr !== 'undefined' && arr!==null){
        if(arr.length){
            let longestLengthOfName = arr[0].length;
            let longestName = arr[0];
            for(let i=0;i<arr.length;i++){
                if(longestLengthOfName<arr[i].length){
                    longestLengthOfName = arr[i].length;
                    longestName = arr[i];
                }
            }
            
            return longestName;
        }else{
            return 'this is not a valid input lvl 2'
        }
        
    }else{
        return 'this is not a valid input';
    }
}

console.log(megaFriend(['shuvo','dipu','prottoy','supto','shuvasish','rakib ali','shuvasish talukder']));
console.log(megaFriend('dfs'));
console.log(megaFriend(33));
console.log(megaFriend(undefined));
console.log(megaFriend(true));
console.log(megaFriend(['dfkd','dfkl']));
console.log(megaFriend([]));
console.log(megaFriend({dsf:'df'}));
console.log(megaFriend(null));
console.log(megaFriend(['shuvo','prottoy','supto','shuvasish talukder shuvo','rakib ali','shuvasish talukder']));






