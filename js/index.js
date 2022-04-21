document.getElementById('submit').addEventListener(
    'click',
    function (event) {
        event.preventDefault()
        if (document.getElementById('message-mail').value == "test") {
            window.location.href="https://www.google.com"
        }
    }
)