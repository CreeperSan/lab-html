const fs = require('fs')
const readlineSync = require('readline-sync')

const PATH_CONFIG_FOLDER = './config/'
const PATH_CONFIG_FILE = 'service.json'

console.log('╔══════════════════════════════════════════════════╗')
console.log('║      Welcome to Graffiti initialized wizard      ║')
console.log('║                                                  ║')
console.log('║                     :D                           ║')
console.log('║                                                  ║')
console.log('╚══════════════════════════════════════════════════╝')

let port = readlineSync.question('1. Please enter port :')

// 输入判断

try{
    port = parseInt(port)
    if (port <= 0 || port >= 65536){
        console.log('Port over range!')
        return
    }
}catch (e) {
    console.log('Port invalid!')
    return
}

// 写入

if(!fs.existsSync(PATH_CONFIG_FILE)){
    if(!fs.existsSync(PATH_CONFIG_FOLDER)){
        fs.mkdirSync(PATH_CONFIG_FOLDER)
    }
}

fs.writeFileSync(PATH_CONFIG_FOLDER+PATH_CONFIG_FILE, JSON.stringify({
    port     : port,
}))


