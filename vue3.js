var app=new Vue({
    el:'#demo',
    data:{
        text:'123,456,789',
        firstName:'zhang',
        lastName:'sanFeng',
        package1:[
            {
                name:'iPhone',
                price:6888,
                count :2
            },
            {
                name:'mac pro 15',
                price:16888,
                count:1
            }
        ],
        package2:[
            {
                name:'Ipad',
                price :6888,
                count:3
            },
            {
                name:'iPhone X',
                price:12888,
                count:1
            }
        ]
    },
    computed:{
        reverseText:function(){
            return this.text.split(',').reverse().join(',')
        },
        prices:function(){
            var prices=0
            for(var i=0;i<this.package1.length;i++){
                prices+=this.package1[i].price*this.package1[i].count
            }
            for(var j=0;i<this.package2.length;j++){
                prices+=this.package2[j].price*this.package2[j].count
            }
            return prices
        },
        fullName:function(){
            return this.firstName+'  '+this.lastName
        },
       /* 等价于*/
        full:{
            get:function(){
                return this.firstName+'  '+this.lastName
            },
            set:function(newvale){
                var names=newvale.split(',')
                this.firstName=names[0]
                this.lastName=names[1]
            }
        },
        now:function(){
            return Date.now()
        }
    },
    methods:{
        thistime:function(){
            return Date.now()
        }
    }
})