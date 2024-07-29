module.exports = function toReadable (number) {

    // find hundreds, tens, ones

    const ones = number % 10;
    const tens = Math.floor((number / 10) % 10);
    const hundreds = Math.floor((number / 100) % 10);

    
    const getOnes = (ones) => {
        
        switch(ones){
            case 0: return '';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';        
       }        
    }

    const get10to19 = (number) => {

        switch(number){
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
        }
    }

    const getTens = (tens) =>{

        switch(tens){
            case 0: return '';
            case 2: return 'twenty ';
            case 3: return 'thirty ';
            case 4: return 'forty ';
            case 5: return 'fifty ';
            case 6: return 'sixty ';
            case 7: return 'seventy ';
            case 8: return 'eighty ';
            case 9: return 'ninety ';
        }
    }

    const getHundreds = (hundreds) => {

        if (hundreds === 0){
            return ''
        }else{
              return getOnes(hundreds) + ' hundred '
        }

    }

    if (number === 0 ){
        return 'zero';
    }

    if (number > 0 && number < 10 ){
        return getOnes(ones);
    }else if (number >= 10 && number < 20){
        return get10to19(number);
    }

   
    let response = '';

    if ( number > 100 && (number % 100) >= 10 && (number % 100) <= 19){
        response = getHundreds(hundreds) + get10to19(number % 100);

    }else{
        response = getHundreds(hundreds) +  getTens(tens) + getOnes(ones)

    }

   
    return response.trim();

}