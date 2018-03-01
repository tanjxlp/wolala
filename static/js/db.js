/**
 * 1.提取不会因为操作方式改变而改变的代码
 * 
 * 2.找到 可改变的部分，封装为参数
 * */

var mongo=require('mongodb');

var MongoClient=mongo.MongoClient; // 客户端

var url='mongodb://127.0.0.1:27017';
var dbName='mongodb110'; //链接的数据库的名字

 var add=function(client,collection,data,callback){
	collection.insert(data,function(err,result){
			if(err) throw	err;
			callback(result);
			client.close();
	})
	}
// 删除
 var del=function(client,collection,data,callback){ // data 数据条件
 	collection.deleteOne(data,function(err,result){
 		if(err) throw err;
 		callback(result);
 		client.close();
 	})
 }
 
 // 查询
 var find = function(client,collection,data,callback){
 // client客户端 、 	collection 集合 、 data 数据
 	collection.find(data).toArray(function(err,result){
 		if(err) throw err;
 		callback(result);
 		client.close();
 	})
 }
 
 // 更新
 var update =function(client,collection,data,callback){
//  db.名字.update({修改条件},{修改内容（含修改器）}) 	
//  data=[{修改条件},{修改内容（含修改器）}]   *灵活的使用数据类型
 	collection.updateOne(data[0],data[1],function(err,result){
 		if(err) throw err;
 		callback(result);//尝试 根据返回的结果集 判断操作成功
 		client.close();
 	})
 }
 
var methods={  // 注册操作方式
	insert:add,
	delete:del,
	update:update,
	find:find
}
var todo= function(type,collections,data,callback){
MongoClient.connect(url,function(err,client){ //客户端链接服务端
	if(err) throw err;
	var db=client.db(dbName)  //链接到数据库
	
	var collection=db.collection(collections) // * 选择数据库里面对应的集合
//		add(client,collection,data)
//		del(client,collection,data)
//		find(client,collection,data)
//		update(client,collection,[{name:'jack0'},{$set:{like:'吃'}}])
 		methods[type](client,collection,data,callback)
})
}
// mongo 操作数据库的时候  有一条属性：创建数据库、创建集合
//todo('insert','kk',{name:'jack1'})
module.exports=todo
/**其他文件引入的使用的时候
 * 1. var dbhandler =require('./db.js')
 *  2. dbhandler('insert','kk',{数据内容})
 * */
