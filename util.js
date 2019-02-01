var add = (a, b) => {
    return a + b;
};
var addASync = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};
var square = (a) => {
    return a * a;
};

var setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
    return user;
};
var squareASync=(n,callback)=>
{
    setTimeout(() => {
        callback(n*n);
    }, 1000);
}
module.exports =
    {
        add, square, setName,addASync,squareASync
    }