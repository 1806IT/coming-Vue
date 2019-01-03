//通过按钮来改变银行余额，给父组件传递数据
//1:自定义事件
//2.在子组件中用$emit触发事件，第一个参数是事件名，后面的参数是要传递的数据
//3.在自定义事件中用一个参数来接收
Vue.component(
    // 'testCompent',{
    //     template:'<div>这是全局子组件</div>'
    // },
    'sonCompent',{
        template:'<div>在全局子组件中' +'<br>'+
            '<button @click="handleincrease">+1000</button>' +
            '<button @click="handlereduce">-1000</button>'+
            '</div>',
        data:function(){
            return {
                count:1000
            }
        },
        methods:{
            handleincrease:function(){
                this.count=this.count+1000
                this.$emit('change',this.count)
            },
            handlereduce:function(){
                this.count=this.count-1000
                this.$emit('change',this.count)
            }
        }
    }
)

var app=new Vue({
    el:'#child-to-parent',
    data:{
        total:1000
    },
    computed:{

    },
    methods:{
        'handleTotal':function(value){
            //此处的value就是子组件传递过来的数据
            this.total=value

        }
    },
    components:{
        'testTopoComponent':{
            template:'<div>这是在局部子组件中</div>'
        }

    }
})
var app2=new Vue({
    el:'#v-model',
    data:{
        total:2000
    },
    methods:{
/*        "handleTotal":function(value){
            this.total=value
        }*/

    },
    components:{
        'topo-son-component':{
            template:'<div>在局部子组件中' +'<br>'+
                '<button @click="handleincrease">+500</button>' +
                '<button @click="handlereduce">-500</button>'+
                '</div>',
            data:function(){
                return {
                    count:2000
                }
            },
            methods:{
                handleincrease:function(){
                    this.count=this.count+500
                    this.$emit('input',this.count)
                },
                handlereduce:function(){
                    this.count=this.count-500
                    this.$emit('input',this.count)
                }
            }
        }
    }
})
//非父组件数据
var message=new Vue({
    el:'#message',
    data:{
        bus:new Vue(),
        msg:'父组件中的数据',
        ddd:'aaa'
    },
    components:{
        'acomponent':{
            template:'<div><button @click="handle">A组件点击后发送数据给B组件</button></div>',
            data:function(){
                return {
                    aaa:'来自A组件的数据',
                    msg:'我是bcomponent组件中的msg'
                }//
            },
            methods:{
                handle:function(){
                    this.$root.bus.$emit('xxx',this.aaa)//在子组件中访问父组件数据
                }
            },
            data :function(){
                return {

                }
            }
        },

        'bcomponent':{
            template:'<div>B组件</div>',
            data :function(){
                return {
                    msg:'我是B组件中的msg'
                }
            },
            created:function(){
                //a组件在实例创建的时候就监听事件，xxx事件
                this.$root.bus.$on('xxx',function(value){
                    console.log(value)
                })
            }
        },
        'childComponent':{
            template:'<button @click="setFatherData">子组件父链,通过点击修改父组件数据</button>',
            data:function(){
                return {
                    aaa:'我来自ref为c的组件，组件名为childComponent中的aaa',
                    msg:'我和aaa来自同一个组件，不过我的名字是msg'
                }
            },
            methods: {
                setFatherData: function () {
                    this.$parent.msg = '子组件修改了父组件的数据'
                }
            }
        }
    },
    methods:{
        getChild:function(){
            //拿子组件的内容
            this.ddd=this.$refs.c.aaa
        }
    }
})