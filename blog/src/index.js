import React from 'react';
import ReactDOM from 'react-dom';
import BlogRoute from './routes';

import registerServiceWorker from './registerServiceWorker';

//  todo 判断是否已经登陆，登陆保持中，再次打开不用登陆，进入欢迎页面。否则进入登录页界面

ReactDOM.render(<BlogRoute/>, document.getElementById('root'));
registerServiceWorker();
