class InputUserDTO{
    constructor(data){
        this.userName = data.userName;
        this.password = data.password;
        this.fullName = data.fullName;
        this.active = data.active;
    }

    build(){
        return this;
    }
}

module.exports = InputUserDTO;