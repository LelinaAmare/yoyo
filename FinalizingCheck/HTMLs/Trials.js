




$(document).ready(function () {
    $('#deletebtn').click(function () {
        $.ajax({
            url: 'http://localhost:58559/api/employee/{id}',
            datatype: "json",
            type: "delete",
            contenttype: 'application/json; charset=utf-8',
            data: json.stringify({ id: $('#idfordelete') }),
            async: true,
            processdata: false,
            cache: false,
            success: function (data) {
                alert(data);
            },
            error: function (xhr) {
                alert('error');
            }
        });
    });
});





$(document).ready(function () {

    $("#putbtn").click(function () {
        var temp = {
           // "id": $("#idforput").val(),
            "firstname": $('#pufname').val(),
            "lastname": $("#pulname").val(),
            "gender": $("#pugender").val(),
            "salary": $("#pusalary").val()
        }
        var edid = $("#idforput").val();
        //var puid = $("#idforput").val();
        //var pufirstname = $('#pufname').val();
        //var pulastname = $("#pulname").val();
        //var pugender = $("#pugender").val();
        //var pusalary = $("#pusalary").val();// implement this to actually get your id.

       $.ajax({
       // url: "http://localhost:58559/api/employee/"+24,
        data: json.stringify(temp),
        //beforesend: function (xhr, settings) {
        //   if (!csrfsafemethod(settings.type) && !this.crossdomain) {
        //        xhr.setrequestheader("x-csrftoken", csrftoken);
        //   }
        //},
        method: "put",
        contenttype: "application/json; charset=utf-8",
        datatype: "json",
        success: function (data, textstatus, xhr) {
               //$.each(data, function (key, val) {
               //    $(val).appendto($("#idforput"));
               //})
            // $('#putresult').val(data);
            console.log(json.stringify(data));
        },
           error: function (xhr, textstatus, erroorthrown) {
               alert('error in operation');  
            //console.log('error in operation');
              //$('#putresult').val('error in operation');
          }
    });

   });
});



$(document).ready(function () {

    $("#putbtn").click(function () {

        var puid = $("#idforput").val();
        var pufirstname = $('#pufname').val();
        var pulastname = $("#pulname").val();
        var pugender = $("#pugender").val();
        var pusalary = $("#pusalary").val();

    $.ajax({
            url: "http://localhost:58559/api/employee",
            type: "put",
            //datatype: 'json',
            data: json.stringify([puid, pufirstname, pulastname, pugender, pusalary]),
            contenttype: 'application/json; charset=utf-8',
            success: function (data, textstatus, xhr) {
               // alert('updated successfully');
                //console.log(data);
                $('#putresult').val(json.stringify(data));
                window.location.href = "../index";
             },
            error: function (xhr, textstatus, erroorthrown) {
                //console.log('error in operation'); 
                $('#putresult').val('error in operation');
            }
        });
    });
});

$(document).ready(function () {
   // var deid = $("#idfordelete").val();
    // assuming this is accessing a rest api, you need to send a delete request by setting the appropriate type in your $.ajax call:
    $("#deletebtn").click(function () {
        $.ajax({
            url: "http://localhost:58559/api/employee" +id,
            type: "delete", // <- change here
            contenttype: "application/json",
            success: function () {
                bootbox.alert("proposal deleted successfully.");
                reloadgrid();
            },
            error: function () {
            }
        });
    });

});




$(document).ready(function () {
    $("#deletebtn").click(function () {
        var deid = $("#idfordelete").val();
        //var defirstname = $('#dfname').val();
        //var delastname = $("#dlname").val();
        //var degender = $("#dgender").val();
        //var desalary = $("#dsalary").val();
        //var employeedel = { deid, defirstname, delastname, degender, desalary };
       //  var employeedel = { deid};

        $.ajax({
            url: 'http://localhost:58559/api/employee? id=deid',
            type: 'delete',
            datatype: 'json',
            data: json.stringify(deid),//employeedel,
            success: function (data, textstatus, xhr) {
                $('#deleteresult').val(json.stringify(data));
                //console.log(data);
                //alert('delete successfully');
                //window.location.href = "../index";
            },
            //error: function (msg) { alert(msg); }
            error: function (xhr, textstatus, errorthrown) {
                console.log('error in operation');
            }
        });
    });
});  




$(document).ready(function () {
    $("#putbtn").click(function () {
        var puid = $("#idforput").val();
        var pufirstname = $('#pufname').val();
        var pulastname = $("#pulname").val();
        var pugender = $("#pugender").val();
        var pusalary = $("#pusalary").val();

        var employeemod = { puid, pufirstname, pulastname, pugender, pusalary };

        $.ajax({
            url: "http://localhost:58559/api/employee",
            type: 'put',
            datatype: 'json',
            data: json.stringify(employeemod),
            contenttype: 'application/json; charset=utf-8',
            success: function (data, textstatus, xhr) {
                $('#putresult').val(json.stringify(data));
                //console.log(data);
            },
            error: function (xhr, textstatus, errorthrown) {
                $('#putresult').val('error in operation');
                //console.log('error in operation');
            }
        });

        //$.post('', employee, function (data) {
        //        console.log(data);


    });
});