(function () {
})();



function  addAssignmentModal (){
  $('#addAssignmentModal').modal('show');
    let modalButtons = '';
    modalButtons += '<button class="btn btn-default"  id="btnUserCancel" onclick="closeAssignmentModal()">Cancel</button>';
    modalButtons += '<button class="btn btn-info" onclick="openProjectsView()" id="btnUserNext">Next</button>';
    $("#addAssignmentModal .modal-footer ").empty();
    $("#addAssignmentModal .modal-footer").append(modalButtons);
    $("#availableItemLabel").text("Available users");
    $("#selectedItemLabel").text("Selected users");
    // $(".jumbotron").html('<h3>Select Users</h3>')
}

function closeAssignmentModal(){
  $('#addAssignmentModal').modal('hide');
}

function submitAssignments(){
  $('#addAssignmentModal').modal('hide');
}


// change view functions

function openUsersView() {
  $("#addAssignmentModal .modal-footer ").empty();
  $('.step1Circle div.step-circle').removeClass('circle-inactive-style');
  $('.stepConnector1,.step1Circle').removeClass('opacityPoint4')
  $('.step2Circle, .step3Circle, .step4Circle').addClass('opacityPoint4');
  $('.step2Circle div.step-circle,.step3Circle div.step-circle,.step4Circle div.step-circle').addClass('circle-inactive-style');
  $('.stepConnector2,.stepConnector3').addClass('opacityPoint4');
  $('.step2,.step3,.step4').addClass('opacityPoint4');
  $('.step1').removeClass('opacityPoint4');
  let modalButtons = '';
  modalButtons += '<button class="btn btn-default"  id="btnUserCancel" onclick="closeAssignmentModal()">Cancel</button>';
  modalButtons += '<button class="btn btn-info" onclick="openProjectsView()" id="btnUserNext">Next</button>';
  $("#addAssignmentModal .modal-footer").append(modalButtons);
  $("#availableItemLabel,#selectedItemLabel,#availableItems,#selectedItems").empty();
  $("#availableItemLabel").text("Available users")
  $("#selectedItemLabel").text("Selected users")
  // $(".jumbotron").html('<h3>Select Users</h3>')

}

function openProjectsView() {
  $("#addAssignmentModal .modal-footer ").empty();
  $('.step2Circle div.step-circle').removeClass('circle-inactive-style');
  $('.step2Circle, .stepConnector2').removeClass('opacityPoint4');
  $('.step1Circle div.step-circle,.step3Circle div.step-circle,.step4Circle div.step-circle').addClass('circle-inactive-style');
  $('.step3Circle, .step4Circle, .stepConnector3').addClass('opacityPoint4');
  $('.step3,.step4').addClass('opacityPoint4');
  $('.step2').removeClass('opacityPoint4');
  let modalButtons = '';
  modalButtons += '<button class="btn btn-default"  id="btnUserCancel" onclick="closeAssignmentModal()">Cancel</button>';
  modalButtons += '<button class="btn btn-default" onclick="openUsersView()" id="btnUserBack">Back</button>';
  modalButtons += '<button class="btn btn-info" onclick="openCategoriesView()" id="btnUserNext">Next</button>';
  $("#addAssignmentModal .modal-footer").empty();
  $("#addAssignmentModal .modal-footer").append(modalButtons);
  $("#availableItemLabel,#selectedItemLabel,#availableItems,#selectedItems").empty();
  $("#availableItemLabel").text("Available organizations/projects");
  $("#selectedItemLabel").text("Selected organizations/projects");
  // $(".jumbotron").html('<h3>Select Projects</h3>')
}

function openCategoriesView() {
  $("#addAssignmentModal .modal-footer ").empty();
  $('.step3Circle div.step-circle').removeClass('circle-inactive-style');
  $('.step3Circle, .stepConnector3').removeClass('opacityPoint4');
  $('.step1Circle div.step-circle,.step2Circle div.step-circle,.step4Circle div.step-circle').addClass('circle-inactive-style');
  $('.step4Circle').addClass('opacityPoint4');
  $('.step4').addClass('opacityPoint4');
  $('.step3').removeClass('opacityPoint4');
  let modalButtons = '';
  modalButtons += '<button class="btn btn-default"  id="btnUserCancel" onclick="closeAssignmentModal()">Cancel</button>';
  modalButtons += '<button class="btn btn-default" onclick="openProjectsView()" id="btnUserBack">Back</button>';
  modalButtons += '<button class="btn btn-info" onclick="openRolesView()" id="btnUserNext">Next</button>';
  $("#addAssignmentModal .modal-footer").empty();
  $("#addAssignmentModal .modal-footer").append(modalButtons);
  $("#availableItemLabel,#selectedItemLabel,#availableItems,#selectedItems").empty();
  $("#availableItemLabel").text("Available categories");
  $("#selectedItemLabel").text("Selected categories");
  // $(".jumbotron").html('<h3>Select Categories</h3>')
}

function openRolesView() {
  $("#addAssignmentModal .modal-footer ").empty();
  $('.step4Circle div.step-circle').removeClass('circle-inactive-style');
  $('.step4Circle, .stepConnector3').removeClass('opacityPoint4');
  $('.step1Circle div.step-circle,.step2Circle div.step-circle,.step3Circle div.step-circle').addClass('circle-inactive-style');
  $('.step4').removeClass('opacityPoint4');
  let modalButtons = '';
  modalButtons += '<button class="btn btn-default"  id="btnUserCancel" onclick="closeAssignmentModal()">Cancel</button>';
  modalButtons += '<button class="btn btn-default" onclick="openCategoriesView()" id="btnUserBack">Back</button>';
  modalButtons += '<button class="btn btn-info" onclick="submitAssignments()" id="btnUserDone">Done</button>';
  $("#addAssignmentModal .modal-footer").empty();
  $("#addAssignmentModal .modal-footer").append(modalButtons);
  $("#availableItemLabel,#selectedItemLabel,#availableItems,#selectedItems").empty();
  $("#availableItemLabel").text("Available roles");
  $("#selectedItemLabel").text("Selected roles");
  // $(".jumbotron").html('<h3>Select Roles</h3>')
}
