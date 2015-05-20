var ChatForm = require('./chat_form.jsx');
var io = require('socket.io-client');

module.exports = React.createClass({
    settings: {
        maxChatsInQue: 5
    },
    currentCommentKey: 1,
    addMessage: function(message){
        var copiedMessages = this.state.messages.slice();
        message.key = this.currentCommentKey;
        this.currentCommentKey += 1;
        copiedMessages.push(message);
        if( copiedMessages.length > this.settings.maxChatsInQue ){
            copiedMessages.shift();
        }
        this.setState({messages: copiedMessages});
    },
    getInitialState: function(){
        this.init();
        return({messages: []});
    },
    init: function(){
        var self = this;
        self.socket = io.connect(this.props.socketUrl);

        self.socket.on('chat', function (data) {
            self.addMessage(data);
        });
    },
    postComment: function(messageIn){
        this.socket.emit('Chat_send', { message: messageIn }, function (data) {
            console.log(data);
        });
    },
    render: function(){
        return(
            <div>
                {this.state.messages.map(function(message){
                    return(<p key={message.key}>
                                {message.message}
                            </p>);
                })}
                <ChatForm
                    postComment={this.postComment} />
            </div>
        );
    }
});