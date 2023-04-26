const getStringLength = (str)=>{
    return str.length;
}

const countVowels = (str)=>{
    let count = 0;
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    for(let i=0;i<str.length;i++){
       if(vowels.includes(str.charAt(i)))
       count++
    }
    return count++
}
module.exports = {getStringLength,countVowels};