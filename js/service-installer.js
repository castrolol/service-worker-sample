if ('serviceWorker' in navigator) { 
    
    console.log('Service Worker tão na area!');
 
 navigator.serviceWorker.register('sw.js').then(function(reg) {
   console.log(':^)', reg);
   // TODO
 }).catch(function(err) {
   console.log(':^(', err);
 });
}