var CREATE = 0;
var UPDATE = 1;
var operation = CREATE;
var table, editorCont, editor;
$(document).ready(function (e) {
    table = $("#table tbody");
    editorCont = $("#editor_container");
    editor = $("#editor");
    refreshTable(); // Auto refresh @ start.
    $("#refresh_btn").click(refreshTable);
    $("#create_btn").click(function (e) {
        operation = CREATE;
        editor.find("input").each(function (idx, ipt) {
            $(ipt).val("");
        });
        editorCont.show();
    });
    $("#save_btn").click(function (e) {
        var url = operation == CREATE ? "crud/create.php" : "crud/update.php";
        $.ajax({
            url: url,
            method: "POST",
            data: editor.serialize(),
            dataType: "JSON",
            success: function (payload) {
                if (payload.state) {
                    refreshTable();
                }
                operation = CREATE;
                editorCont.hide();
                alert(payload.content);
            }
        });
    });
});
function refreshTable() {
    $.ajax({
        url: "crud/read.php",
        method: "GET",
        dataType: "JSON",
        success: function (payload) {
            table.empty();
            var content = payload.content;
            if (payload.state) {
                $.each(content, function (idx, data) {
                    var row = $("<tr>");
                    table.append(row);
                    // FIELDS
                    row.append($("<td>".concat(data.Id, "</td>")));
                    row.append($("<td>".concat(data.Firstname, "</td>")));
                    row.append($("<td>".concat(data.Lastname, "</td>")));
                    row.append($("<td>".concat(data.Email, "</td>")));
                    // ACTIONS
                    var actions = $("<td>");
                    row.append(actions);
                    var updateBtn = $("<button>Update</button>");
                    actions.append(updateBtn);
                    updateBtn.click(function (e) {
                        updateBtnClicked(data);
                    });
                    var deleteBtn = $("<button>Delete</button>");
                    actions.append(deleteBtn);
                    deleteBtn.click(function (e) {
                        deleteBtnClicked(data.Id);
                    });
                });
            }
            else {
                table.append("<td colspan=\"4\" class=\"centered\">Oops! ".concat(content, "</td>"));
            }
        }
    });
}
function updateBtnClicked(data) {
    operation = UPDATE;
    editor.find("input").each(function (idx, ipt) {
        ipt = $(ipt);
        var name = ipt.attr("name");
        ipt.val(data[name]);
    });
    editorCont.show();
}
function deleteBtnClicked(id) {
    $.ajax({
        url: "crud/delete.php",
        method: "POST",
        data: { Id: id },
        dataType: "JSON",
        success: function (payload) {
            if (payload.state) {
                refreshTable();
            }
            alert(payload.content);
        }
    });
}
