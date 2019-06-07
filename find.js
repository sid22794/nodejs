MOngoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
cost dbname = 'myproject2';
MongoClient.connect(url,{useNewParser:true}, function(err,client){
    console.log("connected to server")
})
const findDocuments = function(db,callback)
{
    const collection= db.cllection(document);
    collection.find({'a':1}).toArray(function(err,docs)
    {
        console.log('found the records');
        console.log(docs);
        callback(docs);
    });
}