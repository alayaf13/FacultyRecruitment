function removeRow(e) {
    e.preventDefault();
    $(e.target).parent().parent().parent().remove();
}

function references(e){
    var abc8 = $('#miscTa8').val();
    var abc9 = $('#miscTa9').val();
    var abc10 = $('#miscTa10').val();
    if(abc8=='NA'||abc8=="N/A"||abc8=='na' || abc9=='NA'||abc9=="N/A"||abc9=='na' || abc10=='NA'||abc10=="N/A"||abc10=='na'){
        alert('References should be genuine');
    }
}


function sponsored_input(e){
    var abc=$('#spo_tot_number').val();
    // console.log(abc);
    if(abc>0){
        document.getElementById('spofile').disabled=false;
        document.getElementById('spofile').required=true;
    }
    else{
        document.getElementById('spofile').disabled=true;
        document.getElementById('spofile').required=false;
    }
}
function experiments_input(e){
    var abc=$('#exp_tot_number').val();
    if(abc>0){
        document.getElementById("expfile").disabled=false;
        document.getElementById("expfile").required=true;

    }
    else{
        document.getElementById("expfile").disabled = true;
        document.getElementById("expfile").required=false;
    }
}

function changeReservation(e){
    document.getElementById("reservation_certificate").disabled = false;
}
function changeReservation2(e){
    document.getElementById("reservation_certificate").disabled = true;
}


/////////  when clicked yes! for whether phd awarded
// function phdTable(e){
//     document.querySelector('#phdongoing').checked=false;
//     document.querySelector('#phdthesissub').checked=false;
//     document.querySelector('#phdawarded').checked=false;
//     document.querySelectorAll(".phdTableBody").forEach( e =>{e.hidden=true} )
//     document.querySelector(".phdTableBody").hidden=false;
//     document.querySelectorAll('.phdTableBody input[type="file"]').forEach( e =>{e.disabled=false} )
// }

/////    when clicked no!
function phdTable2(e){
    // document.querySelector('#phdongoing').checked=true;
    // document.querySelector('#phdthesissub').checked=true;
    // document.querySelector('#phdawarded').checked=true;
    document.querySelectorAll(".phdTableBody").forEach( e =>{e.hidden=true} )
    document.querySelectorAll(".phdTableBody input").forEach( e =>{e.value=""} )
    document.querySelectorAll('.phdTableBody input[type="date"]').forEach( e =>{e.min= '1950,01,01'} )
    document.querySelectorAll('.phdTableBody input[type="file"]').forEach( e =>{e.disabled=true} )
    document.querySelector('#awarded_phd').value= 'No'
}


function ongoingRadio(e){
    document.querySelector('#ongoingTable').hidden=false;
    document.querySelector('#thesisTable').hidden=true;
    document.querySelector('#awardedTable').hidden=true;
    // document.querySelectorAll("#ongoingTable input").forEach( e =>{e.value=""} )
    document.querySelectorAll("#thesisTable input").forEach( e =>{e.value=""} )
    document.querySelectorAll("#awardedTable input").forEach( e =>{e.value=""} )

    document.querySelectorAll('#ongoingTable input[type="file"]').forEach( e =>{e.disabled=false} )
    document.querySelectorAll('#thesisTable input[type="file"]').forEach( e =>{e.disabled=true} )
    document.querySelectorAll('#awardedTable input[type="file"]').forEach( e =>{e.disabled=true} )
    document.querySelector('#awarded_phd').value= 'Ongoing'
}

function thesisRadio(){
    document.querySelector('#ongoingTable').hidden=true;
    document.querySelector('#thesisTable').hidden=false;
    document.querySelector('#awardedTable').hidden=true;
    document.querySelectorAll("#ongoingTable input").forEach( e =>{e.value=""} )
    // document.querySelectorAll("#thesisTable input").forEach( e =>{e.disabled=false} )
    document.querySelectorAll("#awardedTable input").forEach( e =>{e.value=""} )

    document.querySelectorAll('#ongoingTable input[type="file"]').forEach( e =>{e.disabled=true} )
    document.querySelectorAll('#thesisTable input[type="file"]').forEach( e =>{e.disabled=false} )
    document.querySelectorAll('#awardedTable input[type="file"]').forEach( e =>{e.disabled=true} )
    document.querySelector('#awarded_phd').value= 'Thesis Submitted'
}

function awardedRadio(){
    document.querySelector('#ongoingTable').hidden=true;
    document.querySelector('#thesisTable').hidden=true;
    document.querySelector('#awardedTable').hidden=false;
    document.querySelectorAll("#ongoingTable input").forEach( e =>{e.value=""} )
    document.querySelectorAll("#thesisTable input").forEach( e =>{e.value=""} )
    // document.querySelectorAll("#awardedTable input").forEach( e =>{e.disabled=false} )

    document.querySelectorAll('#ongoingTable input[type="file"]').forEach( e =>{e.disabled=true} )
    document.querySelectorAll('#thesisTable input[type="file"]').forEach( e =>{e.disabled=true} )
    document.querySelectorAll('#awardedTable input[type="file"]').forEach( e =>{e.disabled=false} )
    document.querySelector('#awarded_phd').value= 'Yes'
}


