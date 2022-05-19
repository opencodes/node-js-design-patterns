class Logger {
    logs = []

    constructor() {
        this.logs = [];
    }

    log (message) {
        this.logs.push({ message })
        let time = new Date().toISOString();
        console.log(`${time} : ${message}`)
    }

    get count () {
        return this.logs.length;
    }

    trail () {
        return JSON.stringify(this.logs)
    }
}

// class Singelton {

//     constructor() {
//         if (!Singelton.instance) {
//             Singelton.instance = new Logger();
//         }
//     }
//     getInstance () {
//         return Singelton.instance;
//     }
// }

// module.exports = Singelton;
//Default export will handle singelton behaviour
module.exports = new Logger();