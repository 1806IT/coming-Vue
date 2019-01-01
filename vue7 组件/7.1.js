
// 全局注册,要写在实例对象前
Vue.component('tagname1',{
    template:'<div>全局组件</div>'
})
var app1=new Vue({
    el:'#app1',
    components:{
        'topo-assembly':{
            template:'<div>这是app1的局部组件</div>'
        },
        'child-component':{
            props:['msg'],
            template:'<div>{{msg}}</div>'
        },
        'child-count':{
            data:function(){
                return {
                    count:1
                }
            }
        },
        'bind-props':{
            props:['msg'],
            template:'<div>{{msg}}</div>',
            data:function(){
                return {}
                count:1
            }
        }
    }
    ,
    data:{
        parent:'你好，子组件，我是父组件'
    }
})
var app2=new Vue({
    el:'#app2',
    data:{
        count:1
    },
    components:{
        'btn-count':{
            template:'<div>按钮计数组件在app2中' +
                '<br>' +
                '<button @click=count++>{{count}}</button>' +
                '</div>',
            data:function(){
                return {count:0}
            }
    }
    }
})
//第一步，注册组件，这里定义的都是子组件
Vue.component(
    'my-component1',{
        props:['app3msg'],    // 第2.2步 用props接收父组件用app3msg变量传递来的数据
        template:'<div>{{count}}</div>',//可替换下一条，这条更好
        // template:'<div>我是一个组件</div>',

        data:function(){
            return{
                //props中的数据可以通过this.xx来直接获取
                //这样做的好处是只要维护count就可以了，访问的时候直接访问count就好了
                count:this.app3msg //第三步：将传递进来的数据通过初始值保存起来，关键
            }
        }
    }
)
Vue.component(
    'type-component',{
        props:{
            a:Number,        //对a传进来的数据类型限定为Number 类型，是类型，切记不能加引号''，否则成字符串了
            b:[String,Number],   //如果想限定b传进来的数据类型限定为String或Number，那么应该用数组形式
            c:{
                type:Boolean,
                default:true
            },   //必须是布尔类型，默认是true,type（指定类型）--required(指定闭合项还是非闭合项)--default(指定默认值)如果既要指定类型又要指定默认值就应当用对象表达
            d:{
                type:[Number,String],
                required:false  //这个值为true，那么参数中就必须传d这个参数，否则报[Vue warn]: Invalid prop: type check failed for prop "d"
            },
            e:{
                type:Array,//数组类型要设置默认值为数组，，则default应该为函数
                default:function(){
                    console.log('我想看到新数组')
                    return [6766]
                }
            },
            selfdefine:{
                validatior:function(value1){
                    console.log(22)
                    return value1<10
                }
            },//自定义验证函数
            gfunction:{
                type:Function
            }
        },/*在prop中进行数据限定，如进行限定，那么props必须是对象形式*/
        template:'<div>{{a}}--{{b}}--{{c}}--{{d}}--{{e}}</div>', //类型符合为Number类型，就会被渲染出来
        data:function(){
            return {abc:this.a}
        }
    }
)
var appmodel=new Vue({
    el:'#appModelProps',
    data:{
        width:'40',
        a:174,  //与props中限定的类型一致为Number类型
        ab:'520',   //应与与props传进来的b中限定的类型一致为Number或String类型
        cc:'false',
        data7: 12367,
        arr:[123],
        f:100,
        g:console.log('vue7.7')
    },
    components:{
        'width-component':{
            props:['width'],
            template:'<div :style="style">hello</div>',
            computed:{
                style:function(){
                    //这里ruturn回去的就直接是style
                    console.log(this.width)
                    return{
                        width:this.width+'px',
                        background:'red',
                        color:'green',
                        height:'30px',
                    }
                }
            }
        }
    }
})