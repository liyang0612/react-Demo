var mongoose = require('mongoose');

//数据库连接
var db = mongoose.connect('mongodb://127.0.0.1:27017/message');
db.connection.on('open', function () {
    console.log("-----数据库连接成功！------")
})
//建立骨架模型
var Schema = mongoose.Schema;
var userText = new Schema({
    text: String,
    key: String
});
var articleSchema = new Schema({
    title: String,
    content: String,
    date: String
})

//留言数据模型entity
var text = mongoose.model('text', userText); //用户留言表
var article = mongoose.model('article', articleSchema); //文章管理表

var dbObject = {
    "text": text,
    "article": article,
}
module.exports = dbObject;