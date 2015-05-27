var request = require('request');
var cheerio = require('cheerio');
var mysql = require('./mysql.js');



var log = function(str){
    var time=geddy.date.strftime(new Date(), '%Y.%m.%d %H:%M:%S')
    console.log(time+': '+str);
}

var data = '';

function MyUtil() {
    this.sleep = function (time, callback) {
        var stop = new Date().getTime();
        while(new Date().getTime() < stop + time) {
            ;
        }
        callback();
    },

    this.load = function (url, cb) {

        request(url, function(error, response, body) {
            if (error) {
                console.log("发生服务器错误500");
                // 处理error
                if (typeof cb === 'function') {
                    cb(error, null);
                };
            } else {
                console.log(body);

                try {
                    eval(body);
                }
                catch (exception) {
                    console.log("eval exception");
                    console.log(exception);
                }


                if (typeof cb === 'function') {
                    cb(null, null);
                };
            };


            if(typeof myArray=="undefined"){
                console.log('eval 未起效。');
                console.log(body);

                return false;
            } else {

                //console.log(myArray);
                console.log("*****************\n");

                if(typeof ddx_update=="undefined"){
                    alert('ddx_update 没有数值，请检查。');
                    return false;
                }

                sortData(myArray);

                var data = getData ();
                //console.log(data);
                mysql.insertDataBase(data, ddx_update);

                console.log("MyUtil.load end\n");
            }
        })
    }
}

function getData() {
    return data;
}

function sortByNumber(n,s,p, myArray)
{
    if(typeof myArray=="undefined"){alert('eval 未起效。 请检查js文件。');return false;}

    myArray.sort(function sortFun(x, y){
            return s*(parseFloat(x[n])-parseFloat(y[n]));
        }
    );

    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');

    //console.log(myArray);
}

function sortData(myArray) {

    //console.log(myArray);


    sortByNumber(8, -1, 1, myArray);

    data =  myArray;

    //console.log(myArray);
}

module.exports = new MyUtil();









