new Vue({
  el: '#app',
  data: {
    arrNum: [1, 2, 3, 4, 5, 6, 7],
    num: '1234567',
    time: '00:00:00', // 初始化秒表数值
    timer: 0, // 计时器
    h: 0, // 时
    m: 0, // 分
    s: 0, // 秒
    total_s: 0 // 一共秒数
  },
  methods: {
    /**
     * @description 打乱字符串
     */
    randomNumber() {
      this.arrNum = this.randArr(this.arrNum)
      this.num = this.arrNum.join('')
      this.time = "00:00:00"
      this.startTime()
    },
    /**
     * @description 打乱数组
     * @param {Array} arr 
     * @returns {Array} arr
     */
    randArr(arr) {
      for (var i = 0; i < arr.length; i++) {
        var iRand = parseInt(arr.length * Math.random());
        var temp = arr[i];
        arr[i] = arr[iRand];
        arr[iRand] = temp;
      }
      return arr;
    },
    /**
     * @description 开始秒表
     */
    startTime() {
      this.timer = setInterval(this.runTime, 1000)
    },
    /**
     * @description 秒表具体实现
     */
    runTime() {
      // this.ms = this.ms + 50
      // if (this.ms >= 1000) {
      //   this.ms = 0
      //   this.s = this.s + 1
      // }
      ++this.s
      if (this.s >= 60) {
        this.s = 0
        this.m = this.m + 1
      }
      if (this.m >= 60) {
        this.m = 0
        this.h = this.h + 1
      }
      this.time = this.toDub(this.h) + ":" + this.toDub(this.m) + ":" + this.toDub(this.s)
      // 统计共看了多少秒
      this.total_s = this.s + this.m * 60 + this.h * 3600
    },
    /**
     * @description 补0
     * @param {Number} n 
     */
    toDub(n) {
      if (n < 10) {
        return "0" + n
      } else {
        return "" + n
      }
    },
    /**
     * @description 秒表归零
     */
    reset() {
      clearInterval(this.timer);
      this.h = 0
      this.m = 0
      this.s = 0
      this.ms = 0
    }
  }
})