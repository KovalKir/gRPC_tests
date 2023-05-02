var PROTO_PATH = __dirname + '/service1.proto';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

// var addr = {
//     address: 'iaa1046np7yag468x8za9z3pjj5kx6ujalcm3695qk',
    
// }

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true,
     //includeDirs: [__dirname + '\proto\cosmos\base\query\v1beta1\pagination.proto']
    });
var query1 = grpc.loadPackageDefinition(packageDefinition).cosmos.base.tendermint.v1beta1;

var client = new query1.Service ( '34.80.93.133:9090' , grpc.credentials.createInsecure());



function main() {
    client.getLatestBlock ({}, function (err,response){
        if (err) {
            console.log(err);
        } else {
            console.log('response', response);
        }
        
    })
    
}

main()






// var call = client.Balance (addr, function (err, balance){ 
//     if (err) {
//         console.error(err);
//     }  else {
//         console.log(balance);

//     }
// })