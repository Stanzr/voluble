var socket = io.connect(document.location.origin);
socket.on('pastevt', function (data) {
    $('#past_events').append(data);
});
