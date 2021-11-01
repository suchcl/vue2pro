// sleep函数  异步
// function sleep(callback,time){
//     setTimeout(callback,time);
// }

function sleep(time){
    return new Promise((resolve) => {
        setTimeout(resolve,time);
    });
}

// 调用
sleep(3000).then(function(){
    console.log(6666);
});

// sleep(() => {
//     console.log("6666666666");
// },1500);

// sleep2(2000).then(function(){
//     console.log("88888888");
// });

(async function(){
    console.log("start");
    await sleep(1500);
    console.log("sleep");
    console.log("end");
})();