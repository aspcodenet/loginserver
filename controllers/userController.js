function onHej(req,res){
    // Cookien och vem är inloggad ???  ->  req
    res.send('Hej')    
}

function onLogin(req,res){
    // Cookien och vem är inloggad ???  ->  req
    res.send('Hej')    
}

function onCreateUser(req,res){
    // Cookien och vem är inloggad ???  ->  req
    res.send('Hej')    
}

module.exports = {
    onHej,
    onLogin,
    onCreateUser
}