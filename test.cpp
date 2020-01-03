#include "pxt.h"

using namespace pxt;

namespace zozo2 {

   void plot(int x, int y) {
      uBit.display.image.setPixelValue(x, y, 0xff);
    }
}
