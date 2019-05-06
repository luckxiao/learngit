var models = require('../../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../../db/sqlMap');

var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}

var dateStr = function(str) {
    return new Date(str.slice(0,7));
}

console.log("HHHH");
//获取用户信息
router.get('/getSale', (req, res) => {
    var sql_name = $sql.sale.select_name;
    console.log("SS");
    console.log(sql_name);
    //conn.query(sql_name, function(err, result) {    
        //进行一个JSON的格式化处理，把RowDataPacket
        // var dataString = JSON.stringify(result);
        // for(var key in dataString){
        //     var data = JSON.parse(key);
        //     console.log(typeof(data));
        //     jsonWrite(res, data);
        // }     
      //  })
    conn.query(sql_name, function(err,result) {
        if (err) {
            console.log(err);
        }
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        var ObjTSON1 = {};
        var ObjTSON2 = {};
        var arr = [] ;  //定义JSON 数组
        // for (var p in data){
        //     console.log(data[p].month + " " + data[p].sale_num);
        //     ObjTSON1.month=data[p].month
        //     ObjTSON2.sale_num = data[p].sale_num
        //     console.log(ObjTSON1)
        //     console.log(ObjTSON2)
        // }
        jsonWrite(res, data);
    })
});


// router.get('/getUser', (req, res) => {
//     var sql_name = $sql.user.select_name;
//     // var sql_password = $sql.user.select_password;
//     var params = req.body;
//     console.log(params);
//     if (params.name) {
//         sql_name += "where username ='"+ params.name +"'";
//     }
//     conn.query(sql_name, params.name, function(err, result) {
//         if (err) {
//             console.log(err);
//         }
//         // console.log(result);
//         if (result[0] === undefined) {
//             res.send('-1')   //查询不出username，data 返回-1
//         } else {
//             jsonWrite(res, result);
//         }
//     })
// });

//更新用户信息
// router.post('/updateUser', (req, res) => {
//     var sql_update = $sql.user.update_user;
//     var params = req.body;
//     console.log(params);
//     if (params.id) {
//         sql_update  += " email = '" + params.email +
//                         "',phone = '" + params.phone +
//                         "',card = '" + params.card +
//                         "',birth = '" + params.birth +
//                         "',sex = '" + params.sex +
//                         "' where id ='"+ params.id + "'";
//     }    
//     conn.query(sql_update, params.id, function(err, result) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(result);
//         if (result.affectedRows === undefined) {
//             res.send('更新失败，请联系管理员')   //查询不出username，data 返回-1
//         } else {
//             res.send('ok'); 
//         }
//     })
// });

// //更改密码
// router.post('/modifyPassword', (req, res) => {
//     var sql_modify = $sql.user.update_user;
//     var params = req.body;
//     console.log(params);
//     if (params.id) {
//         sql_modify +=  " password = '" + params.pass +
//                         "',repeatPass = '" + params.checkPass +
//                         "' where id ='"+ params.id + "'";
//     }
//     conn.query(sql_modify, params.id, function(err, result) {
//         if (err) {
//             console.log(err);
//         }
//         // console.log(result);
//         if (result.affectedRows === undefined) {
//             res.send('修改密码失败，请联系管理员')   //查询不出username，data 返回-1
//         } else {
//             res.send('ok'); 
//         }
//     })
// });


module.exports = router;
