var config = require('../../config_app.js');
var Chat = require('./lib/chat/chat.jsx');

React.render(
    <div>
        <Chat
            socketUrl={config.socketUrl} />
    </div>,
    document.getElementById('content')
);