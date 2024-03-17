//array destructuring 
//unpacking array to variables
const subjects = ["python", "java", "os", "networks"];

const [a1, a2, a3] = subjects;
console.log(a1);
console.log(a2);
console.log();
{
    const subjects = ["python", "java", "os", "networks"];
    const [a1, , a3] = subjects;
    console.log(a1);
    console.log(a3);
    console.log();
}

{
    function myfunc() {
        return ["python", "java", "os", "networks"];
    }
    const [a1, a2] = myfunc();
    console.log(a1);
    console.log(a2);
}

{
    [x=10,y=20]=[12];
    console.log(x,y);
}
{
    [x=12,y=x]=[12];
    console.log(x,y);
}
{
    //NESTED ARRAY DESTRUCT
    [a1,a2,[t,y]] = [1,2,[3,4],5];
    console.log(a1);
    console.log(a2);
    // console.log(a3);
    // console.log(a3[1]);
    console.log(t);
    console.log(y);
}
{
    const [x,y] = [m,n] = [1,2,3,4];
    console.log(x);
    console.log(y);
    console.log(m);
    console.log(n);
}