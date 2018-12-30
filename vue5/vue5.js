var app1=new Vue({
    el:'#app',
    data:{
        msg:'基本指令,v-cloak',
        oncedata:'一次性的问题',
        apple:'apple',
        banana:'banana',
        origen:'origen',
        type:'name',
        a:7,
        vueMethods:[
            {name:'多思考'},
            {name:'勤练习'},
            {name:'看视频'}
        ],
        nvshen:{
            girl1:'yuanyuan',
            girl2:'gaogoa',
            girl3:'qingxia'
        },
        arr:['book','pen','pencil'],
        count:0,
        isred:true

    },
    methods:{
        toggleType:function() {
            //三目运算符
            this.type = (this.type === 'name' ? 'password' : 'name')
        },
        //利用sort（）排序
        sortArr:function(){
            this.arr.sort(function(a,b){
                // 长度从小到大排
                // return a.length-b.length
                //从大到小
                return b.length-a.length
            })
        },
        reserveArr:function(){
            this.arr.reverse()
        },
        //改变数组的指定项,eg1为失败
        changeOne:function(){
            this.arr[0]='error'
        },
        //改变数组的长度，eg1为失败
        changeLength:function(){
            this.arr.length=1
        },
        handle1:function(count){
            count=count||1
            this.count+=count
        },
        divclick:function(){
            console.log('div被点击了')
        },
        btnclick:function(){
            console.log('button被点击了')
        },
        hangle2:function(){
            console.log('有prevent了，我不重载，页面也不刷新')
        },
        onceMethod:function(){
            console.log('多少次了？')
        },
        submitMe:function(){
            console.log('按了enter')
        }

    },
    computed:{
        matchoo:function(){
            //下面function中的参数book代表要过滤的每一项
            return this.arr.filter(function(oo){
                return oo.match(/oo/)
            })
        }
    }
})
//改变vue的第一项
Vue.set(app1.arr,1,'iphone ')