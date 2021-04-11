const http = require('http');


const users = ['seolmin1','seolmin2','seolmin3','seolmin4'];

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end(`<h1>hello node.js~~!!</h1>`);
  }else if(req.url === '/users'){
    res.end(`<h1>${users}</h1>`);
  }else if(req.url.split('/')[1] === 'users'){
    const userIdx = req.url.split('/')[2];
    const userName = users[userIdx-1];
    res.end(`<h1>${userName}</h1>`);
  }else{
    res.end('<h1>Page Not Available</h1>');
  }

});
server.listen(3000);