$(document).ready(function () {
    $('#name').text('');

    new TypeIt('#name', {
        strings: 'Stan Gabes',
        speed: 30,
        waitUntilVisible: true
    }).go();

    $('#instagram').hover(function () {
        new TypeIt('#name', {
            strings: '@stangabes',
            speed: 30,
            waitUntilVisible: true
        }).go();
    }, function () {
        new TypeIt('#name', {
            strings: 'Stan Gabes',
            speed: 30,
            waitUntilVisible: true
        }).go();
    });

    $('#discord').hover(function () {
        new TypeIt('#name', {
            strings: 'Stan#8888',
            speed: 30,
            waitUntilVisible: true
        }).go();
    }, function () {
        new TypeIt('#name', {
            strings: 'Stan Gabes',
            speed: 30,
            waitUntilVisible: true
        }).go();
    });

    $('#email').hover(function () {
        new TypeIt('#name', {
            strings: 'stan@gabes.nl',
            speed: 30,
            waitUntilVisible: true
        }).go();
    }, function () {
        new TypeIt('#name', {
            strings: 'Stan Gabes',
            speed: 30,
            waitUntilVisible: true
        }).go();
    });

    $('#github').hover(function () {
        new TypeIt('#name', {
            strings: '@stanjg',
            speed: 30,
            waitUntilVisible: true
        }).go();
    }, function () {
        new TypeIt('#name', {
            strings: 'Stan Gabes',
            speed: 30,
            waitUntilVisible: true
        }).go();
    });
});