function sameAddress(e){
    // document.getElementById("permanentaddress").nodeValue = document.getElementById("mailingaddress").nodeValue;
    //console.log("dsfsdas");

    if(document.getElementById("sameaddress").checked==true){
    $('#permanentaddress').val($('#mailingaddress').val());
    $('#permanentpincode').val($('#mailingpincode').val());
    $('#permanenttelephone').val($('#mailingtelephone').val());

    document.getElementById("permanentaddress").readOnly = true;
    document.getElementById("permanentpincode").readOnly = true;
    document.getElementById("permanenttelephone").readOnly = true;
    document.getElementById("mailingaddress").readOnly = true;
    document.getElementById("mailingpincode").readOnly = true;
    document.getElementById("mailingtelephone").readOnly = true;
    }

    else{
    document.getElementById("permanentaddress").readOnly = false;
    document.getElementById("permanentpincode").readOnly = false;
    document.getElementById("permanenttelephone").readOnly = false;
    document.getElementById("mailingaddress").readOnly = false;
    document.getElementById("mailingpincode").readOnly = false;
    document.getElementById("mailingtelephone").readOnly = false;
    }

}

$('form input').keydown(function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        return false;
    }
});

$('input[type="file"]').on('change', function(input){
    // alert("file added");
    // console.log(input);
    var fileSize = 100;
    // console.log(input.currentTarget.files[0])
    if(input.currentTarget.files[0] !== undefined){
        var fileSize = input.currentTarget.files[0].size / 1024 / 1024; // in MiB
        var type = input.currentTarget.files[0].type

        if (fileSize > 0.5) {

            alert('File size exceeds 450 KB');
            input.currentTarget.value=null;

            if(input.currentTarget.id == "signUpload"){
                $('#signImage').attr('src',null);
            }
            else if( input.currentTarget.id == "imageUpload" ){
                $('#profileImage').attr('src',"/static/images/profilepic.png");
            }

        }

        // console.log(type)
        // console.log(input.currentTarget.id)

        else if (type !== "application/pdf" && input.currentTarget.id !== "signUpload" && input.currentTarget.id !== "imageUpload"){
            // var type = input.currentTarget.files[0].type;
                alert("Upload only .pdf file!")
                input.currentTarget.value=null;
        }

        else if(input.currentTarget.id == "signUpload" || input.currentTarget.id == "imageUpload"){
            // var type = input.currentTarget.files[0].type;
            if( !(type === "image/jpeg" || type === "image/jpg" || type === "image/png") ){

                alert("Upload only .jpeg/.jpg/.png image file!")

                input.currentTarget.value = null;
                // console.log(input.currentTarget.id);
                if(input.currentTarget.id == "signUpload"){
                    // document.querySelector("#signImage").src = "";
                    $('#signImage').attr('src',null);
                }
                else if( input.currentTarget.id == "imageUpload" ){
                    // document.querySelector("#profileImage").src = '`/static/images/profilepic.png`"';
                    $('#profileImage').attr('src',"/static/images/profilepic.png");
                }
            }
        }
    }

    else{

        alert("No File Chosen")

        if(input.currentTarget.id == "signUpload"){
            // document.querySelector("#signImage").src = "";
            $('#signImage').attr('src',null);
        }
        else if( input.currentTarget.id == "imageUpload" ){
            // document.querySelector("#profileImage").src = '`/static/images/profilepic.png`"';
            $('#profileImage').attr('src',"/static/images/profilepic.png");
        }
    }

});

