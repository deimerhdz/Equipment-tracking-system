const { comprobarJwt } = require("../helpers/generate-jwt");
const Notifications = require("../models/notification-report");
const notificationsUsers = new Notifications()
const socketController = async(socket,io)=>{
    
    

  const user =  await comprobarJwt(socket.handshake.headers['token']);
  if(!user){
    return socket.disconnect();
  }
 
  if(user.role =='ADMIN'){
      notificationsUsers.addUser(user);
  }

//   io.emit('active-users',notificationsUsers.usersArr);
  socket.on('send-notification',(payload)=>{
   
   notificationsUsers.sendNotifications(payload);
   notificationsUsers.usersArr.forEach(user=>{
    socket.to(user.id).emit('receive-notification',notificationsUsers.ultimos10);
   })
 
  })
  socket.join(user.id)
  
  //desconectar
  socket.on('disconnect',()=>{
    notificationsUsers.disconnectUser(user.id);
    io.emit('active-users',notificationsUsers.usersArr);
  })

}

module.exports = {
    socketController
}