function transformarLink(linkA) {
    const url = new URL(linkA);
    const videoId = url.pathname.split('/')[1];
    const searchParams = url.search;
    const linkB = `https://www.youtube.com/embed/${videoId}${searchParams}`;
    return linkB;
}

let lsitaVideos = ['https://youtu.be/KDDOy5SyMQw?si=oCg9EtIev3WVcfYV',
     'https://youtu.be/eDdlh8vwlas?si=TjrZkyLJheRQrHUM',
      'https://youtu.be/Cq6u2y7B65U?si=fl6oKt8r9P3G_xUj',
      'https://youtu.be/vrKecPTBMqE?si=XhvClgk8E9qIPcaj'
    ]


function AdicionarVideos() {
    const videoList = document.getElementById('videoList')
    videoList.innerHTML = ''
    lsitaVideos.forEach(link => {
        const videoDiv = document.createElement('div')
        videoDiv.className = 'video'
        videoDiv.innerHTML = `
            <iframe width="110%" height="120%" src="${transformarLink(link)}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
        videoList.appendChild(videoDiv);
    })
}

AdicionarVideos()