const res = require("express/lib/response");
const Webscoket = require("ws");
const ws = new Webscoket.Server({
    port: 9998
});

module.exports.listen = () => {
    let online = 0;
    let action = '';
    ws.on("connection", client => {
        console.log(online)
        online = ws._server._connections;
        // client.send(`当前在线${online}个连接`,)
        client.on('message', (msg) => {
            console.log(msg)
            let patod = JSON.parse(msg);
             action = patod.action;
            if (action === 'newFilm') {
                ws.clients.forEach(client => {
                   
                    client.send(JSON.stringify(patod))
                })
            } else {
                console.log('错误')
            }
           
        })
    })
}
