
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

    }
})