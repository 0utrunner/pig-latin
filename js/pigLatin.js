exports.translate = function(word) {
    let splitter = word.split(' ')
    let finalSentence = []
    let vowels = /[a, e, i , o, u, w, y]/i
    let upper = /[A-Z]/

    for(let i = 0; i < splitter.length; i++){
        splitter[i] = splitter[i].split('')
        while(vowels.test(splitter[i][0]) != true){
            if(splitter[i][0] == 'q'){
                splitter[i].push(splitter[i].shift())
                splitter[i].push(splitter[i].shift())
            }
            else{
            splitter[i].push(splitter[i].shift())
            }
        }
        splitter[i].push('ay')
        splitter[i] = splitter[i].join('')
        finalSentence.push(splitter[i])
    }
    finalSentence = finalSentence.join(' ')
    return finalSentence
};