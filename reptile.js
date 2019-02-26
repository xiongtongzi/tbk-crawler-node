var http = require('https')
var fs = require('fs')

var qs = require('querystring')
var cookiestr = require('./tbk.properties')
// 数据库链接
var db = require('./db')
// 链接数据库

var data = {
    sortType: 9,
    perPageSize: 1,
    startBiz30day: 100,
    toPage: 1
}
var option = {
    hostname: 'https://pub.alimama.com',
    path: `/items/search.json?sortType=${data.sortType}&startBiz30day=${100}&toPage=${1}&perPageSize=${data.perPageSize}`,
    headers: {
        'Accept-Encoding':'gzip, deflate, br',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': '1',
        'Cookie': cookiestr
    }
}
http.get(`https://pub.alimama.com/items/search.json?sortType=${data.sortType}&startBiz30day=${100}&toPage=${1}&perPageSize=${data.perPageSize}`, function(req, res){
    req.setEncoding('utf-8')
    var str = ``
    req.on('data', (data) => {
        str += data
    })
    req.on('end', () => {
        // 获取的淘宝客数据
        var res = JSON.parse(str)
        db.query()
    })
})
