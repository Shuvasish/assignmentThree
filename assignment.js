// https://github.com/Shuvasish/assignmentThree

//problem one

function kilometerToMeter(kilo){
    if(typeof kilo === 'number'){
        return kilo*1000;
    }
    //considered negative number as a valid input
    return 'this is not a valid input';
}



//problem two

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



//problem three

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
        
    }else{
        //considered 0 as a invalid input
        return 'this is not a valid input';
    }
}



//problem four

function megaFriend(arr){
    if(typeof arr !== 'number' && typeof arr !== 'string' && typeof arr !== 'boolean' && typeof arr !== 'undefined' && arr!==null){
        if(arr.length){
            let longestName = arr[0];
            for(let i=0;i<arr.length;i++){
                if(longestName.length<arr[i].length){
                    longestName = arr[i];
                }
            }
            
            return longestName;
        }else{
            return 'this is not a valid input'
        }
        
    }else{
        return 'this is not a valid input';
    }
}





