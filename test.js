
/*五种排序算法如下：*/

// 一. js 利用sort进行排序
systemSort: function(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
},


// 二. 冒泡排序
bubbleSort: function(array) {
    var i;
    var j;
    var d;
    var len = array.length;
    for (i= 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (array[i] < array[j]) {
                d = array[j];
                array[j] = array[i];
                array[i] = d;
            }
        }
    }
    return array;
},



//三. 快速排序
quickSort: function(array) {
    var i = 0;
    var j = array.length - 1;
    var Sort = function(i, j) {
        // 结束条件
        if (i == j) {
            return
        };
        var key = array[i];
        var stepi = i; // 记录开始位置
        var stepj = j; // 记录结束位置
        while (j > i) {
            // j <<-------------- 向前查找
            if (array[j] >= key) {
                j--;
            } else {
                array[i] = array[j]
                //i++ ------------>>向后查找
                while (j > ++i) {
                    if (array[i] > key) {
                        array[j] = array[i];
                        break;
                    }
                }
            }
        }
        // 如果第一个取出的 key 是最小的数
        if (stepi == i) {
            Sort(++i, stepj);
            return;
        }
        // 最后一个空位留给 key
        array[i] = key;
        // 递归
        Sort(stepi, i);
        Sort(j, stepj);
    }
    Sort(i, j);
    return array;
},



// 四. 插入排序
insertSort: function(array) {
    var i;
    var j;
    var step;
    var key;
    var len = array.length;
    for (i = 1; i < len; i++) {
        step = j = i;
        key = array[j];

        while (--j > -1) {
            if (array[j] > key) {
                array[j + 1] = array[j];
            } else {
                break;
            }
        }
        array[j + 1] = key;
    }
    return array;
},



// 五. 希尔排序
shellSort: function(array) {
    var stepArr = [1750, 701, 301, 132, 57, 23, 10, 4, 1]; 
    var i = 0;
    var stepArrLength = stepArr.length;
    var len = array.length;
    var len2 = parseInt(len / 2);

    for (; i < stepArrLength; i++) {
        if (stepArr[i] > len2) {
            continue;
        }
        stepSort(stepArr[i]);
    }
    // 排序一个步长
    function stepSort(step) {
        //console.log(step) 使用的步长统计
        var i = 0,j = 0,f, tem, key;
        var stepLen = len % step > 0 ? parseInt(len / step) + 1 : len / step;
        for (; i < step; i++) { // 依次循环列
            for (j = 1;step * j + i < len; j++) { //依次循环每列的每行
                tem = f = step * j + i;
                key = array[f];

                while ((tem -= step) >= 0) { // 依次向上查找
                    if (array[tem] > key) {
                        array[tem + step] = array[tem];
                    } else {
                        break;
                    }
                }
                array[tem + step] = key;
            }
        }
    }
    return array;
}




/*三种设计模式如下：*/

/*一.单例模式 js本身是一种“无类”语言，所以注册树模式js并不能实现，所以改为单例模式的实现，而且单例模式在下面的例子是指实现创建一个div*/
var mask = document.body.appendChild( document.createElement( 'div' ) );
 
$( 'button' ).click( function(){
   mask.show();
})

/*二.适配器模式   适配器模式的作用很像一个转接口. 本来iphone的充电器是不能直接插在电脑机箱上的, 而通过一个usb转接口就可以了.*/
$id = function( id ){
  return jQuery( '#' + id )[0];
}



/*三.观察者模式 观察者模式( 又叫发布者-订阅者模式 )应该是最常用的模式之一. 在很多语言里都得到大量应用.
包括我们平时接触的dom事件. 也是js和dom之间实现的一种观察者模式.*/
div.onclick  =  function click (){//只要订阅了div的click事件. 当点击div的时候, function click就会被触发.
   alert ( 'click' );
}
