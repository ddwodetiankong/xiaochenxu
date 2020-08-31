// components/x-teacher/x-teacher.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   tt:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDelete:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _deleteItem:function(){
      console.log("触发")
      this.setData({
        isDelete:true
       
      })
    },
    _handlerDelete:function(){
      // console.log('删除条目')
      wx.showModal({
        title:'是否删除',
        content:'删除之后，会删除这个网课',
        success:(res)=>{
          if(res.confirm){
            console.log('用户点击确定')
            wx.showToast({
              title:'删除成功',
            })
          }
          else if(res.cancel){
            console.log('用户点击取消')
            wx.showToast({
              title:'你已取消',
            })
            this.setData({
              isDelete:false
            })
          }
        }
        
      })
    }
   
  }
})
