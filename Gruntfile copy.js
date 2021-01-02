module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps-customserver');

    grunt.initConfig({
        screeps: {
            options: {
                hostname: 'firzen.hopto.org',
                port: '21025',
                'use-https': false,
                username: 'Your_username',
                password: 'Password_here',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
}