////////phd table ongoing
$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more-phd1').on('click touchstart', function(e) {
        e.preventDefault();
        var newIn3 = '<tr id="ongoing1">'+
        '<td class="col-2"style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="ongoing' + newAcademicsNo + '-title" id="ongoing' + newAcademicsNo + '-title" style="margin: 0; background-color: transparent; border:none;"placeholder="Ph.D Title"></td>'+
        '<td class="col-3"style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="ongoing' + newAcademicsNo + '-domain" id="ongoing' + newAcademicsNo + '-domain" style="margin: 0; background-color: transparent; border: none;min-inline-size: 12vw; "placeholder="Broad Research Domain of Ph.D"></td>'+
        '<td class="col-2"style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="ongoing' + newAcademicsNo + '-institute" id="ongoing' + newAcademicsNo + '-institute" style="margin: 0; background-color: transparent; border: none;min-inline-size: 12vw; "placeholder="Institute Name"></td>'+
        '<td class="col-2"style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="ongoing' + newAcademicsNo + '-university" id="ongoing' + newAcademicsNo + '-university" style="inline-size: 9em;padding: 0;text-align: center;background-color: transparent;border:none" placeholder="University Name"></td>'+
        '<td class="col-3" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"><input type="date" name="ongoing' + newAcademicsNo + '-date" id="ongoing' + newAcademicsNo + '-date" style="border: 0; background: transparent;"></td>'+
        '<td class="col-3" style="padding:0;display:flex;place-content:space-between">' +
        '<td class="col-3" style="display:flex;place-content:space-between;padding:0.6em;">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" id="ongoing' + newAcademicsNo + '-file" name="ongoing' + newAcademicsNo + '-file"></span>' +
        '<span style="display:inline;align-self:center"><button type="button" onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
        '</td></tr>'

        $('.ongoing-tbody').append(newIn3);
        newAcademicsNo+=1;

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });
        document.querySelectorAll('input[type="date"]').forEach(i =>{ 
            i.setAttribute("max",`${new Date().toDateInputValue()}`)
        } )


    });
});



/////////phd table thesis
$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more-phd2').on('click touchstart', function(e) {
        e.preventDefault();
        var newIn3 = '<tr id="thesis1">'+
        '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="thesis' + newAcademicsNo + '-title" id="thesis' + newAcademicsNo + '-title" style="margin: 0; background-color: transparent; border:none;" placeholder="Ph.D Title"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="thesis' + newAcademicsNo + '-domain" id="thesis' + newAcademicsNo + '-domain"  style="margin: 0; background-color: transparent; border: none;min-inline-size: 12vw; " placeholder="Broad Research Domain of Ph.D"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="thesis' + newAcademicsNo + '-institute" id="thesis' + newAcademicsNo + '-institute"  style="margin: 0; background-color: transparent; border: none;min-inline-size: 12vw; " placeholder="Institute Name"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="thesis' + newAcademicsNo + '-university" id="thesis' + newAcademicsNo + '-university"  style="inline-size: 9em;padding: 0;text-align: center;background-color: transparent;border:none" placeholder="University Name"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"><input type="date" name="thesis' + newAcademicsNo + '-regdate" id="thesis' + newAcademicsNo + '-regdate"  style="border: 0; background: transparent;" onchange="dateThesisAwardedFrom(event)"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"><input type="date" name="thesis' + newAcademicsNo + '-subdate" id="thesis' + newAcademicsNo + '-subdate" style="border: 0; background: transparent;"></td>'+
        '<td class="col-3" style="display:flex;place-content:space-between;padding:0.6em;">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" id="thesis' + newAcademicsNo + '-file" name="thesis' + newAcademicsNo + '-file"></span>' +
        '<span style="display:inline;align-self:center"><button type="button" onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
        '</td></tr>'

        $('.thesis-tbody').append(newIn3);
        newAcademicsNo+=1;

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });
        document.querySelectorAll('input[type="date"]').forEach(i =>{ 
            i.setAttribute("max",`${new Date().toDateInputValue()}`)
        } )


    });
});

///////phd table awarded
$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more-phd3').on('click touchstart', function(e) {
        e.preventDefault();
        var newIn3 = '<tr id="thesis1">'+
        '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="awarded' + newAcademicsNo + '-title" id="awarded' + newAcademicsNo + '-title" style="margin: 0; background-color: transparent; border:none;" placeholder="Ph.D Title"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="awarded' + newAcademicsNo + '-domain" id="awarded' + newAcademicsNo + '-domain"  style="margin: 0; background-color: transparent; border: none;min-inline-size: 12vw; " placeholder="Broad Research Domain of Ph.D"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="awarded' + newAcademicsNo + '-institute" id="awarded' + newAcademicsNo + '-institute"  style="margin: 0; background-color: transparent; border: none;min-inline-size: 12vw; " placeholder="Institute Name"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="awarded' + newAcademicsNo + '-university" id="awarded' + newAcademicsNo + '-university"  style="inline-size: 9em;padding: 0;text-align: center;background-color: transparent;border:none" placeholder="University Name"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"><input type="date" name="awarded' + newAcademicsNo + '-regdate" id="awarded' + newAcademicsNo + '-regdate"  style="border: 0; background: transparent;" onchange="dateThesisAwardedFrom(event)"></td>'+
        '<td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"><input type="date" name="awarded' + newAcademicsNo + '-defdate" id="awarded' + newAcademicsNo + '-defdate" style="border: 0; background: transparent;"></td>'+

        '<td class="col-3" style="display:flex;place-content:space-between;padding:0.6em;">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" id="awarded' + newAcademicsNo + '-file" name="awarded' + newAcademicsNo + '-file"></span>' +
        '<span style="display:inline;align-self:center"><button type="button" onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
        '</td></tr>'

        $('.awarded-tbody').append(newIn3);
        newAcademicsNo+=1;

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });
        document.querySelectorAll('input[type="date"]').forEach(i =>{ 
            i.setAttribute("max",`${new Date().toDateInputValue()}`)
        } )


    });
});





