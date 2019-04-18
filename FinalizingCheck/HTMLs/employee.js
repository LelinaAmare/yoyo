

$(document).ready(function () {
    $("#getBtn").click(function () {
        $.ajax({
            url: 'http://localhost:58559/api/employee',
            type: 'GET',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                $('#getResult').val(JSON.stringify(data));
                //console.log(data);
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#resultDiv').val(JSON.stringify('Error in Operation'));
            }
        });
    });  
});

$(document).ready(function () {
    $("#Save").click(function () {
        $.get('http://localhost:3413/api/person', { id: 0 }, function (person) {
            console.log('Information' + JSON.stringify(person));
        });
    });
});  


   $(document).ready(function () {
        $("#postBtn").click(function () {
            //var Employee = new Object();
          
            //Employee.FirstName = $('#fName').val();
            //Employee.LastName = $("#lName").val();
            //Employee.Gender = $("#gender").val();
            //Employee.Salary = $("#salary").val();


            var FirstName = $('#fName').val();
            var LastName = $("#lName").val();
            var Gender = $("#gender").val();
            var Salary = $("#salary").val();
            var employee = {FirstName, LastName, Gender, Salary};

            $.ajax({
                url: "http://localhost:58559/api/employee",
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(employee),
                contentType: 'application/json; charset=utf-8',
                success: function (data, textStatus, xhr) {
                  //  $('#postResult').val(JSON.stringify(data));
                    //console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                 //   $('#postResult').val('Error in Operation');
                     //console.log('Error in Operation');
                }
            });

            //$.post('', Employee, function (data) {
            //        console.log(data);


        });
    });

$(document).ready(function () {

    $("#putBtn").click(function () {
        var temp = {
            
                // "id": $("#idForPut").val(),
                "firstName": $('#pufName').val(),
                "lastName": $("#pulName").val(),
                "gender": $("#puGender").val(),
                "salary": $("#puSalary").val()
            }
        var EdId = $("#idForPut").val();
        
        $.ajax({
            url: "http://localhost:58559/api/employee/" + EdId,
            data: JSON.stringify(temp),
        
            method: "PUT",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, textStatus, xhr) {
                $('#putResult').val(JSON.stringify(data));
                //console.log(JSON.stringify(data));
            },
            error: function (xhr, textStatus, errorThrown) {
                //$('#putResult').val(JSON.stringify('Error in Operation'));
                console.log(JSON.stringify(data)+xhr);
            }
        });

    });
});


//$(document).ready(function () {
//    $("#deleteBtn").click(function () {
//        var DeId = $("#idForDelete").val();
//        //var DeFirstName = $('#DfName').val();
//        //var DeLastName = $("#DlName").val();
//        //var DeGender = $("#DGender").val();
//        //var DeSalary = $("#DSalary").val();
//        //var employeeDel = { DeId, DeFirstName, DeLastName, DeGender, DeSalary };
//       //  var employeeDel = { DeId};

//        $.ajax({
//            url: "http://localhost:58559/api/employee/" + DeId,
//            type: 'DELETE',
//            dataType: 'json',
//            data: JSON.stringify(DeId),//employeeDel,
//            success: function (data, textStatus, xhr) {
//                //$('#deleteResult').val(JSON.stringify(data));
//                //console.log(data);
//                alert('Delete Successfully');
//                //window.location.href = "../Index";
//            },
//            //error: function (msg) { alert(msg); }
//            error: function (xhr, textstatus, errorthrown) {
//                // $('#deleteResult').val(JSON.stringify('Error in Operation'));
//                //console.log('error in operation' + xhr);
//                console.log(JSON.stringify(data) + xhr);
//            }
//        });
//    });
//});  



$(document).ready(function () {
    $('#deleteBtn').click(function () {
        var DeId = $("#idForDelete").val();
        $.ajax({
            url: "http://localhost:58559/api/employee/" + DeId,
            dataType: "json",
            type: "DELETE",
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({ id: $('#idForDelete') }),
            async: true,
            processData: false,
            cache: false,
            success: function (data) {
                alert('Deleted Successfully');
            },
            error: function (xhr) {
                alert('error'+xhr);
            }
        });
    });
});




     //$("#deleteBtn").click(function () {
     //    var DeId = $("#idForDelete").val();
     //    var emp = {DeId};
     //           $.ajax({
     //           url: "http://localhost:58559/api/employee/" + DeId,
     //           type: 'DELETE',
     //           dataType: 'json',
     //           data: JSON.stringify(emp),
     //           contentType: 'application/json; charset=utf-8',
     //           success: function (data, textStatus, xhr) {
     //               //$('#deleteResult').val(JSON.stringify(data));
     //               //console.log(data);
     //               alert('Delete Successfully');
     //               //window.location.href = "../Index";
     //           },
     //           //error: function (msg) { alert(msg); }
     //           error: function (xhr, textstatus, errorthrown) {
     //               // $('#deleteResult').val(JSON.stringify('Error in Operation'));
     //               console.log('error in operation' + xhr);
     //               //console.log(JSON.stringify(data) + xhr);
     //           }
     //       });
     //   });
