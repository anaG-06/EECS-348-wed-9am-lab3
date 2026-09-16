function changeParagraph()
{
    var para = document.getElementbyID("change");

    var border_R = document.getElementbyID("border_R").value;
    var border_G = document.getElementbyID("border_G").value;
    var border_B = document.getElementbyID("border_B").value;
    var border_width = document.getElementById("border_width").value;

    var bgr_R = document.getElementbyID("bgr_R").value;
    var bgr_G = document.getElementbyID("bgr_G").value;
    var bgr_B = document.getElementbyID("bgr_B").value;


    para.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    para.style.borderWidth = border_width;
    para.style.backgroundColor = `rgb(${bgr_R},${bgr_G},${bgr_B})`;

    
}