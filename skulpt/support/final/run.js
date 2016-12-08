
var input = read('tmp.py');
print("-----");
print(input);
print("-----");
Sk.configure({syspath:[""], read:read, python3:false, debugging:false});
Sk.misceval.asyncToPromise(function() {
    return Sk.importMain("tmp", true, true);
}).then(function () {
    print("-----");
}, function(e) {
    print("UNCAUGHT EXCEPTION: " + e);
    print(e.stack);
});
    