console.log('Service Worker - Iniciado!', self);

self.addEventListener('install', function(event) {
    self.skipWaiting();
    console.log('Instalado', event);
});

self.addEventListener('activate', function(event) {
    console.log('Ativado', event);
});

self.addEventListener('push', function(event) {
    console.log('Push message recebida', event);
});