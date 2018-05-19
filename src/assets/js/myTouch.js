(function(doc, win) {
    class touchTarget {
        constructor(ele) {
                var target = null;
                if (typeof ele === "string") {
                    target = doc.querySelector(ele);
                }
                elesif(ele instanceof HTMLElement) {
                    target = ele;
                }
                if (!target) { return };

                //原始dom对象
                this.dom = target;
                //事件回调对象
                this.callbackArr = {};
                //事件类型
                this.eventType = {
                    tap: 'tap',
                    longtap: 'longtap',
                    swipe: 'swipe',
                    swipleft: 'swipleft',
                    swipright: 'swiperight',
                    swipup: 'swipleft',
                    swipdown: 'swipdown'
                }

            }
            //注册事件
        on(eventType, callback) {
                if (typeof this.callbackArr[eventType] === "undefined") {
                    this.callbackArr[eventType] = Array.of(callback);
                } else {
                    this.callbackArr[eventType].push(callback);
                }
            }
            //触发事件
        trigger(eventType, touchEvent) {
                if (typeof this.callbackArr[eventType] === "undefined") {
                    return;
                }
                this.callbackArr[eventType].forEach(callback => {
                    callback(touchEvent);
                });

            }
            //解绑事件
        off(eventType, callback) {
            if (typeof this.callbackArr[eventType] === "undefined") {
                return;
            } else {
                let index = this.callbackArr[eventType].findIndex(callback);
                if (index !== -1) {
                    this.callbackArr[eventType].splice(index, 1);
                }
                return;
            }
        }
        _init() {
            var obj = {},

                beginMove = false,
                me = this;
            this.dom.addEventListener('touchstart', function(e) {

                obj.pos.startX = e.touches[0].screenX;
                obj.pos.startY = e.touches[0].screenY;
                obj.startTime = e.timeStamp;

                beginMove = true;

            })

            this.dom.addEventListener('touchmove', function(e) {
                if (!beginMove) { return }
                obj.pos.tempX = e.touches[0].screenX;
                obj.pos.tempY = e.touches[0].screenY;
                obj.tempTime = e.timeStamp;

                if (/swip/gi.test(type)) {
                    me.trigger(me.eventType.swipe, Object.assign(e, obj))
                }
                me.trigger(type, Object.assign(e, obj))

            })
            this.dom.addEventListener('touchend', function(e) {
                //检查动作类型
                var type = me._checkType(obj);
                //如果判断为左右或者上下滑动，则同时出发滑动事件
                if (/swip/gi.test(type)) {
                    me.trigger(me.eventType.swipe, Object.assign(e, obj))
                }
                me.trigger(type, Object.assign(e, obj))

                beginMove = false;
                obj = null;
            })


        }
        _checkType(obj) {
            //分析起止点，分析方向和距离，以此判断事件类型e.timeStamp
            var dtX = obj.pos.tempX - obj.pos.startX,
                dtY = obj.pos.tempY - obj.pos.startY,
                dtTime = obj.tempTime - obj.startTime,
                dtS = Math.sqrt(dtX * dtX - dtY * dtY),
                eventType = this.eventType;

            function distinguishDirection(dtX, dtY) { //识别方向
                if (dtX >= dtY) {
                    if (dtX > 0) {
                        return eventType.swipleft;
                    } else {
                        return eventType.swipright;
                    }
                } else {
                    if (dtY > 0) {
                        return eventType.swipup;
                    } else {
                        return eventType.swipdown;
                    }
                }
            }
            if (dtTime <= 300) {
                if (dtS <= 10) { //小于300ms且距离小于10px
                    return eventType.tap;
                } else {
                    distinguishDirection(dtX, dtY);
                }
            } else {
                if (dtS <= 10) { //小于300ms且距离小于10px
                    return eventType.longtap;
                } else {
                    distinguishDirection(dtX, dtY);
                }
            }



        }
    }
    win.$$ = function(ele) {
        if (!ele) { return };
        return new touchTarget(ele);
    }
})(document, window)






// function $(selector) {
//     function Singer(sel) {
//         this.ele = document.querySelector(sel);
//     }
//     Singer.prototype = {
//         on: function(type, callback) {
//             this.ele.addEventListener(type, callback)
//         },
//         off: function(type, callback) {
//             this.ele.removeEventListener(type, callback)
//         }
//     }
//     return new Singer(selector);
// }
// var cb = function(e) {
//     console.log(e)
// };
// var ele = $('#ts');
// ele.on('click', cb);
// setTimeout(function() {
//     ele.off('click', cb);
// }, 2000)