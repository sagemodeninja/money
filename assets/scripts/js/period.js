var table, editorCont, editor;
$(document).ready(function (e) {
    table = $("#table tbody");
    editorCont = $("#editor_container");
    editor = $("#editor");
    refreshTable(); // Auto refresh @ start.
    $("#refresh_btn").click(refreshTable);
    $("#open_btn").click(function (e) {
        editor.find("input").each(function (idx, ipt) {
            $(ipt).val("");
        });
        editorCont.show();
    });
    $("#save_btn").click(function (e) {
        $.ajax({
            url: "open.php",
            method: "POST",
            data: editor.serialize(),
            dataType: "JSON",
            success: function (payload) {
                if (payload.state) {
                    refreshTable();
                }
                editorCont.hide();
                alert(payload.content);
            }
        });
    });
});
function refreshTable() {
    $.ajax({
        url: "read.php",
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
                    row.append($("<td>".concat(data.FromDate, "</td>")));
                    row.append($("<td>".concat(data.ToDate, "</td>")));
                    row.append($("<td>".concat(data.Status, "</td>")));
                });
            }
            else {
                table.append("<td colspan=\"4\" class=\"centered\">Oops! ".concat(content, "</td>"));
            }
        }
    });
}
