var app1=new Vue({
    el:'#app',
    data:{
        isred:true,
        isgreen:false,
        isborder:false,
        isyellow:true,
        isgrey:false,
        isdarkmagenta:true,
        isthin:true,
        a:'green',
        b:'center',
        c:'borderstyle',
        d:'active',
        color:'red',
        size:30,
        astyle:{
            color :'red',
            fontSize:30+'px',
            background:'yellow'
        },
        bstyle:{
            width:300+'px',
            height:300+'px',
            textAlign:'center'
        }
    },
    computed:{
        classname:function(){
            return {
                darkmagenta:this.isdarkmagenta&&!this.isgreen,
                borderstyle:!this.isborder
            }
        }
    },
    methods:{
        changeColor:function(){
             this.isyellow=!this.isyellow
             this.isgrey=!this.isgrey
        }
    }

})