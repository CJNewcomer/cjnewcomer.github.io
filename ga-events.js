function handleGAEvent(action, event_category, event_label){
    return ((_) => {
        console.log('analytics')
        gtag('event', action, { event_category, event_label }
        );
    });
}

document.querySelector('.js-resume-event')
    .onclick = handleGAEvent('download_file', 'downloads', 'resume');

document.querySelectorAll('.js-project-click').forEach(link => {
    link.onclick = handleGAEvent('open_project', 'projects', link.href);
});