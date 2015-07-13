
/**
 * @file 跨浏览器事件处理工具 监听事件
 * @author fairlyxu(fairlyxu@gmail.com)
 *         
 */
alert(2);
 var eventUtil = {
 	/**
 	 *  @private
	 *	得到事件
 	 */
 	getEvent : function (e) {
 		return e || window.event;
 	},

 	/**
	 *	得到事件类型
 	 */
 	getEventType : function (e) {
 		return e.type || e.sreElement;

 	},

 	/**
	 *	得到事件目标对象
 	 */
 	getEventTarget : function (e) {
 		return e.target;

 	},

 	/**
	 * 注册事件监听  分别根据dom 对象和 IE对象做出不同的处理
	 * 浏览器0级事件 和浏览器2级事件
	 * @param {Object} element 元素对象
 	 * @param {string} type 事件类型，如点击为click
 	 * @param {function} hander 事件处理的函数
 	 * 
 	 */
 	addEventHandler : function (element, type, hander) {
 		if (element.addEventListener) {
 			element.addEventListener(type, hander, false);
 		}else if (element.attachEvent) {
 			element.attachEvent('on' + type, hander);
 		}else {
 			element['on'+type] = hander ; 
 		} 		 
 	},

 	/**
	 *	移除事件监听 分别根据dom 对象和 IE对象做出不同的处理
	 * 浏览器0级事件 和浏览器2级事件
	 * @param {Object} element 元素对象
 	 * @param {string} type 事件类型，如点击为click
 	 * @param {function} hander 事件处理的函数
 	 */
 	removeEventHandler : function (elemet, type, hander) {
 		if (element.removeEventListener) {
 			element.removeEventListener(type, hander, false);
 		}else if (element.detachEvent){
 			element.detachEvent('on' + type, hander);
 		}else {
 			element['on'+type] = null;
 		}
 	},

 	/**
 	 * 阻止事件的默认行为
 	 */
 	preventEventDefault : function (e) {
 		if(e.preventDefault){
 			e.preventDefault();
 		}else {
 			e.returnValue = false ;
 		}
 	},

 	/**
 	 * 阻止事件的冒泡
 	 * cancelBubble  为IE
 	 * stopPropagation 为 FF
 	 */
 	stopEventPropagation : function (e) {
 		if(e.stopPropagation){
 			e.stopPropagation();
 		}else {
 			e.cancelBubble = true;
 		}
 	}
 }