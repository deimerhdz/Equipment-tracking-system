
class Notifications{
    constructor(){
        this.notifications=[];
        this.users ={};
    }

    get ultimos10(){
        this.notifications= this.notifications.splice(0,10);
        return this.notifications;
    }

    get usersArr(){
        return Object.values(this.users);
    }

    sendNotifications(message){
        this.notifications.unshift(message);
    }

    addUser(user){
        this.users[user.id] = user
    }

    disconnectUser(id){
        delete this.users[id];
    }
}

module.exports = Notifications;