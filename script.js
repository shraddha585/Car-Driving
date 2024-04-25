var q=new Audio("highway-14475.mp3");
        var q1=new Audio("brake.wav");
        function fun1(){
                q.play();   
                replaceTyreImages("tyregif.gif");  
        }
        function fun2(){
                q1.play();
                q.pause();
                replaceTyreImages("tyre.png");
        }
        function fun3(){
            q.pause();
        }

        function replaceTyreImages(src) {
            var tyregif1 = document.getElementById("t1");
            var tyregif2 = document.getElementById("t2");
            tyregif1.src = src;
            tyregif2.src = src;
        }

        let p=document.getElementById("i1");
        p.addEventListener('click',()=>{
            fun1();
            });

            let p1=document.getElementById("i2");
            p1.addEventListener('click',()=>{
            fun2();
            });

            var video=document.getElementById("video");
            q.addEventListener('play', () => {
                video.play();
            });
    
            q.addEventListener('pause', () => {
                video.pause();
            });