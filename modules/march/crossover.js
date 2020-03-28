// In genetic algorithms, crossover is a genetic operator used 
// to vary the programming of chromosomes from one generation to the next.

// The one-point crossover consists in 
// swapping one's cromosome part with another in a specific given point. 
// The image bellow shows the crossover being applied on chromosomes 1011011001111 and 
// 1011100100110 with the cut point (index) 4:



// In this kata you have to implement a function crossover that receives 
// two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return 
// an array with the crossover result on both chromosomes [chromosome1, chromosome2].
// '1011011001111', '1011100100110', 4

const crossover = (c1, c2, index) => {
    string1 = c1.substring(0, index) + c2.substring(index)
    string2 = c2.substring(0, index) + c1.substring(index)

    return [string1, string2]
};



module.exports = crossover;