const crypto = require('crypto');
const express = require('express');
const app = express();
const Worker = require('webworker-threads').Worker;

    app.get('/', (req, res) => {
        const worker = new Worker(function (){
            this.onmessage = function (){
                let counter = 0;
                while(counter < 1e9){
                    counter++;
                }
                
                this.postMessage(counter);
            }
        });

        worker.onmessage = function(message){
            console.log(message.data);
            res.send(''+ message.data);
        }

        worker.postMessage();
    });

    app.listen(3000);

//apache benchmark
//ab -c 2 -n 2 localhost:3000/