////////////////   table 1  section B   ///////////////

$(document).ready(function() {
    var newAcademicsNo = 1;
    var EquivalentOptions = [
    '<option value="Masters">Masters</option>' ,
     '<option value="Bachelors">Bachelors</option>',
    '<option value="Class 12th">Class 12th</option><option value="Diploma">Diploma</option>',
    '<option value="Class 10th">Class 10th</option>'
    ]
    for(var ii=0;ii<4;ii+=1){
        var newIn = '<tr class="appliRows' + newAcademicsNo + '" id="field1"> <td class="col-1" style="text-align: center; padding: 0;">' +
            '<input type="text" name="course' + newAcademicsNo + '" id="course' + newAcademicsNo + '" onchange="reqField(event)" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none;" placeholder="Enter Course" required></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;">'+
            '<select name="course' + newAcademicsNo + '-equivalent" id="course' + newAcademicsNo + '-equivalent" style="inline-size: auto;">'+
                // '<option value="" disabled selected>Select Any Options</option>'+
                EquivalentOptions[3-ii] +
            '</select></td>'+
            '<td class="col-1" style="text-align: center; padding: 0;"><input onchange="reqField(event)" type="text" name="course' + newAcademicsNo + '-name" id="course' + newAcademicsNo + '-name" style="margin: 0; background-color: transparent; border:none;" placeholder="Name of Board/College/University"  required></td><td class="col-2" style="text-align: center; padding: 0;">' +
            '<select onchange="modeFirst(event)" name="course' + newAcademicsNo + '-percentage" id="course' + newAcademicsNo + '-percentage" style="margin: 0; background-color: transparent; border:none; inline-size:auto;" placeholder="Select Mode" required><option value="" selected disabled>Select Mode</option><option value="Percentage"> Percentage </option><option value="CGPA out of 10"> CGPA out of 10 </option><option value="GPA out of 5"> GPA out of 5 </option></select></td><td class="col-1" style="text-align: center; padding: 0;">' +
            '<input readonly onchange="reqField(event), marksValidation(event)" type="number" name="course' + newAcademicsNo + '-obtained" id="course' + newAcademicsNo + '-obtained" value=""  style="margin: 0; background-color: transparent; border:none;" placeholder="Obtained" required></td>'+
            '<td class="col-2" style="text-align: center; padding: 0;"><input onchange="reqField(event)" type="text" name="course' + newAcademicsNo + '-subject" id="course' + newAcademicsNo + '-subject" value="" style="margin: 0; background-color: transparent; border:none;" placeholder="Subject(s)" required></td><td class="col-1" style="text-align: center; padding: 0; font-size: xx-small;">' +
            '<select onchange="reqField(event)" style="inline-size: auto; " name="yearOfPassing' + newAcademicsNo + '" id="yearOfPassing' + newAcademicsNo + '" required ></select></td><td class="col-2" style="display:flex;place-content:space-between">' +
            '<span style="overflow:hidden;align-self:center" ><input onchange="reqField(event)" required style="font-size:x-small;" type="file" id="course' + newAcademicsNo + '-file" name="course' + newAcademicsNo + '-file"></span>' +
            '</td></tr>';
        $('.academic-tbody').append(newIn);

        $("form input").keydown(function (e) {
            if (e.keyCode === 13) {
            e.preventDefault();
            return false;
            }
        });

        // console.log("hvgvcvdgcvdvcgdvc");
        var yearId = 'yearOfPassing' + parseInt(newAcademicsNo);
        var ele = document.getElementById(yearId);
        // console.log(ele);
        var presYear = new Date();
        for (let i = presYear.getFullYear(); i >= 1950; i--) {
            // console.log(i);
            var op = document.createElement('option');
            op.value = i;
            op.textContent = i;
            op.disabled
            ele.appendChild(op);
            // ele.innerHTML += '<option value=' + i + '>' + i + '</option>\n'
        }
        newAcademicsNo += 1;
    }

    for(var ii=1;ii<4;ii++){
        // var option = document.querySelectorAll('.academic-tbody option')[4*ii + ii];
        // var option = document.querySelectorAll(`#course${ii+1}-equivalent option`)[ii];
        // option.selected="true";
        document.querySelectorAll(`.appliRows${ii+1} input`).forEach(i => {i.required=false});
        document.querySelectorAll(`.appliRows${ii+1} select`).forEach(i => {i.required=false});
        // console.log(option);
    }
});


