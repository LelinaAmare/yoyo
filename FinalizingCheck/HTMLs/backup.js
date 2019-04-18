

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


    //GET ELEMENT BY ID Ajax CALL JUST TO CALL A SPECIFIC VALUE---IN THIS CASE FIRST NAME
    $('#getBtnId').mouseover(function () {
        var getId = $('#getTextId').val();
        var url = "http://localhost:58559/api/employee";
  
            $.getJSON(url + '/' + getId)
                .done(function (data) {
                    $('#getResultById').text(formatItem(data));
                })
                .fail(function (jqXHR, textStatus, err) {
                    //$('#getResultById').text('Error: ' + err);
                    $('#getResultById').text('Employee with Id number ' + getId + ' not found');
                    //location.reload(true);

                });
            function formatItem(item) {
                return item.id + ". " + item.firstName + " " + item.lastName;
            }      
    }).mouseout(function () {
        $('#getResultById').text("");
    });


    //$('#getBtnId').click(function () {
    //    var getId = $('#getTextId').val();
    //    $.ajax({
    //        url: "http://localhost:58559/api/employee/" + getId,
    //        dataType: 'json',
    //        type: "GET",
    //        success: function (data) {
    //            //bindData(data);
    //            $('#getResultById').val(JSON.stringify(data));
    //            // $("#alert-placeholder").empty();
    //            //$('#alert-placeholder').removeClass('alert alert-danger');
    //        },
    //        error: function (xhr, textStatus, errorThrown) {
    //            $('#getResultById').addClass('alert alert-danger');
    //            $('#getResultById').val(errorThrown);
    //        }
    //    });
    //});


    $("#postBtn").click(function () {

        var FirstName = $('#fName').val();
        var LastName = $("#lName").val();
        var Gender = $("#gender").val();
        var Salary = $("#salary").val();
        var employee = { FirstName, LastName, Gender, Salary };

        $.ajax({
            url: "http://localhost:58559/api/employee",
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(employee),
            contentType: 'application/json; charset=utf-8',
            success: function (data, textStatus, xhr) {
                alert('Successfuly Created!!');
                $('#postResult').val(JSON.stringify(data));
                //$('#getResult').val(JSON.stringify(data));
                //console.log(data);
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#postResult').val('Error in Operation');
               // $('#getResult').val('Error in Operation');
                //console.log('Error in Operation');
            }
        });
    });


    //$("#putBtn").click(function () {
    //    var temp = {

    //         "firstName": $('#pufName').val(),
    //        "lastName": $("#pulName").val(),
    //        "gender": $("#puGender").val(),
    //        "salary": $("#puSalary").val()
    //    }

    //    //var firstName = $('#pufName').val();
    //    //var lastName = $("#pulName").val();
    //    //var gender = $("#puGender").val();
    //    //var salary = $("#puSalary").val();
    //    //var temp = { firstName, lastName, gender, salary};
        

    //    var EdId = $("#idForPut").val();

    //    $.ajax({
    //        url: "http://localhost:58559/api/employee/" + EdId,
    //        data: JSON.stringify(temp),
    //        method: "PUT",
    //        contentType: "application/json; charset=utf-8",
    //        //dataType: "json",
    //        success: function (data, textStatus, xhr) {
    //            //$('#putResult').val(data);
    //            location.reload(true);
    //            alert('Updated Successfully');
    //            //$('#putResult').val(JSON.stringify(data));
    //            //console.log(JSON.stringify(data));
    //        },
    //        error: function (jqXHR, textStatus, err) {
    //            console.log('Error: ' + err);
    //        }
    //    });

    //});


    $("#putBtn").click(function () {
        var temp = {
            "firstName": $('#pufName').val(),
            "lastName": $("#pulName").val(),
            "gender": $("#puGender").val(),
            "salary": $("#puSalary").val()
        }
        var EdId = $("#idForPut").val();

        $.ajax({
            url: "http://localhost:58559/api/employee/" + EdId,
            contentType: "application/json; charset=utf-8",
            method: "PUT",
            data: JSON.stringify(temp)
        })
            .done(function (data) {
                location.reload(true);
                alert('Updated Successfully!!!');
                //$('#putResult').val(JSON.stringify(data));
            })
            .fail(function (jqXHR, textStatus, err) {
                console.log('Error: ' + err);
            });
        });



    $("#deleteBtn").click(function () {
        var DeId = $("#idForDelete").val();
       // var emp = { DeId };
        $.ajax({
            url: "http://localhost:58559/api/employee/" + DeId,
            contentType: 'application/json; charset=utf-8',
            method: 'DELETE',
            //dataType: 'json',
            data: JSON.stringify({ id: DeId })
        })
            .done(function (data) {
            location.reload(true);
            alert('Deleted Successfully!!!');
            })
            .fail(function (jqXHR, textStatus, err) {
                console.log('Error: ' + err);
            });     
    });
          
    
});

