// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        region: ["上海市","上海市","杨浦区"],
        now:{
            cond_code:999
        }
    },
    changeRegion:function(e){
        this.setData({
            region:e.detail.value
        }),
        this.getWeather()
    },
    getWeather:function(){
        var that = this;
        wx.request({
            url: 'https://free-api.heweather.net/s6/weather/now?',
            data:{
                location:that.data.region[1],
                key:'890d4aa636c540e1aa9a3dae2e3b0f32'
            },
            success:function(res){
                // console.log(res.data)
                that.setData({
                    now:res.data.HeWeather6[0].now
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getWeather()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})