$(document).ready(function() {
    var newAcademicsNo = 5;
    $('.add-more').on('click touchstart', function(e) {
        e.preventDefault();
        var newIn = '<tr class="appliRow' + newAcademicsNo + '" id="field1"> <td class="col-2" style="text-align: center; padding: 0;">' +
            '<input type="text" name="course' + newAcademicsNo + '" id="course' + newAcademicsNo + '" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none;" placeholder="Enter Course" required></td>' +
            '<td style="text-align: center; padding: 0;vertical-align: middle;">'+
            '<select name="course' + newAcademicsNo + '-equivalent" id="course' + newAcademicsNo + '-equivalent" style="inline-size: auto;">'+
                // '<option value="" disabled selected>Select Any Options</option>'+
                '<option value="Masters">Masters</option>'+
                '<option value="Bachelors">Bachelors</option>'+
                '<option value="Class 12th">Class 12th</option>'+
                '<option value="Diploma">Diploma</option>'+
                '<option value="Class 10th">Class 10th</option>'+
            '</select></td>'+
            '<td class="col-2" style="text-align: center; padding: 0;"><input type="text" name="course' + newAcademicsNo + '-name" id="course' + newAcademicsNo + '-name" style="margin: 0; background-color: transparent; border:none;" placeholder="Name of Board/College/University"  required></td>'+'<td class="col-2" style="text-align: center; padding: 0;">' +
            '<select name="course' + newAcademicsNo + '-percentage" id="course' + newAcademicsNo + '-percentage" style="margin: 0; background-color: transparent; border:none;" placeholder="Select Mode" onchange="modeFirst(event)" required><option value="" selected disabled>Select Mode</option><option value="Percentage"> Percentage </option><option value="CGPA out of 10"> CGPA out of 10 </option><option value="GPA out of 5"> GPA out of 5 </option></select></td><td class="col-1" style="text-align: center; padding: 0;">' +
            '<input readonly type="text" name="course' + newAcademicsNo + '-obtained" id="course' + newAcademicsNo + '-obtained" onchange="marksValidation(event)" value="" style="margin: 0; background-color: transparent; border:none;" placeholder="Obtained" required></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;"><input type="text" name="course' + newAcademicsNo + '-subject" id="course' + newAcademicsNo + '-subject" value="" style="margin: 0; background-color: transparent; border:none;" placeholder="Subject(s)" required></td><td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;">' +
            '<select style="inline-size: auto;" name="yearOfPassing' + newAcademicsNo + '" id="yearOfPassing' + newAcademicsNo + '" ></select></td><td class="col-3" style="display:flex;place-content:space-between">' +
            '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" id="course' + newAcademicsNo + '-file" name="course' + newAcademicsNo + '-file"></span>' +
            '<span style="display:inline"><button type="button" onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
            '</td></tr>';
        $('.academic-tbody').append(newIn);

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

        var yearId = 'yearOfPassing' + parseInt(newAcademicsNo);
        var ele = document.getElementById(yearId);
        console.log(ele);
        var presYear = new Date();
        for (let i = presYear.getFullYear(); i >= 1950; i--) {
            var op = document.createElement('option');
            op.value = i;
            op.textContent = i;
            ele.appendChild(op);
        }
        newAcademicsNo += 1;
    });

});


/////////////////////// table 2  section C /////////////////

$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more2').on('click touchstart', function(e) {
        e.preventDefault();

        var newIn2 = '<tr id="field1"><td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;">' +
            '<input type="text" name="org' + newAcademicsNo + '-name" id="org' + newAcademicsNo + '-name" style="margin: 0; background-color: transparent; border:none; " placeholder="Name of Employer/Status of Institute/University (Govt. /Quasi Govt./Autonomous etc.) "></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="org' + newAcademicsNo + '-post" id="org' + newAcademicsNo + '-post" style="margin: 0; background-color: transparent; border:none;" placeholder="Post held / Design"></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;">'+
            '<div class="row gtr-uniform" style="padding: 0.3em;">'+
                '<div class="col-2">From:</div>'+
                '<div class="col-10"><input type="date" name="org' + newAcademicsNo + '-from" id="org' + newAcademicsNo + '-from" value="" onchange="dateOrgPaperFrom(event)" style="margin-bottom: 0.5rem;width:95%;background-color: transparent;margin-left: 0.6rem;font-size: small;" placeholder="From"></div>'+
                '<div class="col-2" style="padding-top: 0;">To:</div>'+
                '<div class="col-10" style="padding-top: 0;"><input type="date" name="org' + newAcademicsNo + '-to" id="org' + newAcademicsNo + '-to" value="" style="margin: 0;width:95%;background-color: transparent;margin-left: 0.6rem;font-size: small;" placeholder="To"></div>'+
            '</div></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="org' + newAcademicsNo + '-salary" id="org' + newAcademicsNo + '-salary" style="border: 0; background: transparent;" placeholder="Basic Salary"> </td>' +
            '<td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"> <input type="text" name="org' + newAcademicsNo + '-nature" id="org' + newAcademicsNo + '-nature" style="border: 0; background: transparent;" placeholder="Nature of Duty"></td>' +
            '<td class="col-3" style="display:flex;place-content:space-between;height:6em;">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" id="org' + newAcademicsNo + '-file" name="org' + newAcademicsNo + '-file"></span>' +
            '<span style="display:inline;align-self:center"><button type="button" onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
            '</td></tr>';

        $('.academic-tbody2').append(newIn2);

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });
        // var att = document.createAttribute("max")
        // att.value=`${$('#signDate').val()}`
        // console.log(document.querySelector('#signDate').value)

        document.querySelectorAll('input[type="date"]').forEach(i =>{ 
            i.setAttribute("max",`${new Date().toDateInputValue()}`)
        } )

    });
});




