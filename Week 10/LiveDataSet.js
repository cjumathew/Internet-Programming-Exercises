(function updateScore () {
    setTimeout(function() {
        $.ajax( {
            URL: "match.json",
            type: "GET",
            dataType: "JSON",
            success: function(response) {
                //process data
            },
            error: function () {
                //process error
            }
        })
    }, 100);
}) ();