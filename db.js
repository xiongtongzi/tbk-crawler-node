var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'tbk'
})

module.exports.query = function(sql, arr, callback) {
    connection.connect(function (err) {
        if(err){throw err;return;}
        connection.query(sql,arr,function(error,results,fields){
            //将链接返回到连接池中，准备由其他人重复使用
            connection.release();
            if(error) throw error;
            //执行回调函数，将数据返回
            callback && callback(results,fields);
        });
    })
}
