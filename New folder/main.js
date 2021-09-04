const mySlider = document.querySelectorAll('.mySlider'),
    dot = document.querySelectorAll('.dot');

    let counter = 1;
    slidefun(counter);

    let timer = setInterval(autoslide,8000);

    function autoslide(){
        counter +=1;
        sliderfun(counter);
    }

    function plusSlide(n){
        counter += n;
        sliderfun(counter);
        resetTimer();

    }

    function currentSlide(n){
        counter = n;
        sliderfun(counter);
        resetTimer();
    }

    function resetTimer(){
        clearInterval(timer);
        timer = setInterval(autoslide,8000);
    }


    function sliderfun(n){
        let i;
        for(i=0; i < mySlider.length ; i++ ){
            mySlider[i].style.display = 'none';
        }
        for(i=0; i< dot.length ; i++ ){
            dot[i].classList.remove= ('active');
        }
        if (n > mySlider.length){
            counter = 1;
        }
        if (n < 1){
            counter = mySlider.length;
        }
        mySlider[counter - 1].style.display ='block';
        dot[counter - 1].classList.add('.active');
    }



