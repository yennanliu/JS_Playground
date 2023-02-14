// -------------------------------

// https://youtu.be/_ZGSmdbAQeo?t=53

const util = {
    sum(a, b) {
        return a + b;
    }
}

// export : can export module, object, array (all JS variables)....
export {util}; // {} means batch export

// can export method directly
export const myfunc = {
    print(a){
        console.log("this is myprint ", a);
    }
}

// -------------------------------


// // export const util = {
// //     sum(a, b) {
// //         return a + b;
// //     }
// // }

// use "default" means NOT giving name to this method,
// so when import, we can name it in whatever name (e.g. : import abc from "./hello.js")
export default {
    sum(a, b) {
        return a + b;
    }
}
// export {util}

// //`export`不仅可以导出对象，一切JS变量都可以导出。比如：基本类型变量、函数、数组、对象。