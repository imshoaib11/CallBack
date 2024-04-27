let callback = document.getElementById("demo");


setTimeout(()=>{
    callback.innerHTML = 9;

    setTimeout(()=>{
        callback.innerHTML = 8;

        setTimeout(()=>{
            callback.innerHTML = 7;

            setTimeout(()=>{
                callback.innerHTML = 6;
                
                setTimeout(()=>{
                    callback.innerHTML = 5;

                    setTimeout(()=>{
                        callback.innerHTML = 4;

                        setTimeout(()=>{
                            callback.innerHTML = 3;

                            setTimeout(()=>{
                                callback.innerHTML = 2;

                                setTimeout(()=>{
                                    callback.innerHTML = 1;

                                    setTimeout(()=>{
                                        callback.innerHTML = "Happy Independence Day";
                                    },1000)

                                },1000)

                            },1000)

                        },1000);
                    
                    },1000);
                
                },1000);

            },1000);     
        },1000);

    },1000);

},1000);