/////////////////////// table 2B  section C /////////////////

$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more2B').on('click touchstart', function(e) {
        e.preventDefault();

        var newIn2 = '<tr id="field1">' +
            '<td class="col-2" style="text-align: center;vertical-align: middle;"><input type="date" name="exper' + newAcademicsNo + '-from" id="exp' + newAcademicsNo + '-from" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none; " placeholder="From " onchange="dateResearchFrom(event)"></td>' +
            '<td class="col-2" style="text-align: center;vertical-align: middle;"><input type="date" name="exper' + newAcademicsNo + '-to" id="exp' + newAcademicsNo + '-to" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none; " placeholder="To"></td>' +
            '<td class="col-3" style="text-align: center;vertical-align: middle;"> <input type="text" name="exper' + newAcademicsNo + '-months" id="exp' + newAcademicsNo + '-months" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none; " placeholder="Number of Months"></td>' +
            '<td class="col-3" style="display:flex;place-content:space-between;height:4.4em;">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" id="exp' + newAcademicsNo + '-file" name="exper' + newAcademicsNo + '-file"></span>' +
            '<span style="display:inline;align-self:center"><button onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
            '</td></tr>';

        $('.academic-tbody3').append(newIn2);

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

        document.querySelectorAll('input[type="date"]').forEach(i =>{ 
            i.setAttribute("max",`${new Date().toDateInputValue()}`)
        } )

    });
});


/////////////  table 3  Section D  ///////////////

$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more3').on('click touchstart', function(e) {
        e.preventDefault();

        var newIn3 = '<tr id="field1">' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="books' + newAcademicsNo + '-title" id="books' + newAcademicsNo + '-title" value="" style="margin: 0; background-color: transparent; border:none;" placeholder="Title of the Book" ></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><select name="books' + newAcademicsNo + '-author" id="books' + newAcademicsNo + '-author" style="inline-size: auto;"><option value="" disabled selected>Select Any Options</option><option value="First author">First Author</option><option value="Co-author">Co-author</option></select></td>' +
            '<td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"><textarea type="text" name="books' + newAcademicsNo + '-publisher" id="books' + newAcademicsNo + '-publisher" value="" style="margin: 0;" rows="2" placeholder="" > </textarea></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="date" name="books' + newAcademicsNo + '-date" id="books' + newAcademicsNo + '-date" style="width:95%;background-color: transparent;margin-left: 0.3rem;"></td>' +
            '<td class="col-2" style="text-align: center; padding: 0; font-size:xx-small;vertical-align: middle;"><input type="text"name="books' + newAcademicsNo + '-number" id="books' + newAcademicsNo + '-number" value="" style="margin: 0; background-color: transparent; border:none;" placeholder="ISBN/ISSN No."></td>' +
            '<td class="col-3" style="display:flex;place-content:space-between;height:5em;">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" name="books' + newAcademicsNo + '-file" id="books' + newAcademicsNo + '-file"></span>' +
            '<span style="display:inline;align-self:center"><button type="button"  onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
            '</td></tr>';

        $('.academic-tbody4').append(newIn3);

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

    });
});


//////////////////  table 4  section d    ////////////////////

$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more4').on('click touchstart', function(e) {
        e.preventDefault();
        var newIn4 = '<tr id="field1"><td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="chapters' + newAcademicsNo + '-book_title" id="chapters' + newAcademicsNo + '-book_title" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none;" placeholder="Title of the Chapter(s) "></td>' +
            '<td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"> <input type="text" name="chapters' + newAcademicsNo + '-chapter" id="chapters' + newAcademicsNo + '-chapter" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none; " placeholder="Title of the Title(s) "></td>' +
            '<td class="col-2" style="text-align: center;vertical-align: middle;padding:0;"> <select name="chapters' + newAcademicsNo + '-author" id="chapters' + newAcademicsNo + '-author" style="background-color: transparent; border:none;inline-size: auto;"><option value="" disabled selected>Select Any Options</option> <option value="First author">First Author</option><option value="Co-author">Co-author</option></select></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><textarea name="chapters' + newAcademicsNo + '-publisher" id="chapters' + newAcademicsNo + '-publisher" cols="10" rows="2"></textarea></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="date" style="width:95%;background-color: transparent;margin-left: 0.3rem;" name="chapters' + newAcademicsNo + '-date_of_publisher" id="chapters' + newAcademicsNo + '-date_of_publisher"></td>' +
            '<td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"><input type="text" name="chapters' + newAcademicsNo + '-number" id="chapters' + newAcademicsNo + '-number" style="border: 0; background: transparent;" placeholder="ISBN/ISSN No."></td>' +
            '<td class="col-3" style="display:flex;place-content:space-between;height:5em">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" name="chapters' + newAcademicsNo + '-file" id="chapters' + newAcademicsNo + '-file"></span>' +
            '<span style="display:inline;align-self:center"><button  type="button" type="button" onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
            '</td></tr>';

        $('.academic-tbody5').append(newIn4);

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

    });
});


