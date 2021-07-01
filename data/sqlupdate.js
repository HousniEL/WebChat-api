const con = require('./sqlConnection');



module.exports.updateJson = function(id_emet,id_dest,json){
    var sql = "UPDATE chats SET chat= ? WHERE util1=? and util2=? or util1=? and util2=?";
    var values = [[Buffer.from(JSON.stringify(json))],id_emet,id_dest,id_dest,id_emet];
        con.query(sql,values, function (err, result) {
            if (err) throw err;
        });
}





module.exports.accept_demande_amie=function(id_emet,id_dest){
    var init={
        'messages': [    
        ]
    };
    var sql = "UPDATE chats SET chat= ? WHERE util1=? and util2=?";
    con.query(sql, [[Buffer.from(JSON.stringify(init))],id_emet,id_dest], function (err, result) {
        if (err) throw err;
        console.log('demande accepter');
    });
}