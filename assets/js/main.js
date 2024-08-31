const _0x318337 = _0x2ce1;
function _0x2ce1(_0x5ce943, _0x5a4dc7) {
  const _0x4c385e = _0x4c38();
  return (
    (_0x2ce1 = function (_0x2ce1cb, _0x1d3412) {
      _0x2ce1cb = _0x2ce1cb - 0x155;
      let _0x19bfc8 = _0x4c385e[_0x2ce1cb];
      return _0x19bfc8;
    }),
    _0x2ce1(_0x5ce943, _0x5a4dc7)
  );
}
(function (_0x1ea842, _0x1529fe) {
  const _0x1bd923 = _0x2ce1,
    _0x3581f5 = _0x1ea842();
  while (!![]) {
    try {
      const _0x475b40 =
        (-parseInt(_0x1bd923(0x16d)) / 0x1) *
          (parseInt(_0x1bd923(0x161)) / 0x2) +
        (-parseInt(_0x1bd923(0x15c)) / 0x3) *
          (parseInt(_0x1bd923(0x172)) / 0x4) +
        (-parseInt(_0x1bd923(0x15d)) / 0x5) *
          (-parseInt(_0x1bd923(0x168)) / 0x6) +
        parseInt(_0x1bd923(0x157)) / 0x7 +
        -parseInt(_0x1bd923(0x167)) / 0x8 +
        -parseInt(_0x1bd923(0x163)) / 0x9 +
        parseInt(_0x1bd923(0x156)) / 0xa;
      if (_0x475b40 === _0x1529fe) break;
      else _0x3581f5["push"](_0x3581f5["shift"]());
    } catch (_0x377c7c) {
      _0x3581f5["push"](_0x3581f5["shift"]());
    }
  }
})(_0x4c38, 0xdb869);
function updateFavicon(_0x29eb57) {
  const _0x59abc5 = _0x2ce1,
    _0x25c7d5 = document["getElementById"]("favicon");
  _0x29eb57 === "dark"
    ? (_0x25c7d5["href"] = _0x59abc5(0x15e))
    : (_0x25c7d5["href"] = "./assets/img/favicons/favico1.png");
}
function applyTheme() {
  const _0x4dd923 = _0x2ce1,
    _0x3bf9ae = window[_0x4dd923(0x15f)](_0x4dd923(0x16e))[_0x4dd923(0x16f)]
      ? "dark"
      : "light";
  updateFavicon(_0x3bf9ae);
}
window["matchMedia"]("(prefers-color-scheme:\x20dark)")[_0x318337(0x169)](
  _0x318337(0x164),
  (_0x167300) => {
    const _0x31dc57 = _0x318337,
      _0x351126 = _0x167300[_0x31dc57(0x16f)]
        ? _0x31dc57(0x16b)
        : _0x31dc57(0x171);
    updateFavicon(_0x351126);
  }
),
  applyTheme(),
  window[_0x318337(0x169)](_0x318337(0x162), function () {
    const _0x483d32 = _0x318337,
      _0x572567 = document["querySelectorAll"](_0x483d32(0x155));
    _0x572567[_0x483d32(0x165)](function (_0x1e0468) {
      const _0x49d4ad = _0x483d32;
      _0x1e0468[_0x49d4ad(0x15a)][_0x49d4ad(0x160)](_0x49d4ad(0x158));
    });
  }),
  window["addEventListener"](_0x318337(0x16c), function () {
    const _0x8893dc = _0x318337,
      _0x1c0229 = document["querySelectorAll"](".animate-on-scroll"),
      _0x58cb55 = window[_0x8893dc(0x170)];
    _0x1c0229[_0x8893dc(0x165)](function (_0x313c65) {
      const _0x4faf5a = _0x8893dc,
        _0x272261 = _0x313c65[_0x4faf5a(0x16a)]()[_0x4faf5a(0x15b)];
      _0x272261 < _0x58cb55 &&
        _0x313c65[_0x4faf5a(0x15a)][_0x4faf5a(0x160)]("show");
    });
  }),
  window[_0x318337(0x169)](_0x318337(0x162), function () {
    const _0x4b2647 = _0x318337,
      _0x3e423 = document[_0x4b2647(0x166)](_0x4b2647(0x159));
    _0x3e423[_0x4b2647(0x165)](function (_0x230f82) {
      const _0x56adaf = _0x4b2647;
      _0x230f82[_0x56adaf(0x15a)][_0x56adaf(0x160)](_0x56adaf(0x158));
    });
  });
function _0x4c38() {
  const _0x4aeb9a = [
    "16AVLflv",
    ".text-animate",
    "23744880LMqoRh",
    "6398973JlouYU",
    "show",
    ".pricing-plan",
    "classList",
    "top",
    "427698rTWOzr",
    "425CPCJOh",
    "./assets/img/favicons/favico2.png",
    "matchMedia",
    "add",
    "204492UTmYDJ",
    "load",
    "14606640IlBLdN",
    "change",
    "forEach",
    "querySelectorAll",
    "11950904DIWPcj",
    "113250kzrVlC",
    "addEventListener",
    "getBoundingClientRect",
    "dark",
    "scroll",
    "3rtaPDt",
    "(prefers-color-scheme:\x20dark)",
    "matches",
    "innerHeight",
    "light",
  ];
  _0x4c38 = function () {
    return _0x4aeb9a;
  };
  return _0x4c38();
}
