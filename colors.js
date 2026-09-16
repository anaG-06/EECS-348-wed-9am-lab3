function changeParagraph()
{
    var para = document.getElementById("change");

    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;

    var bgr_R = document.getElementById("bgr_R").value;
    var bgr_G = document.getElementById("bgr_G").value;
    var bgr_B = document.getElementById("bgr_B").value;


    para.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    para.style.borderWidth = `${border_width}px`;
    para.style.backgroundColor = `rgb(${bgr_R},${bgr_G},${bgr_B})`;

}