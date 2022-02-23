export default class SocleServer {
    ws = null;
    connect() {
        if (!window.WebSocket) {
            return console.log('浏览器不支持webSocket')
        }
        this.ws = new WebSocket('ws://localhost:9998');
        this.ws.onopen = () => {
            if (this.ws.readyState === 1) {
                this.ws.send(JSON.stringify({
                    action:"newFilm"
                }))
            }
        }
        this.ws.onclose = () => {
            console.log('连接服务端失败')
        }
      
       
        
    }
    close() {
        this.ws.close();
    }
}

