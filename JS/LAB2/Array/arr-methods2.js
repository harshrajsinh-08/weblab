//copywithin
//to copy within the array from the array itself
{
    const sub = ["java", "python", "os", "networks"];
    sub.copyWithin(1, 0);
    console.log(sub);
}
{ //using range
    const sub = ["java", "python", "os", "networks","hello","why"];
    sub.copyWithin(4,0,3);
    console.log(sub);
}

//SLICE AND SPLICE 
{
    const sub = ["java", "python", "os", "networks"];
    const res =sub.slice(1,3); //ending index not included and returns an array
    console.log(res); 
    const res2 = sub.slice(1); //from index 1 to end
    console.log(res2);
}
//SPLICE --> remove/add any number of elements from an index
{
    const sub = ["java", "python", "os", "networks","why","Hello"];
    let res = sub.splice(1,2); //splice(start index , how many elements) 
    console.log(res);
    sub.splice(1,0,"physics","chemistry");
    console.log(sub);
    sub.splice(4,2,"physics","chemistry");
    console.log(sub);
}