/*───────────────────────────────────

Obsidian Theme Compiler

────────────────────────────────────

MIT License
Copyright (c) 2024 Cecilia May 

uses GruntJS (https://gruntjs.com/) to
make it easier to develop
and test Obsidian themes.

● FEATURES ●
-   allows you to work with the uploaded
    remote theme directory
-   reduces the need to activate sass to
    css compiler in the terminal
-   automatically compiles sass to css upon
    saving changes to sass and css files
-   hot reload works by copying the final
    css copy from the working directory to the
    obsidian vault you're using to test the theme
    for (upon saving changes to sass and css files)
-   helps you easily organize separate sass
    and css files and automatically combines
    them into one
-   minifies the final css for
    an optimized performance

Remix from @kepano Minimal Theme Compiler

Read more at https://git.new/primary/obsidian

────────────────────────────────────*/

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*  Get OBSIDIAN_PATH from .env file

            (Make sure to replace OBSIDIAN_PATH in
            .env.example with your own vault or
            dev vault's path and remove the ".example"
            on the end of the filename)
        */
        env: {
            vault : {
                src: ".env"
            }
        },

        /*  Compile Sass to CSS
            Compile Sass to minified CSS */
        sass: {
            unminified: { 
                options: {
                    style: 'expanded'
                },
                files: {
                    'src/css/main.css': 'src/scss/index.scss'
                }
            },
            minified: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'src/css/main.min.css': 'src/scss/index.scss'
                }
            }
        },

        /*  Appropriately minify CSS and live reload   */
        cssmin: {
            options: {
                advanced: false,
                aggressiveMerging: false,
                mediaMerging: false,
                restructuring: false
            },
            minified: {
                files: {
                    'src/css/main.min.css': 'src/css/main.min.css'
                }
            }
        },

        /*  Concatenate CSS files to include license, README,
            and style settings inside the CSS in unminified readable form
            and minified distribution form   */
        concat_css: {
            unminified: {
                files: {
                    'Primary.css': [
                        'src/css/readme.css',
                        'src/css/fonts/*.css',
                        'src/css/main.min.css',
                        'src/css/style-settings.css'
                    ]
                }
            },
            dist: {
                files: {
                    'theme.css': [
                        'src/css/readme.css',
                        'src/css/fonts/*.css',
                        'src/css/main.min.css',
                        'src/css/style-settings.css'
                    ]
                }
            }
        },

        /*  Copy minified concatenated of CSS (distributed form)
            to your dev vault for live reload

            Rename function ensures that the copied file is not duplicated i.e. theme (1).css,
            but instead replaces the file and forces the same name    */
        copy: {
            hot_reload: {
                expand: true,
                src: 'theme.css',
                dest: process.env.HOME + process.env.OBSIDIAN_PATH,
                rename: function(dest, src) {
                    return dest + 'theme.css';
                }
            }
        },

        /*  Watch for changes in this working directory
            to perform the tasks written above  */
        watch: {
            css: {
                files: ['src/**/*.scss', 'src/**/*.css'],
                tasks: ['env', 'sass:unminified', 'sass:minified', 'cssmin', 'concat_css', 'copy', 'copy']
            }
        }
    });

    /*  Load the Gruntfile plugins  */
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /*  loadenv command: accesses content of .env file
        Used when triggering reload command */
    grunt.registerTask('loadenv', 'Load obsidian dev vault path...', function() {
        grunt.config('OBSIDIAN_PATH', process.env.OBSIDIAN_PATH);
    });

    /*  default command: watches for changes in the working directory
        and performs tasks as indicated under the grunt-contrib-watch plugin    */
    grunt.registerTask('default', ['env:vault', 'loadenv', 'watch']);
};