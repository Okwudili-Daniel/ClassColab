import express, { Application,Request,Response } from 'express';

const port: number = 3344
const app: Application = express();

const server = app.listen(port, () =>{
    console.log("server listening on port");
    
});

process.on("uncaughtException", (err: Error) =>{
    console.log("uncaughtException", err);
    process.exit(1);
})

process.on("unhandledRejection", (reason) =>{
    console.log("unhandledRejection", reason);
    server.close(() =>{
        process.exit(1)
    })
})