const twoSum = function(nums, target) {
    let PI = {};
    let matched= []
    nums.forEach((num,index)=>{
        const getNum = target-num;
        if(getNum in PI){
            matched = [PI[getNum],index]
        }
        PI[num] = index;
    })
    console.log(matched);
    return matched;
};

let a1 = [1,4,7,9]
target=10
twoSum(a1,target)