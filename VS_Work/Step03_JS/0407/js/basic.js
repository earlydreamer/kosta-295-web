

//브라우저에 출력
        document.write("<h1 style='color:red'>Hello Javascript with Script tag</h1><br>");

        //콘솔에 출력
        console.log("Hello Javascript with console log");

        //마우스를 Over했을 때 기능
        function mouseOver(thisObj){
            thisObj.style.backgroundColor = "gray";
            thisObj.style.color = "white";
            
        }
        //마우스를 Out 했을 때 기능
        function mouseOut(thisObj){
            thisObj.style.backgroundColor = "white";
            thisObj.style.color = "black";

        }