////////////////////////     table 5  section d  ////////////

$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more5').on('click touchstart', function(e) {
        e.preventDefault();
        var newIn6 = '<tr id="field1"><td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="news_articles' + newAcademicsNo + '-article_title" id="news_articles' + newAcademicsNo + '-article_title" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none;" placeholder="Title of research"></td>' +
            '<td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="news_articles' + newAcademicsNo + '-journal_name" id="news_articles' + newAcademicsNo + '-journal_name" style="margin: 0; background-color: transparent; border:none; background-color: transparent; border: none; " placeholder="Name of journal"></td>' +
            '<td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"><select name="news_articles' + newAcademicsNo + '-author" id="news_articles' + newAcademicsNo + '-author" style="background-color: transparent; border:none;inline-size: auto;"><option value="" disabled selected>Select Any Options</option> <option value="First author">First Author </option> <option value="Co-author">Co-author</option> </select></td>' +
            '<td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"><input type="date" name="news_articles' + newAcademicsNo + '-date_published" id="news_articles' + newAcademicsNo + '-date_published" style="inline-size: 9em;padding:0;text-align: center;background-color: transparent;"></td>' +
            '<td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"><input type="text" name="news_articles' + newAcademicsNo + '-page" id="news_articles' + newAcademicsNo + '-page" style="border: 0; background: transparent;" placeholder="Volume no. & Page nos."></td>' +
            '<td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"><select name="news_articles' + newAcademicsNo + '-referred" id="news_articles' + newAcademicsNo + '-referred"	style="background-color: transparent; border:none;">' +
            '<option value="SCI/SSCI/SCI(E)/ABDC">SCI/SSCI/SCI(E)/ABDC</option>' +
            '<option value="Non (SCI/SSCI/SCI(E)/ABDC)">Non (SCI/SSCI/SCI(E)/ABDC)</option>' +
            '</select></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" style="border: 0; background: transparent;" name="news_articles' + newAcademicsNo + '-impact" id="news_articles' + newAcademicsNo + '-impact" placeholder="Impact Factor"> </td>' +
            '<td class="col-3" style="display:flex;place-content:space-between;padding:0.48em;">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" name="news_articles' + newAcademicsNo + '-file" id="news_articles' + newAcademicsNo + '-file"></span>' +
            '<span style="display:inline;align-self:center"><button type="button" onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
            '</td></tr>';
        $('.academic-tbody6').append(newIn6);

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

    });
});



///////////////////////////    table 6  section d   //////////////////

