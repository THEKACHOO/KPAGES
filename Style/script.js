(function () {
    var reader = document.getElementById('reader');
    var frame = document.getElementById('readerFrame');
    var empty = document.getElementById('readerEmpty');
    var title = document.getElementById('readerTitle');

    function driveEmbed(url) {
        var m = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
        return m ? 'https://drive.google.com/file/d/' + m[1] + '/preview' : url;
    }
    function openReader(name, pdf) {
        title.textContent = name;
        if (pdf && pdf !== '#') {
            frame.src = driveEmbed(pdf);
            frame.style.display = 'block';
            empty.style.display = 'none';
        } else {
            frame.style.display = 'none';
            empty.style.display = 'block';
        }
        reader.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeReader() {
        reader.classList.remove('active');
        frame.src = '';
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.read-btn').forEach(function (b) {
        b.addEventListener('click', function () {
            openReader(b.getAttribute('data-title'), b.getAttribute('data-pdf'));
        });
    });
    document.getElementById('readerClose').addEventListener('click', closeReader);

    window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && reader.classList.contains('active')) closeReader();
    });
})();
