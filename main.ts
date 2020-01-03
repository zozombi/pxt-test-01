/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="ZozoBlocks"
namespace zozoblocks {
    basic.plotLeds(`
        # # . # #
        . . # . .
        . . # . .
        # . . . #
        . # # # .
        `);
    basic.pause(300);
    basic.showString("Hello");
    // foo.bar();
}