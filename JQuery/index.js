console.log("hey JQuery");

//Que1.
$("button.hide").click(function(){
    $(".para").hide();
})

$("button.visible").click(function(){
    $(".para").show();
})

//Que2.

$("button.head").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type : "GET",
        success: function(data){
            document.getElementById("heading").innerText = data.title;
        }
    })
})