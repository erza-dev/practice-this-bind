let obj = {
    Name: [],
    waitName: function (Name) {
        (this.Name.push(prompt('Yourname')));
    },
    spitout: function () {
        alert(this.Name);
    }
}
// get input store on Name prop
let getname = obj.waitName.bind(obj);
// output Name
let callname = obj.spitout.bind(obj);