$(document).ready(function() {
    var newAcademicsNo = 2;
    $('.add-more6').on('click touchstart', function(e) {
        e.preventDefault();
        var newIn7 = '<tr id="field1"><td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="semi_articles' + newAcademicsNo + '-article_title" id="semi_articles' + newAcademicsNo + '-article_title" value="" style="margin: 0; background-color: transparent; border:none;" placeholder="Title of research article/paper(s)"></td>' +
            '<td class="col-2" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="semi_articles' + newAcademicsNo + '-seminar_subject" id="semi_articles' + newAcademicsNo + '-seminar_subject" value="" style="margin: 0; background-color: transparent; border:none;" placeholder="Subject of Conference" ></td>' +
            '<td class="col-1" style="text-align: center; padding: 0;vertical-align: middle;"><input type="text" name="semi_articles' + newAcademicsNo + '-location" id="semi_articles' + newAcademicsNo + '-location" value=""style="margin: 0; background-color: transparent; border:none;" placeholder="Organizing Institution" ></td>' +
            '<td class="col-2"style="text-align: center; padding: 0;vertical-align: middle;">' +
            '<div class="row gtr-uniform" style="padding: 0.3em;">' +
            '<div class="col-2">From:</div>' +
            '<div class="col-10"><input type="date" name="semi_articles' + newAcademicsNo + '-from" id="semi_articles' + newAcademicsNo + '-from" value="" onchange="dateOrgPaperFrom(event)" style="margin-bottom: 0.5rem;width:95%;background-color: transparent;margin-left: 0.6rem;font-size: small;"></div>' +
            '<div class="col-2" style="padding-top: 0;">To:</div>' +
            '<div class="col-10" style="padding-top: 0;"><input type="date" name="semi_articles' + newAcademicsNo + '-to" id="semi_articles' + newAcademicsNo + '-to" value="" style="margin: 0;width:95%;background-color: transparent;margin-left: 0.6rem;font-size: small;"></div>' +
            '</div></td>' +
            '<td class="col-2" style="text-align: center; padding: 0; font-size: xx-small;vertical-align: middle;"><select name="semi_articles' + newAcademicsNo + '-published" id="semi_articles' + newAcademicsNo + '-published"> <option value="Yes">Yes</option> <option value="No">No</option> </select></td>' +
            '<td class="col-3" style="display:flex;place-content:space-between;height:6em;padding:0;">' + '<span style="overflow:hidden;align-self:center"><input style="font-size:x-small;" type="file" name="semi_articles' + newAcademicsNo + '-file" id="semi_articles' + newAcademicsNo + '-file"></span>' +
            '<span style="display:inline;align-self:center"><button type="button" onclick="removeRow(event)" class="btn remBtn" style="padding: 0;height: 0 !important;min-width:auto!important;margin:0!important;width: 2rem !important;font-size: 0.8em;color: #c514148a !important;">X</button></span>' +
            '</td></tr>';

        $('.academic-tbody7').append(newIn7);

        $('form input').keydown(function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

        document.querySelectorAll('input[type="date"]').forEach(i =>{ 
            i.setAttribute("max",`${new Date().toDateInputValue()}`)
        } )

    });
});


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}



/////   Profile Pic   /////
$('#profileImage').click(function(e) {
    // console.dir(e);
    $('#imageUpload').click();
});

function fasterPreview(uploader) {
    if (uploader.files && uploader.files[0]) {
        $('#profileImage').attr(
            'src',
            window.URL.createObjectURL(uploader.files[0])
        );
    }
    else{
        $('#profileImage').attr('src',"/static/images/profilepic.png");
    }
}

$('#imageUpload').change(function() {
    console.dir(this.value);
    fasterPreview(this);
});


////   Upload Resume   //////
$('#resumeFile').click(function(e) {
    $('#resumeUpload').click();
});

function fasterPreview3(uploader) {
    if (uploader.files && uploader.files[0]) {
        $('#resumeFile').attr(
            'src',
            window.URL.createObjectURL(uploader.files[0])
        );
    }
}

$('#resumeUpload').change(function() {
    fasterPreview3(this);
});



////   Upload Signatures   //////
$('#signImage').click(function(e) {
    $('#signUpload').click();
});

function fasterPreview2(uploader) {
    if (uploader.files && uploader.files[0]) {
        $('#signImage').attr(
            'src',
            window.URL.createObjectURL(uploader.files[0])
        );
    }
}

$('#signUpload').change(function() {
    fasterPreview2(this);
});





(function($) {
    var $window = $(window),
        $body = $('body'),
        $main = $('#main');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px'],
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Nav.
    var $nav = $('#nav');

    if ($nav.length > 0) {
        // Shrink effect.
        $main.scrollex({
            mode: 'top',
            enter: function() {
                $nav.addClass('alt');
            },
            leave: function() {
                $nav.removeClass('alt');
            },
        });

        // Links.
        var $nav_a = $nav.find('a');

        $nav_a
            .scrolly({
                speed: 1000,
                offset: function() {
                    return $nav.height();
                },
            })
            .on('click', function() {
                var $this = $(this);

                // External link? Bail.
                if ($this.attr('href').charAt(0) != '#') return;

                // Deactivate all links.
                $nav_a.removeClass('active').removeClass('active-locked');

                // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
                $this.addClass('active').addClass('active-locked');
            })
            .each(function() {
                var $this = $(this),
                    id = $this.attr('href'),
                    $section = $(id);

                // No section for this link? Bail.
                if ($section.length < 1) return;

                // Scrollex.
                $section.scrollex({
                    mode: 'middle',
                    initialize: function() {
                        // Deactivate section.
                        if (browser.canUse('transition')) $section.addClass('inactive');
                    },
                    enter: function() {
                        // Activate section.
                        $section.removeClass('inactive');

                        // No locked links? Deactivate all links and activate this section's one.
                        if ($nav_a.filter('.active-locked').length == 0) {
                            $nav_a.removeClass('active');
                            $this.addClass('active');
                        }

                        // Otherwise, if this section's link is the one that's locked, unlock it.
                        else if ($this.hasClass('active-locked'))
                            $this.removeClass('active-locked');
                    },
                });
            });
    }

    // Scrolly.
    $('.scrolly').scrolly({
        speed: 1000,
    });
})(jQuery);
