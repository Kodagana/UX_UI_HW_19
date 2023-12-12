window.addEventListener('DOMContentLoaded', (event) => {

    $(document).ready(function(){
        $('#btn-polo').click(function() {
            $('#myModal').css('display', 'block');
            $('#modal-title').text('View Project');
            $('#modal-text').text('Navigate to polo pony project');
        });

        $('#btn-weather').click(function() {
            $('#myModal').css('display', 'block');
            $('#modal-title').text('View Project');
            $('#modal-text').text('Navigate to national weather service project');
        });

        $('#btn-pantry').click(function() {
            $('#myModal').css('display', 'block');
            $('#modal-title').text('View Project');
            $('#modal-text').text('Navigate to smart pantry project');
        });

        $('#btn-view-more-project').click(function() {
            $('#myModal').css('display', 'block');
            $('#modal-title').text('More Project');
            $('#modal-text').text('Naviagte to more projects page from here');
        });

        $('#close').click(function() {
            $('#myModal').css('display', 'none');
        });

    });

    

});