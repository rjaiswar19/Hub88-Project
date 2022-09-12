class utils{
    static getRandomEmail(){
        var email=Math.random().toString(36).substring(6)+"@avlr.net";
        return email
    }
}

export default utils