var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          link:"https://scontent.ftpe4-1.fna.fbcdn.net/v/t39.30808-6/343623930_654058389887067_3287703802331878581_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NPibjlSNauEAX_cDgQJ&_nc_ht=scontent.ftpe4-1.fna&oh=00_AfB7pVYYA3Ag0jIpTfUvyHS4qYXNcDNOVo98ir85sjnvNQ&oe=644EFCAA",
          title: "嗨！我是林毓倫" ,
          text:"教育科技系二年級",
          text2:"學號：410730534",
          width: "100%" ,
          height: "100%" 
          //width: "4032px" ,
          //height: "3024px"         
        },
        {
          link:"https://h5p.org/h5p/embed/554805",
          title: "我喜歡小動物",
          width: "100%" ,
          height: "100%" 
            // width: "1090px" ,
            // height: "815px"
        },
        {
          
            link:"https://h5p.org/h5p/embed/231678",
            title: "喜歡音樂",
            width: "100%" ,
            height: "100%"
        },
          {
            link:"https://h5p.org/h5p/embed/707",
            title: "喜歡到處旅行",
            width: "100%" ,
            height: "100%"
          },
        
		],
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
          effect: 'cards',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })     

        }
  });


