var aPromise = fetch("https://conmatviet.com/nhac-chon-loc/album-em-oi-ha-noi-pho.html/");
        
  // Work with Promise object:
        aPromise
            .then(function(response) {
                debug
                console.log("OK! Server returns a response object:");
                console.log(response.text());
            })
            .catch(function(error)  {
                console.log("Noooooo! Something error:");
                // Network Error!
                console.log(error);
            });


chrome.runtime.onMessage.addListener(
    function(arg, sender, sendResponse){
        if(arg.action === "download-playlist"){
            downloadSequentially(arg.ListSong);
        }
    }
);


async function downloadSequentially(listSong) {
    for (const song of listSong) {
        if (!song.url) continue;
        const currentId = await download(song.url);
        const success = await onDownloadComplete(currentId);
    }
}

function download(url) {
    return new Promise(resolve => chrome.downloads.download({url}, resolve));
}

function onDownloadComplete(itemId) {
    return new Promise(resolve => {
        chrome.downloads.onChanged.addListener(function onChanged({id, state}) {
            if (id === itemId && state && state.current !== 'in_progress') {
                chrome.downloads.onChanged.removeListener(onChanged);
                resolve(state.current === 'complete');
            }
        });
    });
}