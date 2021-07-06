export const binarySearchClosestAngle = (angle_list, angle) =>{
    let difference = 100000;
    
    let min = 0;
    let max = angle_list.length; //max index is length - 1 but we are using floor so should never hit length
    let target = Math.floor((max-min)/2)
    let threshold = Math.PI/angle_list.length;
    console.log(threshold);
    let depth=0;
    difference = angle_list[target]-angle;
    while(Math.abs(difference) > threshold && depth<15){
        
        if(difference > 0){
            //if current target is greater than the angle go left
            max = target;
        }
        else{
            min = target;
        }
        target = Math.floor((max-min)/2)+min;
        difference = angle_list[target]-angle;
        depth+=1;
    }
    return target;
}