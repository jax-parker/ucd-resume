function fetchGitHubInformation(event) {
    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<hs>Please enter a GitHub username</hs>`);
        return;
}
$("#gh-user-data").html(
    `<div id'loader>
    <img src="assets/images/loader.gif" alt="loading..." />
    </div>`);
    }
    