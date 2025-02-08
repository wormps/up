document.documentElement.insertAdjacentHTML("afterbegin", "\n    <style>\n        /* Preloader en pantalla completa */\n        .fixed-background {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: black;\n            display: flex;\n            flex-direction: column; /* Asegura que los elementos estén en columna */\n            justify-content: center;\n            align-items: center;\n            z-index: 99999;\n            transition: opacity 0.5s ease-out;\n        }\n\n        /* Imagen de fondo */\n        .background-image {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background: url('https://i.imgur.com/vrLr4YT.png') no-repeat center center/cover;\n            background-size: cover;\n            background-position: center;\n            opacity: 0.3;\n            filter: blur(5px) opacity(1.5);\n        }\n\n        /* Estilos del logo */\n        .logo {\n            width: 200px;\n            animation: pulse 4s infinite;\n            margin-bottom: 70px; /* Espacio entre el logo y la barra */\n        }\n\n        /* Animación de pulso */\n        @keyframes pulse {\n            0% { transform: scale(2); opacity: 1; }\n            50% { transform: scale(2.1); opacity: 0.8; }\n            100% { transform: scale(2); opacity: 1; }\n        }\n            /* Barra de carga */\n        .progress-bar-container {\n            width: 50%;\n            height: 10px;\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 5px;\n            overflow: hidden;\n            position: relative;\n        }\n\n        .progress-bar {\n            width: 0%;\n            height: 100%;\n            background: #4CAF50;\n            transition: width 10s linear; /* La animación durará 10 segundos */\n        }\n    </style>\n\n    <div class=\"fixed-background\" id=\"loading-screen\">\n        <div class=\"background-image\"></div>\n        <img src=\"https://i.imgur.com/jXzoG5D.png\" alt=\"server logo\" class=\"logo\">\n        <div class=\"progress-bar-container\">\n            <div class=\"progress-bar\" id=\"progress-bar\"></div>\n        </div>\n    </div>\n");
window.onload = function () {
  document.getElementById("progress-bar").style.width = "100%";
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loading-screen").remove();
    }, 0x1f4);
  }, 0x2710);
};
var __extends = this && this.__extends || function () {
  var _0x303307 = function () {
    var _0x28c419 = true;
    return function (_0x4f2922, _0xdb7217) {
      var _0xdcf1eb = _0x28c419 ? function () {
        if (_0xdb7217) {
          var _0x49f6cb = _0xdb7217.apply(_0x4f2922, arguments);
          _0xdb7217 = null;
          return _0x49f6cb;
        }
      } : function () {};
      _0x28c419 = false;
      return _0xdcf1eb;
    };
  }();
  var _0x4de187 = _0x303307(this, function () {
    return _0x4de187.toString().search("(((.+)+)+)+$").toString().constructor(_0x4de187).search("(((.+)+)+)+$");
  });
  _0x4de187();
  var _0x3a9d25 = function () {
    var _0x33356e = true;
    return function (_0x4e1c1c, _0x438cf7) {
      var _0x46ba0a = _0x33356e ? function () {
        if (_0x438cf7) {
          var _0x53b5ff = _0x438cf7.apply(_0x4e1c1c, arguments);
          _0x438cf7 = null;
          return _0x53b5ff;
        }
      } : function () {};
      _0x33356e = false;
      return _0x46ba0a;
    };
  }();
  (function () {
    _0x3a9d25(this, function () {
      var _0x353703 = new RegExp("function *\\( *\\)");
      var _0x54f652 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      var _0xc4a4bf = _0x4d22f4("init");
      if (!_0x353703.test(_0xc4a4bf + "chain") || !_0x54f652.test(_0xc4a4bf + "input")) {
        _0xc4a4bf("0");
      } else {
        _0x4d22f4();
      }
    })();
  })();
  var _0x464995 = function () {
    var _0x2d4c76 = true;
    return function (_0x379461, _0x4b4bef) {
      var _0x32821f = _0x2d4c76 ? function () {
        if (_0x4b4bef) {
          var _0x464960 = _0x4b4bef.apply(_0x379461, arguments);
          _0x4b4bef = null;
          return _0x464960;
        }
      } : function () {};
      _0x2d4c76 = false;
      return _0x32821f;
    };
  }();
  var _0x2835b7 = _0x464995(this, function () {
    var _0x21344f = function () {
      var _0x37ffc9;
      try {
        _0x37ffc9 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x51f18a) {
        _0x37ffc9 = window;
      }
      return _0x37ffc9;
    };
    var _0x293b2d = _0x21344f();
    var _0x5a71a3 = _0x293b2d.console = _0x293b2d.console || {};
    var _0x3d2347 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var _0x1b08ff = 0x0; _0x1b08ff < _0x3d2347.length; _0x1b08ff++) {
      var _0x1ab3bd = _0x464995.constructor.prototype.bind(_0x464995);
      var _0x3f0008 = _0x3d2347[_0x1b08ff];
      var _0x4c38d9 = _0x5a71a3[_0x3f0008] || _0x1ab3bd;
      _0x1ab3bd.__proto__ = _0x464995.bind(_0x464995);
      _0x1ab3bd.toString = _0x4c38d9.toString.bind(_0x4c38d9);
      _0x5a71a3[_0x3f0008] = _0x1ab3bd;
    }
  });
  _0x2835b7();
  var _0x24b8bf = function (_0x4e2af5, _0x46e1c0) {
    _0x24b8bf = Object.setPrototypeOf || {
      "__proto__": []
    } instanceof Array && function (_0x49f503, _0x54b252) {
      _0x49f503.__proto__ = _0x54b252;
    } || function (_0x42d516, _0x30fa27) {
      for (var _0x5c93f1 in _0x30fa27) if (Object.prototype.hasOwnProperty.call(_0x30fa27, _0x5c93f1)) {
        _0x42d516[_0x5c93f1] = _0x30fa27[_0x5c93f1];
      }
    };
    return _0x24b8bf(_0x4e2af5, _0x46e1c0);
  };
  return function (_0xfdd57f, _0x35a8e9) {
    if (typeof _0x35a8e9 !== "function" && _0x35a8e9 !== null) {
      throw new TypeError("Class extends value " + String(_0x35a8e9) + " is not a constructor or null");
    }
    _0x24b8bf(_0xfdd57f, _0x35a8e9);
    function _0x282ed5() {
      this.constructor = _0xfdd57f;
    }
    _0xfdd57f.prototype = _0x35a8e9 === null ? Object.create(_0x35a8e9) : (_0x282ed5.prototype = _0x35a8e9.prototype, new _0x282ed5());
  };
}();
var Direction;
(function (_0x100eab) {
  _0x100eab.LEFT = "left";
  _0x100eab.TOP = "top";
  _0x100eab.BOTTOM = "bottom";
  _0x100eab.RIGHT = "right";
  _0x100eab.TOP_LEFT = "top_left";
  _0x100eab.TOP_RIGHT = "top_right";
  _0x100eab.BOTTOM_LEFT = "bottom_left";
  _0x100eab.BOTTOM_RIGHT = "bottom_right";
})(Direction = {});
var Joystick = function (_0xaeed3a) {
  __extends(_0x257caa, _0xaeed3a);
  function _0x257caa(_0x230f58) {
    var _0x47690c = _0xaeed3a.call(this) || this;
    _0x47690c.outerRadius = 0x0;
    _0x47690c.innerRadius = 0x0;
    _0x47690c.innerAlphaStandby = 0.5;
    _0x47690c.settings = Object.assign({
      "outerScale": {
        "x": 0x1,
        "y": 0x1
      },
      "innerScale": {
        "x": 0x1,
        "y": 0x1
      }
    }, _0x230f58);
    if (!_0x47690c.settings.outer) {
      var _0x3820c3 = new PIXI.Graphics();
      _0x3820c3.beginFill(0xff0000);
      _0x3820c3.drawCircle(0x0, 0x0, 0x3c);
      _0x3820c3.alpha = 0.5;
      _0x47690c.settings.outer = _0x3820c3;
    }
    if (!_0x47690c.settings.inner) {
      var _0x21ef14 = new PIXI.Graphics();
      _0x21ef14.beginFill(0xff0000);
      _0x21ef14.drawCircle(0x0, 0x0, 0x23);
      _0x21ef14.alpha = _0x47690c.innerAlphaStandby;
      _0x47690c.settings.inner = _0x21ef14;
    }
    _0x47690c.initialize();
    return _0x47690c;
  }
  _0x257caa.prototype.initialize = function () {
    this.outer = this.settings.outer;
    this.inner = this.settings.inner;
    this.outer.scale.set(this.settings.outerScale.x, this.settings.outerScale.y);
    this.inner.scale.set(this.settings.innerScale.x, this.settings.innerScale.y);
    if ("anchor" in this.outer) {
      this.outer.anchor.set(0.5);
    }
    if ("anchor" in this.inner) {
      this.inner.anchor.set(0.5);
    }
    this.addChild(this.outer);
    this.addChild(this.inner);
    this.outerRadius = this.width / 2.5;
    this.innerRadius = this.inner.width / 0x2;
    this.bindEvents();
  };
  _0x257caa.prototype.bindEvents = function () {
    var _0x5df46d = this;
    this.interactive = true;
    var _0x531db5 = false;
    var _0x310cba;
    var _0x22e41b;
    var _0x1e8f13;
    this.onDragStart = function (_0x1cf997) {
      var _0x2c15e8;
      var _0x74c9e9;
      _0x310cba = _0x1cf997;
      _0x1e8f13 = this.toLocal(_0x310cba);
      _0x531db5 = true;
      _0x5df46d.inner.alpha = 0x1;
      if ((_0x74c9e9 = (_0x2c15e8 = _0x5df46d.settings).onStart) === null || _0x74c9e9 === undefined) {
        undefined;
      } else {
        _0x74c9e9.call(_0x2c15e8);
      }
    };
    this.onDragEnd = function (_0x5c03e7) {
      var _0x50dc29;
      var _0x52fedb;
      if (_0x531db5 == false) {
        return;
      }
      _0x5df46d.inner.position.set(0x0, 0x0);
      _0x531db5 = false;
      _0x5df46d.inner.alpha = _0x5df46d.innerAlphaStandby;
      if ((_0x52fedb = (_0x50dc29 = _0x5df46d.settings).onEnd) === null || _0x52fedb === undefined) {
        undefined;
      } else {
        _0x52fedb.call(_0x50dc29);
      }
    };
    this.onDragMove = function (_0x24bc68) {
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 0x2;
      var _0x53435a;
      var _0x1ed1ef;
      var _0x254d24;
      var _0x51ec7c;
      var _0x2812b4;
      var _0xf096e4;
      if (_0x531db5 == false) {
        return;
      }
      var _0x3d26e3 = this.toLocal(_0x24bc68);
      var _0x5a2319 = _0x3d26e3.x - _0x1e8f13.x;
      var _0x57c22c = _0x3d26e3.y - _0x1e8f13.y;
      var _0x27256a = new PIXI.Point(0x0, 0x0);
      var _0x51ab15 = 0x0;
      if (_0x5a2319 == 0x0 && _0x57c22c == 0x0) {
        return;
      }
      var _0x3b170b = 0x0;
      if (_0x5a2319 * _0x5a2319 + _0x57c22c * _0x57c22c >= _0x5df46d.outerRadius * _0x5df46d.outerRadius) {
        _0x3b170b = _0x5df46d.outerRadius;
      } else {
        _0x3b170b = _0x5df46d.outerRadius - _0x5df46d.innerRadius;
      }
      var _0x1d9a88 = Direction.LEFT;
      if (_0x5a2319 == 0x0) {
        if (_0x57c22c > 0x0) {
          _0x27256a.set(0x0, _0x57c22c > _0x5df46d.outerRadius ? _0x5df46d.outerRadius : _0x57c22c);
          _0x51ab15 = 0x10e;
          _0x1d9a88 = Direction.BOTTOM;
        } else {
          _0x27256a.set(0x0, -(Math.abs(_0x57c22c) > _0x5df46d.outerRadius ? _0x5df46d.outerRadius : Math.abs(_0x57c22c)));
          _0x51ab15 = 0x5a;
          _0x1d9a88 = Direction.TOP;
        }
        _0x5df46d.inner.position.set(_0x27256a.x, _0x27256a.y);
        _0x22e41b = _0x5df46d.getPower(_0x27256a);
        if ((_0x1ed1ef = (_0x53435a = _0x5df46d.settings).onChange) === null || _0x1ed1ef === undefined) {
          undefined;
        } else {
          _0x1ed1ef.call(_0x53435a, {
            "angle": _0x51ab15,
            "direction": _0x1d9a88,
            "power": _0x22e41b
          });
        }
        return;
      }
      if (_0x57c22c == 0x0) {
        if (_0x5a2319 > 0x0) {
          _0x27256a.set(Math.abs(_0x5a2319) > _0x5df46d.outerRadius ? _0x5df46d.outerRadius : Math.abs(_0x5a2319), 0x0);
          _0x51ab15 = 0x0;
          _0x1d9a88 = Direction.LEFT;
        } else {
          _0x27256a.set(-(Math.abs(_0x5a2319) > _0x5df46d.outerRadius ? _0x5df46d.outerRadius : Math.abs(_0x5a2319)), 0x0);
          _0x51ab15 = 0xb4;
          _0x1d9a88 = Direction.RIGHT;
        }
        _0x5df46d.inner.position.set(_0x27256a.x, _0x27256a.y);
        _0x22e41b = _0x5df46d.getPower(_0x27256a);
        if ((_0x51ec7c = (_0x254d24 = _0x5df46d.settings).onChange) === null || _0x51ec7c === undefined) {
          undefined;
        } else {
          _0x51ec7c.call(_0x254d24, {
            "angle": _0x51ab15,
            "direction": _0x1d9a88,
            "power": _0x22e41b
          });
        }
        return;
      }
      var _0x2094bc = Math.abs(_0x57c22c / _0x5a2319);
      var _0x40994b = Math.atan(_0x2094bc);
      _0x51ab15 = _0x40994b * 0xb4 / Math.PI;
      var _0x54871c = 0x0;
      var _0x26a7ef = 0x0;
      if (_0x5a2319 * _0x5a2319 + _0x57c22c * _0x57c22c >= _0x5df46d.outerRadius * _0x5df46d.outerRadius) {
        _0x54871c = _0x5df46d.outerRadius * Math.cos(_0x40994b);
        _0x26a7ef = _0x5df46d.outerRadius * Math.sin(_0x40994b);
      } else {
        _0x54871c = Math.abs(_0x5a2319) > _0x5df46d.outerRadius ? _0x5df46d.outerRadius : Math.abs(_0x5a2319);
        _0x26a7ef = Math.abs(_0x57c22c) > _0x5df46d.outerRadius ? _0x5df46d.outerRadius : Math.abs(_0x57c22c);
      }
      if (_0x57c22c < 0x0) {
        _0x26a7ef = -Math.abs(_0x26a7ef);
      }
      if (_0x5a2319 < 0x0) {
        _0x54871c = -Math.abs(_0x54871c);
      }
      if (_0x5a2319 > 0x0 && _0x57c22c < 0x0) {} else {
        if (_0x5a2319 < 0x0 && _0x57c22c < 0x0) {
          _0x51ab15 = 0xb4 - _0x51ab15;
        } else {
          if (_0x5a2319 < 0x0 && _0x57c22c > 0x0) {
            _0x51ab15 = _0x51ab15 + 0xb4;
          } else if (_0x5a2319 > 0x0 && _0x57c22c > 0x0) {
            _0x51ab15 = 0x168 - _0x51ab15;
          }
        }
      }
      _0x27256a.set(_0x54871c, _0x26a7ef);
      _0x22e41b = _0x5df46d.getPower(_0x27256a);
      _0x1d9a88 = _0x5df46d.getDirection(_0x27256a);
      _0x5df46d.inner.position.set(_0x27256a.x, _0x27256a.y);
      if ((_0xf096e4 = (_0x2812b4 = _0x5df46d.settings).onChange) === null || _0xf096e4 === undefined) {
        undefined;
      } else {
        _0xf096e4.call(_0x2812b4, {
          "angle": _0x51ab15,
          "direction": _0x1d9a88,
          "power": _0x22e41b
        });
      }
    };
  };
  _0x257caa.prototype.getPower = function (_0x31da51) {
    var _0xec1fb5 = _0x31da51.x - 0x0;
    var _0x11823c = _0x31da51.y - 0x0;
    return Math.min(0x1, Math.sqrt(_0xec1fb5 * _0xec1fb5 + _0x11823c * _0x11823c) / this.outerRadius);
  };
  _0x257caa.prototype.getDirection = function (_0x3f26a0) {
    var _0x274ecf = Math.atan2(_0x3f26a0.y, _0x3f26a0.x);
    if (_0x274ecf >= -Math.PI / 0x8 && _0x274ecf < 0x0 || _0x274ecf >= 0x0 && _0x274ecf < Math.PI / 0x8) {
      return Direction.RIGHT;
    } else {
      if (_0x274ecf >= Math.PI / 0x8 && _0x274ecf < 0x3 * Math.PI / 0x8) {
        return Direction.BOTTOM_RIGHT;
      } else {
        if (_0x274ecf >= 0x3 * Math.PI / 0x8 && _0x274ecf < 0x5 * Math.PI / 0x8) {
          return Direction.BOTTOM;
        } else {
          if (_0x274ecf >= 0x5 * Math.PI / 0x8 && _0x274ecf < 0x7 * Math.PI / 0x8) {
            return Direction.BOTTOM_LEFT;
          } else {
            if (_0x274ecf >= 0x7 * Math.PI / 0x8 && _0x274ecf < Math.PI || _0x274ecf >= -Math.PI && _0x274ecf < -0x7 * Math.PI / 0x8) {
              return Direction.LEFT;
            } else {
              if (_0x274ecf >= -0x7 * Math.PI / 0x8 && _0x274ecf < -0x5 * Math.PI / 0x8) {
                return Direction.TOP_LEFT;
              } else {
                return _0x274ecf >= -0x5 * Math.PI / 0x8 && _0x274ecf < -0x3 * Math.PI / 0x8 ? Direction.TOP : Direction.TOP_RIGHT;
              }
            }
          }
        }
      }
    }
  };
  return _0x257caa;
}(PIXI.Container);
function _typeof(_0x30ee6c) {
  '@babel/helpers - typeof';

  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x2a2b88) {
    return typeof _0x2a2b88;
  } : function (_0x5e52fa) {
    return _0x5e52fa && "function" == typeof Symbol && _0x5e52fa.constructor === Symbol && _0x5e52fa !== Symbol.prototype ? "symbol" : typeof _0x5e52fa;
  })(_0x30ee6c);
}
var lenguaje = {
  "es": {
    "opciones": "opciones",
    "zoomVelocidad": "Zoom Velocidad",
    "anchoPotenciador": "ancho del potenciador",
    "auraPotenciador": "aura del potenciador",
    "anchoComida": "ancho de la comida",
    "brilloComida": "brillo de la comida",
    "fondo": "fondo Solido",
    "laser": "laser de cabeza",
    "sectores": "sectores",
    "colorJuego": "color del juego",
    "colorLaser": "color del laser",
    "colorBorde": "color del borde",
    "copiar": "copiar",
    "fondos": "fondos",
    "fondo0": "por defecto",
    "fondo1": "espacio",
    "fondo2": "espacio 2",
    "fondo3": "azul",
    "fondo4": "espacio 3",
    "skinVisible": "SkinVisible(Para publico)",
    "soundTuto1": "descargar sonido",
    "soundTuto2": "subir sonido",
    "soundTuto3": "sonido link cabeza",
    "soundTuto4": "sonido link 10cabezas"
  },
  "en": {
    "opciones": "settings",
    "zoomVelocidad": "Zoom Speed",
    "anchoPotenciador": "booster width",
    "auraPotenciador": "power up glow",
    "anchoComida": "size of food",
    "brilloComida": "food shine",
    "fondo": "Solid background",
    "laser": "Center laser",
    "sectores": "sectors",
    "colorJuego": "game color",
    "colorLaser": "laser color",
    "colorBorde": "border color",
    "copiar": "copy",
    "fondos": "background",
    "fondo0": "default",
    "fondo1": "Green",
    "fondo2": "Blue",
    "fondo3": "Blue Black",
    "fondo4": "Blue Light",
    "skinVisible": "SkinVisible(For public)",
    "soundTuto1": "download sounds",
    "soundTuto2": "turn up sound",
    "soundTuto3": "sound link head",
    "soundTuto4": "sound link 10heads"
  },
  "uk": {
    "opciones": "????????????",
    "anchoPotenciador": "?????? ???????????",
    "auraPotenciador": "????? ???????????",
    "anchoComida": "?????? ???",
    "brilloComida": "????? ???",
    "fondo": "??????? ???",
    "laser": "??????????? ?????",
    "sectores": "???????",
    "colorJuego": "????? ???",
    "colorLaser": "????? ??????",
    "colorBorde": "????? ????",
    "copiar": "?????????",
    "fondos": "????",
    "fondo0": "?? ?????????????",
    "fondo1": "??????",
    "fondo2": "?????? 2",
    "fondo3": "?????",
    "fondo4": "?????? 3",
    "skinVisible": "SkinVisible(??? ???????)",
    "soundTuto1": "??????????? ????",
    "soundTuto2": "??????????? ????",
    "soundTuto3": "???? ??? ??????",
    "soundTuto4": "???? ??? 10 ?????"
  }
};
const _wrmxt = {
  "isSkinCustom"(_0x304d6d) {
    var _0x57fe26 = /[a-zA-Z]/;
    return "string" === typeof _0x304d6d && _0x57fe26.test(_0x304d6d);
  },
  "testSkinCustom": function (_0x1d5395) {
    return _wrmxt.isSkinCustom(_0x1d5395) ? 0x22 || 0x21 : _0x1d5395;
  },
  "testSkinMod": function (_0x48b80d) {
    return 0x18f <= _0x48b80d && 0x3e7 > _0x48b80d;
  },
  "testWear": function (_0xf46c58) {
    return 0x18f <= _0xf46c58 && 0x3e7 > _0xf46c58;
  },
  "isNumberValid": function (_0x446d9c) {
    return '' !== _0x446d9c && null !== _0x446d9c && undefined !== _0x446d9c && !isNaN(_0x446d9c);
  },
  "validInput": function (_0x5d8ede) {
    if (!(0x18f <= _0x5d8ede && 0x3e7 > _0x5d8ede) && !_wrmxt.isSkinCustom(_0x5d8ede)) {
      return _0x5d8ede;
    }
    try {
      let _0x1a25b2 = $("#inputReplaceSkin").val();
      return encodeURI('' !== _0x1a25b2 && null !== _0x1a25b2 && undefined !== _0x1a25b2 && !isNaN(_0x1a25b2) ? _0x1a25b2 : 0x23);
    } catch (_0x3900c3) {
      return encodeURI(0x23);
    }
  },
  "aload": false,
  "aId": 0x0
};
var intervalID = null;
var isRunning = false;
var initialInterval = 0x37;
var cycleCounter = 0x1;
var isIncrementing = true;
let pixi = new Function("return PIXI;")();
let ungirotexture = pixi.Texture.from("https://i.imgur.com/12MgJyy.png");
let explotWtexture = pixi.Texture.from("https://i.imgur.com/DbWbUxD.png");
var keys = {
  "zoom": "z",
  "restart": "r",
  "giro": "s",
  "wormExplot": "x",
  "laserHS": "l",
  "sectores": "q",
  "background": "c",
  "noSkin": "f",
  "noAuras": "g"
};
function cambiarKey(_0x743305, _0x5e8313) {
  if (keys.hasOwnProperty(_0x743305)) {
    keys[_0x743305] = _0x5e8313;
  }
}
var lxpdupdatezoom;
var lxpdmultiplier;
var lxpdzoomtext;
var crearRegion2;
var lxpdservertext;
var lxpdlastserver;
var lxpdtoplist;
var lxpdBackground;
var ctxHeadshotLine;
var lxpdzoomplustexture;
var lxpdzoomsubtracttexture;
var lxpdgiroplustexture;
var lxpdgirosubtracttexture;
var lxpdexplotWubtracttexture;
var lxpdsettingsblockbadwords;
var lxpdselectedbackground;
var lxpdjoystick;
var lxpdmobilecontrol;
var lxpdmobilecontrol2;
var lxpdmobilecontroltextures;
var lxpdmobilepredictiontextures;
var lxpdmobileprediction;
var lxpdjoysticks;
var lxpdmobilearrowtexture;
(function () {
  var _0x151bc4 = function () {
    var _0x531094;
    try {
      _0x531094 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x678452) {
      _0x531094 = window;
    }
    return _0x531094;
  };
  var _0x215ee3 = _0x151bc4();
  _0x215ee3.setInterval(_0x4d22f4, 0x1);
})();
var lxpdmobilepeedtexture;
var lxpdmobilefullscreenstatus;
var lxpdmobilecheck;
lxpdmultiplier = 0x1;
window.onwheel = _0x37583a => {
  if (_0x37583a.deltaY > 0x0) {
    lxpdupdatezoom(Math.max(lxpdmultiplier - 0.75 * parseFloat(wormxt_Obj.zoomSpeed), 0.5));
  } else {
    lxpdupdatezoom(Math.min(lxpdmultiplier + 1.05 * parseFloat(wormxt_Obj.zoomSpeed), 0x32));
  }
};
var lxpdmobilecheck = function () {
  var _0x2c0ae4 = new Function("return RegExp;")();
  return new _0x2c0ae4("iPhone|iPad|iPod|Android", "i").test(navigator.userAgent);
};
var lxpdupdatezoom = function (_0x5836e3) {
  lxpdmultiplier = _0x5836e3;
  var _0x1853b0 = parseFloat(lxpdmultiplier.toFixed(0x2));
  if (Math.abs(_0x1853b0) < 0.01) {
    _0x1853b0 = 0x0;
  } else if (Math.abs(_0x1853b0 - 0x1) < 0.01) {
    _0x1853b0 = 0x1;
  }
  lxpdzoomtext.text = _0x1853b0 + "x";
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var isPlaying = false;
window.keyMove = 0x51;
var theoEvents = {
  "eventoPrincipal": null,
  "joystick": {
    "positionMode": "L",
    "checked": true,
    "size": 0x5a,
    "mode": "dynamic",
    "position": {
      "left": "110px",
      "bottom": "110px"
    },
    "color": "#222",
    "pxy": 0x6e
  }
};
var idiomaActual = window.location.href.includes("/es") ? "es" : window.location.href.includes("/uk") ? "uk" : "en";
var theoKzObjects = {
  "FB_UserID": '',
  "smoothCamera": 0.5,
  "eat_animation": 0.0025,
  "PortionSize": localStorage.PotenciadorSize || 0x2,
  "PortionAura": localStorage.PotenciadorAura || 1.2,
  "PortionTransparent": 0.8,
  "FoodTransparent": 0.3,
  "showTeamList": true,
  "top8": true,
  "killFeed": false,
  "noAuras": true,
  "noSkin": true,
  "KeyCodeRespawn": localStorage.KeyRespawn || 0x52,
  "KeyCodeAutoMov": localStorage.KeyAutoMov || window.keyMove,
  "AbilityZ": false,
  "dead": false,
  "FoodShadow": localStorage.ComidaShadow || 0x2,
  "FoodSize": localStorage.ComidaSize || 0x2,
  "headshot": 0x0,
  "idReplaceSkin": 0x23,
  "visibleSkin": [],
  "pL": [],
  "gamePad": theoEvents.joystick,
  "mobile": false,
  "loading": false,
  "kill": 0x0,
  "totalKills": 0x0,
  "totalHeadshots": 0x0,
  "adblock": false,
  "CLIENTE_ADMIN": 0x1,
  "CLIENTE_ACTIVO": 0x3,
  "CLIENTE_INACTIVO": 0x4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && "null" !== saveGameLocal) {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) theoKzObjects[e] = t[e];
}
theoKzObjects.loading = true;
var zwormData = {
  "id_user": '',
  "nickname": "zworm",
  "enemyNameHs": "zworm",
  "teamCode": '',
  "playerX": 0x0,
  "playerY": 0x0,
  "hs": 0x0,
  "kill": 0x0,
  "message": '',
  "teamColor": "0xffffff",
  "wssServer": ''
};
const socket = new WebSocket("wss://zworm.xyz:9800");
const gameState = {
  "players": new Map()
};
socket.addEventListener("open", _0x4fd7e3 => {
  console.log("Conectado al servidor WebSocket");
});
socket.addEventListener("message", async _0x3722d0 => {
  if (_0x3722d0.data instanceof Blob) {
    const _0x219f70 = await _0x3722d0.data.text();
    try {
      const _0x8b532d = JSON.parse(_0x219f70);
      handleMessage(_0x8b532d);
    } catch (_0x4aede8) {
      console.error("Error al parsear el mensaje:", _0x4aede8);
    }
  } else {
    try {
      const _0xf89ca9 = JSON.parse(_0x3722d0.data);
      handleMessage(_0xf89ca9);
    } catch (_0xa40637) {
      console.error("Error al parsear el mensaje:", _0xa40637);
    }
  }
});
socket.addEventListener("close", _0x214d5d => {
  console.log("Desconectado del servidor WebSocket");
});
function handleMessage(_0xaf16be) {
  if (_0xaf16be.id_user === "gg_107164783301809303612" || _0xaf16be.id_user === "gg_107696732696574095850" || _0xaf16be.id_user === "gg_110413852592088957484") {
    createServerMessage("[Zworm OWNER]", _0xaf16be.message);
    console.log("Servidor " + _0xaf16be.id_user + " ha enviado un mensaje a todos los jugadores: " + _0xaf16be.message);
  }
  if (_0xaf16be.wssServer !== '') {
    return;
  }
  switch (_0xaf16be.type) {
    case "initialState":
      handleInitialState(_0xaf16be.players);
      break;
    case "playerUpdate":
      updatePlayer(_0xaf16be);
      updateTop8Hs();
      if (_0xaf16be.teamCode !== '' && _0xaf16be.teamCode === '') {
        createTeamUbication(_0xaf16be.teamCode, _0xaf16be.teamColor);
        createTeamMessage(_0xaf16be.teamCode, _0xaf16be.nickname, _0xaf16be.message);
        console.log("Jugador " + _0xaf16be.id_user + " tiene teamCode, se crea la ubicaci�n del equipo");
      } else {}
      break;
    case "hsKillUpdate":
      updatePlayerHSKill(_0xaf16be);
      updateTop8Hs();
      console.log("Actualizaci�n de HS/Kill recibida: Jugador " + _0xaf16be.id_user + " - HS: " + _0xaf16be.hskill.hs + ", Kills: " + _0xaf16be.hskill.kill);
      break;
    case "playerDeath":
      updatePlayerDeath(_0xaf16be);
      break;
    case "playerDisconnect":
      removePlayer(_0xaf16be.id);
      console.log("Jugador " + _0xaf16be.id + " se ha desconectado");
      break;
    default:
      console.log("Mensaje desconocido:", _0xaf16be);
  }
}
function handleInitialState(_0x13605e) {
  _0x13605e.forEach(_0x40185c => {
    gameState.players.set(_0x40185c.id_user, _0x40185c);
  });
  console.log("Estado inicial recibido:", _0x13605e);
}
function updatePlayerDeath(_0x21700b) {
  if (gameState.players.has(_0x21700b.id_user)) {
    gameState.players["delete"](_0x21700b.id_user);
    console.log("Jugador " + _0x21700b.id_user + " eliminado del juego.");
    console.log("El jugador " + _0x21700b.nickname + " ha muerto.");
  }
  updateTop8Hs();
  clearTeamUbication();
}
function updatePlayer(_0x2fd9b9) {
  gameState.players.set(_0x2fd9b9.id_user, {
    "id": _0x2fd9b9.id,
    "id_user": _0x2fd9b9.id_user,
    "nickname": _0x2fd9b9.nickname,
    "enemyNameHs": _0x2fd9b9.enemyNameHs,
    "position": _0x2fd9b9.position,
    "hskill": _0x2fd9b9.hskill,
    "message": _0x2fd9b9.message,
    "teamCode": _0x2fd9b9.teamCode,
    "teamColor": _0x2fd9b9.teamColor,
    "wssServer": _0x2fd9b9.wssServer
  });
}
function updatePlayerHSKill(_0x4f47a1) {
  const _0xbd58c4 = gameState.players.get(_0x4f47a1.id_user);
  if (_0xbd58c4) {
    _0xbd58c4.hskill = _0x4f47a1.hskill;
  } else {
    gameState.players.set(_0x4f47a1.id_user, {
      "id": _0x4f47a1.id,
      "id_user": _0x4f47a1.id_user,
      "nickname": _0x4f47a1.nickname,
      "enemyNameHs": _0x4f47a1.enemyNameHs,
      "position": {
        "x": 0x0,
        "y": 0x0
      },
      "hskill": _0x4f47a1.hskill,
      "teamCode": _0x4f47a1.teamCode,
      "teamColor": _0x4f47a1.teamColor,
      "wssServer": _0x4f47a1.wssServer
    });
  }
}
function removePlayer(_0x8b13d9) {
  gameState.players["delete"](_0x8b13d9);
}
function updateGameView() {
  console.log("Estado actual del juego:");
  gameState.players.forEach((_0x156369, _0x18c5f7) => {
    console.log("Jugador " + _0x156369.id_user + ":");
    console.log("  Name: " + _0x156369.nickname);
    console.log("  teamColor: " + _0x156369.teamColor);
    console.log("  Posici�n: (" + (_0x156369.position?.["x"] || 0x0) + ", " + (_0x156369.position?.["y"] || 0x0) + ")");
    console.log("  HS: " + (_0x156369.hskill?.["hs"] || 0x0) + ", Kills: " + (_0x156369.hskill?.["kill"] || 0x0));
  });
}
function sendPlayerUpdate(_0x1d511b, _0x385992) {
  const _0x351162 = {
    "type": "playerUpdate",
    "id_user": '',
    "nickname": "zworm",
    "enemyNameHs": "zworm",
    "hskill": {
      "hs": 0x0,
      "kill": 0x0
    },
    "position": {
      "x": _0x1d511b,
      "y": _0x385992
    },
    "message": '',
    "teamCode": '',
    "teamColor": "0xffffff",
    "wssServer": ''
  };
  socket.send(JSON.stringify(_0x351162));
  console.log("Enviando actualizaci�n de posici�n: Jugador  se movi� a (" + _0x1d511b + ", " + _0x385992 + ")");
}
function sendPlayerDeath(_0x45f902, _0x81234c) {
  const _0xcce378 = {
    "type": "playerDeath",
    "id_user": '',
    "nickname": "zworm",
    "enemyNameHs": "zworm",
    "hskill": {
      "hs": _0x45f902,
      "kill": _0x81234c
    },
    "position": {
      "x": 0x0,
      "y": 0x0
    },
    "message": '',
    "teamCode": '',
    "teamColor": "0xffffff",
    "wssServer": ''
  };
  socket.send(JSON.stringify(_0xcce378));
  console.log("Enviando actualizaci�n del: Jugador  - murio");
}
function sendHSKillUpdate(_0x3ac926, _0x48c5d5) {
  const _0x14722f = {
    "type": "hsKillUpdate",
    "id_user": '',
    "nickname": "zworm",
    "enemyNameHs": "zworm",
    "hskill": {
      "hs": _0x3ac926,
      "kill": _0x48c5d5
    },
    "teamCode": '',
    "teamColor": "0xffffff",
    "wssServer": ''
  };
  socket.send(JSON.stringify(_0x14722f));
  console.log("Enviando actualizaci�n de HS/Kill: Jugador  - HS: " + _0x3ac926 + ", Kills: " + _0x48c5d5);
}
let clientes = {
  "clientesVencidos": [],
  "clientesActivos": []
};
let clientsSkins = {
  "clientsSkinsVencidos": [],
  "clientsSkinsActivos": []
};
var TIME = new Date().getTime();
async function loadUsers() {
  await fetch("https://zwormextenstion.com/wormExtension/api/clients.php?v=" + TIME).then(_0x535ed7 => _0x535ed7.json()).then(_0x119181 => {
    console.log(_0x119181);
    if (_0x119181.success) {
      let _0x31bdf2 = _0x119181.Users;
      clientes.clientesActivos = _0x31bdf2.filter(_0x24e0f7 => {
        return _0x24e0f7.client_ID;
      });
    } else {
      clientes = {
        "clientesVencidos": [],
        "clientesActivos": []
      };
      alert("An error occurred while loading clients");
    }
  });
}
loadUsers();
async function loadSkinUnlock() {
  await fetch("https://zwormextenstion.com/wormExtension/api/skinsActived.php?v=" + TIME).then(_0x156091 => _0x156091.json()).then(_0xa55ed7 => {
    console.log(_0xa55ed7);
    if (_0xa55ed7.success) {
      let _0x337ff2 = _0xa55ed7.Users;
      clientsSkins.clientsSkinsActivos = _0x337ff2.filter(_0x5f3a0b => {
        return _0x5f3a0b.client_ID;
      });
    } else {
      clientsSkins = {
        "clientsSkinsVencidos": [],
        "clientsSkinsActivos": []
      };
      alert("An error occurred while loading clients");
    }
  });
}
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
  await fetch("https://zwormextenstion.com/wormExtension/api/serversTimMap.php").then(_0x26a149 => _0x26a149.text()).then(_0xb2e2f9 => {
    var _0x26849d = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    var _0x482849 = _0xb2e2f9.matchAll(_0x26849d);
    var _0x202328 = [..._0x482849].map(_0xa92538 => _0xa92538[0x1]);
    for (let _0x193171 = 0x0; _0x193171 < _0x202328.length; _0x193171++) {
      let _0x152fd0 = _0x202328[_0x193171];
      let _0xb452ce = null;
      let _0x4e0929 = null;
      var _0xb618f0 = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/;
      var _0x126e58 = _0x152fd0.match(_0xb618f0);
      if (_0x126e58) {
        var _0x36abbd = _0x126e58[0x1];
        var _0x523f01 = _0x126e58[0x2];
        var _0x2a54b1 = _0x126e58[0x3];
        var _0x1c78e8 = _0x126e58[0x4];
        var _0x51e545 = decodeUnicode(_0x1c78e8);
        var _0x140dd0 = /<a href=\\"(https:.*?)\\"/;
        var _0x2e5383 = _0x152fd0.match(_0x140dd0);
        if (_0x2e5383) {
          _0xb452ce = _0x2e5383[0x1];
        }
        var _0x357254 = /<img src=\\"(.*?)\\"/;
        var _0x36d186 = _0x152fd0.match(_0x357254);
        if (_0x36d186) {
          _0x4e0929 = _0x36d186[0x1];
        }
        serverDataTimMap.push({
          "serverNameAndOpen": _0x36abbd,
          "dataRoom": _0x523f01,
          "dataCon": _0x2a54b1,
          "serverName": _0x51e545,
          "secondHref": _0xb452ce,
          "imgSrc": _0x4e0929
        });
      }
    }
  })["catch"](_0x5260ca => {
    console.log(_0x5260ca);
  });
}
let serverData = [];
async function loadServersWormWorld() {
  await fetch("https://zwormextenstion.com/wormExtension/api/servers.php").then(_0x2c1398 => _0x2c1398.text()).then(_0x92f20f => {
    const _0xc92c26 = new DOMParser();
    const _0x3df444 = _0xc92c26.parseFromString(_0x92f20f, "text/html");
    const _0x5e0f01 = _0x3df444.querySelectorAll("div[id*=\"wwc_room_item_\"]");
    console.log(_0x5e0f01);
    _0x5e0f01.forEach(_0x417e24 => {
      const _0x4c5cad = _0x417e24.querySelector(".dropdown-item.selecionar-sala-v2");
      const _0x5539ca = _0x4c5cad.getAttribute("data-con");
      const _0x4f381c = _0x4c5cad.getAttribute("data-room");
      const _0x3b135b = _0x417e24.textContent.trim();
      const _0x177e3e = _0x4c5cad.getAttribute("data-type");
      const _0x143e1f = _0x417e24.querySelector("img");
      const _0x86d4e0 = _0x143e1f ? _0x143e1f.getAttribute("src") : null;
      serverData.push({
        "dataCon": _0x5539ca,
        "dataRoom": _0x4f381c,
        "serverName": _0x3b135b,
        "dataType": _0x177e3e,
        "imgSrc": _0x86d4e0
      });
    });
    console.log(serverData);
  })["catch"](_0xca178d => {
    console.log(_0xca178d);
  });
}
async function registerUpdatePlayer(_0x559f0e) {
  await fetch("https://swykz.theoxt.com/api/users/register_update_player.php", {
    "method": "POST",
    "body": JSON.stringify({
      "data": _0x559f0e
    })
  }).then(_0x1c59d9 => _0x1c59d9.json()).then(_0x47565b => {
    console.log(_0x47565b);
  });
}
async function checkSubscriptionExpired(_0x4be9e4) {
  await fetch("https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php", {
    "method": "POST",
    "body": JSON.stringify({
      "code": _0x4be9e4
    })
  }).then(_0x71d16 => _0x71d16.json()).then(_0x4fa111 => {
    console.log(_0x4fa111);
  });
}
function fetchCustomLogo(_0x31551c) {
  $.ajax({
    "url": "https://swykz.theoxt.com/api/streming.php",
    "method": "GET",
    "dataType": "json",
    "success": function (_0x1ed236) {
      var _0x51916c = _0x1ed236.allstreamers.streamers.filter(function (_0x2b5c0e) {
        return _0x2b5c0e.id_game === _0x31551c;
      });
      if (_0x51916c.length === 0x0) {
        console.log("No hay streamers online.");
        return;
      }
      var _0xe243d7 = _0x51916c[0x0];
      $(".mm-logo").attr("src", _0xe243d7.logo);
      $(".loading-logo").attr("src", _0xe243d7.logo);
      $(".logo-server").attr("src", _0xe243d7.logo);
    },
    "error": function (_0x1bb0b2) {
      console.error("Error al obtener los datos:", _0x1bb0b2);
    }
  });
}
loadServersWormWorld();
loadServersTimMap();
function obtenerImagenPorSeleccion(_0x2242b6) {
  let _0xf76322 = '';
  switch (_0x2242b6) {
    case "0":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bkgnd0.png";
      break;
    case "1":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bkgnd8.png";
      break;
    case "2":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bkgnd9.png";
      break;
    case "3":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bkgnd10.png";
      break;
    case "4":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bkgnd6.png";
      break;
    case "5":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bkgnd11.png";
      break;
    case "6":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bg_sky_1.png";
      break;
    case "7":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bg_sky_2.png";
      break;
    case "8":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bg_sky_3.png";
      break;
    case "9":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bg_sky_4.png";
      break;
    case "10":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/bg_sky_5.png";
      break;
    case "11":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/arena01.png";
      break;
    case "12":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/arena02.png";
      break;
    case "13":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/arena03.png";
      break;
    case "14":
      _0xf76322 = "https://asserts.wormworld.io/backgrounds/arena04.png";
      break;
    default:
      console.warn("Valor no v�lido, se utilizar� una imagen por defecto.");
  }
  return _0xf76322;
}
function startInterval() {
  clearInterval(intervalID);
  if (intervalID === null) {
    intervalID = setInterval(function () {
      var _0x33c087 = anApp.s.H.sk;
      let _0x48ee61 = Math.PI;
      var _0xa10afa = _0x33c087 + _0x48ee61 / 0x168 * 0x9;
      if (_0xa10afa >= _0x48ee61) {
        _0xa10afa = -_0x33c087;
      }
      anApp.s.H.sk = _0xa10afa;
    }, 0x37);
  }
}
function adjustInterval() {
  if (cycleCounter >= 0x28) {
    if (isIncrementing) {
      initialInterval += 0x19;
    } else {
      initialInterval -= 0x64;
    }
    cycleCounter = 0x1;
  }
}
function controlIntervalAdjustment() {
  if (initialInterval === 0x37 && cycleCounter >= 0x28) {
    initialInterval += 0x19;
    cycleCounter = 0x1;
    isIncrementing = true;
  }
  if (initialInterval === 0x50) {
    adjustInterval();
  }
  if (initialInterval === 0x69) {
    adjustInterval();
  }
  if (initialInterval === 0x82) {
    adjustInterval();
  }
  if (initialInterval === 0x9b) {
    adjustInterval();
  }
  if (initialInterval === 0xb4) {
    adjustInterval();
  }
  if (initialInterval === 0xcd) {
    adjustInterval();
  }
  if (initialInterval === 0xe6) {
    adjustInterval();
  }
  if (initialInterval === 0xff) {
    adjustInterval();
  }
  if (initialInterval === 0x118) {
    adjustInterval();
  }
  if (initialInterval === 0x131) {
    adjustInterval();
  }
  if (initialInterval === 0x14a) {
    adjustInterval();
  }
  if (initialInterval === 0x163) {
    adjustInterval();
  }
  if (initialInterval === 0x17c) {
    adjustInterval();
  }
  if (initialInterval === 0x195) {
    adjustInterval();
  }
  if (initialInterval === 0x1ae) {
    adjustInterval();
  }
  if (initialInterval === 0x1c7 && cycleCounter >= 0x28) {
    initialInterval -= 0x64;
    cycleCounter = 0x1;
    isIncrementing = false;
  }
}
function manageIntervalCycle() {
  clearInterval(intervalID);
  if (intervalID === null) {
    let _0x2a5c4f = anApp.s.H.sk;
    let _0x48f237 = Math.PI;
    let _0xee740 = _0x2a5c4f + _0x48f237 / 0x168 * 0x9;
    if (_0xee740 >= _0x48f237) {
      _0xee740 = -_0x2a5c4f;
    }
    anApp.s.H.sk = _0xee740;
    cycleCounter += 0x1;
    controlIntervalAdjustment();
    if (isRunning) {
      intervalID = setInterval(manageIntervalCycle, initialInterval);
    }
  }
}
function starAutoCircle() {
  isRunning = true;
  initialInterval = 0x37;
  cycleCounter = 0x1;
  isIncrementing = true;
  manageIntervalCycle();
}
const wormxt_5dlrs_Obj = {
  "visiblePowersAll": false,
  "speed_zigzag": true
};
var wormxt_Obj = {
  "zoomSpeed": localStorage.getItem("zoomSpeed") || 0x1,
  "PotenciadorSize": localStorage.getItem("PotenciadorSize") || 0x2,
  "PotenciadorAura": localStorage.getItem("PotenciadorAura") || 1.2,
  "ComidaShadow": localStorage.getItem("ComidaShadow") || 0x2,
  "ComidaSize": localStorage.getItem("ComidaSize") || 0x2,
  "laserColor": "FFFFFF",
  "colorFondo": "0D0400",
  "colorBorde": "FF0000",
  "laserHS": false,
  "spawnInfinity": false,
  "backgroundSolid": false,
  "sectores": false,
  "CLIENTE_ADMIN": 0x1,
  "CLIENTE_ACTIVO": 0x3,
  "CLIENTE_INACTIVO": 0x4
};
const showVersionPays = async function (_0xfdbdd) {
  var _0x4f48ba = clientes.clientesActivos.find(function (_0x49ede4) {
    return _0x49ede4.client_ID === _0xfdbdd.user_data.userId;
  });
  if (_0x4f48ba) {
    console.log("El ID " + _0xfdbdd.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    const _0x7cf1a6 = new Date();
    const _0x3785cd = new Date(_0x4f48ba.client_DateExpired);
    if (_0x7cf1a6 > _0x3785cd) {
      console.log("La fecha de expiraci�n ha vencido.");
    } else {
      console.log("La fecha de expiraci�n es v�lida.");
      settings5dolars(_0x4f48ba.client_DateExpired);
    }
  } else {
    console.log("El ID generado no coincide con ning�n ID almacenado en la base de datos.");
  }
};
function setSectorsGame() {
  lxpdBackground.removeChildren();
  lxpdBackground.clear();
  lxpdBackground.removeChildren();
  lxpdBackground.clear();
  lxpdBackground.lineStyle(0x1, 0xff0000, 0x1);
  lxpdBackground.drawCircle(0x0, 0x0, 0x1f4);
  lxpdBackground.endFill();
}
function decodeUnicode(_0x17fa51) {
  return _0x17fa51.replace(/\\u[\dA-F]{4}/gi, function (_0x118462) {
    return String.fromCharCode(parseInt(_0x118462.replace(/\\u/, ''), 0x10));
  }).replace(/\\u[0-9A-F]{2}/g, function (_0x42fcde) {
    return String.fromCharCode(parseInt(_0x42fcde.replace(/\\u/, ''), 0x10));
  });
}
const settings5dolars = async function (_0x4f7102) {
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $("#user_config").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("position", "absolute").css("display", "block");
    giroActive = false;
    toggleGiro();
  });
  let _0x275d3f = localStorage.getItem("showTeamList");
  let _0x5b64ff;
  if (_0x275d3f === "true") {
    _0x5b64ff = true;
    theoKzObjects.showTeamList = true;
  } else if (_0x275d3f === "false") {
    _0x5b64ff = false;
    theoKzObjects.showTeamList = false;
  } else {
    _0x5b64ff = true;
  }
  $("#user_config").after("\n        <div id=\"settings-container2\">\n            <button id=\"clossed_Setings\">X</button>\n            <div class=\"label\" id=\"titleSetings\">Settings</div>\n            <div class=\"display_setting\">\n                \n                <div class=\"container\">\n                <span class=\"names_settings\" id=\"zoomVelocidad\"> " + lenguaje[idiomaActual].zoomVelocidad + "</span>\n                    <input id=\"zoomSpeed\" class=\"range\" type=\"range\" min=\"0.1\" max=\"5\" value=\"" + wormxt_Obj.zoomSpeed + "\" step=\"0.1\" oninput=\"zoomSpeedvalue.value=value\" />\n                    <output id=\"zoomSpeedvalue\">" + wormxt_Obj.zoomSpeed + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\" id=\"anchoPotenciador\" > " + lenguaje[idiomaActual].anchoPotenciador + "</span>\n                    <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"" + wormxt_Obj.PotenciadorSize + "\" step=\"1\" oninput=\"rangevalue1.value=value\" />\n                    <output id=\"rangevalue1\">" + wormxt_Obj.PotenciadorSize + "</output>\n                </div>\n                <div class=\"container\">\n                <span class=\"names_settings\" id=\"auraPotenciador\"> " + lenguaje[idiomaActual].auraPotenciador + "</span>\n                    <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"" + wormxt_Obj.PotenciadorAura + "\" step=\"0.2\" oninput=\"PortionAuravalue.value=value\" />\n                    <output id=\"PortionAuravalue\">" + wormxt_Obj.PotenciadorAura + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\" id=\"anchoComida\"> " + lenguaje[idiomaActual].anchoComida + "</span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + wormxt_Obj.ComidaSize + "\" step=\"0.5\" oninput=\"rangevalue2.value=value\" />\n                    <output id=\"rangevalue2\">" + wormxt_Obj.ComidaSize + "</output>\n                </div>\n                <div class=\"container\">\n                <span class=\"names_settings\" id=\"brilloComida\"> " + lenguaje[idiomaActual].brilloComida + "</span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + wormxt_Obj.ComidaShadow + "\" step=\"0.5\" oninput=\"FoodShadowvalue.value=value\" />\n                    <output id=\"FoodShadowvalue\">" + wormxt_Obj.ComidaShadow + "</output>\n                </div>\n                <div class=\"settings-checkbox\">\n                    <input type=\"checkbox\" id=\"settings-backgroundSolid-switch\">\n                    <span class=\"names_settings\" id=\"fondo\"> " + lenguaje[idiomaActual].fondo + "</span>\n                </div>\n                <div class=\"settings-checkbox\">\n                    <input type=\"checkbox\" id=\"showTeamList\" " + (_0x5b64ff ? "checked" : '') + ">\n                    <span class=\"names_settings\" id=\"\"> Show Friend list</span>\n                </div>\n                <div id=\"settings5dolars\"></div>\n            </div>\n        </div>\n    ");
  $("#settings-backgroundSolid-switch").prop("checked", false);
  $("#settings-backgroundSolid-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.backgroundSolid = true;
      setSectorsGame();
    } else {
      wormxt_Obj.backgroundSolid = false;
      setSectorsGame();
    }
  });
  $("#showTeamList").on("change", function () {
    theoKzObjects.showTeamList = $(this).is(":checked");
    localStorage.setItem("showTeamList", true);
    console.log("Mostrar lista de amigos:", true);
  });
  $("#clossed_Setings").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    giroActive = true;
    toggleGiro();
  });
  function _0x1ff253(_0x3ced77, _0x15b781, _0x4d2133) {
    $(_0x3ced77).on("input", function () {
      wormxt_Obj[_0x15b781] = $(this).val();
      localStorage.setItem(_0x4d2133, $(this).val());
      console.log("Valor guardado en localStorage:", localStorage.getItem(_0x4d2133));
    });
  }
  _0x1ff253("#zoomSpeed", "zoomSpeed", "zoomSpeed");
  _0x1ff253("#PortionSize", "PotenciadorSize", "PotenciadorSize");
  _0x1ff253("#PortionAura", "PotenciadorAura", "PotenciadorAura");
  _0x1ff253("#FoodSize", "ComidaSize", "ComidaSize");
  _0x1ff253("#FoodShadow", "ComidaShadow", "ComidaShadow");
  let _0x53bd3b = $("<div class=\"icon-selector\"></div>");
  for (let _0x112ea8 = 0x1; _0x112ea8 < 0x2a; _0x112ea8++) {
    const _0x33525a = "https://deltav4.gitlab.io/v7/assets/cursors/cursor_" + _0x112ea8.toString().padStart(0x2, "0") + ".cur";
    const _0x3383d3 = _0x112ea8 === 0x1 ? "active" : '';
    const _0x49d682 = $("<img>").attr({
      "src": _0x33525a
    });
    const _0x1da618 = $("<div>").addClass("cursor-box icon-selector__item").addClass(_0x3383d3).append(_0x49d682);
    _0x53bd3b.append(_0x1da618);
  }
  $("#premium-panel").replaceWith("premiun version on");
  $("#loa831pibur0w4gv .label").text("Zworm Hotkeys");
  $("#user-section").after("\n                        <div id=\"hotkeys-section\" class=\"settings-section\" style=\"display:none\">\n                            <div class=\"settings-line\" id=\"key-settings\">\n                            <label for=\"zoom-key\">Zoom:</label>\n                            <input type=\"text\" id=\"zoom-key\" class=\"key-input\"><br>\n                            <label for=\"restart-key\">Replay:</label>\n                            <input type=\"text\" id=\"restart-key\" class=\"key-input\"><br>\n                            <label for=\"wormExplot-key\">Explote:</label>\n                            <input type=\"text\" id=\"wormExplot-key\" class=\"key-input\"><br>\n                            <label for=\"laserHSkey-key\">LaserHS:</label>\n                            <input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\"><br>\n                            <label for=\"sectores-key\">Sectors:</label>\n                            <input type=\"text\" id=\"sectores-key\" class=\"key-input\"><br>\n                            <label for=\"background-key\">Background:</label>\n                            <input type=\"text\" id=\"background-key\" class=\"key-input\"><br>\n                            <label for=\"giro-key\">Giro:</label>\n                            <input type=\"text\" id=\"giro-key\" class=\"key-input\"><br>\n\n                            <label for=\"noSkin-key\">No Skins:</label>\n                            <input type=\"text\" id=\"noSkin-key\" class=\"key-input\"><br>\n                            <label for=\"noAuras-key\">No Auras:</label>\n                            <input type=\"text\" id=\"noAuras-key\" class=\"key-input\"><br>\n                            </div>\n                        </div>");
  $("#zoom-key").val("z");
  $("#restart-key").val("r");
  $("#laserHSkey-key").val("l");
  $("#wormExplot-key").val("x");
  $("#giro-key").val("s");
  $("#noSkin-key").val("f");
  $("#noAuras-key").val("g");
  $("#sectores-key").val("q");
  $("#background-key").val("c");
  $("#hotkeys-icon").on("click", function () {
    $("#hotkeys-icon").addClass("active");
    $("#user-icon").removeClass("active");
    $("#hotkeys-section").toggle();
    $("#user-section").hide();
  });
  $(".key-input").keydown(function (_0x36ba2e) {
    _0x36ba2e.stopPropagation();
  });
  $(".key-input").keypress(function (_0xdc785e) {
    _0xdc785e.preventDefault();
    var _0x3ac792 = _0xdc785e.key.toLowerCase();
    $(this).val(_0x3ac792);
    var _0x38d7f6 = $(this).attr("id");
    switch (_0x38d7f6) {
      case "zoom-key":
        cambiarKey("zoom", _0x3ac792);
        break;
      case "restart-key":
        cambiarKey("restart", _0x3ac792);
        break;
      case "wormExplot-key":
        cambiarKey("wormExplot", _0x3ac792);
        break;
      case "laserHSkey-key":
        cambiarKey("laserHS", _0x3ac792);
        break;
      case "giro-key":
        cambiarKey("giro", _0x3ac792);
        break;
      case "noSkin-key":
        cambiarKey("noSkin", _0x3ac792);
        break;
      case "noAuras-key":
        cambiarKey("noAuras", _0x3ac792);
        break;
      case "sectores-key":
        cambiarKey("sectores", _0x3ac792);
        break;
      case "background-key":
        cambiarKey("background", _0x3ac792);
        break;
    }
    $(this).blur();
  });
  $("#user-section").append(_0x53bd3b);
  $(".cursor-box").on("click", function () {
    var _0x466e39 = $(this).find("img").attr("src");
    $("body").css("cursor", "url(" + _0x466e39 + "), auto");
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
  });
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>EXP: " + _0x4f7102 + "</span>");
  $("#wtr-settings-version").after("\n        <a href=\"https://www.myinstants.com/en/index/us/\" target=\"_blank\">1: " + lenguaje[idiomaActual].soundTuto1 + "</a>\n        <br>\n        <a href=\"https://catbox.moe/\" target=\"_blank\">2: " + lenguaje[idiomaActual].soundTuto2 + "</a>\n        <br>\n        <label for=\"sound-hs\">" + lenguaje[idiomaActual].soundTuto3 + ": </label>\n        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\"><br>\n        <label for=\"sound-hs\">" + lenguaje[idiomaActual].soundTuto4 + ": </label>\n        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\"><br>\n    ");
  $("#sound-hs").val("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  $("#sound-10hs").val("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  lxpdhssound = new Audio($("#sound-hs").val());
  lxpdlaughsound = new Audio($("#sound-10hs").val());
  $("#sound-hs").on("input", function () {
    lxpdhssound.src = $(this).val();
  });
  $("#sound-10hs").on("input", function () {
    lxpdlaughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\" id=\"laser\"> " + lenguaje[idiomaActual].laser + "</span>" + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-sectores-switch\">" + "<span class=\"names_settings\" id=\"sectores\"> " + lenguaje[idiomaActual].sectores + "</span>" + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-notAbilityAll-switch\">" + "<span class=\"names_settings\"> : Show All Power-Ups</span>" + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\">" + "<span class=\"names_settings\"> : Show Speed&Zigzag</span>" + "</div>" + "<div id=\"display_color\">" + "<div class=\"container\">" + "<input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\">" + "<span class=\"names_settings\"  id=\"colorJuego\" > " + lenguaje[idiomaActual].colorJuego + " </span>" + "</div>" + "<div class=\"container\">" + "<input id=\"color_palet\" type=\"color\" value=\"#00243E\">" + "<span class=\"names_settings\" id=\"colorLaser\"> " + lenguaje[idiomaActual].colorLaser + " </span>" + "</div>" + "<div class=\"container\">" + "<input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\">" + "<span class=\"names_settings\" id=\"colorBorde\"> " + lenguaje[idiomaActual].colorBorde + "</span>" + "</div>");
  const _0x34b901 = {
    "color_paletRGB": _0x39ba70 => wormxt_Obj.colorFondo = _0x39ba70,
    "color_palet": _0x50c16e => wormxt_Obj.laserColor = _0x50c16e,
    "color_palet2": _0x1055f1 => wormxt_Obj.colorBorde = _0x1055f1
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    const _0x5d2409 = $(this).attr("id");
    const _0x2ee633 = $(this).val().replace("#", '');
    setSectorsGame();
    console.log("Recibiendo el color reemplazado para " + _0x5d2409 + ": " + _0x2ee633);
    if (_0x34b901[_0x5d2409]) {
      _0x34b901[_0x5d2409](_0x2ee633);
    }
    setSectorsGame();
  });
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop("checked", false);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.visiblePowersAll = true;
    } else {
      wormxt_5dlrs_Obj.visiblePowersAll = false;
    }
  });
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#settings-Speed_ZigZag-switch").prop("checked", true);
  $("#settings-Speed_ZigZag-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.speed_zigzag = true;
    } else {
      wormxt_5dlrs_Obj.speed_zigzag = false;
    }
  });
  $("#settings-laserHS-switch").prop("checked", false);
  $("#settings-laserHS-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.laserHS = true;
    } else {
      wormxt_Obj.laserHS = false;
    }
  });
  $("#settings-interactive-switch").prop("checked", wormxt_Obj.interactive);
  $("#settings-interactive-switch").on("click", function () {
    if (this.checked) {
      lxpdexplotWubtracttexture.interactive = false;
    } else {}
  });
  $("#settings-sectores-switch").prop("checked", false);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.sectores = true;
      setSectorsGame();
    } else {
      wormxt_Obj.sectores = false;
      setSectorsGame();
    }
  });
};
var TIME = new Date().getTime();
var linkCSS = "https://zwormextenstion.com/wormExtension/css/style.css?v=" + TIME;
var unlockSkinsPrivate = async function (_0x3597ee) {
  var _0x2af05e = _0x3597ee.u.si.userId;
  var _0x5b88bc = clientsSkins.clientsSkinsActivos.find(_0x388b81 => _0x388b81.client_ID === _0x2af05e);
  if (_0x5b88bc && _0x5b88bc.Client_VisibleSkinPrivate) {
    console.log(_0x5b88bc);
    const _0x2412f1 = new Date();
    const _0x41b4c8 = new Date(_0x5b88bc.client_DateExpired);
    if (_0x2412f1 > _0x41b4c8) {
      console.log("La fecha de skins expiraci�n ha vencido.");
    } else {
      console.log("La fecha de skins expiraci�n es v�lida.");
      let _0xcdba87 = Array.isArray(_0x5b88bc.Client_VisibleSkinPrivate) ? _0x5b88bc.Client_VisibleSkinPrivate : [_0x5b88bc.Client_VisibleSkinPrivate];
      _0xcdba87.forEach(_0x4f0f24 => {
        let _0x3add0c = theoKzObjects.idSkin.find(_0x3a283e => _0x3a283e.id === _0x4f0f24);
        if (_0x3add0c) {
          _0x3add0c.nonbuyable = false;
        }
      });
      console.log("Skins privadas desbloqueadas para el usuario " + _0x2af05e + ":", _0xcdba87);
    }
  } else {
    console.log("No se encontraron skins privadas para el usuario " + _0x2af05e + ".");
  }
};
let giroActive = false;
function toggleGiro() {
  if (giroActive) {
    lxpdgirosubtracttexture.texture = ungirotexture;
    lxpdgirosubtracttexture.alpha = 0.25;
    console.log("Giro deactivated");
    isRunning = false;
    initialInterval = 0x37;
    cycleCounter = 0x1;
    isIncrementing = true;
    clearInterval(intervalID);
    intervalID = null;
  } else {
    lxpdgirosubtracttexture.alpha = 0.75;
    console.log("Giro activated");
    startInterval();
    isRunning = true;
  }
  giroActive = !giroActive;
}
const showServer2 = async function (_0x2e8039) {
  unlockSkinsPrivate(_0x2e8039);
  fetchCustomLogo(_0x2e8039.u.si.userId);
  zwormData.id_user = _0x2e8039.u.si.userId;
  loadStylesheet(linkCSS);
  loadStylesheet("https://fonts.googleapis.com/icon?family=Material+Icons");
  console.log(_0x2e8039, _0x2e8039.u.si.userId);
  lxpdhssound = new Audio("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  lxpdlaughsound = new Audio("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  lxpdexplotWubtracttexture = new pixi.Sprite();
  lxpdexplotWubtracttexture.texture = explotWtexture;
  lxpdexplotWubtracttexture.interactive = true;
  lxpdexplotWubtracttexture.buttonMode = true;
  lxpdexplotWubtracttexture.x = -0x2d;
  lxpdexplotWubtracttexture.y = 0xa;
  lxpdexplotWubtracttexture.alpha = 0.25;
  function _0x3d5278() {
    lxpdexplotWubtracttexture.interactive = false;
    var _0x127888 = 0x0;
    var _0x2cf1ac = setInterval(function () {
      var _0x2389b2 = 0x1 - 0.0075 * _0x127888;
      lxpdexplotWubtracttexture.alpha = _0x2389b2;
      _0x127888++;
      if (_0x127888 > 0x64) {
        clearInterval(_0x2cf1ac);
        lxpdexplotWubtracttexture.alpha = 0.25;
        lxpdexplotWubtracttexture.interactive = true;
      }
    }, 100);
  }
  lxpdexplotWubtracttexture.on("mouseup", function () {
    _0x3d5278();
    const _0x8fb7c5 = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(_0x8fb7c5);
    setTimeout(() => {
      let _0x16c3c7 = lxpdlastserver;
      $(".overlay-2").css("position", "static");
      if (_0x16c3c7) {
        anApp.r.Hd();
        anApp.sa(_0x16c3c7);
      }
    }, 0x3e8);
  });
  lxpdgirosubtracttexture = new pixi.Sprite();
  lxpdgirosubtracttexture.texture = ungirotexture;
  lxpdgirosubtracttexture.interactive = true;
  lxpdgirosubtracttexture.buttonMode = true;
  lxpdgirosubtracttexture.x = -0xa;
  lxpdgirosubtracttexture.y = 0xa;
  lxpdgirosubtracttexture.alpha = 0.25;
  lxpdgirosubtracttexture.on("mouseup", function () {
    toggleGiro();
  });
  if (lxpdmobilecheck()) {
    lxpdgirosubtracttexture.x = -0x5a;
    lxpdexplotWubtracttexture.x = -0x87;
    lxpdexplotWubtracttexture.y = 0xa;
    let _0x47aafb = new Function("return PIXI;")();
    let _0x33864b = _0x47aafb.Texture.from("https://i.imgur.com/kGjR9yf.png");
    let _0x2dace7 = _0x47aafb.Texture.from("https://i.imgur.com/4JZUa1u.png");
    lxpdzoomplustexture = new _0x47aafb.Sprite();
    lxpdzoomplustexture.texture = _0x33864b;
    lxpdzoomplustexture.interactive = true;
    lxpdzoomplustexture.buttonMode = true;
    lxpdzoomplustexture.x = -0xa;
    lxpdzoomplustexture.y = 0xa;
    lxpdzoomplustexture.alpha = 0.25;
    lxpdzoomplustexture.on("mouseup", function () {
      lxpdupdatezoom(Math.min(lxpdmultiplier + 0.25, 0x32));
    });
    lxpdzoomsubtracttexture = new _0x47aafb.Sprite();
    lxpdzoomsubtracttexture.texture = _0x2dace7;
    lxpdzoomsubtracttexture.interactive = true;
    lxpdzoomsubtracttexture.buttonMode = true;
    lxpdzoomsubtracttexture.x = -0x2b;
    lxpdzoomsubtracttexture.y = 0xa;
    lxpdzoomsubtracttexture.alpha = 0.25;
    lxpdzoomsubtracttexture.on("mouseup", function () {
      lxpdupdatezoom(Math.max(lxpdmultiplier - 0.25, 0.25));
    });
  }
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  var _0x17cf49 = function () {
    $("#chatInput").css("display", "none").val('');
    $("#game-canvas").focus();
  };
  var _0x4f3081 = function () {
    let _0x3f25e0 = $("#chatInput").val();
    if ($.trim(_0x3f25e0) !== '') {
      console.log("Mensaje enviado:", _0x3f25e0);
      zwormData.message = _0x3f25e0;
      setTimeout(() => {
        zwormData.message = '';
      }, 0x5dc);
    }
  };
  $("#chatInput").on("keydown", function (_0x5d7ad7) {
    if (_0x5d7ad7.key === "Enter") {
      _0x4f3081();
      _0x17cf49();
    } else if (_0x5d7ad7.key === "Escape") {
      _0x17cf49();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $("#mm-settings").html("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders").html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-wtr-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $("#mm-wtr-settings").after("<div id=\"mm-wtr-discord\"><i class=\"mdi--discord\"></i></div>");
  $("#mm-wtr-discord").on("click", function () {
    window.open("https://discord.gg/sJ5R95Rc6Z", "_blank");
  });
  $("#user-icon").on("click", function () {
    $("#user-icon").addClass("active");
    $("#hotkeys-icon").removeClass("active");
    $("#user-section").toggle();
    $("#hotkeys-section").hide();
  });
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $("#game-view").append("<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>");
  $("#aqnvgcpz05orkobh").replaceWith("\n    <div id=\"premium-panel\" style=\"box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px; background-color: transparent; border-radius: 8px; padding: 20px; text-align: center;\">\n        <h2 style=\"color: #fff;\">Get the Premium Version!</h2>\n        <p style=\"color: #f9f9f9;\">Access exclusive benefits by purchasing the premium version. Dedicated support, more options, and much more.</p>\n        <p style=\"color: #fff; font-weight: bold;\">Advertise with more visibility and reach more customers!</p>\n\n        <!-- Button to redirect to Discord -->\n        <button id=\"buy-premium\" style=\"background-color: #7289da; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;\">\n            Buy on Discord\n        </button>\n    </div>\n        ");
  $("#buy-premium").on("click", function () {
    window.open("https://discord.gg/sJ5R95Rc6Z", "_blank");
  });
  $("#social-buttons").replaceWith('');
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://i.imgur.com/25aIvwA.gif");
  $(".loading-logo").attr("src", "https://i.imgur.com/25aIvwA.gif");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #wtrplayagain, #final-replay").click(function () {
    $(".overlay-2").css("position", "static");
  });
  $("#mm-wtr-settings").click(function () {
    $("#settings-view").css("display", "none");
  });
  $("#mm-skin-next").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin");
    }, 0x64);
  });
  $("#mm-skin-prev").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 0x64);
  });
  const _0x573c1b = ["#mm-action-play", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-wtr-settings"];
  _0x573c1b.forEach(function (_0x386117) {
    $(_0x386117).hover(function () {
      $(this).css({
        "box-shadow": "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
      });
    }, function () {
      $(this).css({
        "box-shadow": "0 1px 1px 0 rgba(0,0,0,.5)"
      });
    });
  });
  $(".mm-merchant-cont").replaceWith('');
  $("#fullscreen").prepend("<i class=\"material-icons\">fullscreen</i>");
  $("#wtrplayagain").prepend("<i class=\"material-icons\">replay</i>");
  $(".description-text").replaceWith("<div class=\"description-text\">");
  $(".description-text").prepend("<img class=\"logo-server\" src=\"https://i.imgur.com/25aIvwA.gif\">");
  var _0x5358f0 = [{
    "code": "br",
    "name": "Peru"
  }, {
    "code": "mx",
    "name": "Mexico"
  }, {
    "code": "us",
    "name": "EEUU"
  }, {
    "code": "ca",
    "name": "Canada"
  }, {
    "code": "de",
    "name": "Germania"
  }, {
    "code": "fr",
    "name": "Francia"
  }, {
    "code": "sg",
    "name": "Singapur"
  }, {
    "code": "jp",
    "name": "Japon"
  }, {
    "code": "au",
    "name": "Australia"
  }, {
    "code": "gb",
    "name": "Granbretana"
  }];
  var _0x227f5d = $("<ul class=\"ui-tabs-nav\"></ul>");
  for (var _0x3bdc0b = 0x0; _0x3bdc0b < _0x5358f0.length; _0x3bdc0b++) {
    var _0x5967be = _0x5358f0[_0x3bdc0b];
    var _0x860e63 = "ui-tabs-tab ui-tab ui-tab-inactive" + _0x3bdc0b;
    var _0x5058a2 = $("<li class=\"" + _0x860e63 + "\" ><a><span class=\"flag " + _0x5967be.code + "\"></span></a></li>");
    _0x5058a2.attr("data-country-name", _0x5967be.name);
    _0x227f5d.append(_0x5058a2);
    _0x5058a2.click(function () {
      $(".ui-tab-active").removeClass("ui-tab-active");
      $(this).addClass("ui-tab-active");
    });
  }
  $(".logo-server").after(_0x227f5d);
  $(".ui-tab-inactive0").addClass("ui-tab-active");
  _0x227f5d.after("<div class=\"servers-container\"><div class=\"servers-peru\"></div><div class=\"servers-mexico\" style=\"display: none;\"></div><div class=\"servers-eeuu\" style=\"display: none;\"></div><div class=\"servers-canada\" style=\"display: none;\"></div><div class=\"servers-germania\" style=\"display: none;\"></div><div class=\"servers-francia\" style=\"display: none;\"></div><div class=\"servers-singapur\" style=\"display: none;\"></div><div class=\"servers-japon\" style=\"display: none;\"></div><div class=\"servers-australia\" style=\"display: none;\"></div><div class=\"servers-granbretana\" style=\"display: none;\"></div>");
  $(".ui-tab").on("click", account);
  for (var _0x2e459d = 0x0; _0x2e459d < serverData.length; _0x2e459d++) {
    var _0x457f60 = serverData[_0x2e459d].dataCon;
    var _0x6ad56c = serverData[_0x2e459d].dataRoom;
    var _0x15a513 = serverData[_0x2e459d].serverName;
    var _0x46bc9a = serverData[_0x2e459d].imgSrc;
    let _0xce4a04 = "<a>\n                        <img src=\"" + _0x46bc9a + "\"    style=\" width: 30px;\">\n                    </a>";
    let _0x5d06b0 = _0x6ad56c.match(/[a-zA-Z]+/g).join('');
    let _0x6c383b = document.createElement("p");
    _0x6c383b.innerHTML = _0x15a513;
    let _0x307e5e = document.createElement("div");
    _0x307e5e.setAttribute("class", "conteiner");
    if (_0x5d06b0 == "br") {
      $(".servers-peru").append(_0x307e5e);
      $(_0x307e5e).append(_0x6c383b);
      $(_0x6c383b).after(_0xce4a04);
    } else {
      if (_0x5d06b0 == "mx") {
        $(".servers-mexico").append(_0x307e5e);
        $(_0x307e5e).append(_0x6c383b);
        $(_0x6c383b).after(_0xce4a04);
      } else {
        if (_0x5d06b0 == "us") {
          $(".servers-eeuu").append(_0x307e5e);
          $(_0x307e5e).append(_0x6c383b);
          $(_0x6c383b).after(_0xce4a04);
        } else {
          if (_0x5d06b0 == "ca") {
            $(".servers-canada").append(_0x307e5e);
            $(_0x307e5e).append(_0x6c383b);
            $(_0x6c383b).after(_0xce4a04);
          } else {
            if (_0x5d06b0 == "de") {
              $(".servers-germania").append(_0x307e5e);
              $(_0x307e5e).append(_0x6c383b);
              $(_0x6c383b).after(_0xce4a04);
            } else {
              if (_0x5d06b0 == "fr") {
                $(".servers-francia").append(_0x307e5e);
                $(_0x307e5e).append(_0x6c383b);
                $(_0x6c383b).after(_0xce4a04);
              } else {
                if (_0x5d06b0 == "sg") {
                  $(".servers-singapur").append(_0x307e5e);
                  $(_0x307e5e).append(_0x6c383b);
                  $(_0x6c383b).after(_0xce4a04);
                } else {
                  if (_0x5d06b0 == "jp") {
                    $(".servers-japon").append(_0x307e5e);
                    $(_0x307e5e).after(_0x6c383b);
                  } else {
                    if (_0x5d06b0 == "au") {
                      $(".servers-australia").append(_0x307e5e);
                      $(_0x307e5e).append(_0x6c383b);
                      $(_0x6c383b).after(_0xce4a04);
                    } else if (_0x5d06b0 == "ae") {
                      $(".servers-granbretana").append(_0x307e5e);
                      $(_0x307e5e).append(_0x6c383b);
                      $(_0x6c383b).after(_0xce4a04);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    $(_0x6c383b).attr("class", "selectSala");
    $(_0x6c383b).attr("value", _0x6ad56c);
    $(_0x6c383b).attr("data-con", _0x457f60);
    $(_0x6c383b).click(function () {
      $(".overlay-2").css("position", "static");
      let _0x4a89d7 = $(this).attr("data-con");
      console.log(_0x4a89d7);
      if (_0x4a89d7) {
        _0x2e8039.r.Hd();
        _0x2e8039.sa(_0x4a89d7);
        lxpdservertext.text = $(this).text();
        console.log($(this).text());
      }
    });
  }
  $(".logo-server").on("click", function () {
    var _0x34f2cf = prompt("Extension 'W' or 'T':");
    if (_0x34f2cf === "W") {
      $(".logo-server").text("Loading.");
      setTimeout(() => {
        $(".logo-server").text("Loading..");
        setTimeout(() => {
          $(".logo-server").text("Loading...");
          setTimeout(() => {
            $(".logo-server").text("WormWorld");
          }, 0x7d0);
        }, 0x5dc);
      }, 0x3e8);
      $(".servers-peru").html('');
      $(".servers-mexico").html('');
      $(".servers-eeuu").html('');
      $(".servers-canada").html('');
      $(".servers-germania").html('');
      $(".servers-francia").html('');
      $(".servers-singapur").html('');
      $(".servers-japon").html('');
      $(".servers-australia").html('');
      $(".servers-granbretana").html('');
      setTimeout(() => {
        for (_0x2e459d = 0x0; _0x2e459d < serverData.length; _0x2e459d++) {
          var _0x5a3fc1 = serverData[_0x2e459d].dataCon;
          var _0x315498 = serverData[_0x2e459d].dataRoom;
          var _0x5c468d = serverData[_0x2e459d].serverName;
          var _0x3a4ee9 = serverData[_0x2e459d].imgSrc;
          let _0x50961d = "<a>\n                        <img src=\"" + _0x3a4ee9 + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let _0x1c094e = _0x315498.match(/[a-zA-Z]+/g).join('');
          let _0x396881 = document.createElement("p");
          _0x396881.value = _0x5a3fc1;
          _0x396881.innerHTML = _0x5c468d;
          let _0x32c1d8 = document.createElement("div");
          _0x32c1d8.setAttribute("class", "conteiner");
          if (_0x1c094e == "br") {
            $(".servers-peru").append(_0x32c1d8);
            $(_0x32c1d8).append(_0x396881);
            $(_0x396881).append(_0x50961d);
          } else {
            if (_0x1c094e == "mx") {
              $(".servers-mexico").append(_0x32c1d8);
              $(_0x32c1d8).append(_0x396881);
              $(_0x396881).append(_0x50961d);
            } else {
              if (_0x1c094e == "us") {
                $(".servers-eeuu").append(_0x32c1d8);
                $(_0x32c1d8).append(_0x396881);
                $(_0x396881).append(_0x50961d);
              } else {
                if (_0x1c094e == "ca") {
                  $(".servers-canada").append(_0x32c1d8);
                  $(_0x32c1d8).append(_0x396881);
                  $(_0x396881).append(_0x50961d);
                } else {
                  if (_0x1c094e == "de") {
                    $(".servers-germania").append(_0x32c1d8);
                    $(_0x32c1d8).append(_0x396881);
                    $(_0x396881).append(_0x50961d);
                  } else {
                    if (_0x1c094e == "fr") {
                      $(".servers-francia").append(_0x32c1d8);
                      $(_0x32c1d8).append(_0x396881);
                      $(_0x396881).append(_0x50961d);
                    } else {
                      if (_0x1c094e == "sg") {
                        $(".servers-singapur").append(_0x32c1d8);
                        $(_0x32c1d8).append(_0x396881);
                        $(_0x396881).append(_0x50961d);
                      } else {
                        if (_0x1c094e == "jp") {
                          $(".servers-japon").append(_0x32c1d8);
                          $(_0x32c1d8).append(_0x396881);
                          $(_0x396881).append(_0x50961d);
                        } else {
                          if (_0x1c094e == "au") {
                            $(".servers-australia").append(_0x32c1d8);
                            $(_0x32c1d8).append(_0x396881);
                            $(_0x396881).append(_0x50961d);
                          } else if (_0x1c094e == "ae") {
                            $(".servers-granbretana").append(_0x32c1d8);
                            $(_0x32c1d8).append(_0x396881);
                            $(_0x396881).append(_0x50961d);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          $(_0x396881).attr("class", "selectSala");
          $(_0x396881).attr("value", _0x315498);
          $(_0x396881).attr("data-con", _0x5a3fc1);
          $(_0x396881).click(function () {
            $(".overlay-2").css("position", "static");
            let _0x96e95f = $(this).attr("data-con");
            console.log(_0x96e95f);
            if (_0x96e95f) {
              _0x2e8039.r.Hd();
              _0x2e8039.sa(_0x96e95f);
              lxpdservertext.text = $(this).text();
              console.log($(this).text());
            }
          });
        }
      }, 0xbb8);
    } else if (_0x34f2cf === "T") {
      $(".logo-server").text("Loading.");
      setTimeout(() => {
        $(".logo-server").text("Loading..");
        setTimeout(() => {
          $(".logo-server").text("Loading...");
          setTimeout(() => {
            $(".logo-server").text("Tim Map");
          }, 0x7d0);
        }, 0x5dc);
      }, 0x3e8);
      $(".servers-peru").html('');
      $(".servers-mexico").html('');
      $(".servers-eeuu").html('');
      $(".servers-canada").html('');
      $(".servers-germania").html('');
      $(".servers-francia").html('');
      $(".servers-singapur").html('');
      $(".servers-japon").html('');
      $(".servers-australia").html('');
      $(".servers-granbretana").html('');
      setTimeout(() => {
        for (_0x2e459d = 0x0; _0x2e459d < serverDataTimMap.length; _0x2e459d++) {
          var _0x3e2118 = serverDataTimMap[_0x2e459d].dataCon;
          var _0x2ce4a2 = serverDataTimMap[_0x2e459d].dataRoom;
          var _0x4d461a = serverDataTimMap[_0x2e459d].serverName;
          var _0x5a0a6a = serverDataTimMap[_0x2e459d].imgSrc;
          var _0xf3a95c = serverDataTimMap[_0x2e459d].secondHref;
          let _0x439c4f = _0x2ce4a2.match(/[a-zA-Z]+/g).join('');
          let _0x38b47d = document.createElement("p");
          _0x38b47d.value = _0x3e2118;
          let _0x304419 = "<a>\n                        <img src=\"" + _0x5a0a6a + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let _0x399c8a = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (_0x399c8a.test(_0x304419)) {
            _0x304419 = _0x304419.replace(_0x399c8a, '');
          } else {
            _0x304419;
          }
          let _0x4ed2d5 = /<span style=\\"(.*?)"><\\\/span>/;
          if (_0x4ed2d5.test(_0x4d461a)) {
            _0x4d461a = _0x4d461a.replace(_0x4ed2d5, "<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 4px;float: right;\"></span>");
          } else {
            _0x4d461a;
          }
          _0x38b47d.innerHTML = _0x4d461a;
          let _0x19fd31 = document.createElement("div");
          _0x19fd31.setAttribute("class", "conteiner");
          if (_0x439c4f == "BR") {
            $(".servers-peru").append(_0x19fd31);
            $(_0x19fd31).append(_0x38b47d);
            $(_0x38b47d).append(_0x304419);
          } else {
            if (_0x439c4f == "MX") {
              $(".servers-mexico").append(_0x19fd31);
              $(_0x19fd31).append(_0x38b47d);
              $(_0x38b47d).append(_0x304419);
            } else {
              if (_0x439c4f == "US") {
                $(".servers-eeuu").append(_0x19fd31);
                $(_0x19fd31).append(_0x38b47d);
                $(_0x38b47d).append(_0x304419);
              } else {
                if (_0x439c4f == "CA") {
                  $(".servers-canada").append(_0x19fd31);
                  $(_0x19fd31).append(_0x38b47d);
                  $(_0x38b47d).append(_0x304419);
                } else {
                  if (_0x439c4f == "DE") {
                    $(".servers-germania").append(_0x19fd31);
                    $(_0x19fd31).append(_0x38b47d);
                    $(_0x38b47d).append(_0x304419);
                  } else {
                    if (_0x439c4f == "FR") {
                      $(".servers-francia").append(_0x19fd31);
                      $(_0x19fd31).append(_0x38b47d);
                      $(_0x38b47d).append(_0x304419);
                    } else {
                      if (_0x439c4f == "SG") {
                        $(".servers-singapur").append(_0x19fd31);
                        $(_0x19fd31).append(_0x38b47d);
                        $(_0x38b47d).append(_0x304419);
                      } else {
                        if (_0x439c4f == "JP") {
                          $(".servers-japon").append(_0x19fd31);
                          $(_0x19fd31).append(_0x38b47d);
                          $(_0x38b47d).append(_0x304419);
                        } else {
                          if (_0x439c4f == "AU") {
                            $(".servers-australia").append(_0x19fd31);
                            $(_0x19fd31).append(_0x38b47d);
                            $(_0x38b47d).append(_0x304419);
                          } else if (_0x439c4f == "AE") {
                            $(".servers-granbretana").append(_0x19fd31);
                            $(_0x19fd31).append(_0x38b47d);
                            $(_0x38b47d).append(_0x304419);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          $(_0x38b47d).attr("class", "selectSala");
          $(_0x38b47d).attr("value", _0x2ce4a2);
          $(_0x38b47d).attr("data-con", _0x3e2118);
          $(_0x38b47d).click(function () {
            $(".overlay-2").css("position", "static");
            let _0x5a69ec = $(this).attr("data-con");
            console.log(_0x5a69ec);
            if (_0x5a69ec) {
              _0x2e8039.r.Hd();
              _0x2e8039.sa(_0x5a69ec);
              lxpdservertext.text = $(this).text();
              console.log($(this).text());
            }
          });
        }
      }, 0xbb8);
    } else {
      alert("Ingresa 'W' o 'T' para continuar.");
    }
  });
};
const ctx = {
  "fontStyle": {
    "blanco": new PIXI.TextStyle({
      "align": "center",
      "fill": "#FFF",
      "fontSize": 0xc,
      "lineJoin": "round",
      "stroke": "#FFF",
      "strokeThickness": 0x1,
      "whiteSpace": "normal",
      "wordWrap": true
    })
  }
};
timeFontColors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let index = 0x0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index];
  ctx.fontStyle["tfc" + index] = new PIXI.TextStyle({
    "align": "center",
    "fill": color,
    "fontSize": 0x19,
    "lineJoin": "round",
    "whiteSpace": "normal",
    "wordWrap": true,
    "dropShadow": true,
    "dropShadowBlur": 0x6,
    "fontWeight": "bold"
  });
}
ctx.ptc = {};
const portionTimes = [0x28, 0x28, 0x28, 0x78, 0x28, 0x14, 0x28];
for (let i = 0x0; i < portionTimes.length; i++) {
  let name = "clock_ad" + i;
  ctx.ptc[name] = new PIXI.Text(portionTimes[i], ctx.fontStyle["tfc" + i]);
  ctx.ptc[name].y = 0x3d;
}
ctx.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
ctx.containerImgTest = new PIXI.Sprite(ctx.imgTest_desactived);
ctx.containerImgTest.anchor.set(0.5);
ctx.containerImgTest.x = window.innerWidth / 0x2;
ctx.containerImgTest.y = window.innerHeight / 0x2;
ctx.containerImgTest.alpha = 0.3;
ctx.pointsContainer = new PIXI.Container();
const createCircle = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    console.error("Error: window.coords no est� definido correctamente o no contiene playerX y playerY.");
    return;
  }
  if (!ctx.team_2) {
    ctx.team_2 = new PIXI.Graphics();
    ctx.team_2.zIndex = 0x2;
    ctx.team_2.alpha = 0.9;
    ctx.team_2.beginFill(0xff0000);
    ctx.team_2.drawCircle(0x0, 0x0, 2.4);
    ctx.team_2.endFill();
    ctx.team_2.lineStyle(0x1, "black");
    ctx.team_2.drawCircle(0x0, 0x0, 2.4);
    ctx.team_2.endFill();
  }
  ctx.team_2.x = window.coords.playerX;
  ctx.team_2.y = window.coords.playerY;
  if (ctx.pointsContainer) {
    ctx.pointsContainer.addChild(ctx.team_2);
  } else {
    console.error("Error: ctx.pointsContainer no est� definido.");
  }
};
ctx.teamsContainer = new PIXI.Container();
var createServerMessage = function (_0x173c8a, _0x570950) {
  if (_0x570950.trim() === '') {
    return;
  }
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "toastClass": "server-message-toast"
  };
  toastr.success(_0x570950, _0x173c8a, {
    "iconClass": "toast-info"
  });
};
var createTeamMessage = function (_0x2d1b62, _0x47f394, _0x3294e3) {
  if (_0x3294e3.trim() === '') {
    return;
  }
  gameState.players.forEach((_0x29cc7d, _0x421516) => {
    if (_0x29cc7d.teamCode === _0x2d1b62 && _0x29cc7d.nickname !== _0x47f394) {
      let _0x2ccbfc = _0x29cc7d.nickname.length > 0xc ? _0x29cc7d.nickname.slice(0x0, 0xc) : _0x29cc7d.nickname;
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      };
      toastr.success('' + _0x3294e3, '' + _0x47f394, {
        "iconClass": "toast-info"
      });
      console.log("Mensaje enviado por " + _0x47f394 + " recibido por el jugador " + _0x2ccbfc + " (" + _0x421516 + ") del equipo " + _0x2d1b62);
    }
  });
};
var createTeamUbication = function (_0x576be7, _0x55a130) {
  updatePlayerTable(gameState);
  gameState.players.forEach((_0x5951c5, _0x343d8f) => {
    if (_0x5951c5.teamCode === _0x576be7) {
      console.log(_0x5951c5);
      let _0x3d6006 = _0x5951c5.teamColor ? parseInt(_0x5951c5.teamColor) : _0x55a130;
      if (!ctx[_0x343d8f]) {
        ctx[_0x343d8f] = new PIXI.Graphics();
        ctx[_0x343d8f].zIndex = 0x2;
        ctx[_0x343d8f].alpha = 0.9;
        if (ctx.teamsContainer) {
          ctx.teamsContainer.addChild(ctx[_0x343d8f]);
        } else {
          console.error("Error: ctx.teamsContainer is not defined.");
        }
      }
      ctx[_0x343d8f].clear();
      ctx[_0x343d8f].beginFill(_0x3d6006);
      ctx[_0x343d8f].drawCircle(0x0, 0x0, 2.4);
      ctx[_0x343d8f].endFill();
      ctx[_0x343d8f].lineStyle(0x1, 0x0);
      ctx[_0x343d8f].drawCircle(0x0, 0x0, 2.4);
      ctx[_0x343d8f].endFill();
      ctx[_0x343d8f].x = _0x5951c5.position.x;
      ctx[_0x343d8f].y = _0x5951c5.position.y;
    }
  });
};
var clearTeamUbication = function () {
  if (ctx.teamsContainer) {
    Object.keys(ctx).forEach(_0x287845 => {
      if (ctx[_0x287845] instanceof PIXI.Graphics && ctx[_0x287845].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[_0x287845]);
        ctx[_0x287845].destroy(true);
        delete ctx[_0x287845];
      }
      if (ctx[_0x287845 + "_text"] && ctx[_0x287845 + "_text"].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[_0x287845 + "_text"]);
        ctx[_0x287845 + "_text"].destroy(true);
        delete ctx[_0x287845 + "_text"];
      }
    });
  } else {
    console.error("Error: ctx.teamsContainer is not defined.");
  }
};
ctx.titleRec2 = new PIXI.Text("Friends", ctx.fontStyle.blanco);
ctx.titleRec2.y = -0x5;
ctx.containerHsRec2 = new PIXI.Container();
ctx.containerHsRec2.x = 0x1e;
ctx.containerHsRec2.y = 0xaa;
let playersTexts = [];
for (let index = 0x0; index < 0x5; index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(wallBounce + ".", ctx.fontStyle.blanco);
  deltaCoordinate.x = 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text("--", {
    "fill": "#FFFFFF",
    "fontSize": 0xc
  });
  playerNameText.x = 0xf;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(playerNameText);
  playersTexts.push(playerNameText);
}
ctx.containerHsRec2.addChild(ctx.titleRec2);
function updatePlayerTable(_0x5a9747) {
  const _0x52119d = _0x5a9747.players;
  const _0x4e9173 = Array.from(_0x52119d.values());
  const _0x46e2cb = _0x4e9173.filter(_0x482e9b => _0x482e9b.teamCode === '');
  playersTexts.forEach((_0x50cb18, _0x4a71c1) => {
    if (_0x46e2cb[_0x4a71c1]) {
      let _0x1d35ac = _0x46e2cb[_0x4a71c1];
      _0x50cb18.text = _0x1d35ac.nickname.substring(0x0, 0x14);
      _0x50cb18.style.fill = _0x1d35ac.teamColor;
    } else {
      _0x50cb18.text = "--";
      _0x50cb18.style.fill = "#FFFFFF";
    }
  });
}
ctx.titleRec = new PIXI.Text("Top 8 (👑)", ctx.fontStyle.blanco);
ctx.titleRec.y = -0x5;
ctx.containerHsRec = new PIXI.Container();
ctx.containerHsRec.x = -0x37;
ctx.containerHsRec.y = 0x9b;
const colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff];
const textStyle = {
  "align": "center",
  "fontSize": 0xc,
  "lineJoin": "round",
  "strokeThickness": 0x1,
  "whiteSpace": "normal",
  "wordWrap": true
};
for (let index = 0x0; index < 0x8; index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(wallBounce + ".", ctx.fontStyle.blanco);
  deltaCoordinate.x = index >= 0x9 ? -0x5 : 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text("--", {
    "fill": colors[index % colors.length],
    ...textStyle
  });
  playerNameText.x = 0xf;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec.addChild(playerNameText);
  let playerHsText = new PIXI.Text("--", {
    "fill": colors[index % colors.length],
    ...textStyle
  });
  playerHsText.x = 0x64;
  playerHsText.y = 0xd * wallBounce;
  ctx.containerHsRec.addChild(playerHsText);
}
ctx.containerHsRec.addChild(ctx.titleRec);
ctx.titleRec3 = new PIXI.Text("----------☠️---------", ctx.fontStyle.blanco);
ctx.titleRec3.y = -0x5;
ctx.titleRec3.x = 0xa;
ctx.containerHsRec3 = new PIXI.Container();
ctx.containerHsRec3.x = -0x37;
ctx.containerHsRec3.y = 0x118;
for (let index = 0x0; index < 0x8; index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(" ", ctx.fontStyle.blanco);
  deltaCoordinate.x = index >= 0x9 ? -0x5 : 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text("--", {
    "fill": "#00FF00",
    ...textStyle
  });
  playerNameText.x = index >= 0x9 ? -0x5 : 0x0;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(playerNameText);
  let playerName2Text = new PIXI.Text("?", {
    "fill": colors[index % colors.length],
    ...textStyle
  });
  playerName2Text.x = 0x46;
  playerName2Text.y = 0xd * wallBounce;
  let playerHsText = new PIXI.Text("--", {
    "fill": "#FF0000",
    ...textStyle
  });
  playerHsText.x = 0x7d;
  playerHsText.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(playerHsText);
}
ctx.containerHsRec3.addChild(ctx.titleRec3);
const updateTop8Hs = function () {
  const _0x494a6c = gameState.players;
  const _0x430eec = Array.from(_0x494a6c.values());
  const _0x1bc7ac = _0x430eec.filter(_0x3d3270 => _0x3d3270.hskill.hs > 0x0 && _0x3d3270.nickname.trim() !== '');
  _0x1bc7ac.sort((_0x70e5a3, _0x3acb33) => _0x3acb33.hskill.hs - _0x70e5a3.hskill.hs);
  console.log(_0x1bc7ac);
  const _0x2719cb = [];
  for (let _0x3f3565 = 0x0; _0x3f3565 < 0x8; _0x3f3565++) {
    const _0x18d01a = _0x1bc7ac[_0x3f3565];
    if (_0x18d01a) {
      _0x2719cb.push({
        "nombre": _0x18d01a.nickname.substring(0x0, 0xa),
        "nombre2": _0x18d01a.nickname.split("ㅤ")[0x0],
        "enemyNameHs": _0x18d01a.enemyNameHs ? _0x18d01a.enemyNameHs.split("ㅤ")[0x0] : "--",
        "hs": _0x18d01a.hskill.hs,
        "teamCode": _0x18d01a.teamCode,
        "teamColor": _0x18d01a.teamColor,
        "position": _0x18d01a.position
      });
    } else {
      _0x2719cb.push({
        "nombre": "--",
        "nombre2": "--",
        "enemyNameHs": "--",
        "hs": "--",
        "teamCode": '',
        "teamColor": '',
        "position": null
      });
    }
  }
  for (let _0x53b265 = 0x0; _0x53b265 < 0x8; _0x53b265++) {
    if (ctx.containerHsRec.children[0x3 * _0x53b265 + 0x1]) {
      ctx.containerHsRec.children[0x3 * _0x53b265 + 0x1].text = _0x2719cb[_0x53b265].nombre;
    }
    if (ctx.containerHsRec.children[0x3 * _0x53b265 + 0x2]) {
      ctx.containerHsRec.children[0x3 * _0x53b265 + 0x2].text = _0x2719cb[_0x53b265].hs;
    }
  }
  const _0x237891 = _0x2719cb[0x0];
  createTop1InMinimap(_0x237891);
  console.log(_0x237891);
  updateHeadshotHistory(_0x2719cb);
};
var createTop1InMinimap = function (_0x54966c) {
  if (_0x54966c && _0x54966c.position) {
    if (!ctx.top1Point) {
      ctx.top1Point = new PIXI.Graphics();
      ctx.top1Point.zIndex = 0x2;
      ctx.top1Point.alpha = 0.9;
      if (ctx.teamsContainer) {
        ctx.teamsContainer.addChild(ctx.top1Point);
      } else {
        console.error("Error: ctx.teamsContainer is not defined.");
      }
    }
    ctx.top1Point.clear();
    ctx.top1Point.beginFill(0xfff000);
    ctx.top1Point.drawCircle(0x0, 0x0, 2.4);
    ctx.top1Point.endFill();
    ctx.top1Point.lineStyle(0x1, 0xff0000);
    ctx.top1Point.drawCircle(0x0, 0x0, 2.4);
    ctx.top1Point.endFill();
    ctx.top1Point.shadow = true;
    ctx.top1Point.shadowColor = 0xff0000;
    ctx.top1Point.shadowBlur = 0xf;
    ctx.top1Point.shadowOffsetX = 0x0;
    ctx.top1Point.shadowOffsetY = 0x0;
    const _0x1bebb4 = new PIXI.Text("👑", {
      "fontFamily": "Arial",
      "fontSize": 0xa,
      "fill": 0xffffff,
      "align": "center"
    });
    _0x1bebb4.x = -_0x1bebb4.width / 0x2;
    _0x1bebb4.y = -_0x1bebb4.height / 0x2;
    ctx.top1Point.addChild(_0x1bebb4);
    ctx.top1Point.x = _0x54966c.position.x;
    ctx.top1Point.y = _0x54966c.position.y;
    console.log("Top 1 actualizado:", _0x54966c.nombre);
  } else {
    console.error("No hay jugadores disponibles para actualizar el top 1.");
  }
};
const updateHeadshotHistory = function (_0x593b79) {
  for (let _0x2f163d = 0x0; _0x2f163d < 0x8; _0x2f163d++) {
    if (ctx.containerHsRec3.children[0x3 * _0x2f163d + 0x1]) {
      ctx.containerHsRec3.children[0x3 * _0x2f163d + 0x1].text = _0x593b79[_0x2f163d].nombre2;
    }
    if (ctx.containerHsRec3.children[0x3 * _0x2f163d + 0x3]) {
      ctx.containerHsRec3.children[0x3 * _0x2f163d + 0x2].text = _0x593b79[_0x2f163d].enemyNameHs;
    }
  }
};
function assignPtcValues(_0x57e0de, _0xbcc8f3, _0x390895) {
  let _0x393c9f = portionTimes[_0xbcc8f3] - parseInt((0.99 == _0x390895 ? 0x1 : _0x390895) * portionTimes[_0xbcc8f3] / 0x1);
  let _0x37c3f4 = "clock_ad" + _0xbcc8f3;
  _0x57e0de.Tf[_0xbcc8f3].addChild(ctx.ptc[_0x37c3f4]);
  if (ctx.ptc[_0x37c3f4]) {
    ctx.ptc[_0x37c3f4].x = _0x393c9f >= 0x64 ? 0xb : _0x393c9f >= 0xa ? 0x12 : 0x1a;
    ctx.ptc[_0x37c3f4].text = _0x393c9f;
  }
}
function account() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var _0x54fd83 = $(this).attr("data-country-name");
    $(".ui-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + _0x54fd83.toLowerCase()).fadeIn(0xc8);
    $(".servers-container > div").not(".servers-" + _0x54fd83.toLowerCase()).fadeOut(0x64);
  });
}
function obtieneUSER() {
  var _0x2a9f61 = {};
  window.onclick = function () {
    _0x2a9f61 = window.nodes;
    if (_0x2a9f61 && Object.keys(_0x2a9f61).length > 0x0) {
      console.log(_0x2a9f61);
      if (_0x2a9f61) {
        var _0x1c771a = window.mouseX - _0x2a9f61.qj.If.x;
        var _0x9a56d1 = window.mouseY - _0x2a9f61.qj.If.y;
        var _0x4979fe = _0x2a9f61.Mb.ad;
        var _0xd2eb97 = Math.sqrt(_0x1c771a * _0x1c771a + _0x9a56d1 * _0x9a56d1);
        console.log("Cell:", _0x2a9f61, "nickname: ", _0x4979fe, "Distance:", _0xd2eb97);
      }
    }
  };
}
;
function loadScript2(_0x5e425f, _0x473532 = true) {
  return new Promise((_0x9694c4, _0x5f0619) => {
    var _0xd0cb55 = document.createElement("script");
    _0xd0cb55.type = "text/javascript";
    _0xd0cb55.src = _0x5e425f;
    _0xd0cb55.defer = _0x473532;
    _0xd0cb55.onload = _0x9694c4;
    _0xd0cb55.onerror = _0x5f0619;
    document.head.appendChild(_0xd0cb55);
  });
}
function loadStylesheet(_0x29bc94) {
  return new Promise((_0x3339b8, _0x2df5a1) => {
    var _0x371170 = document.createElement("link");
    _0x371170.rel = "stylesheet";
    _0x371170.type = "text/css";
    _0x371170.href = _0x29bc94;
    _0x371170.onload = _0x3339b8;
    _0x371170.onerror = _0x2df5a1;
    document.head.appendChild(_0x371170);
  });
}
loadStylesheet("https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap");
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x4eacfc) {
  return typeof _0x4eacfc;
} : function (_0x13a271) {
  return _0x13a271 && "function" == typeof Symbol && _0x13a271.constructor === Symbol && _0x13a271 !== Symbol.prototype ? "symbol" : typeof _0x13a271;
};
var GoogleAuth;
!function () {
  try {
    console.log(function (_0x19330a, _0x202d79) {
      for (var _0x158677 = 0x0; _0x158677 < _0x202d79.length; _0x158677 += 0x2) {
        _0x19330a = _0x19330a.replaceAll(_0x202d79[_0x158677], _0x202d79[_0x158677 + 0x1]);
      }
      return _0x19330a;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (_0x4fcbfd) {}
}();
window.addEventListener("load", function () {
  function _0x486fff() {
    (function (_0x26733b, _0x48c950, _0x4e3d4d) {
      var _0x56ae62 = [];
      var _0x4ab55c = [];
      var _0x44c835 = {
        "_version": "3.3.1",
        "_config": {
          "classPrefix": '',
          "enableClasses": true,
          "enableJSClass": true,
          "usePrefixes": true
        },
        "_q": [],
        "on": function (_0x152fc7, _0x47c24f) {
          var _0x54aa64 = this;
          setTimeout(function () {
            _0x47c24f(_0x54aa64[_0x152fc7]);
          }, 0x0);
        },
        "addTest": function (_0x443a4c, _0x27a220, _0x115d88) {
          _0x4ab55c.push({
            "name": _0x443a4c,
            "fn": _0x27a220,
            "options": _0x115d88
          });
        },
        "addAsyncTest": function (_0x2644e2) {
          _0x4ab55c.push({
            "name": null,
            "fn": _0x2644e2
          });
        }
      };
      var _0x229d54 = function () {};
      _0x229d54.prototype = _0x44c835;
      _0x229d54 = new _0x229d54();
      var _0x1e897a = false;
      try {
        _0x1e897a = "WebSocket" in _0x26733b && 0x2 === _0x26733b.WebSocket.CLOSING;
      } catch (_0x1f03df) {}
      _0x229d54.addTest("websockets", _0x1e897a);
      var _0x3a2579 = _0x48c950.documentElement;
      var _0x5a1489 = "svg" === _0x3a2579.nodeName.toLowerCase();
      _0x229d54.addTest("canvas", function () {
        var _0x3821c4 = "function" != typeof _0x48c950.createElement ? _0x48c950.createElement(arguments[0x0]) : _0x5a1489 ? _0x48c950.createElementNS.call(_0x48c950, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x48c950.createElement.apply(_0x48c950, arguments);
        return !(!_0x3821c4.getContext || !_0x3821c4.getContext("2d"));
      });
      _0x229d54.addTest("canvastext", function () {
        return false !== _0x229d54.canvas && "function" == typeof ("function" != typeof _0x48c950.createElement ? _0x48c950.createElement(arguments[0x0]) : _0x5a1489 ? _0x48c950.createElementNS.call(_0x48c950, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x48c950.createElement.apply(_0x48c950, arguments)).getContext("2d").fillText;
      });
      (function () {
        var _0x40622f;
        var _0x25362f;
        var _0x16aabe;
        var _0x579d2c;
        var _0x17606c;
        var _0x1805b7;
        var _0x5a770f;
        for (var _0x5ee045 in _0x4ab55c) if (_0x4ab55c.hasOwnProperty(_0x5ee045)) {
          _0x40622f = [];
          _0x25362f = _0x4ab55c[_0x5ee045];
          if (_0x25362f.name && (_0x40622f.push(_0x25362f.name.toLowerCase()), _0x25362f.options && _0x25362f.options.aliases && _0x25362f.options.aliases.length)) {
            for (_0x16aabe = 0x0; _0x16aabe < _0x25362f.options.aliases.length; _0x16aabe++) {
              _0x40622f.push(_0x25362f.options.aliases[_0x16aabe].toLowerCase());
            }
          }
          _0x579d2c = (undefined === _0x25362f.fn ? "undefined" : _typeof(_0x25362f.fn)) === "function" ? _0x25362f.fn() : _0x25362f.fn;
          for (_0x17606c = 0x0; _0x17606c < _0x40622f.length; _0x17606c++) {
            _0x1805b7 = _0x40622f[_0x17606c];
            _0x5a770f = _0x1805b7.split(".");
            if (0x1 === _0x5a770f.length) {
              _0x229d54[_0x5a770f[0x0]] = _0x579d2c;
            } else {
              if (!(!_0x229d54[_0x5a770f[0x0]] || _0x229d54[_0x5a770f[0x0]] instanceof Boolean)) {
                _0x229d54[_0x5a770f[0x0]] = new Boolean(_0x229d54[_0x5a770f[0x0]]);
              }
              _0x229d54[_0x5a770f[0x0]][_0x5a770f[0x1]] = _0x579d2c;
            }
            _0x56ae62.push((_0x579d2c ? '' : "no-") + _0x5a770f.join("-"));
          }
        }
      })();
      (function (_0xa78123) {
        var _0x1e074a = _0x3a2579.className;
        var _0x124190 = _0x229d54._config.classPrefix || '';
        if (_0x5a1489) {
          _0x1e074a = _0x1e074a.baseVal;
        }
        if (_0x229d54._config.enableJSClass) {
          var _0x4cdb6d = new RegExp("(^|\\s)" + _0x124190 + "no-js(\\s|$)");
          _0x1e074a = _0x1e074a.replace(_0x4cdb6d, "$1" + _0x124190 + "js$2");
        }
        if (_0x229d54._config.enableClasses) {
          _0x1e074a += " " + _0x124190 + _0xa78123.join(" " + _0x124190);
          if (_0x5a1489) {
            _0x3a2579.className.baseVal = _0x1e074a;
          } else {
            _0x3a2579.className = _0x1e074a;
          }
        }
      })(_0x56ae62);
      delete _0x44c835.addTest;
      delete _0x44c835.addAsyncTest;
      for (var _0x21c2b9 = 0x0; _0x21c2b9 < _0x229d54._q.length; _0x21c2b9++) {
        _0x229d54._q[_0x21c2b9]();
      }
      _0x26733b.Modernizr = _0x229d54;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!_0x486fff()) {
    return void (document.getElementById("error-view").style.display = "block");
  }
  !function () {
    function _0x58776e(_0x430ed5) {
      const _0x56b37a = _0x430ed5 + "=";
      const _0x4953e4 = document.cookie.split(";");
      for (let _0x133f47 = 0x0; _0x133f47 < _0x4953e4.length; _0x133f47++) {
        let _0x4ffb2d = _0x4953e4[_0x133f47];
        while (_0x4ffb2d.charAt(0x0) === " ") {
          _0x4ffb2d = _0x4ffb2d.substring(0x1);
        }
        if (_0x4ffb2d.indexOf(_0x56b37a) === 0x0) {
          return _0x4ffb2d.substring(_0x56b37a.length, _0x4ffb2d.length);
        }
      }
      return '';
    }
    function _0x18db74(_0x5e53f1, _0x3b3a57, _0x3a2717) {
      var _0x3a758b = new Date();
      _0x3a758b.setTime(_0x3a758b.getTime() + 0x5265c00 * _0x3a2717);
      var _0x4337a4 = "expires=" + _0x3a758b.toUTCString();
      document.cookie = _0x5e53f1 + "=" + _0x3b3a57 + "; " + _0x4337a4 + "; path=/";
    }
    function _0x55ec00(_0x3f4582) {
      var _0x111f0e = (Math.floor(_0x3f4582) % 0x3c).toString();
      var _0xf2a5ac = (Math.floor(_0x3f4582 / 0x3c) % 0x3c).toString();
      var _0x56833d = (Math.floor(_0x3f4582 / 0xe10) % 0x18).toString();
      var _0xeba7d8 = Math.floor(_0x3f4582 / 0x15180).toString();
      var _0x556dc2 = window.I18N_MESSAGES["util.time.days"];
      var _0x53c7a8 = window.I18N_MESSAGES["util.time.hours"];
      var _0x4f7e35 = window.I18N_MESSAGES["util.time.min"];
      var _0x1f9332 = window.I18N_MESSAGES["util.time.sec"];
      return _0xeba7d8 > 0x0 ? _0xeba7d8 + " " + _0x556dc2 + " " + _0x56833d + " " + _0x53c7a8 + " " + _0xf2a5ac + " " + _0x4f7e35 + " " + _0x111f0e + " " + _0x1f9332 : _0x56833d > 0x0 ? _0x56833d + " " + _0x53c7a8 + " " + _0xf2a5ac + " " + _0x4f7e35 + " " + _0x111f0e + " " + _0x1f9332 : _0xf2a5ac > 0x0 ? _0xf2a5ac + " " + _0x4f7e35 + " " + _0x111f0e + " " + _0x1f9332 : _0x111f0e + " " + _0x1f9332;
    }
    function _0x4cdadb(_0x9d5e2, _0x31e42c, _0x2075a8) {
      var _0x5cf7d2 = document.createElement("script");
      var _0x115683 = true;
      if (_0x31e42c) {
        _0x5cf7d2.id = _0x31e42c;
      }
      _0x5cf7d2.async = "async";
      _0x5cf7d2.type = "text/javascript";
      _0x5cf7d2.src = _0x9d5e2;
      if (_0x2075a8) {
        _0x5cf7d2.onload = _0x5cf7d2.onreadystatechange = function () {
          _0x115683 = false;
          try {
            _0x2075a8();
          } catch (_0x478588) {
            console.log(_0x478588);
          }
          _0x5cf7d2.onload = _0x5cf7d2.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0x0]).appendChild(_0x5cf7d2);
    }
    function _0x15a67e(_0x43adcf, _0x3383e3) {
      _0x3383e3.prototype = Object.create(_0x43adcf.prototype);
      _0x3383e3.prototype.constructor = _0x3383e3;
      _0x3383e3.parent = _0x43adcf;
      return _0x3383e3;
    }
    function _0x18e6cc(_0x1a3883) {
      _0x1a3883 %= _0x1b833d;
      return _0x1a3883 < 0x0 ? _0x1a3883 + _0x1b833d : _0x1a3883;
    }
    function _0x11653c(_0x2b5c94, _0x3ca251, _0x23853d, _0x3492c) {
      var _0x406e7a = _0x3ca251 + _0x3492c;
      if (null == _0x2b5c94) {
        throw new TypeError("this is null or not defined");
      }
      var _0x26c0b6 = _0x2b5c94.length >>> 0x0;
      var _0x3e4afc = _0x23853d >> 0x0;
      var _0x5d0b54 = _0x3e4afc < 0x0 ? Math.max(_0x26c0b6 + _0x3e4afc, 0x0) : Math.min(_0x3e4afc, _0x26c0b6);
      var _0x4ffea7 = _0x3ca251 >> 0x0;
      var _0x37b92e = _0x4ffea7 < 0x0 ? Math.max(_0x26c0b6 + _0x4ffea7, 0x0) : Math.min(_0x4ffea7, _0x26c0b6);
      var _0x5cf6ce = undefined === _0x406e7a ? _0x26c0b6 : _0x406e7a >> 0x0;
      var _0x19a4bb = _0x5cf6ce < 0x0 ? Math.max(_0x26c0b6 + _0x5cf6ce, 0x0) : Math.min(_0x5cf6ce, _0x26c0b6);
      var _0xd89b21 = Math.min(_0x19a4bb - _0x37b92e, _0x26c0b6 - _0x5d0b54);
      var _0x2caa80 = 0x1;
      for (_0x37b92e < _0x5d0b54 && _0x5d0b54 < _0x37b92e + _0xd89b21 && (_0x2caa80 = -0x1, _0x37b92e += _0xd89b21 - 0x1, _0x5d0b54 += _0xd89b21 - 0x1); _0xd89b21 > 0x0;) {
        if (_0x37b92e in _0x2b5c94) {
          _0x2b5c94[_0x5d0b54] = _0x2b5c94[_0x37b92e];
        } else {
          delete _0x2b5c94[_0x5d0b54];
        }
        _0x37b92e += _0x2caa80;
        _0x5d0b54 += _0x2caa80;
        _0xd89b21--;
      }
      return _0x2b5c94;
    }
    function _0x4aa610(_0x5e21a8) {
      if (null != _0x5e21a8.parent) {
        _0x5e21a8.parent.removeChild(_0x5e21a8);
      }
    }
    function _0x5361c2(_0x2064c7, _0x419dbd, _0x34ef23) {
      var _0x45d4b9 = (0x1 - Math.abs(0x2 * _0x34ef23 - 0x1)) * _0x419dbd;
      var _0x22f223 = _0x45d4b9 * (0x1 - Math.abs(_0x2064c7 / 0x3c % 0x2 - 0x1));
      var _0x5efcc1 = _0x34ef23 - _0x45d4b9 / 0x2;
      return 0x0 <= _0x2064c7 && _0x2064c7 < 0x3c ? [_0x5efcc1 + _0x45d4b9, _0x5efcc1 + _0x22f223, _0x5efcc1 + 0x0] : 0x3c <= _0x2064c7 && _0x2064c7 < 0x78 ? [_0x5efcc1 + _0x22f223, _0x5efcc1 + _0x45d4b9, _0x5efcc1 + 0x0] : 0x78 <= _0x2064c7 && _0x2064c7 < 0xb4 ? [_0x5efcc1 + 0x0, _0x5efcc1 + _0x45d4b9, _0x5efcc1 + _0x22f223] : 0xb4 <= _0x2064c7 && _0x2064c7 < 0xf0 ? [_0x5efcc1 + 0x0, _0x5efcc1 + _0x22f223, _0x5efcc1 + _0x45d4b9] : 0xf0 <= _0x2064c7 && _0x2064c7 < 0x12c ? [_0x5efcc1 + _0x22f223, _0x5efcc1 + 0x0, _0x5efcc1 + _0x45d4b9] : [_0x5efcc1 + _0x45d4b9, _0x5efcc1 + 0x0, _0x5efcc1 + _0x22f223];
    }
    function _0x9153e9() {
      function _0x2c136a() {
        $("#adbl-1").text(window.I18N_MESSAGES["index.game.antiadblocker.msg1"]);
        $("#adbl-2").text(window.I18N_MESSAGES["index.game.antiadblocker.msg2"]);
        $("#adbl-3").text(window.I18N_MESSAGES["index.game.antiadblocker.msg3"]);
        $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", 0xa));
        $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
        $("#adbl-continue").hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
        var _0x69bfeb = 0x5;
        for (var _0x4e70bf = 0x0; _0x4e70bf < 0x5; _0x4e70bf++) {
          setTimeout(function () {
            _0x69bfeb--;
            $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", _0x69bfeb));
            if (0x0 === _0x69bfeb) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (_0x186569) {}
              $("#adbl-continue").fadeIn(0xc8);
            }
          }, 0x3e8 * (_0x4e70bf + 0x1));
        }
      }
      var _0x12e05c = false;
      var _0x40aa27 = function () {};
      var _0x1ab204 = {};
      $("#adbl-continue").click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        _0x40aa27(false);
      });
      _0x1ab204.a = function (_0x6d711d) {
        _0x40aa27 = _0x6d711d;
        if (!_0x12e05c) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                "AD_WIDTH": 0x3c0,
                "AD_HEIGHT": 0x21c,
                "AD_FULLSCREEN": true,
                "AD_CENTERPLAYER": false,
                "LOADING_TEXT": "loading advertisement",
                "PREROLL_ELEM": function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                "AIP_COMPLETE": function (_0x4dd3ed) {
                  console.log("aipC");
                  _0x40aa27(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (_0x279d16) {}
                },
                "AIP_REMOVE": function () {}
              });
            });
            _0x12e05c = true;
          } catch (_0x14c062) {}
        }
      };
      _0x1ab204.b = function () {
        if (undefined !== aiptag.adplayer) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (_0xe5058e) {}
          _0x2c136a();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (_0x2b1077) {}
          _0x2c136a();
        }
      };
      return _0x1ab204;
    }
    function _0x454082(_0x51b9b4, _0x5e39b8) {
      return {
        "a": function () {},
        "c": function () {}
      };
    }
    function _0x3c4b65() {
      function _0x35562f(_0x1da8ac) {
        var _0x3a8203 = _0x1da8ac + 0x25 * Math.floor(0xffff * Math.random());
        _0x18db74(_0x1d9d3e.d, _0x3a8203, 0x1e);
      }
      return function () {
        var _0x4677d3 = parseInt(_0x58776e(_0x1d9d3e.d)) % 0x25;
        console.log("init1 pSC: " + _0x4677d3);
        if (!(_0x4677d3 >= 0x0 && _0x4677d3 < _0x26b544.e)) {
          _0x4677d3 = Math.max(0x0, _0x26b544.e - 0x2);
          console.log("init2 pSC: " + _0x4677d3);
        }
        var _0x3131a9 = {};
        _0x4b2f70 = _0x3131a9;
        _0x3131a9.f = _0x26b544;
        _0x3131a9.g = false;
        _0x3131a9.i = Date.now();
        _0x3131a9.j = 0x0;
        _0x3131a9.k = 0x0;
        _0x3131a9.l = null;
        _0x3131a9.m = _0x1d6456;
        _0x3131a9.n = _0x147424;
        _0x3131a9.o = null;
        _0x3131a9.p = null;
        _0x3131a9.q = null;
        _0x3131a9.r = null;
        _0x3131a9.s = null;
        _0x3131a9.t = null;
        _0x3131a9.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x1e7db8) {
              if (undefined !== _0x1e7db8.coords) {
                var _0x4e9815 = _0x1e7db8.coords;
                if (undefined !== _0x4e9815.latitude && undefined !== _0x4e9815.longitude) {
                  _0x3131a9.l = _0x1e7db8;
                }
              }
            }, function (_0x31de2a) {});
          }
        } catch (_0x2cc420) {}
        _0x3131a9.v = function () {
          _0x3131a9.p = new _0x2e9673();
          _0x3131a9.q = new _0x105be0();
          _0x3131a9.r = new _0x531002();
          _0x3131a9.s = new _0x1f2cf6();
          _0x3131a9.t = new _0x49458b();
          _0x3131a9.u = new _0x2b20d0();
          _0x3131a9.o = new _0x4a1a16();
          _0x3131a9.o.z = new _0x51a738(_0x3131a9.o);
          _0x3131a9.a();
        };
        _0x3131a9.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x2aa705) {}
          _0x3131a9.o.A = function () {
            _0x3131a9.o.B();
          };
          _0x3131a9.o.C = function () {
            var _0x3d56b5 = _0x3131a9.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", _0x3d56b5);
            } catch (_0x2d739e) {}
            _0x3131a9.r.G(_0x531002.AudioState.H);
            _0x3131a9.s.I(_0x3131a9.s.H.J());
          };
          _0x3131a9.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0x4bea55) {}
            if ($("body").height() >= 0x1ae) {
              _0x3131a9.f.K.c();
            }
            _0x3131a9.p.L();
            (function () {
              var _0x141345 = Math.floor(_0x3131a9.o.N.M);
              var _0x48342a = _0x3131a9.o.O;
              if (_0x3131a9.u.P()) {
                _0x3131a9.u.Q(function () {
                  _0x3131a9.R(_0x141345, _0x48342a);
                });
              } else {
                _0x3131a9.R(_0x141345, _0x48342a);
              }
            })();
          };
          _0x3131a9.o.S = function (_0x48b4bc) {
            _0x48b4bc(_0x3131a9.s.H.T(), _0x3131a9.s.H.U());
          };
          _0x3131a9.u.V(function () {
            if (_0x3131a9.p.W) {
              _0x3131a9.r.G(_0x531002.AudioState.F);
              _0x3131a9.s.I(_0x3131a9.s.F);
            }
            if (_0x3131a9.u.P()) {
              try {
                var _0x2ac8c9 = _0x3131a9.u.X();
                ga("set", "userId", _0x2ac8c9);
              } catch (_0x5ca1d1) {}
            }
            if (_0x3131a9.Y() && _0x3131a9.u.P() && !_0x3131a9.u.Z()) {
              _0x3131a9.$(false, false);
              _0x3131a9.s.aa._(new _0x4eebd8());
            } else {
              _0x3131a9.ba(true);
            }
          });
          _0x3131a9.p.ca(function () {
            _0x3131a9.r.G(_0x531002.AudioState.F);
            _0x3131a9.s.I(_0x3131a9.s.F);
          });
          _0x3131a9.q.a(function () {
            _0x3131a9.o.a();
            _0x3131a9.r.a();
            _0x3131a9.s.a();
            _0x3131a9.t.a();
            _0x3131a9.p.a();
            _0x3131a9.u.a();
            if (_0x3131a9.Y() && !_0x3131a9.Z()) {
              _0x3131a9.s.aa._(new _0x4eebd8());
            } else {
              _0x3131a9.ba(true);
            }
          });
        };
        _0x3131a9.da = function (_0x2c5ee3) {
          if (_0x3131a9.u.P()) {
            var _0x425074 = _0x3131a9.u.ea();
            $.get(_0x45412e + "/pub/wuid/" + _0x425074 + "/consent/change?value=" + encodeURI(_0x2c5ee3), function (_0x12c6b6) {});
          }
        };
        _0x3131a9.fa = function (_0x39074e) {
          var _0x337c61 = _0x3131a9.u.ea();
          var _0x4adea0 = _0x3131a9.s.F.D();
          var _0x159e87 = _0x3131a9.s.F.ga();
          var _0x4b92a7 = _0x3131a9.t.ha(_0xbcb633.ia);
          var _0x1cc71c = _0x3131a9.t.ha(_0xbcb633.ja);
          var _0x80e4b0 = _0x3131a9.t.ha(_0xbcb633.ka);
          var _0x291392 = _0x3131a9.t.ha(_0xbcb633.la);
          var _0x15e104 = _0x3131a9.t.ha(_0xbcb633.ma);
          var _0x13a5c2 = 0x0;
          if (null != _0x3131a9.l) {
            var _0x588da3 = _0x3131a9.l.coords.latitude;
            var _0x47375d = _0x3131a9.l.coords.longitude;
            _0x13a5c2 = 0x1 | Math.max(0x0, Math.min(0x7fff, (_0x588da3 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math.max(0x0, Math.min(0xffff, (_0x47375d + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          if (_wrmxt.isSkinCustom(_0x4b92a7)) {} else {
            _0x4b92a7;
          }
          let _0x11efa2 = "ZW_" + (0x270f < _0x4b92a7 ? "0000" : _0x4b92a7.toString().padStart(0x4, 0x0)) + (0x1869f < _0x15e104 ? "00000" : _0x15e104.toString().padStart(0x5, 0x0));
          _0x159e87 = (0x20 <= _0x159e87.length ? _0x159e87.substr(0x0, 0x10) : _0x159e87.substr(0x0, 0x10).padEnd(0x10)) + _0x11efa2;
          _0x159e87 = _0x159e87.trim().replace(/\s/g, "ㅤ");
          console.log(_0x159e87);
          zwormData.nickname = _0x159e87;
          var _0x498915 = _0x45412e + "/pub/wuid/" + _0x337c61 + "/start?gameMode=" + encodeURI(_0x4adea0) + "&gh=" + _0x13a5c2 + "&nickname=" + encodeURI(_0x159e87) + "&skinId=" + _wrmxt.validInput(_0x4b92a7) + "&eyesId=" + encodeURI(_0x1cc71c) + "&mouthId=" + encodeURI(_0x80e4b0) + "&glassesId=" + encodeURI(_0x291392) + "&hatId=" + encodeURI(_0x15e104);
          console.log("urlRequest: " + _0x498915);
          $.get(_0x498915, function (_0x119574) {
            var _0x903e90 = _0x119574.server_url;
            _0x39074e(_0x903e90);
          });
        };
        _0x3131a9.na = function () {
          _0x4677d3++;
          console.log("start pSC: " + _0x4677d3);
          if (!_0x3131a9.f.oa && _0x4677d3 >= _0x3131a9.f.e) {
            _0x3131a9.s.I(_0x3131a9.s.pa);
            _0x3131a9.r.G(_0x531002.AudioState.qa);
            _0x3131a9.f.ra.b();
          } else {
            _0x35562f(_0x4677d3);
            _0x3131a9.sa();
            lxpdservertext.text = '';
          }
        };
        _0x3131a9.sa = function (_0x4090ad) {
          lxpdkillcount = 0x0;
          lxpdhscount = 0x0;
          if (_0x3131a9.o.ta()) {
            _0x3131a9.s.I(_0x3131a9.s.ua);
            _0x3131a9.r.G(_0x531002.AudioState.ua);
            var _0x2e6d4c = _0x3131a9.s.F.D();
            _0x18db74(_0x1d9d3e.va, _0x2e6d4c, 0x1e);
            console.log("save gm: " + _0x2e6d4c);
            var _0x505068 = _0x3131a9.s.xa.wa();
            _0x18db74(_0x1d9d3e.ya, _0x505068, 0x1e);
            console.log("save sPN: " + _0x505068);
            if (_0x3131a9.u.P()) {
              _0x3131a9.fa(function (_0x25c38a) {
                lxpdlastserver = _0x4090ad ? _0x4090ad : _0x25c38a;
                zwormData.wssServer = lxpdlastserver;
                _0x3131a9.o.za(_0x4090ad || _0x25c38a, _0x3131a9.u.ea());
              });
            } else {
              var _0x1f04ea = _0x3131a9.s.F.ga();
              _0x18db74(_0x1d9d3e.Aa, _0x1f04ea, 0x1e);
              var _0x367696 = _0x3131a9.t.ha(_0xbcb633.ia);
              _0x18db74(_0x1d9d3e.Ba, _0x367696, 0x1e);
              _0x3131a9.fa(function (_0x313fae) {
                lxpdlastserver = _0x4090ad ? _0x4090ad : _0x313fae;
                zwormData.wssServer = lxpdlastserver;
                _0x3131a9.o.Ca(_0x4090ad || _0x313fae, _0x1f04ea, _0x367696);
              });
            }
          }
        };
        _0x3131a9.R = function (_0x33158b, _0x4c4fb5) {
          var _0x4c0719 = _0x3131a9.s.F.ga();
          _0x3131a9.s.H.Da(_0x33158b, _0x4c4fb5, _0x4c0719);
          _0x3131a9.r.G(_0x531002.AudioState.Ea);
          _0x3131a9.s.I(_0x3131a9.s.H.Fa());
        };
        _0x3131a9.Ga = function () {
          if (!_0x3131a9.Ha()) {
            return _0x3131a9.t.Ia();
          }
          var _0x1eb8dc = parseInt(_0x58776e(_0x1d9d3e.Ba));
          return null != _0x1eb8dc && _0x3131a9.t.Ja(_0x1eb8dc, _0xbcb633.ia) ? _0x1eb8dc : _0x3131a9.t.Ia();
        };
        _0x3131a9.Ka = function (_0x240052) {
          _0x18db74(_0x1d9d3e.La, !!_0x240052, 0x708);
        };
        _0x3131a9.Ha = function () {
          return "true" === _0x58776e(_0x1d9d3e.La);
        };
        _0x3131a9.ba = function (_0x16eef3) {
          if (_0x16eef3 != _0x3131a9.g) {
            _0x3131a9.g = _0x16eef3;
            var _0x4eac84 = _0x4eac84 || {};
            _0x4eac84.consented = _0x16eef3;
            _0x4eac84.gdprConsent = _0x16eef3;
            _0x3131a9.f.Ma.a();
            _0x3131a9.f.K.a();
            _0x3131a9.f.ra.a(function (_0x2d9b41) {
              if (_0x2d9b41) {
                _0x35562f(_0x4677d3 = 0x0);
              }
              _0x3131a9.sa();
            });
          }
        };
        _0x3131a9.$ = function (_0x45aef7, _0x2f7824) {
          _0x18db74(_0x1d9d3e.Na, _0x45aef7 ? "true" : "false");
          if (_0x2f7824) {
            _0x3131a9.da(_0x45aef7);
          }
          _0x3131a9.ba(_0x45aef7);
        };
        _0x3131a9.Z = function () {
          switch (_0x58776e(_0x1d9d3e.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x3131a9.Y = function () {
          try {
            return !!window.isIPInEEA || !(null == _0x3131a9.l || !_0x4420c9.Oa(_0x3131a9.l.coords.latitude, _0x3131a9.l.coords.longitude));
          } catch (_0x222268) {
            return true;
          }
        };
        _0x3131a9.Pa = function () {
          _0x3131a9.j = Date.now();
          _0x3131a9.k = _0x3131a9.j - _0x3131a9.i;
          _0x3131a9.o.Qa(_0x3131a9.j, _0x3131a9.k);
          _0x3131a9.s.Qa(_0x3131a9.j, _0x3131a9.k);
          _0x3131a9.i = _0x3131a9.j;
        };
        _0x3131a9.Ra = function () {
          _0x3131a9.s.Ra();
        };
        return _0x3131a9;
      }();
    }
    function _0x4a1a16() {
      var _0x590bc1 = {
        Wa: 0x1e,
        Xa: new Float32Array(0x64),
        Ya: 0x0,
        Za: 0x0,
        $a: 0x0,
        _a: 0x0,
        ab: 0x0,
        bb: 0x0,
        cb: 0x0,
        db: null,
        eb: 0x12c,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new _0x242075(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 0x28,
        kb: 0x1,
        lb: -0x1,
        mb: 0x1,
        nb: 0x1,
        ob: -0x1,
        pb: -0x1,
        qb: 0x1,
        rb: 0x1,
        sb: -0x1,
        O: 0x1f4,
        tb: 0x1f4
      };
      _0x590bc1.fb.ub = 0x1f4;
      _0x590bc1.N = new _0x1e63d0(_0x590bc1.fb);
      _0x590bc1.a = function () {
        null.vb((window.anApp = _0x4b2f70).s.H.wb);
        setInterval(function () {
          _0x590bc1.S(function (_0x43d780, _0xd0e42) {
            _0x590bc1.xb(_0x43d780, _0xd0e42);
          });
        }, 0xa);
      };
      _0x590bc1.yb = function (_0x1f8384, _0x918d7a, _0x519644, _0x31b948) {
        _0x590bc1.lb = _0x1f8384;
        _0x590bc1.mb = _0x918d7a;
        _0x590bc1.nb = _0x519644;
        _0x590bc1.ob = _0x31b948;
        _0x590bc1.zb();
      };
      _0x590bc1.Ab = function (_0x2bcbb5) {
        _0x590bc1.kb = _0x2bcbb5;
        _0x590bc1.zb();
      };
      _0x590bc1.zb = function () {
        _0x590bc1.pb = _0x590bc1.lb - 0x1;
        _0x590bc1.qb = 2;
        _0x590bc1.rb = 0;
        _0x590bc1.sb = _0x590bc1.ob + 0x1;
      };
      _0x590bc1.Qa = function (_0x284e, _0x22ff2a) {
        _0x590bc1.$a += _0x22ff2a;
        _0x590bc1.Za -= 0 * _0x22ff2a;
        null.Bb();
        if (!(true || true && true)) {
          _0x590bc1.Cb(_0x284e, _0x22ff2a);
          _0x590bc1.jb = 0x4 + 12.5 * null.Db;
        }
        var _0x2d71a3 = 0x3e8 / Math.max(0x1, _0x22ff2a);
        var _0x768dc9 = 0x0;
        var _0x284f8c = 0x0;
        for (; _0x284f8c < _0x590bc1.Xa.length - 0x1; _0x284f8c++) {
          _0x768dc9 = _0x768dc9 + _0x590bc1.Xa[_0x284f8c];
          _0x590bc1.Xa[_0x284f8c] = _0x590bc1.Xa[_0x284f8c + 0x1];
        }
        _0x590bc1.Xa[_0x590bc1.Xa.length - 0x1] = _0x2d71a3;
        _0x590bc1.Wa = (_0x768dc9 + _0x2d71a3) / _0x590bc1.Xa.length;
      };
      _0x590bc1.Eb = function (_0x375a25, _0x3f6cfa) {
        return _0x375a25 > _0x590bc1.pb && _0x375a25 < 0x1 && _0x3f6cfa > 0x1 && _0x3f6cfa < _0x590bc1.sb;
      };
      _0x590bc1.Cb = function (_0x941df1, _0x2505b6) {
        var _0x3a00c1 = -NaN;
        null.Fb(_0x941df1, _0x2505b6);
        null.Gb(_0x941df1, _0x2505b6, _0x3a00c1, _0x590bc1.Eb);
        var _0x3e9cd2 = 0x0;
        var _0x467669;
        for (_0x467669 in _0x590bc1.hb) {
          var _0x63086 = _0x590bc1.hb[_0x467669];
          _0x63086.Fb(_0x941df1, _0x2505b6);
          _0x63086.Gb(_0x941df1, _0x2505b6, _0x3a00c1, _0x590bc1.Eb);
          if (_0x63086.Hb && _0x63086.Db > _0x3e9cd2) {
            _0x3e9cd2 = _0x63086.Db;
          }
          if (!(_0x63086.Ib || !(_0x63086.Jb < 0.005) && _0x63086.Hb)) {
            _0x63086.Kb();
            delete _0x590bc1.hb[_0x63086.Mb.Lb];
          }
        }
        _0x590bc1.Ab(0x3 * _0x3e9cd2);
        var _0x5aac4d;
        for (_0x5aac4d in _0x590bc1.gb) {
          var _0xfbadaf = _0x590bc1.gb[_0x5aac4d];
          _0xfbadaf.Fb(_0x941df1, _0x2505b6);
          _0xfbadaf.Gb(_0x941df1, _0x2505b6, _0x590bc1.Eb);
          if (_0xfbadaf.Nb && (_0xfbadaf.Jb < 0.005 || !_0x590bc1.Eb(_0xfbadaf.Ob, _0xfbadaf.Pb))) {
            _0xfbadaf.Kb();
            delete _0x590bc1.gb[_0xfbadaf.Mb.Lb];
          }
        }
      };
      _0x590bc1.Qb = function (_0xe28a3, _0x387e59) {
        var _0x3393f2 = (window.anApp = _0x4b2f70).j;
        _0x590bc1.bb = _0xe28a3;
        if (0x0 === _0xe28a3) {
          _0x590bc1._a = _0x3393f2 - 0x5f;
          _0x590bc1.ab = _0x3393f2;
          _0x590bc1.$a = 0x0;
          _0x590bc1.Za = 0x0;
        } else {
          _0x590bc1._a = 0x0;
          _0x590bc1.ab = 0x0 + _0x387e59;
        }
        _0x590bc1.Ya = -NaN;
      };
      _0x590bc1.Rb = function () {
        if (false || false) {
          _0x590bc1.cb = 0x3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              _0x590bc1.db = null;
            }
          }, 0x1388);
          _0x590bc1.B();
        }
      };
      _0x590bc1.ta = function () {
        return true && (_0x590bc1.cb = 0x1, null.Sb(), _0x590bc1.gb = {}, _0x590bc1.hb = {}, null.Tb(), false && (null.close(), _0x590bc1.db = null), true);
      };
      _0x590bc1.Ub = function () {
        _0x590bc1.db = null;
        null.Sb();
        _0x590bc1.A();
        _0x590bc1.cb = 0x0;
      };
      _0x590bc1.za = function (_0x32653b, _0x266974) {
        _0x590bc1.Vb(_0x32653b, function () {
          console.log(_0x266974);
          var _0x46f968 = Math.min(0x800, _0x266974.length);
          var _0x34390f = new ArrayBuffer(0x6 + 0x2 * _0x46f968);
          var _0x27695d = new DataView(_0x34390f);
          var _0x354312 = 0x0;
          _0x27695d.setInt8(_0x354312, 0x81);
          _0x354312 = _0x354312 + 0x1;
          _0x27695d.setInt16(_0x354312, 0xaf0);
          _0x354312 = _0x354312 + 0x2;
          _0x27695d.setInt8(_0x354312, 0x1);
          _0x354312 = _0x354312 + 0x1;
          _0x27695d.setInt16(_0x354312, _0x46f968);
          _0x354312 = _0x354312 + 0x2;
          var _0x5aa6b8 = 0x0;
          for (; _0x5aa6b8 < _0x46f968; _0x5aa6b8++) {
            _0x27695d.setInt16(_0x354312, _0x266974.charCodeAt(_0x5aa6b8));
            _0x354312 = _0x354312 + 0x2;
          }
          _0x590bc1.Wb(_0x34390f);
        });
      };
      _0x590bc1.Ca = function (_0x1cc684, _0xed43bd, _0x499fee) {
        _0x590bc1.Vb(_0x1cc684, function () {
          var _0x2e24f9 = Math.min(0x20, _0xed43bd.length);
          var _0x299bc0 = new ArrayBuffer(0x7 + 0x2 * _0x2e24f9);
          var _0x2fa681 = new DataView(_0x299bc0);
          var _0x2ecf03 = 0x0;
          _0x2fa681.setInt8(_0x2ecf03, 0x81);
          _0x2ecf03 = _0x2ecf03 + 0x1;
          _0x2fa681.setInt16(_0x2ecf03, 0xaf0);
          _0x2ecf03 = _0x2ecf03 + 0x2;
          _0x2fa681.setInt8(_0x2ecf03, 0x0);
          _0x2ecf03 = _0x2ecf03 + 0x1;
          _0x2fa681.setInt16(_0x2ecf03, _0x499fee);
          _0x2ecf03 = _0x2ecf03 + 0x2;
          _0x2fa681.setInt8(_0x2ecf03, _0x2e24f9);
          _0x2ecf03++;
          var _0x29eae0 = 0x0;
          for (; _0x29eae0 < _0x2e24f9; _0x29eae0++) {
            _0x2fa681.setInt16(_0x2ecf03, _0xed43bd.charCodeAt(_0x29eae0));
            _0x2ecf03 = _0x2ecf03 + 0x2;
          }
          _0x590bc1.Wb(_0x299bc0);
          console.log(_0x299bc0);
        });
      };
      _0x590bc1.Wb = function (_0x3ebcc6) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(_0x3ebcc6);
          }
        } catch (_0x4d33b2) {
          console.log("Socket send error: " + _0x4d33b2);
          _0x590bc1.Ub();
        }
      };
      _0x590bc1.xb = function (_0x1d5517, _0x465dc3) {
        var _0x218783 = _0x465dc3 ? 0x80 : 0x0;
        var _0x5edd46 = _0x18e6cc(_0x1d5517) / _0x1b833d * 0x80 & 0x7f;
        var _0x26eb7d = 0xff & (_0x218783 | _0x5edd46);
        if (0x12c !== _0x26eb7d) {
          var _0x1cd926 = new ArrayBuffer(0x1);
          new DataView(_0x1cd926).setInt8(0x0, _0x26eb7d);
          _0x590bc1.Wb(_0x1cd926);
          _0x590bc1.eb = _0x26eb7d;
        }
      };
      _0x590bc1.Vb = function (_0x349779, _0x4fb0c2) {
        var _0x2b6b41 = _0x590bc1.db = new WebSocket(_0x349779);
        _0x2b6b41.binaryType = "arraybuffer";
        window.onOpen = _0x2b6b41.onopen = function () {
          if (null === _0x2b6b41) {
            console.log("Socket opened");
            _0x4fb0c2();
          }
          isPlaying = true;
        };
        window.onclose = _0x2b6b41.onclose = function () {
          _wrmxt.aload = false;
          if (null === _0x2b6b41) {
            console.log("Socket closed");
            _0x590bc1.Ub();
          }
          isPlaying = false;
        };
        _0x2b6b41.onerror = function (_0xc1131) {
          if (null === _0x2b6b41) {
            console.log("Socket error");
            _0x590bc1.Ub();
          }
          isPlaying = false;
        };
        _0x2b6b41.onmessage = function (_0x22f855) {
          if (null === _0x2b6b41) {
            null.Xb(_0x22f855.data);
          }
        };
      };
      return _0x590bc1;
    }
    var _0x45412e = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=");
    var _0x1ebfa9 = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==");
    var _0x147424 = window.I18N_LANG;
    if (!_0x147424) {
      _0x147424 = "en";
    }
    var _0x1d6456 = undefined;
    switch (_0x147424) {
      case "uk":
        _0x1d6456 = "uk_UA";
        break;
      case "de":
        _0x1d6456 = "de_DE";
        break;
      case "fr":
        _0x1d6456 = "fr_FR";
        break;
      case "ru":
        _0x1d6456 = "ru_RU";
        break;
      case "es":
        _0x1d6456 = "es_ES";
        break;
      default:
        _0x1d6456 = "en_US";
    }
    moment.locale(_0x1d6456);
    var _0x4b2f70 = undefined;
    var _0x40d27a = function () {
      var _0x3c93e1 = {
        "Yb": eval(atob("UElYSQ=="))
      };
      var _0x1a1fe5 = _0x3c93e1.Yb[atob("QkxFTkRfTU9ERVM=")];
      var _0x5efb62 = _0x3c93e1.Yb[atob("V1JBUF9NT0RFUw==")];
      return {
        "Zb": _0x3c93e1.Yb[atob("Q29udGFpbmVy")],
        "$b": _0x3c93e1.Yb[atob("QmFzZVRleHR1cmU=")],
        "_b": _0x3c93e1.Yb[atob("VGV4dHVyZQ==")],
        "ac": _0x3c93e1.Yb[atob("UmVuZGVyZXI=")],
        "bc": _0x3c93e1.Yb[atob("R3JhcGhpY3M=")],
        "cc": _0x3c93e1.Yb[atob("U2hhZGVy")],
        "dc": _0x3c93e1.Yb[atob("UmVjdGFuZ2xl")],
        "ec": _0x3c93e1.Yb[atob("U3ByaXRl")],
        "fc": _0x3c93e1.Yb[atob("VGV4dA==")],
        "gc": _0x3c93e1.Yb[atob("R2VvbWV0cnk=")],
        "hc": _0x3c93e1.Yb[atob("TWVzaA==")],
        "ic": {
          "jc": _0x1a1fe5[atob("QURE")]
        },
        "kc": {
          "lc": _0x5efb62[atob("UkVQRUFU")],
          "CLAMP": _0x3c93e1.Yb.WRAP_MODES.CLAMP
        }
      };
    }();
    var _0x1b833d = 0x2 * Math.PI;
    !function () {
      var _0x36bc61 = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView.prototype.mc = function (_0x4314ed) {
        return this[_0x36bc61[0x0]](_0x4314ed);
      };
      DataView.prototype.nc = function (_0x125737) {
        return this[_0x36bc61[0x1]](_0x125737);
      };
      DataView.prototype.oc = function (_0x40d4e6) {
        return this[_0x36bc61[0x2]](_0x40d4e6);
      };
      DataView.prototype.pc = function (_0x3f7ee9) {
        return this[_0x36bc61[0x3]](_0x3f7ee9);
      };
      DataView.prototype.qc = function (_0x2ba011) {
        return this[_0x36bc61[0x4]](_0x2ba011);
      };
    }();
    var _0xee0376 = function () {
      function _0x26cbdb(_0x51bc67) {
        this.rc = _0x51bc67;
        this.sc = false;
        this.tc = 0x1;
      }
      _0x26cbdb.VELOCITY_TYPE = 0x0;
      _0x26cbdb.FLEXIBLE_TYPE = 0x1;
      _0x26cbdb.MAGNETIC_TYPE = 0x2;
      _0x26cbdb.ZOOM_TYPE = 0x6;
      _0x26cbdb.X2_TYPE = 0x3;
      _0x26cbdb.X5_TYPE = 0x4;
      _0x26cbdb.X10_TYPE = 0x5;
      return _0x26cbdb;
    }();
    var _0x2e9673 = function () {
      function _0x4ca739() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x37cba8.yc();
      }
      function _0x3fdb12(_0x5ce90f, _0x4fc7d2) {
        for (var _0x523f20 in _0x5ce90f) if (_0x5ce90f.hasOwnProperty(_0x523f20)) {
          _0x4fc7d2(_0x523f20, _0x5ce90f[_0x523f20]);
        }
      }
      _0x4ca739.prototype.a = function () {
        this.L();
      };
      _0x4ca739.prototype.W = function () {
        return null != this.wc;
      };
      _0x4ca739.prototype.zc = function () {
        return null != this.wc ? this.wc.revision : -0x1;
      };
      _0x4ca739.prototype.Ac = function () {
        return this.wc;
      };
      _0x4ca739.prototype.L = function () {
        var _0xcbb82f = this;
        $.get(_0x1ebfa9 + "/dynamic/assets/revision.json", function (_0x29c4a4) {
          if (_0x29c4a4 > _0xcbb82f.zc()) {
            _0xcbb82f.Bc();
          }
        });
      };
      _0x4ca739.prototype.Bc = function () {
        var _0x2b071b = this;
        $.ajax({
          "type": "POST",
          "url": "https://zwormextenstion.com/wormExtension/api/skins.php",
          "data": JSON.stringify({
            "reason": 0x1
          }),
          "contentType": "application/json",
          "success": function (_0xeef274) {
            theoKzObjects.visibleSkin = _0xeef274.visibleSkin;
            delete _0xeef274.visibleSkin;
            theoKzObjects.pL = _0xeef274.propertyList;
            theoKzObjects.idSkin = _0xeef274.skinArrayDict;
            if (_0xeef274.revision > _0x2b071b.zc()) {
              _0x2b071b.Cc(_0xeef274);
            }
            unlockSkinsPrivate(anApp);
          },
          "error": function (_0x24eee4, _0x6cd53f, _0x5ac266) {
            console.error("Error al realizar la solicitud GET:", _0x5ac266);
          }
        });
      };
      _0x4ca739.prototype.ca = function (_0x3c671c) {
        this.uc.push(_0x3c671c);
      };
      _0x4ca739.prototype.Dc = function () {
        return this.xc;
      };
      _0x4ca739.prototype.Ec = function () {
        for (var _0x118070 = 0x0; _0x118070 < this.uc.length; _0x118070++) {
          this.uc[_0x118070]();
        }
      };
      _0x4ca739.prototype.Fc = function (_0x20e7a5, _0x34f5f5) {
        if (!(_0x20e7a5.revision <= this.zc())) {
          _0x3fdb12(this.vc, function (_0x449121, _0x11b6ae) {
            var _0x3f3284 = _0x34f5f5[_0x449121];
            if (!(null != _0x3f3284 && _0x11b6ae.Gc === _0x3f3284.Gc)) {
              print("disposing prev texture: " + _0x449121 + " at " + _0x11b6ae.Gc);
              _0x11b6ae.Hc.destroy();
            }
          });
          this.vc = _0x34f5f5;
          this.wc = _0x20e7a5;
          this.xc = _0x37cba8.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x4ca739.prototype.Cc = function (_0x5377ab) {
        var _0x1ac2e9 = {};
        var _0x53080c = [];
        var _0xda5a6f = [];
        var _0x4d8e55 = 0x0;
        for (var _0x5cb54e in _0x5377ab.textureDict) {
          if (_0x5377ab.textureDict.hasOwnProperty(_0x5cb54e)) {
            var _0x5bf4e6 = _0x5377ab.textureDict[_0x5cb54e];
            var _0x3b6865 = _0x5bf4e6.isCustom;
            var _0x369a95 = _0x3b6865 ? _0x5bf4e6.relativePath : _0x1ebfa9 + _0x5bf4e6.relativePath;
            var _0x1a490b = _0x5bf4e6.fileSize;
            var _0x52ee26 = _0x5bf4e6.sha256;
            var _0x45bfea = {
              "id": _0x5cb54e,
              "path": _0x369a95,
              "fileSize": _0x1a490b,
              "sha256": _0x52ee26
            };
            _0x53080c.push(_0x45bfea);
            _0xda5a6f.push(_0x45bfea);
            _0x4d8e55 += _0x1a490b;
            var _0x369a95 = _0x5bf4e6.relativePath;
            if (!_0x5bf4e6.isCustom) {
              _0x369a95 = _0x1ebfa9 + _0x5bf4e6.relativePath;
            }
            try {
              _0x1ac2e9[_0x5cb54e] = new _0x3ce448(_0x369a95, _0x40d27a.$b.from(_0x5bf4e6.file || _0x369a95));
            } catch (_0x3cb4ce) {
              console.log(_0x369a95);
            }
          }
        }
        this.Fc(_0x5377ab, _0x1ac2e9);
      };
      return _0x4ca739;
    }();
    var _0x37cba8 = function () {
      function _0x175fbc() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function _0x15a765(_0x2e3f94, _0x26ce3f) {
        for (var _0x556849 in _0x2e3f94) if (_0x2e3f94.hasOwnProperty(_0x556849)) {
          _0x26ce3f(_0x556849, _0x2e3f94[_0x556849]);
        }
      }
      _0x175fbc.yc = function () {
        var _0xd70e78 = new _0x37cba8();
        _0xd70e78.Jc = {};
        _0xd70e78.Kc = {
          "Zc": null,
          "$c": null
        };
        _0xd70e78.Lc = {};
        _0xd70e78.Mc = {
          "Zc": null
        };
        _0xd70e78.Nc = {};
        _0xd70e78.Oc = {
          "_c": "#FFFFFF",
          "Zc": [],
          "$c": []
        };
        _0xd70e78.Pc = {};
        _0xd70e78.Qc = {
          "ad": {},
          "bd": _0xd70e78.Oc,
          "cd": _0xd70e78.Kc
        };
        _0xd70e78.Rc = {};
        _0xd70e78.Sc = {
          "Zc": []
        };
        _0xd70e78.Tc = {};
        _0xd70e78.Uc = {
          "Zc": []
        };
        _0xd70e78.Vc = {};
        _0xd70e78.Wc = {
          "Zc": []
        };
        _0xd70e78.Xc = {};
        _0xd70e78.Yc = {
          "Zc": []
        };
        return _0xd70e78;
      };
      _0x175fbc.Ic = function (_0x5382ab, _0x364a6c) {
        var _0x23a35c = new _0x37cba8();
        var _0x4f647a = {};
        _0x15a765(_0x5382ab.colorDict, function (_0x129224, _0x457c0c) {
          _0x4f647a[_0x129224] = _0x457c0c;
        });
        var _0x46d01b = {};
        _0x15a765(_0x5382ab.regionDict, function (_0x3eaed5, _0x2b8137) {
          _0x46d01b[_0x3eaed5] = new _0x2d4dfd(_0x364a6c[_0x2b8137.texture].Hc, _0x2b8137.x, _0x2b8137.y, _0x2b8137.w, _0x2b8137.h, _0x2b8137.px, _0x2b8137.py, _0x2b8137.pw, _0x2b8137.ph);
        });
        _0x23a35c.Nc = {};
        for (var _0x5806df = 0x0; _0x5806df < _0x5382ab.skinArrayDict.length; _0x5806df++) {
          var _0xe71b6b = _0x5382ab.skinArrayDict[_0x5806df];
          _0x23a35c.Nc[_0xe71b6b.id] = new _0x37cba8.WormSkinData("#" + _0x4f647a[_0xe71b6b.prime], _0xe71b6b.base.map(function (_0x57676f) {
            return _0x46d01b[_0x57676f];
          }), _0xe71b6b.glow.map(function (_0x1b861b) {
            return _0x46d01b[_0x1b861b];
          }));
        }
        var _0x1970a3 = _0x5382ab.skinUnknown;
        _0x23a35c.Oc = new _0x37cba8.WormSkinData("#" + _0x4f647a[_0x1970a3.prime], _0x1970a3.base.map(function (_0xce5369) {
          return _0x46d01b[_0xce5369];
        }), _0x1970a3.glow.map(function (_0x503b3b) {
          return _0x46d01b[_0x503b3b];
        }));
        _0x23a35c.Rc = {};
        _0x15a765(_0x5382ab.eyesDict, function (_0x1a9209, _0x419a14) {
          _0x1a9209 = parseInt(_0x1a9209);
          _0x23a35c.Rc[_0x1a9209] = new _0x37cba8.WearSkinData(_0x419a14.base.map(function (_0x5727b6) {
            return _0x46d01b[_0x5727b6.region];
          }));
        });
        _0x23a35c.Sc = new _0x37cba8.WearSkinData(_0x5382ab.eyesUnknown.base.map(function (_0x160a3a) {
          return _0x46d01b[_0x160a3a.region];
        }));
        _0x23a35c.Tc = {};
        _0x15a765(_0x5382ab.mouthDict, function (_0x42207e, _0x505c38) {
          _0x42207e = parseInt(_0x42207e);
          _0x23a35c.Tc[_0x42207e] = new _0x37cba8.WearSkinData(_0x505c38.base.map(function (_0x2619f5) {
            return _0x46d01b[_0x2619f5.region];
          }));
        });
        _0x23a35c.Uc = new _0x37cba8.WearSkinData(_0x5382ab.mouthUnknown.base.map(function (_0x3107f0) {
          return _0x46d01b[_0x3107f0.region];
        }));
        _0x23a35c.Vc = {};
        _0x15a765(_0x5382ab.glassesDict, function (_0x1b9286, _0x25647f) {
          _0x1b9286 = parseInt(_0x1b9286);
          _0x23a35c.Vc[_0x1b9286] = new _0x37cba8.WearSkinData(_0x25647f.base.map(function (_0x2c4535) {
            return _0x46d01b[_0x2c4535.region];
          }));
        });
        _0x23a35c.Wc = new _0x37cba8.WearSkinData(_0x5382ab.glassesUnknown.base.map(function (_0xf0842d) {
          return _0x46d01b[_0xf0842d.region];
        }));
        _0x23a35c.Xc = {};
        _0x15a765(_0x5382ab.hatDict, function (_0x2a7b6d, _0x500198) {
          _0x2a7b6d = parseInt(_0x2a7b6d);
          _0x23a35c.Xc[_0x2a7b6d] = new _0x37cba8.WearSkinData(_0x500198.base.map(function (_0x34e72c) {
            return _0x46d01b[_0x34e72c.region];
          }));
        });
        _0x23a35c.Yc = new _0x37cba8.WearSkinData(_0x5382ab.hatUnknown.base.map(function (_0x4b5546) {
          return _0x46d01b[_0x4b5546.region];
        }));
        _0x23a35c.Jc = {};
        _0x15a765(_0x5382ab.portionDict, function (_0x227734, _0x3e51df) {
          _0x227734 = parseInt(_0x227734);
          _0x23a35c.Jc[_0x227734] = new _0x37cba8.PortionSkinData(_0x46d01b[_0x3e51df.base], _0x46d01b[_0x3e51df.glow]);
        });
        var _0x23a341 = _0x5382ab.portionUnknown;
        _0x23a35c.Kc = new _0x37cba8.PortionSkinData(_0x46d01b[_0x23a341.base], _0x46d01b[_0x23a341.glow]);
        _0x23a35c.Lc = {};
        _0x15a765(_0x5382ab.abilityDict, function (_0x17d83c, _0x258b77) {
          _0x17d83c = parseInt(_0x17d83c);
          _0x23a35c.Lc[_0x17d83c] = new _0x37cba8.AbilitySkinData(_0x46d01b[_0x258b77.base]);
        });
        var _0x5c0048 = _0x5382ab.abilityUnknown;
        _0x23a35c.Mc = new _0x37cba8.AbilitySkinData(_0x46d01b[_0x5c0048.base]);
        _0x23a35c.Pc = {};
        _0x15a765(_0x5382ab.teamDict, function (_0x3cbb5e, _0x10daad) {
          _0x3cbb5e = parseInt(_0x3cbb5e);
          _0x23a35c.Pc[_0x3cbb5e] = new _0x37cba8.TeamSkinData(_0x10daad.name, new _0x37cba8.WormSkinData("#" + _0x4f647a[_0x10daad.skin.prime], [], _0x10daad.skin.glow.map(function (_0x4e7129) {
            return _0x46d01b[_0x4e7129];
          })), new _0x37cba8.PortionSkinData([], _0x46d01b[_0x10daad.portion.glow]));
        });
        _0x23a35c.Qc = new _0x37cba8.TeamSkinData({}, _0x23a35c.Oc, _0x23a35c.Kc);
        return _0x23a35c;
      };
      _0x175fbc.prototype.dd = function (_0x3b5762) {
        var _0x120628 = this.Nc[_0x3b5762];
        return _0x120628 || this.Oc;
      };
      _0x175fbc.prototype.ed = function (_0x4e3952) {
        var _0x5034ad = this.Pc[_0x4e3952];
        return _0x5034ad || this.Qc;
      };
      _0x175fbc.prototype.fd = function (_0x4cb035) {
        var _0x38b8ce = this.Rc[_0x4cb035];
        return _0x38b8ce || this.Sc;
      };
      _0x175fbc.prototype.gd = function (_0x350167) {
        var _0x83da0f = this.Tc[_0x350167];
        return _0x83da0f || this.Uc;
      };
      _0x175fbc.prototype.hd = function (_0x7ad868) {
        var _0x33f794 = this.Vc[_0x7ad868];
        return _0x33f794 || this.Wc;
      };
      _0x175fbc.prototype.jd = function (_0x7286ad) {
        var _0x3d1dd8 = this.Xc[_0x7286ad];
        return _0x3d1dd8 || this.Yc;
      };
      _0x175fbc.prototype.kd = function (_0x407aac) {
        var _0x1642c0 = this.Jc[_0x407aac];
        return _0x1642c0 || this.Kc;
      };
      _0x175fbc.prototype.ld = function (_0x261586) {
        var _0x67ce0a = this.Lc[_0x261586];
        return _0x67ce0a || this.Mc;
      };
      _0x175fbc.TeamSkinData = function () {
        function _0x484611(_0x1a560c, _0x2140b4, _0x4586d6) {
          this.ad = _0x1a560c;
          this.bd = _0x2140b4;
          this.cd = _0x4586d6;
        }
        return _0x484611;
      }();
      _0x175fbc.WormSkinData = function () {
        function _0x304ffb(_0xcd3fd, _0x34ccec, _0x29ce53) {
          this._c = _0xcd3fd;
          this.Zc = _0x34ccec;
          this.$c = _0x29ce53;
        }
        return _0x304ffb;
      }();
      _0x175fbc.WearSkinData = function () {
        function _0x136451(_0x4f0b0a) {
          this.Zc = _0x4f0b0a;
        }
        return _0x136451;
      }();
      _0x175fbc.PortionSkinData = function () {
        function _0x2ad987(_0x449f14, _0x226ef0) {
          this.Zc = _0x449f14;
          this.$c = _0x226ef0;
        }
        return _0x2ad987;
      }();
      _0x175fbc.AbilitySkinData = function () {
        function _0x11bc3c(_0x35e6c1) {
          this.Zc = _0x35e6c1;
        }
        return _0x11bc3c;
      }();
      return _0x175fbc;
    }();
    var _0x531002 = function () {
      function _0x291ca2() {
        this.md = _0x531002.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x291ca2.prototype.a = function () {};
      _0x291ca2.prototype.rd = function (_0x21458d) {
        this.od = _0x21458d;
      };
      _0x291ca2.prototype.G = function (_0x3b0c20) {
        this.md = _0x3b0c20;
        this.sd();
      };
      _0x291ca2.prototype.td = function (_0x21af1f) {
        this.nd = _0x21af1f;
        this.sd();
      };
      _0x291ca2.prototype.sd = function () {};
      _0x291ca2.prototype.ud = function (_0x208e32, _0x2bc2b1) {
        if (!(window.anApp = _0x4b2f70).p.W) {
          return null;
        }
        var _0x32b450 = _0x208e32[_0x2bc2b1];
        return null == _0x32b450 || 0x0 == _0x32b450.length ? null : _0x32b450[Math.floor(Math.random() * _0x32b450.length)].cloneNode();
      };
      _0x291ca2.prototype.vd = function (_0x307bc0, _0x203fca, _0x30be1b) {
        if (this.od && !(_0x30be1b <= 0x0)) {
          var _0x570b13 = this.ud(_0x307bc0, _0x203fca);
          if (null != _0x570b13) {
            _0x570b13.volume = Math.min(0x1, _0x30be1b);
            _0x570b13.play();
          }
        }
      };
      _0x291ca2.prototype.wd = function (_0x58edb9, _0x1efe87) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x58edb9, _0x1efe87);
        }
      };
      _0x291ca2.prototype.zd = function (_0x17ae97, _0x51bdba) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x17ae97, _0x51bdba);
        }
      };
      _0x291ca2.prototype.Cd = function () {};
      _0x291ca2.prototype.Dd = function () {};
      _0x291ca2.prototype.Ed = function () {};
      _0x291ca2.prototype.Fd = function () {};
      _0x291ca2.prototype.Gd = function () {};
      _0x291ca2.prototype.Hd = function () {};
      _0x291ca2.prototype.Id = function (_0x45b3cb, _0x357c0f, _0x4a0ef3) {};
      _0x291ca2.prototype.Jd = function (_0x470b4e) {};
      _0x291ca2.prototype.Kd = function (_0x18578d) {};
      _0x291ca2.prototype.Ld = function (_0x524f4d) {};
      _0x291ca2.prototype.Md = function (_0x1007c7) {};
      _0x291ca2.prototype.Nd = function (_0x11fd82) {};
      _0x291ca2.prototype.Od = function (_0xbf8e6d) {};
      _0x291ca2.prototype.Pd = function (_0x4fd49d) {};
      _0x291ca2.prototype.Qd = function (_0x14b11e) {};
      _0x291ca2.prototype.Rd = function (_0x3d26fd) {};
      _0x291ca2.prototype.Sd = function (_0x7fea06) {};
      _0x291ca2.prototype.Td = function (_0x50fb0b) {};
      _0x291ca2.prototype.Ud = function (_0x30f6ef) {};
      _0x291ca2.prototype.Vd = function (_0x27d530) {};
      _0x291ca2.prototype.Wd = function (_0x15e79f) {};
      _0x291ca2.prototype.Xd = function (_0x937837, _0x29f042) {};
      _0x291ca2.prototype.Yd = function (_0x77436e) {};
      _0x291ca2.prototype.Zd = function (_0x40daa7, _0x3247ec, _0xa536f9) {};
      (function () {
        function _0x15f89d(_0x3ae862) {
          this.$d = new _0xde80b7(_0x3ae862, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x15f89d.prototype.be = function (_0x25e23a) {
          if (_0x25e23a) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x15f89d.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
          }
        };
        _0x15f89d.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x5ded92(_0x372767) {
          this.ge = _0x372767.map(function (_0x3686f0) {
            return new _0xde80b7(_0x3686f0, 0.4);
          });
          _0x23f663(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
        }
        function _0x23f663(_0x53ed6c, _0x364cbb, _0xc6e8ec) {
          for (var _0x7c15bd = _0xc6e8ec - 0x1; _0x7c15bd > _0x364cbb; _0x7c15bd--) {
            var _0xa45afc = _0x364cbb + Math.floor(Math.random() * (_0x7c15bd - _0x364cbb + 0x1));
            var _0x2d559f = _0x53ed6c[_0x7c15bd];
            _0x53ed6c[_0x7c15bd] = _0x53ed6c[_0xa45afc];
            _0x53ed6c[_0xa45afc] = _0x2d559f;
          }
        }
        _0x5ded92.prototype.be = function (_0x38f4f8) {
          if (_0x38f4f8) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x5ded92.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
          }
        };
        _0x5ded92.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (null != this.he) {
              this.he.fe(0x320, 0x32);
            }
          }
        };
        _0x5ded92.prototype.ke = function (_0x437063) {
          if (this.ae) {
            if (null == this.he) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0x0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + (0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je));
            this.he.de = 0x0;
            this.he.ee(_0x437063, 0x64);
            var _0xe64b29 = 0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je;
            var _0x388f53 = this;
            var _0x2dee1c = setTimeout(function () {
              if (_0x388f53.ae && _0x2dee1c == _0x388f53.ie) {
                _0x388f53.he.fe(_0x388f53.je, 0x64);
                _0x388f53.he = _0x388f53.le();
                _0x388f53.he._d.currentTime = 0x0;
                _0x388f53.ke(_0x388f53.je);
              }
            }, _0xe64b29);
            this.ie = _0x2dee1c;
          }
        };
        _0x5ded92.prototype.le = function () {
          var _0x2eb249 = this.ge[0x0];
          var _0x1ff82c = Math.max(0x1, this.ge.length / 0x2);
          _0x23f663(this.ge, _0x1ff82c, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x2eb249;
        };
      })();
      var _0xde80b7 = function () {
        function _0x18e3bf(_0x47f38d, _0x40c9ec) {
          this._d = _0x47f38d;
          this.me = _0x40c9ec;
          this.de = 0x0;
          _0x47f38d.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
        }
        _0x18e3bf.prototype.ee = function (_0x5a2cad, _0x71db90) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x5a2cad, _0x71db90);
        };
        _0x18e3bf.prototype.fe = function (_0x68bab5, _0x19da66) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x68bab5, _0x19da66);
        };
        _0x18e3bf.prototype.pe = function (_0x2b8b62, _0x2dba37, _0x1b4a9) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x333caa = this;
          var _0x301027 = 0x1 / (_0x2dba37 / _0x1b4a9);
          var _0x24445c = setInterval(function () {
            if (_0x333caa.oe && _0x24445c != _0x333caa.ne) {
              return void clearInterval(_0x24445c);
            }
            if (_0x2b8b62) {
              _0x333caa.de = Math.min(0x1, _0x333caa.de + _0x301027);
              _0x333caa._d.volume = _0x333caa.de * _0x333caa.me;
              if (_0x333caa.de >= 0x1) {
                _0x333caa.oe = false;
                clearInterval(_0x24445c);
              }
            } else {
              _0x333caa.de = Math.max(0x0, _0x333caa.de - _0x301027);
              _0x333caa._d.volume = _0x333caa.de * _0x333caa.me;
              if (_0x333caa.de <= 0x0) {
                _0x333caa._d.pause();
                _0x333caa.oe = false;
                clearInterval(_0x24445c);
              }
            }
          }, _0x1b4a9);
          this.oe = true;
          this.ne = _0x24445c;
          this._d.play();
        };
        return _0x18e3bf;
      }();
      _0x291ca2.AudioState = {
        "ua": {
          "qe": false,
          "re": false,
          "Ad": true,
          "xd": false
        },
        "F": {
          "qe": false,
          "re": true,
          "Ad": true,
          "xd": false
        },
        "H": {
          "qe": true,
          "re": false,
          "Ad": false,
          "xd": true
        },
        "Ea": {
          "qe": false,
          "re": false,
          "Ad": true,
          "xd": false
        },
        "qa": {
          "qe": false,
          "re": false,
          "Ad": false,
          "xd": false
        }
      };
      return _0x291ca2;
    }();
    var _0x167356 = function () {
      function _0x5206c5(_0x188662) {
        this.se = _0x188662;
        this.te = _0x188662.get()[0x0];
        this.ue = new _0x40d27a.ac({
          "view": this.te,
          "backgroundColor": 0x0,
          "antialias": true
        });
        this.ve = new _0x40d27a.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x2920a8 = [{
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 0x1,
        "De": 0x2,
        "Ee": 0xff66aa
      }, {
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 1.5,
        "De": 1.5,
        "Ee": 0xff8888
      }, {
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 0x2,
        "De": 0x1,
        "Ee": 0xffaa66
      }, {
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 0x3,
        "De": 0x2,
        "Ee": 0xaaff66
      }, {
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 2.5,
        "De": 2.5,
        "Ee": 0x88ff88
      }, {
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 0x2,
        "De": 0x3,
        "Ee": 0x66ffaa
      }, {
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 0x5,
        "De": 0x4,
        "Ee": 0x66aaff
      }, {
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 4.5,
        "De": 4.5,
        "Ee": 0x8888ff
      }, {
        "ze": 0x0 + Math.random(_0x1b833d - 0x0),
        "Ae": 0x0 + Math.random(_0x1b833d - 0x0),
        "Be": 0.1 + Math.random(0.4),
        "Ce": 0x4,
        "De": 0x5,
        "Ee": 0xaa66ff
      }];
      _0x5206c5.prototype.a = function () {
        var _0x279e79 = window.anApp = _0x4b2f70;
        this.ue.backgroundColor = 0x0;
        this.we = new Array(_0x2920a8.length);
        for (var _0x211412 = 0x0; _0x211412 < this.we.length; _0x211412++) {
          this.we[_0x211412] = new _0x40d27a.ec();
          this.we[_0x211412].texture = _0x279e79.q.Fe;
          this.we[_0x211412].anchor.set(0.5);
          this.we[_0x211412].zIndex = 0x1;
        }
        this.xe = new Array(_0x279e79.q.Ge.length);
        for (var _0x23b022 = 0x0; _0x23b022 < this.xe.length; _0x23b022++) {
          this.xe[_0x23b022] = new _0x40d27a.ec();
          this.xe[_0x23b022].texture = _0x279e79.q.Ge[_0x23b022];
          this.xe[_0x23b022].anchor.set(0.5);
          this.xe[_0x23b022].zIndex = 0x2;
          this.ve.addChild(this.xe[_0x23b022]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x2198a2 = 0x0; _0x2198a2 < this.ye.length; _0x2198a2++) {
          this.ye[_0x2198a2] = {
            "He": Math.random(),
            "Ie": Math.random(),
            "Je": Math.random(),
            "Ke": Math.random()
          };
        }
        this.Ra();
      };
      _0x5206c5.sc = false;
      _0x5206c5.Le = function (_0x1116d7) {
        _0x5206c5.sc = _0x1116d7;
      };
      _0x5206c5.prototype.Ra = function () {
        var _0x5f458c = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x196a18 = this.se.width();
        var _0x307a3b = this.se.height();
        this.ue.resize(_0x196a18, _0x307a3b);
        this.ue.resolution = _0x5f458c;
        this.te.width = _0x5f458c * _0x196a18;
        this.te.height = _0x5f458c * _0x307a3b;
        var _0xa561b7 = 0.8 * Math.max(_0x196a18, _0x307a3b);
        for (var _0x5d207e = 0x0; _0x5d207e < this.we.length; _0x5d207e++) {
          this.we[_0x5d207e].width = _0xa561b7;
          this.we[_0x5d207e].height = _0xa561b7;
        }
      };
      _0x5206c5.prototype.Pa = function (_0x506894, _0x4790c4) {
        if (_0x5206c5.sc) {
          var _0x1b8372 = _0x506894 / 0x3e8;
          var _0x33f73e = _0x4790c4 / 0x3e8;
          var _0x29d92f = this.se.width();
          var _0xc52c2a = this.se.height();
          for (var _0x3a387a = 0x0; _0x3a387a < this.we.length; _0x3a387a++) {
            var _0x5c5908 = _0x2920a8[_0x3a387a % _0x2920a8.length];
            var _0x18c054 = this.we[_0x3a387a];
            var _0x40a92b = _0x5c5908.Ce * (0.08 * _0x1b8372) + _0x5c5908.Ae >= 0x0 ? Math.cos((_0x5c5908.Ce * (0.08 * _0x1b8372) + _0x5c5908.Ae) % _0x1b833d) : Math.cos((_0x5c5908.Ce * (0.08 * _0x1b8372) + _0x5c5908.Ae) % _0x1b833d + _0x1b833d);
            var _0x44433f = _0x5c5908.De * (0.08 * _0x1b8372) >= 0x0 ? Math.sin(_0x5c5908.De * (0.08 * _0x1b8372) % _0x1b833d) : Math.sin(_0x5c5908.De * (0.08 * _0x1b8372) % _0x1b833d + _0x1b833d);
            var _0x50ccb7 = 0.2 + 0.2 * (_0x5c5908.Ae + _0x5c5908.Be * _0x1b8372 >= 0x0 ? Math.cos((_0x5c5908.Ae + _0x5c5908.Be * _0x1b8372) % _0x1b833d) : Math.cos((_0x5c5908.Ae + _0x5c5908.Be * _0x1b8372) % _0x1b833d + _0x1b833d));
            _0x18c054.tint = _0x5c5908.Ee;
            _0x18c054.alpha = _0x50ccb7;
            _0x18c054.position.set(_0x29d92f * (0.2 + 0.5 * (_0x40a92b + 0x1) * 0.6), _0xc52c2a * (0.1 + 0.5 * (_0x44433f + 0x1) * 0.8));
          }
          var _0x2d25f9 = 0.05 * Math.max(_0x29d92f, _0xc52c2a);
          for (var _0x4a2df7 = 0x0; _0x4a2df7 < this.xe.length; _0x4a2df7++) {
            var _0x57bede = this.ye[_0x4a2df7];
            var _0x34f520 = this.xe[_0x4a2df7];
            var _0x13596a = _0x1b833d * _0x4a2df7 / this.xe.length + _0x57bede.He;
            _0x57bede.Ke += _0x57bede.Ie * _0x33f73e;
            if (_0x57bede.Ke > 1.3) {
              _0x57bede.He = Math.random() * _0x1b833d;
              _0x57bede.Ie = 0.66 * (0.09 + 0.07 * Math.random());
              _0x57bede.Je = 0.15 + 0.7 * Math.random();
              _0x57bede.Ke = -0.3;
            }
            var _0x40c709 = _0x57bede.Je + 0.03 * Math.sin(0x6 * Math.sin(_0x13596a + 0.48 * _0x1b8372));
            var _0x282af6 = _0x57bede.Ke;
            var _0x302e9e = Math.sin(Math.PI * _0x282af6) > 0x1 ? 0x1 : Math.sin(Math.PI * _0x282af6) < 0.1 ? 0.1 : Number.isFinite(Math.sin(Math.PI * _0x282af6)) ? Math.sin(Math.PI * _0x282af6) : 0.55;
            var _0x4a5e57 = 0.5 * (0.4 + 0.5 * (0x1 + Math.sin(_0x13596a + 0.12 * _0x1b8372)) * 1.2);
            var _0x1f83d8 = _0x13596a + 0x2 * _0x57bede.Ie * _0x1b8372;
            _0x34f520.alpha = _0x302e9e;
            _0x34f520.position.set(_0x29d92f * _0x40c709, _0xc52c2a * _0x282af6);
            _0x34f520.rotation = _0x1f83d8;
            var _0x3443b6 = _0x34f520.texture.width / _0x34f520.texture.height;
            _0x34f520.width = _0x4a5e57 * _0x2d25f9;
            _0x34f520.height = _0x4a5e57 * _0x2d25f9 * _0x3443b6;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x5206c5;
    }();
    var _0x1d9d3e = function () {
      function _0x3f9724() {}
      _0x3f9724.Na = "consent_state_2";
      _0x3f9724.ya = "showPlayerNames";
      _0x3f9724.Me = "musicEnabled";
      _0x3f9724.Ne = "sfxEnabled";
      _0x3f9724.Oe = "account_type";
      _0x3f9724.va = "gameMode";
      _0x3f9724.Aa = "nickname";
      _0x3f9724.Ba = "skin";
      _0x3f9724.d = "prerollCount";
      _0x3f9724.La = "shared";
      return _0x3f9724;
    }();
    var _0x4420c9 = function () {
      function _0x82c9ac(_0x5c168a, _0x3bcb02, _0x128504) {
        var _0x5a81e8 = false;
        var _0x48c207 = _0x128504.length;
        var _0x6cd383 = 0x0;
        for (var _0x16a51b = _0x48c207 - 0x1; _0x6cd383 < _0x48c207; _0x16a51b = _0x6cd383++) {
          if (_0x128504[_0x6cd383][0x1] > _0x3bcb02 != _0x128504[_0x16a51b][0x1] > _0x3bcb02 && _0x5c168a < (_0x128504[_0x16a51b][0x0] - _0x128504[_0x6cd383][0x0]) * (_0x3bcb02 - _0x128504[_0x6cd383][0x1]) / (_0x128504[_0x16a51b][0x1] - _0x128504[_0x6cd383][0x1]) + _0x128504[_0x6cd383][0x0]) {
            _0x5a81e8 = !_0x5a81e8;
          }
        }
        return _0x5a81e8;
      }
      var _0x91d2eb = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        "Oa": function (_0x2564a0, _0x132eae) {
          return _0x82c9ac(_0x132eae, _0x2564a0, _0x91d2eb);
        }
      };
    }();
    var _0x21e25b = function () {
      function _0x2fe715(_0x17c220) {
        var _0x3dd082 = undefined;
        _0x3dd082 = _0x17c220 > 0x0 ? "+" + Math.floor(_0x17c220) : _0x17c220 < 0x0 ? "-" + Math.floor(_0x17c220) : "0";
        var _0x34a749 = Math.min(1.5, 0.5 + _0x17c220 / 0x258);
        var _0x231c7f = undefined;
        if (_0x17c220 < 0x1) {
          _0x231c7f = "0xFFFFFF";
        } else {
          if (_0x17c220 < 0x1e) {
            var _0x20bd21 = (_0x17c220 - 0x1) / 0x1d;
            _0x231c7f = ((0xff * (0x1 * (0x1 - _0x20bd21) + 0.96 * _0x20bd21) & 0xff) << 0x10) + ((0xff * (0x1 * (0x1 - _0x20bd21) + 0.82 * _0x20bd21) & 0xff) << 0x8) + (0xff * (0x1 * (0x1 - _0x20bd21) + 0x0 * _0x20bd21) & 0xff);
          } else {
            if (_0x17c220 < 0x12c) {
              var _0x34966e = (_0x17c220 - 0x1e) / 0x10e;
              _0x231c7f = ((0xff * (0.96 * (0x1 - _0x34966e) + 0.93 * _0x34966e) & 0xff) << 0x10) + ((0xff * (0.82 * (0x1 - _0x34966e) + 0.34 * _0x34966e) & 0xff) << 0x8) + (0xff * (0x0 * (0x1 - _0x34966e) + 0.25 * _0x34966e) & 0xff);
            } else {
              if (_0x17c220 < 0x2bc) {
                var _0x211bee = (_0x17c220 - 0x12c) / 0x190;
                _0x231c7f = ((0xff * (0.93 * (0x1 - _0x211bee) + 0.98 * _0x211bee) & 0xff) << 0x10) + ((0xff * (0.34 * (0x1 - _0x211bee) + 0x0 * _0x211bee) & 0xff) << 0x8) + (0xff * (0.25 * (0x1 - _0x211bee) + 0.98 * _0x211bee) & 0xff);
              } else {
                _0x231c7f = 16318713;
              }
            }
          }
        }
        var _0x2f1dcf = Math.random();
        var _0x35e1c9 = 0x1 + 0.5 * Math.random();
        return new _0x49126b(_0x3dd082, _0x231c7f, true, 0.5, _0x34a749, _0x2f1dcf, _0x35e1c9);
      }
      function _0x1168e6(_0x2cc51a, _0x1d656d) {
        var _0x58873b = undefined;
        var _0x188bb5 = undefined;
        if (_0x1d656d) {
          _0x58873b = 1.3;
          _0x188bb5 = 15554111;
        } else {
          _0x58873b = 1.1;
          _0x188bb5 = 16044288;
        }
        return new _0x49126b(_0x2cc51a, _0x188bb5, true, 0.5, _0x58873b, 0.5, 0.7);
      }
      var _0x5476ec = _0x15a67e(_0x40d27a.Zb, function () {
        _0x40d27a.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
      });
      _0x5476ec.prototype.Re = function (_0x5ed4bd) {
        this.Qe += _0x5ed4bd;
        if (this.Qe >= 0x1) {
          var _0x28df14 = Math.floor(this.Qe);
          this.Qe -= _0x28df14;
          var _0x3ea349 = _0x2fe715(_0x28df14);
          this.addChild(_0x3ea349);
          this.Pe.push(_0x3ea349);
        }
      };
      _0x5476ec.prototype.Se = function (_0x16df47) {
        if (_0x16df47) {
          lxpdhscount += 0x1;
          zwormData.hs = lxpdhscount;
          if (!(lxpdhscount % 0xa)) {
            lxpdlaughsound.play();
          } else {
            lxpdhssound.play();
          }
          var _0x3f9d97 = _0x1168e6("zworm".substring(0x0, 0x10) + "-☠️-" + "zworm".substring(0x0, 0x10), true);
          this.addChild(_0x3f9d97);
          this.Pe.push(_0x3f9d97);
        } else {
          lxpdkillcount += 0x1;
          var _0x3f9d97 = _0x1168e6(window.I18N_MESSAGES["index.game.floating.wellDone"] + "✨", false);
          this.addChild(_0x3f9d97);
          this.Pe.push(_0x3f9d97);
        }
      };
      _0x5476ec.prototype.Te = function (_0x54baaf, _0xfe6141) {
        var _0x282bd0 = (window.anApp = _0x4b2f70).s.H.wb;
        var _0x347868 = _0x282bd0.ue.width / _0x282bd0.ue.resolution;
        var _0x2b02bd = _0x282bd0.ue.height / _0x282bd0.ue.resolution;
        var _0x2915fb = 0x0;
        for (; _0x2915fb < this.Pe.length;) {
          var _0x2442e3 = this.Pe[_0x2915fb];
          _0x2442e3.Ue = _0x2442e3.Ue + _0xfe6141 / 0x7d0 * _0x2442e3.Ve;
          _0x2442e3.We = _0x2442e3.We + _0xfe6141 / 0x7d0 * _0x2442e3.Xe;
          _0x2442e3.alpha = 0.5 * Math.sin(Math.PI * _0x2442e3.We);
          _0x2442e3.scale.set(_0x2442e3.Ue);
          _0x2442e3.position.x = _0x347868 * (0.25 + 0.5 * _0x2442e3.Ye);
          _0x2442e3.position.y = _0x2442e3.Ze ? _0x2b02bd * (0x1 - 0.5 * (0x1 + _0x2442e3.We)) : _0x2b02bd * (0x1 - 0.5 * (0x0 + _0x2442e3.We));
          if (_0x2442e3.We > 0x1) {
            _0x4aa610(_0x2442e3);
            this.Pe.splice(_0x2915fb, 0x1);
            _0x2915fb--;
          }
          _0x2915fb++;
        }
      };
      var _0x49126b = function () {
        return _0x15a67e(_0x40d27a.fc, function (_0x15c3cc, _0x218571, _0x9ee8c8, _0x6b9c03, _0x4a44f0, _0x5d289f, _0xd2b45b) {
          _0x40d27a.fc.call(this, _0x15c3cc, {
            "fill": _0x218571,
            "fontFamily": "PTSans",
            "fontSize": 0x24
          });
          this.anchor.set(0.5);
          this.Ze = _0x9ee8c8;
          this.Ue = _0x6b9c03;
          this.Ve = _0x4a44f0;
          this.Ye = _0x5d289f;
          this.We = 0x0;
          this.Xe = _0xd2b45b;
        });
      }();
      return _0x5476ec;
    }();
    var _0x3ce448 = function () {
      function _0x1ea988(_0x41b842, _0x5bba10) {
        this.Gc = _0x41b842;
        this.Hc = _0x5bba10;
      }
      return _0x1ea988;
    }();
    var _0x242075 = function () {
      function _0x2267f1() {
        this.af = 0x0;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
      }
      _0x2267f1.TEAM_DEFAULT = 0x0;
      _0x2267f1.prototype.ef = function () {
        return 1.02 * this.ub;
      };
      return _0x2267f1;
    }();
    var _0x402fc7 = function () {
      function _0x30b48c(_0x501729) {
        this.se = _0x501729;
        this.te = _0x501729.get()[0x0];
        this.ue = new _0x40d27a.ac({
          "view": this.te,
          "backgroundColor": 0x0,
          "antialias": true
        });
        this.ve = new _0x40d27a.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(0x168 * Math.random());
        this.gf = 0x0;
        this.hf = 0x0;
        this["if"] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new _0x1cac0c();
        this.mf = new _0x40d27a.bc();
        this.nf = new _0x40d27a.Zb();
        this.pf = new _0x40d27a.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x40d27a.Zb();
        this.rf = new _0x40d27a.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x40d27a.Zb();
        this.tf = new _0x2dc189();
        this.uf = new _0x311a74();
        this.vf = new _0x274a8b();
        this.wf = new _0x21e25b();
        this.xf = new _0x40d27a.ec();
        this.yf = {
          "x": 0x0,
          "y": 0x0
        };
        this.a();
      }
      _0x30b48c.prototype.a = function () {
        lxpdjoysticks = [];
        lxpdjoystick = -0x1;
        lxpdservertext = new _0x40d27a.fc('', {
          "fontFamily": "Arial",
          "fontSize": 0xc,
          "fill": "#ffffff",
          "align": "center"
        });
        lxpdservertext.x = 0x19;
        if (lxpdmobilecheck()) {
          lxpdjoysticks[0x0] = new Joystick({
            "onChange": _0x3a51a8 => {
              _0x3a51a8.aradian = _0x3a51a8.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x3a51a8.aradian <= Math.PI ? -0x1 * _0x3a51a8.aradian : Math.PI - (_0x3a51a8.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x0].visible = false;
          lxpdjoysticks[0x1] = new Joystick({
            "outer": _0x40d27a.ec.from("https://i.imgur.com/UKIZZmr.png"),
            "inner": _0x40d27a.ec.from("https://i.imgur.com/IqQGK58.png"),
            "onChange": _0x559079 => {
              _0x559079.aradian = _0x559079.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x559079.aradian <= Math.PI ? -0x1 * _0x559079.aradian : Math.PI - (_0x559079.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x1].visible = false;
          lxpdjoysticks[0x2] = new Joystick({
            "outer": _0x40d27a.ec.from("https://i.imgur.com/Hg3sKn0.png"),
            "inner": _0x40d27a.ec.from("https://i.imgur.com/ZFifUoX.png"),
            "onChange": _0x581f25 => {
              _0x581f25.aradian = _0x581f25.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x581f25.aradian <= Math.PI ? -0x1 * _0x581f25.aradian : Math.PI - (_0x581f25.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x2].visible = false;
          for (let _0x261c72 = 0x0; _0x261c72 < lxpdjoysticks.length; _0x261c72++) {
            this.rf.addChild(lxpdjoysticks[_0x261c72]);
          }
        }
        lxpdzoomtext = new _0x40d27a.fc('', {
          "align": "center",
          "fill": "#fff",
          "fontSize": 0xc,
          "lineJoin": "round",
          "whiteSpace": "normal",
          "wordWrap": true,
          "fontWeight": "bold"
        });
        lxpdzoomtext.x = 0x64;
        lxpdzoomtext.y = 0x5a;
        this.rf.addChild(lxpdzoomtext);
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        lxpdBackground = new _0x40d27a.bc();
        lxpdBackground.zIndex = 0x14;
        this.ve.addChild(lxpdBackground);
        ctxHeadshotLine = new _0x40d27a.bc();
        ctxHeadshotLine.zIndex = 0x14;
        this.ve.addChild(ctxHeadshotLine);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = _0x4b2f70).q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 0x1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 0x2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 0x3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 0x4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 0x5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 0x6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      _0x30b48c.prototype.Ra = function () {
        var _0x5b2a16 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0xcf7b93 = this.se.width();
        var _0x2e6c67 = this.se.height();
        this.ue.resize(_0xcf7b93, _0x2e6c67);
        this.ue.resolution = _0x5b2a16;
        this.te.width = _0x5b2a16 * _0xcf7b93;
        this.te.height = _0x5b2a16 * _0x2e6c67;
        this.jf = Math.min(Math.min(_0xcf7b93, _0x2e6c67), 0.625 * Math.max(_0xcf7b93, _0x2e6c67));
        this.xf.position.x = _0xcf7b93 / 0x2;
        this.xf.position.y = _0x2e6c67 / 0x2;
        this.xf.width = _0xcf7b93;
        this.xf.height = _0x2e6c67;
        this.tf.position.x = 0x3c;
        this.tf.position.y = 0x3c;
        this.uf.position.x = 0x6e;
        this.uf.position.y = 0xa;
        this.vf.position.x = _0xcf7b93 - 0xe1;
        this.vf.position.y = 0x1;
        this.tf.addChild(ctx.pointsContainer);
        this.tf.addChild(ctx.teamsContainer);
        this.tf.addChild(ctx.containerHsRec);
        _0x4aa610(ctx.containerHsRec3);
      };
      _0x30b48c.prototype.Te = function (_0x28f266, _0x32944f) {
        var _0x185087 = window.anApp = _0x4b2f70;
        this["if"] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0x28f266.af == 0x0 ? _0x185087.q.Cf : _0x185087.q.Df);
        if (wormxt_Obj && false || false) {
          setSectorsGame();
        } else {
          lxpdBackground.removeChildren();
          lxpdBackground.clear();
          lxpdBackground.lineStyle(0x1, 0xff0000, 0x1);
          lxpdBackground.drawCircle(0x0, 0x0, 0x1f4);
          lxpdBackground.endFill();
        }
        this.vf.Ef = _0x32944f;
        this.sf.visible = _0x32944f;
      };
      _0x30b48c.prototype.Pa = function (_0x40195d, _0x4d3754) {
        if (!(this.ue.width <= 0x5)) {
          var _0xd67fa2 = window.anApp = _0x4b2f70;
          var _0x127128 = _0xd67fa2.o.N;
          var _0x5a3125 = this.ue.width / this.ue.resolution;
          var _0x793d06 = this.ue.height / this.ue.resolution;
          this["if"] = _0xd67fa2.o.jb > this["if"] ? Math.min(_0xd67fa2.o.jb, this["if"] + _0x4d3754 * 0.002) : Math.max(_0xd67fa2.o.jb, this["if"] - _0x4d3754 * 0.002);
          var _0x1f3b3f = this.jf / (this["if"] * lxpdmultiplier);
          var _0x20db87 = _0xd67fa2.o.N.Ff[_0xee0376.ZOOM_TYPE];
          var _0x9c066f = null != _0x20db87 && _0x20db87.sc;
          this.kf = this.kf + _0x4d3754 / 0x3e8 * (0.1 * (_0x9c066f ? 0x1 : 0x0) - this.kf) > 0x1 ? 0x1 : this.kf + _0x4d3754 / 0x3e8 * (0.1 * (_0x9c066f ? 0x1 : 0x0) - this.kf) < 0x0 ? 0x0 : Number.isFinite(this.kf + _0x4d3754 / 0x3e8 * (0.1 * (_0x9c066f ? 0x1 : 0x0) - this.kf)) ? this.kf + _0x4d3754 / 0x3e8 * (0.1 * (_0x9c066f ? 0x1 : 0x0) - this.kf) : 0.5;
          this.xf.alpha = this.kf;
          this.ff = this.ff + 0.01 * _0x4d3754;
          if (this.ff > 0x168) {
            this.ff = this.ff % 0x168;
          }
          this.gf = Math.sin(_0x40195d / 0x4b0 * 0x2 * Math.PI);
          var _0x8ea5d3 = _0x127128.Gf();
          this.yf.x = _0x8ea5d3.x + (this.yf.x - _0x8ea5d3.x) * Math.pow(0.5, _0x4d3754 / 33.333);
          this.yf.y = _0x8ea5d3.y + (this.yf.y - _0x8ea5d3.y) * Math.pow(0.5, _0x4d3754 / 33.333);
          var _0x26c5c6 = _0x5a3125 / _0x1f3b3f / 0x2;
          var _0x2b3d2a = _0x793d06 / _0x1f3b3f / 0x2;
          _0xd67fa2.o.yb(this.yf.x - 1.3 * _0x26c5c6, this.yf.x + 1.3 * _0x26c5c6, this.yf.y - 1.3 * _0x2b3d2a, this.yf.y + 1.3 * _0x2b3d2a);
          this.lf.Te(this.yf.x, this.yf.y, 0x2 * _0x26c5c6, 0x2 * _0x2b3d2a);
          var _0x5b4201 = _0xd67fa2.o.fb.ub;
          this.ve.scale.x = _0x1f3b3f;
          this.ve.scale.y = _0x1f3b3f;
          this.ve.position.x = _0x5a3125 / 0x2 - this.yf.x * _0x1f3b3f;
          this.ve.position.y = _0x793d06 / 0x2 - this.yf.y * _0x1f3b3f;
          zwormData.playerX = this.tf.Jf.position.x;
          zwormData.playerY = this.tf.Jf.position.y;
          ctxHeadshotLine.clear();
          var _0x3609ee = Math.hypot(_0x8ea5d3.x, _0x8ea5d3.y);
          if (_0x3609ee > _0x5b4201 - 0xa) {
            this.hf = 0x1 + (_0x3609ee - _0x5b4201) / 0xa > 0x1 ? 0x1 : 0x1 + (_0x3609ee - _0x5b4201) / 0xa < 0x0 ? 0x0 : Number.isFinite(0x1 + (_0x3609ee - _0x5b4201) / 0xa) ? 0x1 + (_0x3609ee - _0x5b4201) / 0xa : 0.5;
            var _0x383b15 = Math.cos(this.ff * _0x1b833d / 0x168) * (0x1 - this.hf) + 0x1 * this.hf;
            var _0x53ddb3 = Math.sin(this.ff * _0x1b833d / 0x168) * (0x1 - this.hf);
            var _0x473c47 = (Math.atan2(_0x53ddb3, _0x383b15) + _0x1b833d) % _0x1b833d * 0x168 / _0x1b833d;
            var _0x18af11 = this.hf * (0.5 + 0.5 * this.gf);
            var _0x47f1f5 = _0x5361c2(Math.floor(_0x473c47), 0x1, 0.75 - 0.25 * this.hf);
            this.lf.Hf(_0x47f1f5[0x0], _0x47f1f5[0x1], _0x47f1f5[0x2], 0.1 + 0.2 * _0x18af11);
          } else {
            this.hf = 0x0;
            var _0x237c12 = _0x5361c2(Math.floor(this.ff), 0x1, 0.75);
            this.lf.Hf(_0x237c12[0x0], _0x237c12[0x1], _0x237c12[0x2], 0.1);
          }
          var _0x3c8a54 = 0x0;
          for (; _0x3c8a54 < this.sf.children.length; _0x3c8a54++) {
            var _0x3da15b = this.sf.children[_0x3c8a54];
            _0x3da15b.position.x = _0x5a3125 / 0x2 - (this.yf.x - _0x3da15b.If.x) * _0x1f3b3f;
            _0x3da15b.position.y = _0x793d06 / 0x2 - (this.yf.y - _0x3da15b.If.y) * _0x1f3b3f;
          }
          this.tf.Jf.position.x = _0x8ea5d3.x / _0x5b4201 * this.tf.Kf;
          this.tf.Jf.position.y = _0x8ea5d3.y / _0x5b4201 * this.tf.Kf;
          this.tf.WLp.position.x = -0x19 - this.tf.WLp.width / 0x2;
          this.tf.WLp.text = parseInt(lxpdhscount);
          this.tf.MLb.position.x = 0x19 - this.tf.MLb.width / 0x2;
          this.tf.MLb.text = parseInt(lxpdkillcount);
          this.uf.Qa(_0x40195d);
          this.wf.Te(_0x40195d, _0x4d3754);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      _0x30b48c.prototype.Lf = function (_0x3ef148, _0x3ae481) {
        _0x3ae481.Of.Nf.Mf().zIndex = (_0x3ef148 + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(_0x3ae481.Of.Pf.Mf());
        this.pf.addChild(_0x3ae481.Of.Nf.Mf());
      };
      _0x30b48c.prototype.Qf = function (_0x5035fe, _0xc0c2fa, _0x50b2c4) {
        $(".Worm_cerca").text(" : " + _0x50b2c4.text);
        _0xc0c2fa.Rf.zIndex = (window.anApp = _0x4b2f70).o.fb.bf ? 0x0 : 0xa + (_0x5035fe + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(_0xc0c2fa.Rf);
        if (_0x5035fe != (window.anApp = _0x4b2f70).o.fb.bf) {
          this.sf.addChild(_0x50b2c4);
        }
      };
      var _0x2dc189 = function () {
        return _0x15a67e(_0x40d27a.Zb, function () {
          _0x40d27a.Zb.call(this);
          this.Kf = 0x28;
          this.Sf = new _0x40d27a.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x40d27a.bc();
          var _0x5a7723 = new _0x40d27a.bc();
          _0x5a7723.beginFill("black", 0.4);
          _0x5a7723.drawCircle(0x0, 0x0, this.Kf);
          _0x5a7723.endFill();
          _0x5a7723.lineStyle(0x2, 0xe3d2d2);
          _0x5a7723.drawCircle(0x0, 0x0, this.Kf);
          _0x5a7723.moveTo(0x0, -this.Kf);
          _0x5a7723.lineTo(0x0, +this.Kf);
          _0x5a7723.moveTo(-this.Kf, 0x0);
          _0x5a7723.lineTo(+this.Kf, 0x0);
          _0x5a7723.endFill();
          this.Sf.alpha = 0.5;
          this.Jf.zIndex = 0x2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill("0xffffff");
          this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
          this.Jf.endFill();
          this.Jf.lineStyle(0x1, "black");
          this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
          this.Jf.endFill();
          this.addChild(_0x5a7723);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
          console.log(this.Jf);
          var _0xb3c5cf = new _0x40d27a.fc("HS", {
            "fontFamily": "Arial",
            "fontSize": 0x10,
            "fill": "white",
            "align": "center"
          });
          _0xb3c5cf.position.y = 0x32;
          _0xb3c5cf.position.x = -0x23;
          var _0x58092a = new _0x40d27a.fc("KILL", {
            "fontFamily": "Arial",
            "fontSize": 0x10,
            "fill": "white",
            "align": "center"
          });
          _0x58092a.position.y = 0x32;
          _0x58092a.position.x = 0xa;
          this.addChild(_0xb3c5cf);
          this.addChild(_0x58092a);
          lxpdkillcount = 0x0;
          lxpdhscount = 0x0;
          this.WLp = new _0x40d27a.fc('', {
            "fontFamily": "Arial",
            "fontSize": 0xe,
            "fill": "#FFFFFF",
            "align": "center"
          });
          this.WLp.position.y = 0x43;
          this.WLp.position.x = -0x2d;
          this.MLb = new _0x40d27a.fc('', {
            "fontFamily": "Arial",
            "fontSize": 0xe,
            "fill": "#FFFFFF",
            "align": "center"
          });
          this.MLb.position.y = 0x43;
          this.MLb.position.x = 0x14;
          this.addChild(this.WLp);
          this.addChild(this.MLb);
          let _0xe9dccb = new _0x40d27a._b(_0x40d27a.$b.from("https://i.imgur.com/VPkrI9l.png"));
          var _0x5bcc99 = new _0x40d27a.ec();
          _0x5bcc99.texture = _0xe9dccb;
          _0x5bcc99.width = 0x64;
          _0x5bcc99.height = 0x64;
          _0x5bcc99.x = -0x32;
          _0x5bcc99.y = -0x32;
          this.addChild(_0x5bcc99);
          if (lxpdmobilecheck()) {
            var _0x17a421 = document.getElementById("game-cont");
            lxpdmobilecontrol = 0x0;
            lxpdmobilecontrol2 = -0x1;
            lxpdmobileprediction = 0x0;
            lxpdmobilecontroltextures = [];
            lxpdmobilepredictiontextures = [];
            lxpdmobilecontroltextures[0x0] = new _0x40d27a.ec.from("https://i.imgur.com/aOyOob6.png");
            lxpdmobilecontroltextures[0x0].width = 0x50;
            lxpdmobilecontroltextures[0x0].height = 0x28;
            lxpdmobilecontroltextures[0x0].x = -0x64 + _0x17a421.offsetWidth * 0.5;
            lxpdmobilecontroltextures[0x0].y = -0x3c;
            lxpdmobilecontroltextures[0x0].on("tap", () => {
              lxpdmobilecontrol++;
              lxpdjoystick = 0x0;
              lxpdmobileprediction = -0x1;
              for (let _0x3e91d0 = 0x0; _0x3e91d0 < lxpdmobilepredictiontextures.length; _0x3e91d0++) {
                lxpdmobilepredictiontextures[_0x3e91d0].visible = false;
              }
              for (let _0x1827e9 = 0x0; _0x1827e9 < lxpdmobilecontroltextures.length; _0x1827e9++) {
                lxpdmobilecontroltextures[_0x1827e9].visible = lxpdmobilecontrol === _0x1827e9;
              }
            });
            lxpdmobilecontroltextures[0x1] = new _0x40d27a.ec.from("https://i.imgur.com/9ui2KwE.png");
            lxpdmobilecontroltextures[0x1].width = 0x50;
            lxpdmobilecontroltextures[0x1].height = 0x28;
            lxpdmobilecontroltextures[0x1].x = -0x64 + _0x17a421.offsetWidth * 0.5;
            lxpdmobilecontroltextures[0x1].y = -0x3c;
            lxpdmobilecontroltextures[0x1].visible = false;
            lxpdmobilecontroltextures[0x1].on("tap", () => {
              if (lxpdmobilecontrol2 !== 0x1) {
                lxpdmobilecontrol2++;
                if (lxpdmobilecontrol2 === 0x0) {
                  lxpdmobilearrowtexture.x = 0xf;
                  lxpdmobilepeedtexture.x = -0xfa + _0x17a421.offsetWidth;
                  lxpdmobilearrowtexture.visible = true;
                  lxpdmobilepeedtexture.visible = true;
                }
                if (lxpdmobilecontrol2 === 0x1) {
                  lxpdmobilearrowtexture.x = -0xfa + _0x17a421.offsetWidth;
                  lxpdmobilepeedtexture.x = 0xf;
                }
                lxpdmobileprediction = 0x1;
                lxpdjoystick = -0x1;
                for (let _0x5c27c0 = 0x0; _0x5c27c0 < lxpdmobilepredictiontextures.length; _0x5c27c0++) {
                  lxpdmobilepredictiontextures[_0x5c27c0].visible = lxpdmobileprediction === _0x5c27c0;
                }
                return;
              }
              lxpdmobilearrowtexture.visible = false;
              lxpdmobilepeedtexture.visible = false;
              lxpdjoystick = 0x1;
              lxpdmobilecontrol++;
              for (let _0x39b0d3 = 0x0; _0x39b0d3 < lxpdmobilecontroltextures.length; _0x39b0d3++) {
                lxpdmobilecontroltextures[_0x39b0d3].visible = lxpdmobilecontrol === _0x39b0d3;
              }
            });
            lxpdmobilecontroltextures[0x2] = new _0x40d27a.ec.from("https://i.imgur.com/NKAyYa8.png");
            lxpdmobilecontroltextures[0x2].width = 0x50;
            lxpdmobilecontroltextures[0x2].height = 0x28;
            lxpdmobilecontroltextures[0x2].x = -0x64 + _0x17a421.offsetWidth * 0.5;
            lxpdmobilecontroltextures[0x2].y = -0x3c;
            lxpdmobilecontroltextures[0x2].visible = false;
            lxpdmobilecontroltextures[0x2].on("tap", () => {
              lxpdmobilecontrol++;
              lxpdmobileprediction = 0x2;
              lxpdjoystick = 0x2;
              for (let _0x295680 = 0x0; _0x295680 < lxpdmobilepredictiontextures.length; _0x295680++) {
                lxpdmobilepredictiontextures[_0x295680].visible = lxpdmobileprediction === _0x295680;
              }
              for (let _0xf003f7 = 0x0; _0xf003f7 < lxpdmobilecontroltextures.length; _0xf003f7++) {
                lxpdmobilecontroltextures[_0xf003f7].visible = lxpdmobilecontrol === _0xf003f7;
              }
            });
            lxpdmobilecontroltextures[0x3] = new _0x40d27a.ec.from("https://i.imgur.com/n1jVrwm.png");
            lxpdmobilecontroltextures[0x3].width = 0x50;
            lxpdmobilecontroltextures[0x3].height = 0x28;
            lxpdmobilecontroltextures[0x3].x = -0x64 + _0x17a421.offsetWidth * 0.5;
            lxpdmobilecontroltextures[0x3].y = -0x3c;
            lxpdmobilecontroltextures[0x3].visible = false;
            lxpdmobilecontroltextures[0x3].on("tap", () => {
              lxpdmobilecontrol = 0x0;
              lxpdmobilecontrol2 = -0x1;
              lxpdmobileprediction = 0x0;
              lxpdjoystick = -0x1;
              for (let _0x3b283c = 0x0; _0x3b283c < lxpdmobilepredictiontextures.length; _0x3b283c++) {
                lxpdmobilepredictiontextures[_0x3b283c].visible = lxpdmobileprediction === _0x3b283c;
              }
              for (let _0x4b4ead = 0x0; _0x4b4ead < lxpdmobilecontroltextures.length; _0x4b4ead++) {
                lxpdmobilecontroltextures[_0x4b4ead].visible = lxpdmobilecontrol === _0x4b4ead;
              }
            });
            lxpdmobilepredictiontextures[0x0] = new _0x40d27a.ec.from("https://i.imgur.com/4ccZ556.png");
            lxpdmobilepredictiontextures[0x0].width = 0x10;
            lxpdmobilepredictiontextures[0x0].height = 0x10;
            lxpdmobilepredictiontextures[0x0].x = 0x0;
            lxpdmobilepredictiontextures[0x0].y = 0x0;
            lxpdmobilepredictiontextures[0x0].alpha = 0x0;
            lxpdmobilepredictiontextures[0x1] = new _0x40d27a.ec.from("https://i.imgur.com/hUVCdUv.png");
            lxpdmobilepredictiontextures[0x1].width = 0x10;
            lxpdmobilepredictiontextures[0x1].height = 0x10;
            lxpdmobilepredictiontextures[0x1].x = 0x0;
            lxpdmobilepredictiontextures[0x1].y = 0x0;
            lxpdmobilepredictiontextures[0x1].visible = false;
            lxpdmobilepredictiontextures[0x2] = new _0x40d27a.ec.from("https://i.imgur.com/WqWsDfi.png");
            lxpdmobilepredictiontextures[0x2].width = 0x10;
            lxpdmobilepredictiontextures[0x2].height = 0x10;
            lxpdmobilepredictiontextures[0x2].x = 0x0;
            lxpdmobilepredictiontextures[0x2].y = 0x0;
            lxpdmobilepredictiontextures[0x2].visible = false;
            lxpdmobilearrowtexture = new _0x40d27a.ec.from("https://i.imgur.com/mHp0ozi.png");
            lxpdmobilearrowtexture.width = 0x64;
            lxpdmobilearrowtexture.height = 0x64;
            lxpdmobilearrowtexture.x = 0xf;
            lxpdmobilearrowtexture.y = -0xd2 + _0x17a421.offsetHeight;
            lxpdmobilearrowtexture.visible = false;
            lxpdmobilepeedtexture = new _0x40d27a.ec.from("https://i.imgur.com/0G8cFtP.png");
            lxpdmobilepeedtexture.width = 0x50;
            lxpdmobilepeedtexture.height = 0x50;
            lxpdmobilepeedtexture.x = -0xfa + _0x17a421.offsetWidth;
            lxpdmobilepeedtexture.y = -0xc8 + _0x17a421.offsetHeight;
            lxpdmobilepeedtexture.visible = false;
            lxpdmobilepeedtexture.alpha = 0.5;
            this.addChild(lxpdmobilearrowtexture);
            this.addChild(lxpdmobilepeedtexture);
            for (let _0x53bf76 = 0x0; _0x53bf76 < lxpdmobilecontroltextures.length; _0x53bf76++) {
              this.addChild(lxpdmobilecontroltextures[_0x53bf76]);
            }
            for (let _0x27bdf1 = 0x0; _0x27bdf1 < lxpdmobilepredictiontextures.length; _0x27bdf1++) {
              this.addChild(lxpdmobilepredictiontextures[_0x27bdf1]);
            }
          }
        });
      }();
      var _0x311a74 = function () {
        var _0x4094ae = _0x15a67e(_0x40d27a.Zb, function () {
          _0x40d27a.Zb.call(this);
          this.Tf = {};
        });
        _0x4094ae.prototype.Qa = function (_0x32affa) {
          var _0x1b0305 = 0.5 + 0.5 * Math.cos(_0x1b833d * (_0x32affa / 0x3e8 / 1.6));
          var _0x517ed4;
          for (_0x517ed4 in this.Tf) {
            var _0x49e432 = this.Tf[_0x517ed4];
            var _0x13fae1 = _0x49e432.Uf;
            _0x49e432.alpha = 0x1 - _0x13fae1 + _0x13fae1 * _0x1b0305;
          }
        };
        _0x4094ae.prototype.Te = function (_0x2c76a7) {
          var _0x38ef0c;
          for (_0x38ef0c in this.Tf) {
            if (!(null != _0x2c76a7[_0x38ef0c] && _0x2c76a7[_0x38ef0c].sc)) {
              _0x4aa610(this.Tf[_0x38ef0c]);
              delete this.Tf[_0x38ef0c];
            }
          }
          var _0x565352 = 0x0;
          var _0x5c34a3;
          for (_0x5c34a3 in _0x2c76a7) {
            var _0x5708d1 = _0x2c76a7[_0x5c34a3];
            if (_0x5708d1.sc) {
              var _0x2ba22f = this.Tf[_0x5c34a3];
              if (!_0x2ba22f) {
                var _0x53a7fa = (window.anApp = _0x4b2f70).p.Dc().ld(_0x5708d1.rc).Zc;
                _0x2ba22f = new _0x5aaefb();
                _0x2ba22f.texture = _0x53a7fa.Hc;
                _0x2ba22f.width = 0x28;
                _0x2ba22f.height = 0x28;
                this.Tf[_0x5c34a3] = _0x2ba22f;
                this.addChild(_0x2ba22f);
              }
              assignPtcValues(this, _0x5c34a3, _0x5708d1.tc);
              _0x2ba22f.Uf = _0x5708d1.tc;
              _0x2ba22f.position.x = _0x565352;
              _0x565352 = _0x565352 + 0x28;
            }
          }
        };
        var _0x5aaefb = function () {
          return _0x15a67e(_0x40d27a.ec, function () {
            _0x40d27a.ec.call(this);
            this.Uf = 0x0;
          });
        }();
        return _0x4094ae;
      }();
      var _0x274a8b = function () {
        var _0x567f7 = _0x15a67e(_0x40d27a.Zb, function () {
          _0x40d27a.Zb.call(this);
          this.Ef = true;
          this.Vf = 0xc;
          this.Wf = 0x9;
          this.Pe = [];
          var _0x35a179 = 0x0;
          for (; _0x35a179 < 0xe; _0x35a179++) {
            this.Xf();
          }
        });
        _0x567f7.prototype.Te = function (_0x31a38b) {
          if (lxpdzoomplustexture) {
            this.addChild(lxpdzoomplustexture);
          }
          if (lxpdzoomsubtracttexture) {
            this.addChild(lxpdzoomsubtracttexture);
          }
          if (lxpdgirosubtracttexture) {
            this.addChild(lxpdgirosubtracttexture);
          }
          if (lxpdexplotWubtracttexture) {
            this.addChild(lxpdexplotWubtracttexture);
          }
          if (lxpdservertext.text !== '') {
            this.addChild(lxpdservertext);
            this.addChild(ctx.containerHsRec2);
          }
          if (zwormData) {
            sendPlayerUpdate(0x0, 0x0);
          } else {
            console.log("Las coordenadas de zwormData no est�n definidas a�n.");
          }
          var _0x380a85 = window.anApp = _0x4b2f70;
          var _0x1099c8 = _0x380a85.o.fb.af == 0x10;
          var _0x25508a = 0x0;
          var _0x5ca281 = 0x0;
          if (_0x5ca281 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x5ca281].Yf(0x1, "white");
          this.Pe[_0x5ca281].Zf('', lxpdservertext.text === '' ? "Top " + lxpdtoplist : '', "(".concat(_0x380a85.o.tb, " 🌎)"));
          this.Pe[_0x5ca281].position.y = _0x25508a;
          _0x25508a = _0x25508a + this.Vf;
          _0x5ca281 = _0x5ca281 + 0x1;
          if (_0x31a38b.$f.length > 0x0) {
            _0x25508a = _0x25508a + this.Wf;
          }
          var _0xc8d89f = 0x0;
          for (; _0xc8d89f < _0x31a38b.$f.length; _0xc8d89f++) {
            var _0x2eba2c = _0x31a38b.$f[_0xc8d89f];
            var _0x3bbab7 = _0x380a85.p.Dc().ed(_0x2eba2c._f);
            if (_0x5ca281 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x5ca281].Yf(0.8, _0x3bbab7.bd._c);
            console.log(_0x3bbab7);
            this.Pe[_0x5ca281].Zf('' + (_0xc8d89f + 0x1), "Equipos / Teams", '' + Math.floor(_0x2eba2c.M));
            this.Pe[_0x5ca281].position.y = _0x25508a;
            _0x25508a = _0x25508a + this.Vf;
            _0x5ca281 = _0x5ca281 + 0x1;
          }
          if (_0x31a38b.ag.length > 0x0) {
            _0x25508a = _0x25508a + this.Wf;
          }
          var _0x19154d = 0x0;
          for (; _0x19154d < _0x31a38b.ag.length; _0x19154d++) {
            var _0x16ba2d = _0x31a38b.ag[_0x19154d];
            var _0x29364f = _0x380a85.o.fb.bf == _0x16ba2d.bg;
            var _0x418d70 = undefined;
            var _0x123663 = undefined;
            if (_0x29364f) {
              _0x418d70 = "white";
              _0x123663 = _0x380a85.o.N.Mb.ad;
            } else {
              var _0x2c8c4f = _0x380a85.o.hb[_0x16ba2d.bg];
              if (null != _0x2c8c4f) {
                _0x418d70 = _0x1099c8 ? _0x380a85.p.Dc().ed(_0x2c8c4f.Mb.cg).bd._c : _0x380a85.p.Dc().dd(_0x2c8c4f.Mb.dg)._c;
                _0x123663 = this.Ef ? _0x2c8c4f.Mb.ad : "---";
              } else {
                _0x418d70 = "gray";
                _0x123663 = "?";
              }
            }
            if (_0x29364f) {
              _0x25508a = _0x25508a + this.Wf;
            }
            if (_0x5ca281 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x5ca281].Yf(_0x29364f ? 0x1 : 0.8, _0x418d70);
            if (_0x380a85.o.O === _0x5ca281) {
              this.Pe[_0x5ca281].Yf(0x1, "white");
            }
            var _0x4f5508 = Math.floor(_0x16ba2d.M);
            _0x4f5508.customFormat();
            this.Pe[_0x5ca281].Zf('' + (_0x19154d + 0x1), _0x123663, '' + _0x4f5508.customFormat());
            this.Pe[_0x5ca281].position.y = _0x25508a;
            _0x25508a = _0x25508a + this.Vf;
            _0x5ca281 = _0x5ca281 + 0x1;
            if (_0x29364f) {
              _0x25508a = _0x25508a + this.Wf;
            }
          }
          if (_0x380a85.o.O > _0x31a38b.ag.length) {
            _0x25508a = _0x25508a + this.Wf;
            if (_0x5ca281 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x5ca281].Yf(0x1, "#FFFFFF");
            window.tuNewScore = Math.floor(_0x380a85.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[_0x5ca281].Zf('' + _0x380a85.o.O, _0x380a85.o.N.Mb.ad, '' + window.tuNewScore.customFormat());
            this.Pe[_0x5ca281].position.y = _0x25508a;
            _0x25508a = _0x25508a + this.Vf;
            _0x5ca281 = _0x5ca281 + 0x1;
            _0x25508a = _0x25508a + this.Wf;
          }
          for (; this.Pe.length > _0x5ca281;) {
            _0x4aa610(this.Pe.pop());
          }
        };
        _0x567f7.prototype.Xf = function () {
          var _0x17c8bf = new _0x4f0cc9();
          _0x17c8bf.position.y = 0x0;
          if (this.Pe.length > 0x0) {
            _0x17c8bf.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
          }
          this.Pe.push(_0x17c8bf);
          this.addChild(_0x17c8bf);
        };
        var _0x4f0cc9 = function () {
          var _0x3e07f3 = _0x15a67e(_0x40d27a.Zb, function () {
            _0x40d27a.Zb.call(this);
            this.eg = new _0x40d27a.fc('', {
              "dropShadow": false,
              "dropShadowBlur": 0x5,
              "dropShadowColor": "#707070",
              "dropShadowDistance": 0x3,
              "fontFamily": "PTSans",
              "fontSize": 0xc,
              "fill": "white"
            });
            this.eg.anchor.x = 0x1;
            this.eg.position.x = 0x1e;
            this.addChild(this.eg);
            this.fg = new _0x40d27a.fc('', {
              "dropShadow": false,
              "dropShadowBlur": 0x5,
              "dropShadowColor": "#707070",
              "dropShadowDistance": 0x3,
              "fontFamily": "PTSans",
              "fontSize": 0xc,
              "fill": "white"
            });
            this.fg.anchor.x = 0x0;
            this.fg.position.x = 0x23;
            this.addChild(this.fg);
            this.gg = new _0x40d27a.fc('', {
              "dropShadow": false,
              "dropShadowBlur": 0x5,
              "dropShadowColor": "#707070",
              "dropShadowDistance": 0x3,
              "fontFamily": "PTSans",
              "fontSize": 0xc,
              "fill": "white"
            });
            this.gg.anchor.x = 0x1;
            this.gg.position.x = 0xdc;
            this.addChild(this.gg);
          });
          _0x3e07f3.prototype.Zf = function (_0x5b5a64, _0x284bdb, _0x425a6a) {
            this.eg.text = _0x5b5a64;
            this.gg.text = _0x425a6a;
            var _0xf89b1a = _0x284bdb;
            this.fg.text = _0xf89b1a;
            for (; this.fg.width > 0x64;) {
              _0xf89b1a = _0xf89b1a.substring(0x0, _0xf89b1a.length - 0x1);
              this.fg.text = _0xf89b1a + "..";
            }
          };
          _0x3e07f3.prototype.Yf = function (_0x1744dc, _0xfd3f37) {
            this.eg.alpha = _0x1744dc;
            this.eg.style.fill = _0xfd3f37;
            this.fg.alpha = _0x1744dc;
            this.fg.style.fill = _0xfd3f37;
            this.gg.alpha = _0x1744dc;
            this.gg.style.fill = _0xfd3f37;
          };
          return _0x3e07f3;
        }();
        return _0x567f7;
      }();
      return _0x30b48c;
    }();
    var _0x51a738 = function () {
      function _0x878e7a(_0x21421e) {
        this.o = _0x21421e;
        this.hg = [];
        this.ig = 0x0;
      }
      _0x878e7a.prototype.Xb = function (_0x2cddaf) {
        this.hg.push(new DataView(_0x2cddaf));
      };
      _0x878e7a.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
      };
      _0x878e7a.prototype.Bb = function () {
        for (var _0xe747c4 = 0x0; _0xe747c4 < 0xa; _0xe747c4++) {
          if (0x0 === this.hg.length) {
            return;
          }
          var _0xe1ab65 = this.hg.shift();
          try {
            this.jg(_0xe1ab65);
          } catch (_0x302530) {
            console.log("DataReader error: " + _0x302530);
            throw _0x302530;
          }
        }
      };
      _0x878e7a.prototype.jg = function (_0x4cf07b) {
        switch (0xff & _0x4cf07b.mc(0x0)) {
          case 0x0:
            return void this.kg(_0x4cf07b, 0x1);
          case 0x1:
            return void this.lg(_0x4cf07b, 0x1);
          case 0x2:
            return void this.mg(_0x4cf07b, 0x1);
          case 0x3:
            return void this.ng(_0x4cf07b, 0x1);
          case 0x4:
            return void this.og(_0x4cf07b, 0x1);
          case 0x5:
            return void this.pg(_0x4cf07b, 0x1);
        }
      };
      _0x878e7a.prototype.kg = function (_0x525a01, _0x409608) {
        console.log("sgp1");
        this.o.fb.af = _0x525a01.mc(_0x409608);
        _0x409608 = _0x409608 + 0x1;
        var _0x41cc21 = _0x525a01.nc(_0x409608);
        _0x409608 = _0x409608 + 0x2;
        this.o.fb.bf = _0x41cc21;
        this.o.N.Mb.Lb = _0x41cc21;
        this.o.fb.ub = _0x525a01.pc(_0x409608);
        _0x409608 = _0x409608 + 0x4;
        this.o.fb.cf = _0x525a01.pc(_0x409608);
        _0x409608 = _0x409608 + 0x4;
        this.o.fb.df = _0x525a01.pc(_0x409608);
        _0x409608 = _0x409608 + 0x4;
        (window.anApp = _0x4b2f70).s.H.wb.Te(this.o.fb, (window.anApp = _0x4b2f70).s.xa.wa());
        console.log("sgp2");
        return _0x409608;
      };
      _0x878e7a.prototype.lg = function (_0x465a79, _0x32c0e1) {
        var _0x1cc976 = this.ig++;
        var _0x5bf4e0 = _0x465a79.nc(_0x32c0e1);
        _0x32c0e1 += 0x2;
        var _0x2f0640 = undefined;
        _0x2f0640 = this.qg(_0x465a79, _0x32c0e1);
        _0x32c0e1 += this.rg(_0x2f0640);
        for (var _0x346c68 = 0x0; _0x346c68 < _0x2f0640; _0x346c68++) {
          _0x32c0e1 = this.sg(_0x465a79, _0x32c0e1);
        }
        _0x2f0640 = this.qg(_0x465a79, _0x32c0e1);
        _0x32c0e1 += this.rg(_0x2f0640);
        for (var _0x3685f3 = 0x0; _0x3685f3 < _0x2f0640; _0x3685f3++) {
          _0x32c0e1 = this.tg(_0x465a79, _0x32c0e1);
        }
        _0x2f0640 = this.qg(_0x465a79, _0x32c0e1);
        _0x32c0e1 += this.rg(_0x2f0640);
        for (var _0x2ad761 = 0x0; _0x2ad761 < _0x2f0640; _0x2ad761++) {
          _0x32c0e1 = this.ug(_0x465a79, _0x32c0e1);
        }
        _0x2f0640 = this.qg(_0x465a79, _0x32c0e1);
        _0x32c0e1 += this.rg(_0x2f0640);
        for (var _0x18e7a6 = 0x0; _0x18e7a6 < _0x2f0640; _0x18e7a6++) {
          _0x32c0e1 = this.vg(_0x465a79, _0x32c0e1);
        }
        _0x2f0640 = this.qg(_0x465a79, _0x32c0e1);
        _0x32c0e1 += this.rg(_0x2f0640);
        for (var _0xd56c7 = 0x0; _0xd56c7 < _0x2f0640; _0xd56c7++) {
          _0x32c0e1 = this.wg(_0x465a79, _0x32c0e1);
        }
        _0x2f0640 = this.qg(_0x465a79, _0x32c0e1);
        _0x32c0e1 += this.rg(_0x2f0640);
        for (var _0x1edc89 = 0x0; _0x1edc89 < _0x2f0640; _0x1edc89++) {
          _0x32c0e1 = this.xg(_0x465a79, _0x32c0e1);
        }
        _0x2f0640 = this.qg(_0x465a79, _0x32c0e1);
        _0x32c0e1 += this.rg(_0x2f0640);
        for (var _0xbfe79d = 0x0; _0xbfe79d < _0x2f0640; _0xbfe79d++) {
          _0x32c0e1 = this.yg(_0x465a79, _0x32c0e1);
        }
        _0x2f0640 = this.qg(_0x465a79, _0x32c0e1);
        _0x32c0e1 += this.rg(_0x2f0640);
        for (var _0x2f8ea2 = 0x0; _0x2f8ea2 < _0x2f0640; _0x2f8ea2++) {
          _0x32c0e1 = this.zg(_0x465a79, _0x32c0e1);
        }
        if (_0x1cc976 > 0x0) {
          _0x32c0e1 = this.Ag(_0x465a79, _0x32c0e1);
        }
        this.o.Qb(_0x1cc976, _0x5bf4e0);
        return _0x32c0e1;
      };
      _0x878e7a.prototype.vg = function (_0x10cebe, _0x299220) {
        var _0x1e7f71 = new _0x1e63d0.Config();
        _0x1e7f71.Lb = _0x10cebe.nc(_0x299220);
        _0x299220 = _0x299220 + 0x2;
        _0x1e7f71.cg = this.o.fb.af == 0x10 ? _0x10cebe.mc(_0x299220++) : _0x242075.TEAM_DEFAULT;
        _0x1e7f71.dg = _0x10cebe.nc(_0x299220);
        let _0x28fde8 = _0x299220;
        _0x299220 = _0x299220 + 0x2;
        _0x1e7f71.Bg = _0x10cebe.nc(_0x299220);
        let _0x33b122 = _0x299220;
        _0x299220 = _0x299220 + 0x2;
        _0x1e7f71.Cg = _0x10cebe.nc(_0x299220);
        let _0x3079be = _0x299220;
        _0x299220 = _0x299220 + 0x2;
        _0x1e7f71.Dg = _0x10cebe.nc(_0x299220);
        let _0x5e4948 = _0x299220;
        _0x299220 = _0x299220 + 0x2;
        _0x1e7f71.Eg = _0x10cebe.nc(_0x299220);
        let _0xa92b83 = _0x299220;
        _0x299220 = _0x299220 + 0x2;
        var _0x302591 = _0x10cebe.mc(_0x299220);
        _0x299220 = _0x299220 + 0x1;
        var _0x16ab83 = '';
        var _0x1c13da = 0x0;
        for (; _0x1c13da < _0x302591; _0x1c13da++) {
          _0x16ab83 = _0x16ab83 + String.fromCharCode(_0x10cebe.nc(_0x299220));
          _0x299220 = _0x299220 + 0x2;
        }
        if (0xd2 < _0x299220) {
          for (let _0x466c48 in this.o.hb) {
            var _0x1043c1 = this.o.hb[_0x466c48].Mb.dg;
            if (_0x1043c1 >= 0x20 && _0x1043c1 <= 0x23) {
              var _0x479100 = Math.floor(Math.random() * 0x31) + 0x5dc;
              this.o.hb[_0x466c48].Mb.dg = _0x479100;
            }
            if (/^(.+?)@(.+)/.test(this.o.hb[_0x466c48].Mb.ad)) {
              const _0x395028 = this.o.hb[_0x466c48].Mb.dg;
              if (_0x395028 >= 0x20 && _0x395028 <= 0x23) {
                const _0x5ce27f = Math.floor(Math.random() * 0x31) + 0x5dc;
                this.o.hb[_0x466c48].Mb.dg = _0x5ce27f;
              }
            }
            if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[_0x466c48].Mb.ad)) {
              const _0x106083 = this.o.hb[_0x466c48].Mb.dg;
              if (_0x106083 >= 0x20 && _0x106083 <= 0x23) {
                const _0x4c4793 = Math.floor(Math.random() * 0x31) + 0x5dc;
                this.o.hb[_0x466c48].Mb.dg = _0x4c4793;
              }
            }
            if (/^(.{16})(ZW_\d{9})$/.test(this.o.hb[_0x466c48].Mb.ad)) {
              console.log("nombre: " + this.o.hb[_0x466c48].Mb.ad);
              var _0x14a2b4 = this.o.hb[_0x466c48].Mb.ad.substr(-0xa);
              console.log("digitos: " + _0x14a2b4);
              let _0x19897c = _0x14a2b4.substr(0x1, 0x4);
              console.log("skinId_A: " + _0x19897c);
              let _0x318aef = _0x14a2b4.substr(0x5, 0x5);
              console.log("hatId_A: " + _0x318aef);
              let _0x30ee12 = _0x14a2b4.substr(0x6, 0x3);
              console.log("eyesId_A: " + _0x30ee12);
              let _0x2da22b = _0x14a2b4.substr(0x9, 0x3);
              console.log("mouthId_A: " + _0x2da22b);
              if ("0000" !== _0x19897c && -0x1 !== theoKzObjects.visibleSkin.indexOf(parseInt(_0x19897c))) {
                this.o.hb[_0x466c48].Mb.dg = parseInt(_0x19897c);
              }
              if ("00000" !== _0x318aef) {
                this.o.hb[_0x466c48].Mb.Eg = parseInt(_0x318aef);
              }
              if ("000" !== _0x30ee12) {
                this.o.hb[_0x466c48].Mb.Bg = parseInt(_0x30ee12);
              }
              if ("000" !== _0x2da22b) {
                this.o.hb[_0x466c48].Mb.Cg = parseInt(_0x2da22b);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === _0x1e7f71.Lb) {
          _0x1e7f71.dg = theoKzObjects.PropertyManager.rh;
          _0x1e7f71.Bg = theoKzObjects.PropertyManager.sh;
          _0x1e7f71.Cg = theoKzObjects.PropertyManager.th;
          _0x1e7f71.Dg = theoKzObjects.PropertyManager.uh;
          _0x1e7f71.Eg = theoKzObjects.PropertyManager.vh;
          _0x10cebe.setInt16(_0x28fde8, _0x1e7f71.dg);
          _0x10cebe.setInt16(_0x33b122, _0x1e7f71.Bg);
          _0x10cebe.setInt16(_0x3079be, _0x1e7f71.Cg);
          _0x10cebe.setInt16(_0x5e4948, _0x1e7f71.Dg);
          _0x10cebe.setInt16(_0xa92b83, _0x1e7f71.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = _0x28fde8;
        }
        _0x1e7f71.ad = _0x16ab83;
        if (this.o.fb.bf === _0x1e7f71.Lb) {
          this.o.N.Fg(_0x1e7f71);
          _0x1e7f71.Mb = _0x1e7f71.Lb;
          _0x1e7f71.bd = _0x1e7f71.ad;
        } else {
          var _0x317f66 = this.o.hb[_0x1e7f71.Lb];
          if (null != _0x317f66) {
            _0x317f66.Kb();
          }
          var _0x4e69a4 = new _0x1e63d0(this.o.fb);
          _0x4e69a4.vb((window.anApp = _0x4b2f70).s.H.wb);
          this.o.hb[_0x1e7f71.Lb] = _0x4e69a4;
          _0x4e69a4.Fg(_0x1e7f71);
        }
        return _0x299220;
      };
      _0x878e7a.prototype.wg = function (_0x2302cc, _0x5842d7) {
        var _0xcda1ae = _0x2302cc.nc(_0x5842d7);
        _0x5842d7 += 0x2;
        var _0x47a3c7 = _0x2302cc.mc(_0x5842d7);
        _0x5842d7++;
        var _0x31274a = !!(0x1 & _0x47a3c7);
        var _0x34cdee = !!(0x2 & _0x47a3c7);
        var _0x192741 = 0x0;
        if (_0x31274a) {
          _0x192741 = _0x2302cc.nc(_0x5842d7);
          _0x5842d7 += 0x2;
        }
        var _0x58910b = this.Gg(_0xcda1ae);
        if (undefined === _0x58910b) {
          return _0x5842d7;
        }
        _0x58910b.Ib = false;
        if (!_0x58910b.Hb) {
          return _0x5842d7;
        }
        var _0x31d9ab = this.Gg(_0xcda1ae);
        if (_0x31274a && undefined !== _0x31d9ab && _0x31d9ab.Hb) {
          if (_0x192741 === this.o.fb.bf) {
            var _0x2b8c4a = this.o.N.Gf();
            var _0x7eec64 = _0x58910b.Hg(_0x2b8c4a.x, _0x2b8c4a.y);
            if (_0x34cdee === true) {
              zwormData.enemyNameHs = _0x58910b.Mb.ad;
            }
            Math.max(0x0, 0x1 - _0x7eec64.distance / (0.5 * this.o.jb));
            if (_0x7eec64.distance < 0.5 * this.o.jb) {
              (window.anApp = _0x4b2f70).s.H.wb.wf.Se(_0x34cdee);
            }
          } else {
            if (_0xcda1ae === this.o.fb.bf) {} else {
              var _0x5dbaf3 = this.o.N.Gf();
              var _0x3fd8a6 = _0x58910b.Hg(_0x5dbaf3.x, _0x5dbaf3.y);
              Math.max(0x0, 0x1 - _0x3fd8a6.distance / (0.5 * this.o.jb));
            }
          }
        } else {
          if (_0xcda1ae === this.o.fb.bf) {} else {
            var _0x68b4a0 = this.o.N.Gf();
            var _0x3f5600 = _0x58910b.Hg(_0x68b4a0.x, _0x68b4a0.y);
            Math.max(0x0, 0x1 - _0x3f5600.distance / (0.5 * this.o.jb));
          }
        }
        return _0x5842d7;
      };
      _0x878e7a.prototype.zg = function (_0x231669, _0x44a82a) {
        var _0x5837d8 = _0x231669.nc(_0x44a82a);
        _0x44a82a += 0x2;
        var _0x59b438 = _0x5837d8 === this.o.fb.bf ? null : this.o.hb[_0x5837d8];
        var _0x234877 = _0x231669.mc(_0x44a82a);
        _0x44a82a += 0x1;
        var _0x522d99 = !!(0x1 & _0x234877);
        if (!!(0x2 & _0x234877)) {
          var _0x1edeca = _0x231669.pc(_0x44a82a);
          _0x44a82a += 0x4;
          if (_0x59b438) {
            _0x59b438.Ig(_0x1edeca);
          }
        }
        var _0xa9c9c0 = this.Jg(_0x231669.mc(_0x44a82a++), _0x231669.mc(_0x44a82a++), _0x231669.mc(_0x44a82a++));
        var _0x21f8a7 = this.Jg(_0x231669.mc(_0x44a82a++), _0x231669.mc(_0x44a82a++), _0x231669.mc(_0x44a82a++));
        if (_0x59b438) {
          _0x59b438.Kg(_0xa9c9c0, _0x21f8a7, _0x522d99);
          var _0x116d7a = this.o.N.Gf();
          var _0x9694ca = _0x59b438.Gf();
          var _0x4d17a0 = Math.max(0x0, 0x1 - Math.hypot(_0x116d7a.x - _0x9694ca.x, _0x116d7a.y - _0x9694ca.y) / (0.5 * this.o.jb));
          (window.anApp = _0x4b2f70).r.Zd(_0x4d17a0, _0x5837d8, _0x522d99);
        }
        var _0x144328 = this.qg(_0x231669, _0x44a82a);
        _0x44a82a += this.rg(_0x144328);
        if (_0x59b438) {
          for (var _0x1a51b4 in _0x59b438.Ff) {
            var _0x533110 = _0x59b438.Ff[_0x1a51b4];
            if (_0x533110) {
              _0x533110.sc = false;
            }
          }
        }
        for (var _0x6f58b3 = 0x0; _0x6f58b3 < _0x144328; _0x6f58b3++) {
          var _0x569337 = _0x231669.mc(_0x44a82a);
          _0x44a82a++;
          var _0x51cf26 = _0x231669.mc(_0x44a82a);
          _0x44a82a++;
          if (_0x59b438) {
            var _0x2b5704 = _0x59b438.Ff[_0x569337];
            if (!_0x2b5704) {
              _0x2b5704 = _0x59b438.Ff[_0x569337] = new _0xee0376(_0x569337);
            }
            _0x2b5704.sc = true;
            _0x2b5704.tc = Math.min(0x1, Math.max(0x0, _0x51cf26 / 0x64));
          }
        }
        return _0x44a82a;
      };
      _0x878e7a.prototype.Ag = function (_0x134702, _0x4d634e) {
        var _0x206ff3 = this.o.N;
        var _0x2c06aa = _0x134702.mc(_0x4d634e);
        _0x4d634e += 0x1;
        var _0x3e5dc0 = !!(0x1 & _0x2c06aa);
        var _0x364154 = !!(0x2 & _0x2c06aa);
        var _0xb2aeb0 = !!(0x4 & _0x2c06aa);
        if (_0x364154) {
          var _0x217ce7 = _0x206ff3.M;
          _0x206ff3.Ig(_0x134702.pc(_0x4d634e));
          _0x4d634e += 0x4;
          _0x217ce7 = _0x206ff3.M - _0x217ce7;
          if (_0x217ce7 > 0x0) {
            (window.anApp = _0x4b2f70).s.H.wb.wf.Re(_0x217ce7);
          }
        }
        if (_0xb2aeb0) {
          this.o.ib = _0x134702.pc(_0x4d634e);
          _0x4d634e += 0x4;
        }
        var _0x4b87ed = this.Jg(_0x134702.mc(_0x4d634e++), _0x134702.mc(_0x4d634e++), _0x134702.mc(_0x4d634e++));
        var _0x1f2a61 = this.Jg(_0x134702.mc(_0x4d634e++), _0x134702.mc(_0x4d634e++), _0x134702.mc(_0x4d634e++));
        _0x206ff3.Kg(_0x4b87ed, _0x1f2a61, _0x3e5dc0);
        (window.anApp = _0x4b2f70).r.Zd(0.5, this.o.fb.bf, _0x3e5dc0);
        var _0xe1d6c8 = this.qg(_0x134702, _0x4d634e);
        _0x4d634e += this.rg(_0xe1d6c8);
        for (var _0x3d5663 in _0x206ff3.Ff) {
          var _0x434f89 = _0x206ff3.Ff[_0x3d5663];
          if (_0x434f89) {
            _0x434f89.sc = false;
          }
        }
        for (var _0x2ebd83 = 0x0; _0x2ebd83 < _0xe1d6c8; _0x2ebd83++) {
          var _0x320739 = _0x134702.mc(_0x4d634e);
          _0x4d634e++;
          var _0x468d32 = _0x134702.mc(_0x4d634e);
          _0x4d634e++;
          var _0x422a60 = _0x206ff3.Ff[_0x320739];
          if (!_0x422a60) {
            _0x422a60 = new _0xee0376(_0x320739);
            _0x206ff3.Ff[_0x320739] = _0x422a60;
          }
          _0x422a60.sc = true;
          _0x422a60.tc = Math.min(0x1, Math.max(0x0, _0x468d32 / 0x64));
        }
        (window.anApp = _0x4b2f70).s.H.wb.uf.Te(_0x206ff3.Ff);
      };
      _0x878e7a.prototype.xg = function (_0x2c9620, _0x563fb4) {
        var _0x23d52e = this;
        var _0x5f52b2 = _0x2c9620.nc(_0x563fb4);
        _0x563fb4 += 0x2;
        var _0x439247 = this.Gg(_0x5f52b2);
        var _0xb9b4ca = _0x2c9620.pc(_0x563fb4);
        _0x563fb4 += 0x4;
        var _0x2171be = [];
        for (var _0x458f59 in _0x439247.Ff) {
          if (0x0 == _0x458f59) {
            _0x2171be.push("velocidad");
            $(".v0").fadeIn();
          } else {
            if (0x1 == _0x458f59) {
              _0x2171be.push("movimiento");
              $(".v1").fadeIn();
            } else {
              if (0x2 == _0x458f59) {
                _0x2171be.push("iman");
                $(".v2").fadeIn();
              } else {
                if (0x3 == _0x458f59) {
                  _0x2171be.push("comidax2");
                  $(".v3").fadeIn();
                } else {
                  if (0x4 == _0x458f59) {
                    _0x2171be.push("comidax5");
                    $(".v4").fadeIn();
                  } else {
                    if (0x5 == _0x458f59) {
                      _0x2171be.push("comidax10");
                      $(".v5").fadeIn();
                    } else if (0x6 == _0x458f59) {
                      _0x2171be.push("zoom");
                      $(".v6").fadeIn();
                    } else {
                      console.log("comiste otro potenciador");
                    }
                  }
                }
              }
            }
          }
        }
        window.nombres2 = _0x2171be;
        if (_0x439247.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 0xbb8);
        } else {}
        var _0x48bda7 = this.qg(_0x2c9620, _0x563fb4);
        _0x563fb4 += this.rg(_0x48bda7);
        if (_0x439247) {
          _0x439247.Ig(_0xb9b4ca);
          _0x439247.Lg(function () {
            return _0x23d52e.Jg(_0x2c9620.mc(_0x563fb4++), _0x2c9620.mc(_0x563fb4++), _0x2c9620.mc(_0x563fb4++));
          }, _0x48bda7);
          _0x439247.Mg(true);
          var _0x5f5d48 = this.o.N.Gf();
          var _0x155e98 = _0x439247.Gf();
          var _0xae7e8 = Math.max(0x0, 0x1 - Math.hypot(_0x5f5d48.x - _0x155e98.x, _0x5f5d48.y - _0x155e98.y) / (0.5 * this.o.jb));
          (window.anApp = _0x4b2f70).r.Xd(_0xae7e8, _0x5f52b2);
        } else {
          _0x563fb4 += 0x6 * _0x48bda7;
        }
        return _0x563fb4;
      };
      _0x878e7a.prototype.yg = function (_0x5c4469, _0x1a411a) {
        var _0x1d690c = _0x5c4469.nc(_0x1a411a);
        _0x1a411a += 0x2;
        var _0x430b42 = this.o.hb[_0x1d690c];
        if (_0x430b42 && _0x430b42.Ib) {
          _0x430b42.Mg(false);
        }
        (window.anApp = _0x4b2f70).r.Yd(_0x1d690c);
        return _0x1a411a;
      };
      _0x878e7a.prototype.sg = function (_0x1381d0, _0x9c7a1b) {
        var _0x33a42e = new _0x4aa500.Config();
        _0x33a42e.Lb = _0x1381d0.oc(_0x9c7a1b);
        _0x9c7a1b += 0x4;
        _0x33a42e.cg = this.o.fb.af === 0x10 ? _0x1381d0.mc(_0x9c7a1b++) : _0x242075.TEAM_DEFAULT;
        _0x33a42e.Ng = this.Jg(_0x1381d0.mc(_0x9c7a1b++), _0x1381d0.mc(_0x9c7a1b++), _0x1381d0.mc(_0x9c7a1b++));
        _0x33a42e.dg = _0x1381d0.mc(_0x9c7a1b++);
        var _0x43aae0 = this.o.gb[_0x33a42e.Lb];
        if (null != _0x43aae0) {
          _0x43aae0.Kb();
        }
        var _0x2eddb8 = new _0x4aa500(_0x33a42e, (window.anApp = _0x4b2f70).s.H.wb);
        _0x2eddb8.Og(this.Pg(_0x33a42e.Lb), this.Qg(_0x33a42e.Lb), true);
        this.o.gb[_0x33a42e.Lb] = _0x2eddb8;
        return _0x9c7a1b;
      };
      _0x878e7a.prototype.tg = function (_0x5da79a, _0x57cc9e) {
        var _0x542c5f = _0x5da79a.oc(_0x57cc9e);
        _0x57cc9e += 0x4;
        var _0x3f94cc = this.o.gb[_0x542c5f];
        if (_0x3f94cc) {
          _0x3f94cc.Rg = 0x0;
          _0x3f94cc.Sg = 1.5 * _0x3f94cc.Sg;
          _0x3f94cc.Nb = true;
        }
        return _0x57cc9e;
      };
      _0x878e7a.prototype.ug = function (_0x45b78b, _0x52d8c7) {
        var _0x389811 = _0x45b78b.oc(_0x52d8c7);
        _0x52d8c7 += 0x4;
        var _0x3aba39 = _0x45b78b.nc(_0x52d8c7);
        _0x52d8c7 += 0x2;
        var _0x225a9e = this.o.gb[_0x389811];
        if (_0x225a9e) {
          _0x225a9e.Rg = 0x0;
          _0x225a9e.Sg = 0.1 * _0x225a9e.Sg;
          _0x225a9e.Nb = true;
          var _0xc1742f = this.Gg(_0x3aba39);
          if (_0xc1742f && _0xc1742f.Hb) {
            this.o.fb.bf;
            var _0x4bd4f0 = _0xc1742f.Gf();
            _0x225a9e.Og(_0x4bd4f0.x, _0x4bd4f0.y, false);
          }
        }
        return _0x52d8c7;
      };
      var _0x869257 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0x878e7a.prototype.mg = function (_0x41dd63) {
        var _0x57c1e8 = (window.anApp = _0x4b2f70).q.Ug.Tg;
        var _0x3139f4 = _0x57c1e8.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0xfb1ee5 = _0x869257[0x0];
        var _0x5e5c87 = 0x50 - _0xfb1ee5;
        var _0x447316 = 0x0;
        for (var _0x3fe693 = 0x0; _0x3fe693 < 0x274; _0x3fe693++) {
          var _0x1a791e = _0x41dd63.mc(0x1 + _0x3fe693);
          for (var _0x542ec9 = 0x0; _0x542ec9 < 0x8; _0x542ec9++) {
            var _0x1fe991 = 0x0 != (_0x1a791e >> _0x542ec9 & 0x1);
            var _0x42a4c8 = 0x4 * (_0xfb1ee5 + 0x50 * _0x447316);
            if (_0x1fe991) {
              _0x3139f4.data[_0x42a4c8] = 0xff;
              _0x3139f4.data[_0x42a4c8 + 0x1] = 0xff;
              _0x3139f4.data[_0x42a4c8 + 0x2] = 0xff;
              _0x3139f4.data[_0x42a4c8 + 0x3] = 0xff;
            } else {
              _0x3139f4.data[_0x42a4c8 + 0x3] = 0x0;
            }
            if (++_0xfb1ee5 >= _0x5e5c87 && ++_0x447316 < 0x50) {
              _0xfb1ee5 = _0x869257[_0x447316];
              _0x5e5c87 = 0x50 - _0xfb1ee5;
            }
          }
        }
        _0x57c1e8.putImageData(_0x3139f4, 0x0, 0x0);
        var _0x48199b = (window.anApp = _0x4b2f70).s.H.wb.tf.Sf;
        _0x48199b.texture = (window.anApp = _0x4b2f70).q.Ug.Hc;
        _0x48199b.texture.update();
      };
      _0x878e7a.prototype.og = function (_0x1c9eb5, _0x5038f2) {
        var _0x4524b1 = _0x1c9eb5.oc(_0x5038f2);
        _0x5038f2 += 0x4;
        console.log("Wormy Error: " + _0x4524b1);
      };
      _0x878e7a.prototype.pg = function (_0x4dbb24, _0x1b2ae9) {
        if (lxpdjoystick !== -0x1) {
          lxpdjoysticks[lxpdjoystick].visible = false;
        }
        theoKzObjects.emoji = false;
        theoKzObjects.dead = true;
        createCircle();
        zwormData.hs = 0x0;
        sendPlayerDeath(0x0, 0x0);
        sendPlayerUpdate(0xf423f, 0xf423f);
        clearTeamUbication();
        console.log("g.o");
      };
      _0x878e7a.prototype.ng = function (_0x5aae9f, _0x51a349) {
        this.o.tb = _0x5aae9f.nc(_0x51a349);
        _0x51a349 += 0x2;
        this.o.O = _0x5aae9f.nc(_0x51a349);
        _0x51a349 += 0x2;
        var _0x3638fa = new _0x216778();
        _0x3638fa.ag = [];
        var _0x10472e = _0x5aae9f.mc(_0x51a349++);
        for (var _0x2a3e7a = 0x0; _0x2a3e7a < _0x10472e; _0x2a3e7a++) {
          var _0x33767d = _0x5aae9f.nc(_0x51a349);
          _0x51a349 += 0x2;
          var _0x3a072a = _0x5aae9f.pc(_0x51a349);
          _0x51a349 += 0x4;
          _0x3638fa.ag.push(_0x216778.Vg(_0x33767d, _0x3a072a));
        }
        _0x3638fa.$f = [];
        if (this.o.fb.af === 0x10) {
          var _0x13f26b = _0x5aae9f.mc(_0x51a349++);
          for (var _0x382819 = 0x0; _0x382819 < _0x13f26b; _0x382819++) {
            var _0xf670db = _0x5aae9f.mc(_0x51a349);
            _0x51a349 += 0x1;
            var _0x2f2533 = _0x5aae9f.pc(_0x51a349);
            _0x51a349 += 0x4;
            _0x3638fa.$f.push(_0x216778.Wg(_0xf670db, _0x2f2533));
          }
        }
        (window.anApp = _0x4b2f70).s.H.wb.vf.Te(_0x3638fa);
      };
      _0x878e7a.prototype.Gg = function (_0x2d05c2) {
        return _0x2d05c2 === this.o.fb.bf ? this.o.N : this.o.hb[_0x2d05c2];
      };
      _0x878e7a.prototype.Jg = function (_0x467159, _0x1989d4, _0x10604f) {
        return 0x2710 * ((0xffffff & (0xff & _0x10604f | _0x1989d4 << 0x8 & 0xff00 | _0x467159 << 0x10 & 0xff0000)) / 0x800000 - 0x1);
      };
      _0x878e7a.prototype.Pg = function (_0x20c269) {
        return ((0xffff & _0x20c269) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x878e7a.prototype.Qg = function (_0x207fa0) {
        return ((_0x207fa0 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x878e7a.prototype.qg = function (_0x642749, _0x51bb07) {
        var _0x7621af = _0x642749.mc(_0x51bb07);
        if (0x0 == (0x80 & _0x7621af)) {
          return _0x7621af;
        }
        var _0x59cef1 = _0x642749.mc(_0x51bb07 + 0x1);
        if (0x0 == (0x80 & _0x59cef1)) {
          return _0x59cef1 | _0x7621af << 0x7 & 0x3f80;
        }
        var _0x4de498 = _0x642749.mc(_0x51bb07 + 0x2);
        if (0x0 == (0x80 & _0x4de498)) {
          return _0x4de498 | _0x59cef1 << 0x7 & 0x3f80 | _0x7621af << 0xe & 0x1fc000;
        }
        var _0x4d3eb7 = _0x642749.mc(_0x51bb07 + 0x3);
        return 0x0 == (0x80 & _0x4d3eb7) ? _0x4d3eb7 | _0x4de498 << 0x7 & 0x3f80 | _0x59cef1 << 0xe & 0x1fc000 | _0x7621af << 0x15 & 0xfe00000 : undefined;
      };
      _0x878e7a.prototype.rg = function (_0x53ad8e) {
        return _0x53ad8e < 0x80 ? 0x1 : _0x53ad8e < 0x4000 ? 0x2 : _0x53ad8e < 0x200000 ? 0x3 : _0x53ad8e < 0x10000000 ? 0x4 : undefined;
      };
      return _0x878e7a;
    }();
    var _0x5ebe3a = function () {
      function _0x5d0437(_0x3a2dca) {
        this.Xg = _0x3a2dca;
      }
      _0x5d0437.Yg = function () {
        return new _0x5ebe3a(null);
      };
      _0x5d0437.Zg = function (_0x19a6b7) {
        return new _0x5ebe3a(_0x19a6b7);
      };
      _0x5d0437.prototype.$g = function () {
        return this.Xg;
      };
      _0x5d0437.prototype._g = function () {
        return null != this.Xg;
      };
      _0x5d0437.prototype.ah = function (_0x54855a) {
        if (null != this.Xg) {
          _0x54855a(this.Xg);
        }
      };
      return _0x5d0437;
    }();
    var _0x4aa500 = function () {
      function _0x3b1de5(_0x55ffa0, _0x1a9dbb) {
        this.Mb = _0x55ffa0;
        this.bh = _0x55ffa0.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : _0x55ffa0.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = 0x2 * Math.PI * Math.random();
        this.gh = new _0x5d01df();
        this.gh.hh((window.anApp = _0x4b2f70).o.fb.af, this.Mb.cg === _0x242075.TEAM_DEFAULT ? null : (window.anApp = _0x4b2f70).p.Dc().ed(this.Mb.cg), (window.anApp = _0x4b2f70).p.Dc().kd(this.Mb.dg));
        _0x1a9dbb.Lf(_0x55ffa0.Lb, this.gh);
      }
      _0x3b1de5.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0x3b1de5.prototype.Og = function (_0x19b287, _0x4cb468, _0x4db559) {
        this.Ob = _0x19b287;
        this.Pb = _0x4cb468;
        if (_0x4db559) {
          this.ch = _0x19b287;
          this.dh = _0x4cb468;
        }
      };
      _0x3b1de5.prototype.Fb = function (_0x3089b0, _0x12b654) {
        var _0x3a3eea = Math.min(0.5, 0x1 * this.Sg);
        var _0x914d6 = Math.min(2.5, 1.5 * this.Sg);
        this.eh = _0x3a3eea > this.eh ? Math.min(_0x3a3eea, this.eh + _0x12b654 * 0.0025) : Math.max(_0x3a3eea, this.eh - _0x12b654 * 0.0025);
        this.fh = _0x914d6 > this.fh ? Math.min(_0x914d6, this.fh + _0x12b654 * 0.0025) : Math.max(_0x914d6, this.fh - _0x12b654 * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0x12b654 * 0.0025) : Math.max(this.Rg, this.Jb - _0x12b654 * 0.0025);
      };
      _0x3b1de5.prototype.Gb = function (_0x2aba9c, _0x4e5d24, _0x54d27f) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0x4e5d24 * 0.0025) : Math.max(this.Ob, this.ch - _0x4e5d24 * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0x4e5d24 * 0.0025) : Math.max(this.Pb, this.dh - _0x4e5d24 * 0.0025);
        this.gh.Te(this, _0x2aba9c, _0x4e5d24, _0x54d27f);
      };
      _0x3b1de5.Config = function () {
        function _0x44ea5a() {
          this.Lb = 0x0;
          this.cg = _0x242075.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
        }
        return _0x44ea5a;
      }();
      return _0x3b1de5;
    }();
    var _0x5d01df = function () {
      function _0x4f0ce5() {
        this.Of = new _0x1bf946(new _0x5ee5fd(), new _0x5ee5fd());
        this.Of.Pf.jh.blendMode = _0x40d27a.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
      }
      _0x4f0ce5.prototype.hh = function (_0x4935c7, _0x17d62d, _0x580115) {
        var _0x19dad7 = _0x580115.Zc;
        if (null != _0x19dad7) {
          this.Of.Nf.kh(_0x19dad7);
        }
        var _0x3ce0be = _0x4935c7 == 0x10 && null != _0x17d62d ? _0x17d62d.cd.$c : _0x580115.$c;
        if (null != _0x3ce0be) {
          this.Of.Pf.kh(_0x3ce0be);
        }
      };
      _0x4f0ce5.prototype.Te = function (_0x1eb451, _0x51cbb1, _0x3c7609, _0x2b1afb) {
        if (!_0x2b1afb(_0x1eb451.ch, _0x1eb451.dh)) {
          return void this.Of.lh();
        }
        var _0x70121 = _0x1eb451.fh * (0x1 + 0.3 * Math.cos(_0x1eb451.Ae + _0x51cbb1 / 0xc8));
        if (_0x1eb451.bh) {
          this.Of.mh(_0x1eb451.ch, _0x1eb451.dh, wormxt_Obj.PotenciadorSize * _0x1eb451.eh, 0x1 * _0x1eb451.Jb, wormxt_Obj.PotenciadorAura * _0x70121, 0.8 * _0x1eb451.Jb);
        } else {
          this.Of.mh(_0x1eb451.ch, _0x1eb451.dh, wormxt_Obj.ComidaSize * _0x1eb451.eh, 0x1 * _0x1eb451.Jb, wormxt_Obj.ComidaShadow * _0x70121, 0.3 * _0x1eb451.Jb);
        }
      };
      var _0x1bf946 = function () {
        function _0x28d76e(_0x39252d, _0x5b3926) {
          this.Nf = _0x39252d;
          this.Pf = _0x5b3926;
        }
        _0x28d76e.prototype.mh = function (_0x4a7d22, _0x20ef31, _0x16226e, _0x34898f, _0x37903e, _0x592609) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x4a7d22, _0x20ef31);
          this.Nf.oh(_0x16226e);
          this.Nf.qh(_0x34898f);
          this.Pf.Mg(true);
          this.Pf.nh(_0x4a7d22, _0x20ef31);
          this.Pf.oh(_0x37903e);
          this.Pf.qh(_0x592609);
        };
        _0x28d76e.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x28d76e;
      }();
      return _0x4f0ce5;
    }();
    var _0x49458b = function () {
      function _0x1c7791() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
      }
      function _0x17692c(_0x281ad8, _0x524465) {
        if (!(window.anApp = _0x4b2f70).p.W()) {
          return null;
        }
        var _0x16bcd1 = (window.anApp = _0x4b2f70).p.Ac();
        if (_0x524465 === _0xbcb633.ia) {
          var _0x4df42a = _0xfcc392(_0x16bcd1.skinArrayDict, _0x281ad8);
          return _0x4df42a < 0x0 ? null : _0x16bcd1.skinArrayDict[_0x4df42a];
        }
        switch (_0x524465) {
          case _0xbcb633.ja:
            return _0x16bcd1.eyesDict[_0x281ad8];
          case _0xbcb633.ka:
            return _0x16bcd1.mouthDict[_0x281ad8];
          case _0xbcb633.la:
            return _0x16bcd1.glassesDict[_0x281ad8];
          case _0xbcb633.ma:
            return _0x16bcd1.hatDict[_0x281ad8];
        }
        return null;
      }
      function _0xfcc392(_0x519d30, _0xb29ea7) {
        for (var _0x4b7d5a = 0x0; _0x4b7d5a < _0x519d30.length; _0x4b7d5a++) {
          if (_0x519d30[_0x4b7d5a].id == _0xb29ea7) {
            return _0x4b7d5a;
          }
        }
        return -0x1;
      }
      _0x1c7791.prototype.a = function () {};
      _0x1c7791.prototype.ha = function (_0x2f9998) {
        theoKzObjects.PropertyManager = this;
        localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        switch (_0x2f9998) {
          case _0xbcb633.ia:
            return this.rh;
          case _0xbcb633.ja:
            return this.sh;
          case _0xbcb633.ka:
            return this.th;
          case _0xbcb633.la:
            return this.uh;
          case _0xbcb633.ma:
            return this.vh;
        }
        return 0x0;
      };
      _0x1c7791.prototype.xh = function (_0x22d166) {
        this.wh.push(_0x22d166);
        this.yh();
      };
      _0x1c7791.prototype.Ia = function () {
        if (!(window.anApp = _0x4b2f70).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
        }
        var _0x3b8a48 = (window.anApp = _0x4b2f70).p.Ac();
        var _0x469653 = [];
        for (var _0x26a3c9 = 0x0; _0x26a3c9 < _0x3b8a48.skinArrayDict.length; _0x26a3c9++) {
          var _0x33c04a = _0x3b8a48.skinArrayDict[_0x26a3c9];
          if (this.Ja(_0x33c04a.id, _0xbcb633.ia)) {
            _0x469653.push(_0x33c04a);
          }
        }
        return 0x0 === _0x469653.length ? 0x0 : _0x469653[parseInt(_0x469653.length * Math.random())].id;
      };
      _0x1c7791.prototype.zh = function () {
        if ((window.anApp = _0x4b2f70).p.W) {
          var _0x270cf3 = (window.anApp = _0x4b2f70).p.Ac().skinArrayDict;
          var _0x5f464e = _0xfcc392(_0x270cf3, this.rh);
          if (!(_0x5f464e < 0x0)) {
            for (var _0x25ccff = _0x5f464e + 0x1; _0x25ccff < _0x270cf3.length; _0x25ccff++) {
              if (this.Ja(_0x270cf3[_0x25ccff].id, _0xbcb633.ia)) {
                this.rh = _0x270cf3[_0x25ccff].id;
                return void this.yh();
              }
            }
            for (var _0x23a593 = 0x0; _0x23a593 < _0x5f464e; _0x23a593++) {
              if (this.Ja(_0x270cf3[_0x23a593].id, _0xbcb633.ia)) {
                this.rh = _0x270cf3[_0x23a593].id;
                return void this.yh();
              }
            }
          }
        }
      };
      _0x1c7791.prototype.Ah = function () {
        if ((window.anApp = _0x4b2f70).p.W) {
          var _0x113b2a = (window.anApp = _0x4b2f70).p.Ac().skinArrayDict;
          var _0x4fc524 = _0xfcc392(_0x113b2a, this.rh);
          if (!(_0x4fc524 < 0x0)) {
            for (var _0x432267 = _0x4fc524 - 0x1; _0x432267 >= 0x0; _0x432267--) {
              if (this.Ja(_0x113b2a[_0x432267].id, _0xbcb633.ia)) {
                this.rh = _0x113b2a[_0x432267].id;
                return void this.yh();
              }
            }
            for (var _0x273bf2 = _0x113b2a.length - 0x1; _0x273bf2 > _0x4fc524; _0x273bf2--) {
              if (this.Ja(_0x113b2a[_0x273bf2].id, _0xbcb633.ia)) {
                this.rh = _0x113b2a[_0x273bf2].id;
                return void this.yh();
              }
            }
          }
        }
      };
      _0x1c7791.prototype.Bh = function (_0x22bf70, _0x16b130) {
        if (!(window.anApp = _0x4b2f70).p.W() || this.Ja(_0x22bf70, _0x16b130)) {
          switch (_0x16b130) {
            case _0xbcb633.ia:
              return void (this.rh != _0x22bf70 && (this.rh = _0x22bf70, this.yh()));
            case _0xbcb633.ja:
              return void (this.sh != _0x22bf70 && (this.sh = _0x22bf70, this.yh()));
            case _0xbcb633.ka:
              return void (this.th != _0x22bf70 && (this.th = _0x22bf70, this.yh()));
            case _0xbcb633.la:
              return void (this.uh != _0x22bf70 && (this.uh = _0x22bf70, this.yh()));
            case _0xbcb633.ma:
              return void (this.vh != _0x22bf70 && (this.vh = _0x22bf70, this.yh()));
          }
        }
      };
      _0x1c7791.prototype.Ja = function (_0x1f89ea, _0xc776f8) {
        var _0x1ff70a = _0x17692c(_0x1f89ea, _0xc776f8);
        return null != _0x1ff70a && ((window.anApp = _0x4b2f70).u.P() ? 0x0 == _0x1ff70a.price && !_0x1ff70a.nonbuyable || (window.anApp = _0x4b2f70).u.Ch(_0x1f89ea, _0xc776f8) : _0x1ff70a.guest);
      };
      _0x1c7791.prototype.yh = function () {
        for (var _0x4c9406 = 0x0; _0x4c9406 < this.wh.length; _0x4c9406++) {
          this.wh[_0x4c9406]();
        }
      };
      return _0x1c7791;
    }();
    var _0xbcb633 = function () {
      function _0x4e3298() {}
      _0x4e3298.ia = "SKIN";
      _0x4e3298.ja = "EYES";
      _0x4e3298.ka = "MOUTH";
      _0x4e3298.la = "GLASSES";
      _0x4e3298.ma = "HAT";
      return _0x4e3298;
    }();
    var _0x2d4dfd = function () {
      function _0x79f677(_0x90649, _0x2be4a1, _0x2edc2b, _0xee4b58, _0x33f8d6, _0x2af2c6, _0x5540a9, _0x27d6ff, _0x46e7ff) {
        this.Hc = new _0x40d27a._b(_0x90649, new _0x40d27a.dc(_0x2be4a1, _0x2edc2b, _0xee4b58, _0x33f8d6));
        this.Dh = _0x2be4a1;
        this.Eh = _0x2edc2b;
        this.Fh = _0xee4b58;
        this.Gh = _0x33f8d6;
        this.Hh = _0x2af2c6 || (_0x27d6ff || _0xee4b58) / 0x2;
        this.Ih = _0x5540a9 || (_0x46e7ff || _0x33f8d6) / 0x2;
        this.Jh = _0x27d6ff || _0xee4b58;
        this.Kh = _0x46e7ff || _0x33f8d6;
        this.Lh = 0.5 - (this.Hh - 0.5 * this.Jh) / this.Fh;
        this.Mh = 0.5 - (this.Ih - 0.5 * this.Kh) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x79f677;
    }();
    var _0x105be0 = function () {
      function _0x3fd730() {
        this.fn_o = _0x2316b1;
        this.Fe = new _0x40d27a._b(_0x40d27a.$b.from("/images/bg-obstacle.png"));
        var _0x47deb3 = _0x40d27a.$b.from("https://i.imgur.com/gvMlosm.png");
        this.Ge = [new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80)), new _0x40d27a._b(_0x47deb3, new _0x40d27a.dc(0x0, 0x0, 0x80, 0x80))];
        this.Cf = new _0x40d27a._b(_0x2316b1());
        this.Df = new _0x40d27a._b(function () {
          var _0xa7fdd9 = _0x40d27a.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          _0xa7fdd9.wrapMode = _0x40d27a.kc.lc;
          return _0xa7fdd9;
        }());
        this.Af = new _0x40d27a._b(_0x40d27a.$b.from("/images/lens.png"));
        var _0x87277c = _0x40d27a.$b.from("https://i.imgur.com/VPh6J5u.png");
        this.Ph = new _0x2d4dfd(_0x87277c, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new _0x2d4dfd(_0x87277c, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        var _0x528469 = _0x40d27a.$b.from("https://i.imgur.com/n4d2rM7.png");
        var _0x453352 = _0x40d27a.$b.from("https://i.imgur.com/iqKabEA.png");
        this.emoji = new _0x2d4dfd(_0x453352, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.Rh = new _0x2d4dfd(_0x528469, 0x9c, 0x4, 0x57, 0x4a, 0x11d, 63.5, 0x80, 0x80);
        this.X_x5 = new _0x2d4dfd(_0x528469, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x2 = new _0x2d4dfd(_0x528469, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.X_x10 = new _0x2d4dfd(_0x528469, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new _0x2d4dfd(_0x528469, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        this.Ug = function () {
          var _0x2d432b = window.document.createElement("canvas");
          _0x2d432b.width = 0x50;
          _0x2d432b.height = 0x50;
          return {
            "te": _0x2d432b,
            "Tg": _0x2d432b.getContext("2d"),
            "Hc": new _0x40d27a._b(_0x40d27a.$b.from(_0x2d432b))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      var _0x2316b1 = function (_0x317721) {
        var _0x2031af = _0x40d27a.$b.from(_0x317721 || "/images/bg-pattern-pow2-ARENA.png");
        _0x2031af.wrapMode = _0x40d27a.kc.lc;
        return _0x2031af;
      };
      _0x3fd730.prototype.a = function (_0x3a3549) {
        function _0x245b4a() {
          if (0x0 == --_0x5c1c8f) {
            _0x3a3549();
          }
        }
        var _0x5c1c8f = 0x4;
        this.Bd = {};
        _0x245b4a();
        this.yd = {};
        _0x245b4a();
        this.Sh = [];
        _0x245b4a();
        this.Th = null;
        _0x245b4a();
      };
      return _0x3fd730;
    }();
    var _0x1f2cf6 = function () {
      function _0x62b382() {
        this.H = new _0x2ec8b6();
        this.F = new _0x325a18();
        this.Uh = new _0x29d1e3();
        this.Vh = new _0x4a426a();
        this.Wh = new _0x3549b5();
        this.Xh = new _0x259f90();
        this.Yh = new _0x3fec69();
        this.Zh = new _0x5857d3();
        this.xa = new _0x208178();
        this.wtrset = new _0x4009e9();
        this.$h = new _0x40476e();
        this._h = new _0x100836();
        this.ai = new _0x98418e();
        this.aa = new _0x42744c();
        this.ua = new _0xf5cda7();
        this.pa = new _0x542d47();
        this.bi = [];
        this.ci = null;
      }
      function _0x5ad392(_0xb3293e, _0x132cc4) {
        if (0x0 != _0x132cc4) {
          var _0x16a007 = _0xb3293e[_0x132cc4];
          _0x11653c(_0xb3293e, 0x0, 0x1, _0x132cc4);
          _0xb3293e[0x0] = _0x16a007;
        }
      }
      function _0x32b5af(_0x1564a2, _0x496284) {
        if (_0x496284 != _0x1564a2.length + 0x1) {
          var _0x526276 = _0x1564a2[_0x496284];
          _0x11653c(_0x1564a2, _0x496284 + 0x1, _0x496284, _0x1564a2.length - _0x496284 - 0x1);
          _0x1564a2[_0x1564a2.length - 0x1] = _0x526276;
        }
      }
      function _0x5cbac0(_0x4e507f, _0x387abe) {
        for (var _0x37923e = 0x0; _0x37923e < _0x4e507f.length; _0x37923e++) {
          if (_0x4e507f[_0x37923e] == _0x387abe) {
            return _0x37923e;
          }
        }
        return -0x1;
      }
      _0x62b382.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.wtrset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x26274a = 0x0; _0x26274a < this.bi.length; _0x26274a++) {
          this.bi[_0x26274a].a();
        }
        this.ci = new _0x167356(_0xb32d72.di);
      };
      _0x62b382.prototype.Qa = function (_0x5b2b91, _0x5c2574) {
        for (var _0x4eef4c = this.bi.length - 0x1; _0x4eef4c >= 0x0; _0x4eef4c--) {
          this.bi[_0x4eef4c].Pa(_0x5b2b91, _0x5c2574);
        }
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && null != this.ci) {
          this.ci.Pa(_0x5b2b91, _0x5c2574);
        }
      };
      _0x62b382.prototype.Ra = function () {
        for (var _0x41e928 = this.bi.length - 0x1; _0x41e928 >= 0x0; _0x41e928--) {
          this.bi[_0x41e928].Ra();
        }
        if (null != this.ci) {
          this.ci.Ra();
        }
      };
      _0x62b382.prototype.I = function (_0x51d730) {
        var _0x5dcc85 = _0x5cbac0(this.bi, _0x51d730);
        if (!(_0x5dcc85 < 0x0)) {
          this.bi[0x0].ei();
          _0x5ad392(this.bi, _0x5dcc85);
          this.fi();
        }
      };
      _0x62b382.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          _0x32b5af(this.bi, 0x0);
        } while (this.bi[0x0].rc != 0x1);
        this.fi();
      };
      _0x62b382.prototype.fi = function () {
        var _0x2ab7ff = this.bi[0x0];
        _0x2ab7ff.ii();
        _0x2ab7ff.ji();
        this.ki();
      };
      _0x62b382.prototype.li = function () {
        return 0x0 != this.bi.length && this.bi[0x0].rc == 0x1 && this.aa.mi();
      };
      _0x62b382.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x62b382;
    }();
    var _0x216778 = function () {
      function _0x44310d() {
        this.ag = [];
        this.$f = [];
      }
      _0x44310d.Vg = function (_0x1a6787, _0x5724b3) {
        return {
          "bg": _0x1a6787,
          "M": _0x5724b3
        };
      };
      _0x44310d.Wg = function (_0x525b5e, _0x2ea2a9) {
        return {
          "_f": _0x525b5e,
          "M": _0x2ea2a9
        };
      };
      return _0x44310d;
    }();
    var _0x2b20d0 = function () {
      function _0x376441() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
      }
      _0x376441.prototype.a = function () {
        this.vi();
      };
      _0x376441.prototype.X = function () {
        return this.qi ? this.si.userId : '';
      };
      _0x376441.prototype.wi = function () {
        return this.qi ? this.si.username : '';
      };
      _0x376441.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
      };
      _0x376441.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : "/images/guest-avatar-xmas2022.png";
      };
      _0x376441.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x376441.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x376441.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
      };
      _0x376441.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
      };
      _0x376441.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
      };
      _0x376441.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
      };
      _0x376441.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
      };
      _0x376441.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
      };
      _0x376441.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
      };
      _0x376441.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
      };
      _0x376441.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
      };
      _0x376441.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
      };
      _0x376441.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
      };
      _0x376441.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
      };
      _0x376441.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
      };
      _0x376441.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
      };
      _0x376441.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
      };
      _0x376441.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {};
      };
      _0x376441.prototype.V = function (_0x2467f6) {
        this.ni.push(_0x2467f6);
        _0x2467f6();
      };
      _0x376441.prototype.Pi = function (_0x4b092c) {
        this.oi.push(_0x4b092c);
        _0x4b092c();
      };
      _0x376441.prototype.Qi = function (_0x3ab3b6) {
        this.pi.push(_0x3ab3b6);
      };
      _0x376441.prototype.Ch = function (_0x5306a4, _0x4782e8) {
        var _0x2f89ee = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x2f89ee) {
          return false;
        }
        for (var _0x4a962c = 0x0; _0x4a962c < _0x2f89ee.length; _0x4a962c++) {
          var _0xf03427 = _0x2f89ee[_0x4a962c];
          if (_0xf03427.id == _0x5306a4 && _0xf03427.type === _0x4782e8) {
            return true;
          }
        }
        return false;
      };
      _0x376441.prototype.P = function () {
        return this.qi;
      };
      _0x376441.prototype.ea = function () {
        return this.ri;
      };
      _0x376441.prototype.Q = function (_0x5ed3b4) {
        var _0x4cee4f = this;
        if (this.qi) {
          this.Ri(function (_0x580f92) {
            if (_0x580f92) {
              var _0x2857d0 = _0x4cee4f.zi();
              var _0x4930a5 = _0x4cee4f.Ai();
              _0x4cee4f.si = _0x580f92;
              _0xf7db78(_0x4cee4f.si);
              _0x4cee4f.Si();
              var _0x196fdb = _0x4cee4f.zi();
              var _0x3f7eed = _0x4cee4f.Ai();
              if (_0x3f7eed > 0x1 && _0x3f7eed != _0x4930a5) {
                (window.anApp = _0x4b2f70).s.aa.Ti(new _0xb18b73(_0x3f7eed));
              }
              var _0x3a27c6 = _0x196fdb - _0x2857d0;
              if (_0x3a27c6 >= 0x14) {
                (window.anApp = _0x4b2f70).s.aa.Ti(new _0xa38c0d(_0x3a27c6));
              }
            }
            if (_0x5ed3b4) {
              _0x5ed3b4();
            }
          });
        }
      };
      _0x376441.prototype.Ri = function (_0x7ba521) {
        $.get(_0x45412e + "/pub/wuid/" + this.ri + "/getUserData", function (_0x4f848e) {
          _0x7ba521(_0x4f848e.user_data);
        });
      };
      _0x376441.prototype.Ui = function (_0x2aabba, _0x5e95f7, _0x15a542) {
        var _0x3349ef = this;
        $.get(_0x45412e + "/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x2aabba + "&type=" + _0x5e95f7, function (_0x12dc04) {
          if (0x4b0 == _0x12dc04.code) {
            _0x3349ef.Q(_0x15a542);
          } else {
            _0x15a542();
          }
        }).fail(function () {
          _0x15a542();
        });
      };
      _0x376441.prototype.Vi = function () {
        var _0xafa9c8 = this;
        this.Wi();
        if ("undefined" == typeof FB) {
          return void this.Xi();
        }
        FB.getLoginStatus(function (_0x48aea9) {
          if ("connected" === _0x48aea9.status) {
            return void (_0x48aea9.authResponse && _0x48aea9.authResponse.accessToken ? _0xafa9c8.Yi("facebook", "fb_" + _0x48aea9.authResponse.accessToken) : _0xafa9c8.Xi());
          }
          FB.login(function (_0x56611a) {
            if ("connected" === _0x56611a.status && _0x56611a.authResponse && _0x56611a.authResponse.accessToken) {
              _0xafa9c8.Yi("facebook", "fb_" + _0x56611a.authResponse.accessToken);
            } else {
              _0xafa9c8.Xi();
            }
          });
        });
      };
      _0x376441.prototype.Zi = function () {
        var _0x52aa15 = this;
        this.Wi();
        if (typeof GoogleAuth === "undefined") {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var _0x2ea1d1 = GoogleAuth.currentUser.get();
            _0x52aa15.Yi("google", "gg_" + _0x2ea1d1.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x2710f8) {
            if (typeof _0x2710f8.error !== "undefined") {
              console.log("gsi:e: " + _0x2710f8.error);
              _0x52aa15.Xi();
              return;
            }
            if (_0x2710f8.isSignedIn()) {
              console.log("gsi:s");
              _0x52aa15.Yi("google", "gg_" + _0x2710f8.getAuthResponse().id_token);
            } else {
              console.log("gsi:c");
              _0x52aa15.Xi();
            }
          });
        });
      };
      _0x376441.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var _0x3e63f6 = this.ri;
        var _0x5a9448 = this.ti;
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
        _0x18db74(_0x1d9d3e.Oe, '', 0x3c);
        switch (_0x5a9448) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (_0x3e63f6 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x376441.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(_0x45412e + "/pub/wuid/" + this.ri + "/deleteAccount", function (_0x2e2718) {
            if (0x4b0 === _0x2e2718.code) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x376441.prototype.vi = function () {
        console.log("rs");
        var _0x1680e5 = _0x58776e(_0x1d9d3e.Oe);
        var _0x136be4 = this;
        if ("facebook" == _0x1680e5) {
          console.log("rs:fb");
          (function _0x5e5dde() {
            if ("undefined" != typeof FB) {
              _0x136be4.Vi();
            } else {
              setTimeout(_0x5e5dde, 0x64);
            }
          })();
        } else if ("google" == _0x1680e5) {
          console.log("rs:gg");
          (function _0x3c9f51() {
            if (undefined !== GoogleAuth) {
              _0x136be4.Zi();
            } else {
              setTimeout(_0x3c9f51, 0x64);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0x376441.prototype.aj = function () {
        var _0x209a32 = 0x0;
        for (; _0x209a32 < this.ni.length; _0x209a32++) {
          this.ni[_0x209a32]();
        }
        this.Si();
      };
      _0x376441.prototype.Si = function () {
        var _0x376452 = 0x0;
        for (; _0x376452 < this.oi.length; _0x376452++) {
          this.oi[_0x376452]();
        }
        var _0x29289b = this.pi;
        this.pi = [];
        var _0x408237 = 0x0;
        for (; _0x408237 < _0x29289b.length; _0x408237++) {
          _0x29289b[_0x408237]();
        }
      };
      _0x376441.prototype.Yi = function (_0x50b1ee, _0x283aa0) {
        var _0x22ebb6 = this;
        $.get(_0x45412e + "/pub/wuid/" + _0x283aa0 + "/login", function (_0x38b931) {
          if (_0x38b931 && _0x38b931.user_data) {
            checkSubscriptionExpired(_0x38b931.user_data.userId);
            registerUpdatePlayer(_0x38b931.user_data);
            _0xf7db78(_0x38b931.user_data);
            var _0x422f43 = this.ri;
            _0x22ebb6.qi = true;
            _0x22ebb6.ri = _0x283aa0;
            _0x22ebb6.si = _0x38b931.user_data;
            _0x22ebb6.ti = _0x50b1ee;
            _0x18db74(_0x1d9d3e.Oe, _0x22ebb6.ti, 0x3c);
            console.log(_0x22ebb6);
            showServer2(_0x4b2f70);
            showVersionPays(_0x38b931);
            lxpduserId = _0x38b931.user_data.userId;
            $("#wtr-settings-id").text("ID: " + lxpduserId);
            theoKzObjects.loading = false;
            if (_0x422f43 !== _0x283aa0) {
              _0x22ebb6.aj();
            } else {
              _0x22ebb6.Si();
            }
          } else {
            _0x22ebb6.Xi();
          }
        }).fail(function () {
          _0x22ebb6.Xi();
        });
      };
      _0x376441.prototype.Xi = function () {
        this.Wi();
      };
      _0x376441.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      _0x376441.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return _0x376441;
    }();
    var _0x1cac0c = function () {
      function _0x1effa3() {
        this.cj = {};
        this.cj[_0x1c1c24] = [0x1, 0.5, 0.25, 0.5];
        this.cj[_0x5ac701] = _0x40d27a._b.WHITE;
        this.cj[_0x1a085e] = [0x0, 0x0];
        this.cj[_0x40735e] = [0x0, 0x0];
        var _0x4a37fc = _0x40d27a.cc.from(_0x3ca9f7, _0x532744, this.cj);
        this.zf = new _0x40d27a.hc(_0x14750c, _0x4a37fc);
      }
      var _0x3ea7af = "a1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x290463 = "a2_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x583c97 = atob("dHJhbnNsYXRpb25NYXRyaXg=");
      var _0x404f2b = atob("cHJvamVjdGlvbk1hdHJpeA==");
      var _0x1c1c24 = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x5ac701 = "u4_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x1a085e = "u5_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x40735e = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x574b19 = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x14750c = new _0x40d27a.gc().addAttribute(_0x3ea7af, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x290463, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x3ca9f7 = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + _0x3ea7af + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + _0x290463 + atob("O3VuaWZvcm0gbWF0MyA=") + _0x583c97 + atob("O3VuaWZvcm0gbWF0MyA=") + _0x404f2b + atob("O3ZhcnlpbmcgdmVjMiA=") + _0x574b19 + atob("O3ZvaWQgbWFpbigpew==") + _0x574b19 + atob("PQ==") + _0x290463 + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + _0x404f2b + atob("Kg==") + _0x583c97 + atob("KnZlYzMo") + _0x3ea7af + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=");
      var _0x532744 = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + _0x574b19 + atob("O3VuaWZvcm0gdmVjNCA=") + _0x1c1c24 + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + _0x5ac701 + atob("O3VuaWZvcm0gdmVjMiA=") + _0x1a085e + atob("O3VuaWZvcm0gdmVjMiA=") + _0x40735e + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + _0x574b19 + atob("Kg==") + _0x1a085e + atob("Kw==") + _0x40735e + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + _0x1c1c24 + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + _0x5ac701 + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
      _0x1effa3.prototype.Hf = function (_0x5e845c, _0x4ea681, _0x4dc707, _0x1934c1) {
        var _0x3488dd = this.cj[_0x1c1c24];
        _0x3488dd[0x0] = _0x5e845c;
        _0x3488dd[0x1] = _0x4ea681;
        _0x3488dd[0x2] = _0x4dc707;
        _0x3488dd[0x3] = _0x1934c1;
      };
      _0x1effa3.prototype.Bf = function (_0x19ccd5) {
        this.cj[_0x5ac701] = _0x19ccd5;
      };
      _0x1effa3.prototype.Te = function (_0x558c7f, _0x2470b2, _0x5d0fe0, _0x589122) {
        this.zf.position.x = _0x558c7f;
        this.zf.position.y = _0x2470b2;
        this.zf.scale.x = _0x5d0fe0;
        this.zf.scale.y = _0x589122;
        var _0x492a25 = this.cj[_0x1a085e];
        _0x492a25[0x0] = 0.2520615384615385 * _0x5d0fe0;
        _0x492a25[0x1] = 0.4357063736263738 * _0x589122;
        var _0x458e74 = this.cj[_0x40735e];
        _0x458e74[0x0] = 0.2520615384615385 * _0x558c7f;
        _0x458e74[0x1] = 0.4357063736263738 * _0x2470b2;
      };
      return _0x1effa3;
    }();
    var _0x5ee5fd = function () {
      function _0x48edac() {
        this.jh = new _0x40d27a.ec();
        this.dj = 0x0;
        this.ej = 0x0;
      }
      _0x48edac.prototype.kh = function (_0x22dd84) {
        this.jh.texture = _0x22dd84.Hc;
        this.jh.anchor.set(_0x22dd84.Lh, _0x22dd84.Mh);
        this.dj = _0x22dd84.Nh;
        this.ej = _0x22dd84.Oh;
      };
      _0x48edac.prototype.oh = function (_0x1dc926) {
        this.jh.width = _0x1dc926 * this.dj;
        this.jh.height = _0x1dc926 * this.ej;
      };
      _0x48edac.prototype.fj = function (_0x12515f) {
        this.jh.rotation = _0x12515f;
      };
      _0x48edac.prototype.nh = function (_0x28ca53, _0x2d6a18) {
        this.jh.position.set(_0x28ca53, _0x2d6a18);
      };
      _0x48edac.prototype.Mg = function (_0x445ab2) {
        this.jh.visible = _0x445ab2;
      };
      _0x48edac.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x48edac.prototype.qh = function (_0x3d771a) {
        this.jh.alpha = _0x3d771a;
      };
      _0x48edac.prototype.Mf = function () {
        return this.jh;
      };
      _0x48edac.prototype.ih = function () {
        _0x4aa610(this.jh);
      };
      return _0x48edac;
    }();
    var _0x1e63d0 = function () {
      function _0x48461a(_0x16b7d7) {
        this.fb = _0x16b7d7;
        this.Mb = new _0x1e63d0.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0x0;
        this.ij = 0x0;
        this.Jb = 0x1;
        this.jj = 0x0;
        this.M = 0x0;
        this.Ff = {};
        this.kj = 0x0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      _0x48461a.prototype.Kb = function () {
        if (null != this.pj) {
          _0x4aa610(this.pj.Rf);
        }
        if (null != this.qj) {
          _0x4aa610(this.qj);
        }
      };
      _0x48461a.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x48461a.prototype.Fg = function (_0x4badc0) {
        this.Mb = _0x4badc0;
        this.rj(this.Hb);
      };
      _0x48461a.prototype.Mg = function (_0x41deaa) {
        var _0x5b53f1 = this.Hb;
        this.Hb = _0x41deaa;
        this.rj(_0x5b53f1);
      };
      _0x48461a.prototype.Ig = function (_0x446237) {
        this.M = 0x32 * _0x446237;
        var _0x464feb = _0x446237;
        if (_0x446237 > this.fb.cf) {
          _0x464feb = Math.atan((_0x446237 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x316239 = Math.sqrt(0x4 * Math.pow(0x5 * _0x464feb, 0.707106781186548) + 0x19);
        var _0x483d30 = Math.min(0xc8, Math.max(0x3, 0x5 * (_0x316239 - 0x5) + 0x1));
        var _0x8416c = this.kj;
        this.Db = 0.025 * (0x5 + 0.9 * _0x316239);
        this.kj = Math.floor(_0x483d30);
        this.ij = _0x483d30 - this.kj;
        if (_0x8416c > 0x0 && _0x8416c < this.kj) {
          var _0x580595 = this.lj[0x2 * _0x8416c - 0x2];
          var _0x26c8f0 = this.lj[0x2 * _0x8416c - 0x1];
          var _0x1f84c6 = this.mj[0x2 * _0x8416c - 0x2];
          var _0x5adffb = this.mj[0x2 * _0x8416c - 0x1];
          var _0x28dc09 = this.nj[0x2 * _0x8416c - 0x2];
          var _0xbabbac = this.nj[0x2 * _0x8416c - 0x1];
          for (var _0x2ee67f = _0x8416c; _0x2ee67f < this.kj; _0x2ee67f++) {
            this.lj[0x2 * _0x2ee67f] = _0x580595;
            this.lj[0x2 * _0x2ee67f + 0x1] = _0x26c8f0;
            this.mj[0x2 * _0x2ee67f] = _0x1f84c6;
            this.mj[0x2 * _0x2ee67f + 0x1] = _0x5adffb;
            this.nj[0x2 * _0x2ee67f] = _0x28dc09;
            this.nj[0x2 * _0x2ee67f + 0x1] = _0xbabbac;
          }
        }
      };
      _0x48461a.prototype.Lg = function (_0x2ed5d4, _0xa1c5e0) {
        this.kj = _0xa1c5e0;
        for (var _0x299f09 = 0x0; _0x299f09 < this.kj; _0x299f09++) {
          this.lj[0x2 * _0x299f09] = this.mj[0x2 * _0x299f09] = this.nj[0x2 * _0x299f09] = _0x2ed5d4();
          this.lj[0x2 * _0x299f09 + 0x1] = this.mj[0x2 * _0x299f09 + 0x1] = this.nj[0x2 * _0x299f09 + 0x1] = _0x2ed5d4();
        }
      };
      _0x48461a.prototype.Kg = function (_0x5bd5d7, _0x5e5600, _0x48b954) {
        this.hj = _0x48b954;
        for (var _0x4cdd0b = 0x0; _0x4cdd0b < this.kj; _0x4cdd0b++) {
          this.lj[0x2 * _0x4cdd0b] = this.mj[0x2 * _0x4cdd0b];
          this.lj[0x2 * _0x4cdd0b + 0x1] = this.mj[0x2 * _0x4cdd0b + 0x1];
        }
        var _0x3039ea = _0x5bd5d7 - this.mj[0x0];
        var _0x140517 = _0x5e5600 - this.mj[0x1];
        this.sj(_0x3039ea, _0x140517, this.kj, this.mj);
      };
      _0x48461a.prototype.sj = function (_0x3ba0f3, _0x5b82b, _0x1de969, _0x575174) {
        var _0x3be145 = Math.hypot(_0x3ba0f3, _0x5b82b);
        if (!(_0x3be145 <= 0x0)) {
          var _0x54f137 = _0x575174[0x0];
          var _0x38bc77 = undefined;
          _0x575174[0x0] += _0x3ba0f3;
          var _0xeb2b0e = _0x575174[0x1];
          var _0x5542bf = undefined;
          _0x575174[0x1] += _0x5b82b;
          var _0x18f95a = this.Db / (this.Db + _0x3be145);
          var _0xe493d = 0x1 - 0x2 * _0x18f95a;
          var _0x4c4d1d = 0x1;
          for (var _0x3f32fc = _0x1de969 - 0x1; _0x4c4d1d < _0x3f32fc; _0x4c4d1d++) {
            _0x38bc77 = _0x575174[0x2 * _0x4c4d1d];
            _0x575174[0x2 * _0x4c4d1d] = _0x575174[0x2 * _0x4c4d1d - 0x2] * _0xe493d + (_0x38bc77 + _0x54f137) * _0x18f95a;
            _0x54f137 = _0x38bc77;
            _0x5542bf = _0x575174[0x2 * _0x4c4d1d + 0x1];
            _0x575174[0x2 * _0x4c4d1d + 0x1] = _0x575174[0x2 * _0x4c4d1d - 0x1] * _0xe493d + (_0x5542bf + _0xeb2b0e) * _0x18f95a;
            _0xeb2b0e = _0x5542bf;
          }
          _0x18f95a = this.ij * this.Db / (this.ij * this.Db + _0x3be145);
          _0xe493d = 0x1 - 0x2 * _0x18f95a;
          _0x575174[0x2 * _0x1de969 - 0x2] = _0x575174[0x2 * _0x1de969 - 0x4] * _0xe493d + (_0x575174[0x2 * _0x1de969 - 0x2] + _0x54f137) * _0x18f95a;
          _0x575174[0x2 * _0x1de969 - 0x1] = _0x575174[0x2 * _0x1de969 - 0x3] * _0xe493d + (_0x575174[0x2 * _0x1de969 - 0x1] + _0xeb2b0e) * _0x18f95a;
        }
      };
      _0x48461a.prototype.Gf = function () {
        return {
          "x": this.nj[0x0],
          "y": this.nj[0x1]
        };
      };
      _0x48461a.prototype.Hg = function (_0x20ca0f, _0x242f82) {
        var _0x4dbd60 = 0xf4240;
        var _0x20cae0 = _0x20ca0f;
        var _0x48813f = _0x242f82;
        for (var _0x5b4bdc = 0x0; _0x5b4bdc < this.kj; _0x5b4bdc++) {
          var _0x240c0b = this.nj[0x2 * _0x5b4bdc];
          var _0x771385 = this.nj[0x2 * _0x5b4bdc + 0x1];
          var _0x9dc7e1 = Math.hypot(_0x20ca0f - _0x240c0b, _0x242f82 - _0x771385);
          if (_0x9dc7e1 < _0x4dbd60) {
            _0x4dbd60 = _0x9dc7e1;
            _0x20cae0 = _0x240c0b;
            _0x48813f = _0x771385;
          }
        }
        return {
          "x": _0x20cae0,
          "y": _0x48813f,
          "distance": _0x4dbd60
        };
      };
      _0x48461a.prototype.vb = function (_0x595742) {
        this.oj = _0x595742;
      };
      _0x48461a.prototype.Fb = function (_0x206949, _0x25e88a) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x206949 / 0x190 * Math.PI) : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x206949 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb + _0x25e88a * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x206949 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb - _0x25e88a * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0x25e88a * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0x25e88a * 0.0025);
        if (null != this.pj) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (null != this.qj) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x48461a.prototype.Gb = function (_0x378a98, _0x3d1e4f, _0x38b0ca, _0x46b5c2) {
        if (this.Hb && this.Ib) {
          var _0x5e3cc0 = Math.pow(0.11112, _0x3d1e4f / 0x5f);
          var _0x110dc6 = 0x0;
          for (; _0x110dc6 < this.kj; _0x110dc6++) {
            var _0x90041 = this.lj[0x2 * _0x110dc6] * (0x1 - _0x38b0ca) + this.mj[0x2 * _0x110dc6] * _0x38b0ca;
            var _0x5da9bd = this.lj[0x2 * _0x110dc6 + 0x1] * (0x1 - _0x38b0ca) + this.mj[0x2 * _0x110dc6 + 0x1] * _0x38b0ca;
            this.nj[0x2 * _0x110dc6] = _0x90041 * (0x1 - _0x5e3cc0) + this.nj[0x2 * _0x110dc6] * _0x5e3cc0;
            this.nj[0x2 * _0x110dc6 + 0x1] = _0x5da9bd * (0x1 - _0x5e3cc0) + this.nj[0x2 * _0x110dc6 + 0x1] * _0x5e3cc0;
          }
        }
        if (null != this.pj) {
          if (this.Hb) {
            this.pj.tj(this, _0x378a98, _0x3d1e4f, _0x46b5c2);
          }
        }
        if (null != this.qj) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - 0x3 * this.Db;
        }
      };
      _0x48461a.prototype.rj = function (_0x37e5f7) {
        if (this.Hb) {
          if (!_0x37e5f7) {
            this.uj();
          }
        } else {
          if (null != this.pj) {
            _0x4aa610(this.pj.Rf);
          }
          if (null != this.qj) {
            _0x4aa610(this.qj);
          }
        }
      };
      _0x48461a.prototype.uj = function () {
        var _0x56af2a = window.anApp = _0x4b2f70;
        if (null == this.pj) {
          this.pj = new _0x1c9859();
        } else {
          _0x4aa610(this.pj.Rf);
        }
        this.pj.hh(_0x56af2a.o.fb.af, _0x56af2a.p.Dc().ed(this.Mb.cg), _0x56af2a.p.Dc().dd(this.Mb.dg), _0x56af2a.p.Dc().fd(this.Mb.Bg), _0x56af2a.p.Dc().gd(this.Mb.Cg), _0x56af2a.p.Dc().hd(this.Mb.Dg), _0x56af2a.p.Dc().jd(this.Mb.Eg));
        if (null == this.qj) {
          this.qj = new _0x321a58('');
          console.log(this.qj);
          this.qj.style.fontFamily = "PTSans";
          this.qj.anchor.set(0.5);
        } else {
          _0x4aa610(this.qj);
        }
        this.qj.style.fontSize = 0xe;
        this.qj.style.fill = _0x56af2a.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x48461a.Config = function () {
        function _0x1592fb() {
          this.Lb = 0x0;
          this.cg = _0x242075.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
        }
        return _0x1592fb;
      }();
      return _0x48461a;
    }();
    var _0x321a58 = function () {
      return _0x15a67e(_0x40d27a.fc, function (_0x5ba089, _0x3f9f46, _0x1def3d) {
        _0x40d27a.fc.call(this, _0x5ba089, _0x3f9f46, _0x1def3d);
        this.If = {
          "x": 0x0,
          "y": 0x0
        };
      });
    }();
    var _0x1c9859 = function () {
      function _0x426295() {
        this.Rf = new _0x40d27a.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x6b67e6();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = new Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new _0x5ee5fd(), new _0x5ee5fd());
        for (var _0x8e04b5 = 0x1; _0x8e04b5 < 0x31d; _0x8e04b5++) {
          this.xj[_0x8e04b5] = this.yj(_0x8e04b5, new _0x5ee5fd(), new _0x5ee5fd());
        }
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
      }
      var _0x464d72 = 0.1 * Math.PI;
      var _0x254be9 = -0.06640625;
      var _0xd6678f = -0.03515625;
      var _0xe6a14e = -0.0625;
      var _0x109684 = 0x3 * _0x254be9 + 0.84375;
      var _0x4c77c0 = 0.2578125 - 0x3 * _0x254be9;
      var _0x41f141 = _0x254be9 + _0xd6678f;
      var _0xba46fc = _0xe6a14e + _0xe6a14e;
      var _0x68b1a0 = 0x3 * _0xd6678f + 0.2578125;
      var _0x11a0a5 = 0.84375 - 0x3 * _0xd6678f;
      var _0x448bd1 = _0xd6678f + _0x254be9;
      _0x426295.prototype.yj = function (_0x49caa0, _0x2a2117, _0x538d84) {
        var _0x3b8375 = new _0xfe7ba6(_0x2a2117, _0x538d84);
        _0x2a2117.jh.zIndex = 0.001 * (0x2 * (0x31d - _0x49caa0) + 0x1 + 0x3);
        _0x538d84.jh.zIndex = 0.001 * (0x2 * (0x31d - _0x49caa0) - 0x2 + 0x3);
        return _0x3b8375;
      };
      _0x426295.prototype.hh = function (_0x56e5f2, _0x9e15fb, _0x3e356d, _0xa21328, _0x8bb052, _0x39dd7c, _0x4b51e4) {
        var _0x588747 = _0x3e356d.Zc;
        var _0x223d93 = _0x56e5f2 == 0x10 ? _0x9e15fb.bd.$c : _0x3e356d.$c;
        if (_0x588747.length > 0x0 && _0x223d93.length > 0x0) {
          for (var _0x47612b = 0x0; _0x47612b < this.xj.length; _0x47612b++) {
            this.xj[_0x47612b].Nf.kh(_0x588747[_0x47612b % _0x588747.length]);
            this.xj[_0x47612b].Pf.kh(_0x223d93[_0x47612b % _0x223d93.length]);
          }
        }
        this.vj.hh(_0xa21328, _0x8bb052, _0x39dd7c, _0x4b51e4);
      };
      var _0x6b67e6 = function () {
        var _0x39d7b3 = _0x15a67e(_0x40d27a.Zb, function () {
          _0x40d27a.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x40d27a.Zb();
          this.Hj = [];
          for (var _0x1f88a7 = 0x0; _0x1f88a7 < 0x4; _0x1f88a7++) {
            var _0x5498dd = new _0x5ee5fd();
            _0x5498dd.kh((window.anApp = _0x4b2f70).q.Ph);
            this.Gj.addChild(_0x5498dd.jh);
            this.Hj.push(_0x5498dd);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x5ee5fd();
          this.Jj.kh((window.anApp = _0x4b2f70).q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.flx = new _0x5ee5fd();
          this.flx.kh((window.anApp = _0x4b2f70).q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new _0x5ee5fd();
          this.xxx5.kh((window.anApp = _0x4b2f70).q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new _0x5ee5fd();
          this.xxx2.kh((window.anApp = _0x4b2f70).q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new _0x5ee5fd();
          this.xxx10.kh((window.anApp = _0x4b2f70).q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new _0x5ee5fd();
          this.xxxLupatype.kh((window.anApp = _0x4b2f70).q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
          this.xxxEmojiType = new _0x5ee5fd();
          this.xxxEmojiType.kh((window.anApp = _0x4b2f70).q.emoji);
          this.xxxEmojiType.jh.zIndex = 0.001;
          this.addChild(this.xxxEmojiType.jh);
          this.x_emoji();
        });
        _0x39d7b3.prototype.hh = function (_0xcc0f67, _0x1eba51, _0x4b6149, _0xf8b699) {
          this.Lj(0.002, this.Cj, _0xcc0f67.Zc);
          this.Lj(0.003, this.Dj, _0x1eba51.Zc);
          this.Lj(0.004, this.Fj, _0xf8b699.Zc);
          this.Lj(0.005, this.Ej, _0x4b6149.Zc);
        };
        _0x39d7b3.prototype.Lj = function (_0x5b8714, _0x2ac905, _0x48783e) {
          for (; _0x48783e.length > _0x2ac905.length;) {
            var _0x1fd3aa = new _0x5ee5fd();
            _0x2ac905.push(_0x1fd3aa);
            this.addChild(_0x1fd3aa.Mf());
          }
          for (; _0x48783e.length < _0x2ac905.length;) {
            _0x2ac905.pop().ih();
          }
          var _0x59285b = _0x5b8714;
          for (var _0x495a3f = 0x0; _0x495a3f < _0x48783e.length; _0x495a3f++) {
            _0x59285b += 0.0001;
            var _0xfe1439 = _0x2ac905[_0x495a3f];
            _0xfe1439.kh(_0x48783e[_0x495a3f]);
            _0xfe1439.jh.zIndex = _0x59285b;
          }
        };
        _0x39d7b3.prototype.mh = function (_0x4a2b8e, _0x23f5b9, _0x470ed7, _0x54b063) {
          this.visible = true;
          this.position.set(_0x4a2b8e, _0x23f5b9);
          this.rotation = _0x54b063;
          for (var _0x20f5f3 = 0x0; _0x20f5f3 < this.Cj.length; _0x20f5f3++) {
            this.Cj[_0x20f5f3].oh(_0x470ed7);
          }
          for (var _0x45b73d = 0x0; _0x45b73d < this.Dj.length; _0x45b73d++) {
            this.Dj[_0x45b73d].oh(_0x470ed7);
          }
          for (var _0x457bd4 = 0x0; _0x457bd4 < this.Ej.length; _0x457bd4++) {
            this.Ej[_0x457bd4].oh(_0x470ed7);
          }
          for (var _0x2ec91b = 0x0; _0x2ec91b < this.Fj.length; _0x2ec91b++) {
            this.Fj[_0x2ec91b].oh(_0x470ed7);
          }
        };
        _0x39d7b3.prototype.lh = function () {
          this.visible = false;
        };
        _0x39d7b3.prototype.Mj = function (_0x48e454, _0x292bfe, _0x596661, _0x2f81bb) {
          this.Gj.visible = true;
          var _0x30a60f = _0x596661 / 0x3e8;
          var _0x2c910c = 0x1 / this.Hj.length;
          for (var _0x53b871 = 0x0; _0x53b871 < this.Hj.length; _0x53b871++) {
            var _0x2f6f2f = 0x1 - (_0x30a60f + _0x2c910c * _0x53b871) % 0x1;
            this.Hj[_0x53b871].jh.alpha = 0x1 - _0x2f6f2f;
            this.Hj[_0x53b871].oh(_0x292bfe * (0.5 + 4.5 * _0x2f6f2f));
          }
        };
        _0x39d7b3.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0x39d7b3.prototype.Nj = function (_0x279585, _0x390285, _0x424559, _0xfbfa00) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = (_0x279585.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x279585.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0xfbfa00 * 0.0025) : Math.max(_0x279585.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0xfbfa00 * 0.0025);
          this.Jj.oh(_0x390285);
        };
        _0x39d7b3.prototype.Nflex = function (_0x3c2dcf, _0x41a787, _0x92c3f2, _0x32ba57) {
          this.flx.jh.visible = true;
          this.flx.oh(_0x41a787);
        };
        _0x39d7b3.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        _0x39d7b3.prototype.ActiveX5 = function (_0x5a41b1, _0x58a431, _0x34d017, _0x23b58c) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = (_0x5a41b1.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x5a41b1.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x23b58c * 0.0025) : Math.max(_0x5a41b1.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x23b58c * 0.0025);
          this.xxx5.oh(_0x58a431);
        };
        _0x39d7b3.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        _0x39d7b3.prototype.ActiveEmoji = function (_0x3eb5f7, _0xb6d34d, _0x14507b, _0x241fb8) {
          this.xxxEmojiType.jh.visible = true;
          this.xxxEmojiType.oh(_0xb6d34d);
        };
        _0x39d7b3.prototype.x_emoji = function () {
          this.xxxEmojiType.jh.visible = false;
        };
        _0x39d7b3.prototype.ActiveX2 = function (_0x551453, _0x2b1f5a, _0x4f817b, _0x18d444) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = (_0x551453.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x551453.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x18d444 * 0.0025) : Math.max(_0x551453.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x18d444 * 0.0025);
          this.xxx2.oh(_0x2b1f5a);
        };
        _0x39d7b3.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        _0x39d7b3.prototype.ActiveX10 = function (_0x436554, _0x14dc4b, _0x55201e, _0x293a53) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = (_0x436554.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x436554.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x293a53 * 0.0025) : Math.max(_0x436554.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x293a53 * 0.0025);
          this.xxx10.oh(_0x14dc4b);
        };
        _0x39d7b3.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        _0x39d7b3.prototype.ActiveZlupa = function (_0xc2a32b, _0x4f3146, _0x566223, _0x20b368) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = (_0xc2a32b.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0xc2a32b.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x20b368 * 0.0025) : Math.max(_0xc2a32b.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x20b368 * 0.0025);
          this.xxxLupatype.oh(_0x4f3146);
        };
        _0x39d7b3.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        _0x39d7b3.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        return _0x39d7b3;
      }();
      _0x426295.prototype.Oj = function (_0x586bab) {
        return this.Aj + this.Bj * Math.sin(_0x586bab * _0x464d72 - this.zj);
      };
      _0x426295.prototype.tj = function (_0x188eaf, _0x5adbc2, _0x5e49db, _0x37ae1b) {
        var _0x33d1dc = 0x2 * _0x188eaf.Db;
        var _0x49cbd7 = _0x188eaf.nj;
        var _0x60ed07 = _0x188eaf.kj;
        var _0x3dedcd = 0x4 * _0x60ed07 - 0x3;
        this.zj = _0x5adbc2 / 0x190 * Math.PI;
        this.Aj = 1.5 * _0x33d1dc;
        this.Bj = 0.1 * _0x33d1dc * _0x188eaf.jj;
        var _0x4f87ef;
        var _0x173da4;
        var _0x33c0e8;
        var _0x92b51;
        var _0x47c1f5;
        var _0x3416e1;
        var _0x3e94e2;
        var _0x35dc8e;
        _0x173da4 = _0x49cbd7[0x0];
        _0x3416e1 = _0x49cbd7[0x1];
        if (_0x37ae1b(_0x173da4, _0x3416e1)) {
          _0x33c0e8 = _0x49cbd7[0x2];
          _0x3e94e2 = _0x49cbd7[0x3];
          _0x92b51 = _0x49cbd7[0x4];
          _0x35dc8e = _0x49cbd7[0x5];
          var _0x4fbf8f = Math.atan2(_0x35dc8e + 0x2 * _0x3416e1 - 0x3 * _0x3e94e2, _0x92b51 + 0x2 * _0x173da4 - 0x3 * _0x33c0e8);
          this.vj.mh(_0x173da4, _0x3416e1, _0x33d1dc, _0x4fbf8f);
          this.xj[0x0].mh(_0x173da4, _0x3416e1, _0x33d1dc, this.Oj(0x0), _0x4fbf8f);
          this.xj[0x1].mh(_0x109684 * _0x173da4 + _0x4c77c0 * _0x33c0e8 + _0x41f141 * _0x92b51, _0x109684 * _0x3416e1 + _0x4c77c0 * _0x3e94e2 + _0x41f141 * _0x35dc8e, _0x33d1dc, this.Oj(0x1), _0xfe7ba6.angleBetween(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * _0x173da4 + 0.75 * _0x33c0e8 + _0xba46fc * _0x92b51, 0.375 * _0x3416e1 + 0.75 * _0x3e94e2 + _0xba46fc * _0x35dc8e, _0x33d1dc, this.Oj(0x2), _0xfe7ba6.angleBetween(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(_0x68b1a0 * _0x173da4 + _0x11a0a5 * _0x33c0e8 + _0x448bd1 * _0x92b51, _0x68b1a0 * _0x3416e1 + _0x11a0a5 * _0x3e94e2 + _0x448bd1 * _0x35dc8e, _0x33d1dc, this.Oj(0x3), _0xfe7ba6.angleBetween(this.xj[0x2], this.xj[0x4]));
        } else {
          this.vj.lh();
          this.xj[0x0].lh();
          this.xj[0x1].lh();
          this.xj[0x2].lh();
          this.xj[0x3].lh();
        }
        var _0x1ef82a = 0x4;
        var _0x2d51ab = 0x2;
        for (var _0x390a8c = 0x2 * _0x60ed07 - 0x4; _0x2d51ab < _0x390a8c; _0x2d51ab += 0x2) {
          _0x173da4 = _0x49cbd7[_0x2d51ab];
          _0x3416e1 = _0x49cbd7[_0x2d51ab + 0x1];
          if (_0x37ae1b(_0x173da4, _0x3416e1)) {
            _0x4f87ef = _0x49cbd7[_0x2d51ab - 0x2];
            _0x47c1f5 = _0x49cbd7[_0x2d51ab - 0x1];
            _0x33c0e8 = _0x49cbd7[_0x2d51ab + 0x2];
            _0x3e94e2 = _0x49cbd7[_0x2d51ab + 0x3];
            _0x92b51 = _0x49cbd7[_0x2d51ab + 0x4];
            _0x35dc8e = _0x49cbd7[_0x2d51ab + 0x5];
            this.xj[_0x1ef82a].mh(_0x173da4, _0x3416e1, _0x33d1dc, this.Oj(_0x1ef82a), _0xfe7ba6.angleBetween(this.xj[_0x1ef82a - 0x1], this.xj[_0x1ef82a + 0x1]));
            _0x1ef82a++;
            this.xj[_0x1ef82a].mh(_0x254be9 * _0x4f87ef + 0.84375 * _0x173da4 + 0.2578125 * _0x33c0e8 + _0xd6678f * _0x92b51, _0x254be9 * _0x47c1f5 + 0.84375 * _0x3416e1 + 0.2578125 * _0x3e94e2 + _0xd6678f * _0x35dc8e, _0x33d1dc, this.Oj(_0x1ef82a), _0xfe7ba6.angleBetween(this.xj[_0x1ef82a - 0x1], this.xj[_0x1ef82a + 0x1]));
            _0x1ef82a++;
            this.xj[_0x1ef82a].mh(_0xe6a14e * _0x4f87ef + 0.5625 * _0x173da4 + 0.5625 * _0x33c0e8 + _0xe6a14e * _0x92b51, _0xe6a14e * _0x47c1f5 + 0.5625 * _0x3416e1 + 0.5625 * _0x3e94e2 + _0xe6a14e * _0x35dc8e, _0x33d1dc, this.Oj(_0x1ef82a), _0xfe7ba6.angleBetween(this.xj[_0x1ef82a - 0x1], this.xj[_0x1ef82a + 0x1]));
            _0x1ef82a++;
            this.xj[_0x1ef82a].mh(_0xd6678f * _0x4f87ef + 0.2578125 * _0x173da4 + 0.84375 * _0x33c0e8 + _0x254be9 * _0x92b51, _0xd6678f * _0x47c1f5 + 0.2578125 * _0x3416e1 + 0.84375 * _0x3e94e2 + _0x254be9 * _0x35dc8e, _0x33d1dc, this.Oj(_0x1ef82a), _0xfe7ba6.angleBetween(this.xj[_0x1ef82a - 0x1], this.xj[_0x1ef82a + 0x1]));
            _0x1ef82a++;
          } else {
            this.xj[_0x1ef82a].lh();
            _0x1ef82a++;
            this.xj[_0x1ef82a].lh();
            _0x1ef82a++;
            this.xj[_0x1ef82a].lh();
            _0x1ef82a++;
            this.xj[_0x1ef82a].lh();
            _0x1ef82a++;
          }
        }
        _0x173da4 = _0x49cbd7[0x2 * _0x60ed07 - 0x4];
        _0x3416e1 = _0x49cbd7[0x2 * _0x60ed07 - 0x3];
        if (_0x37ae1b(_0x173da4, _0x3416e1)) {
          _0x4f87ef = _0x49cbd7[0x2 * _0x60ed07 - 0x6];
          _0x47c1f5 = _0x49cbd7[0x2 * _0x60ed07 - 0x5];
          _0x33c0e8 = _0x49cbd7[0x2 * _0x60ed07 - 0x2];
          _0x3e94e2 = _0x49cbd7[0x2 * _0x60ed07 - 0x1];
          this.xj[_0x3dedcd - 0x5].mh(_0x173da4, _0x3416e1, _0x33d1dc, this.Oj(_0x3dedcd - 0x5), _0xfe7ba6.angleBetween(this.xj[_0x3dedcd - 0x6], this.xj[_0x3dedcd - 0x4]));
          this.xj[_0x3dedcd - 0x4].mh(_0x448bd1 * _0x4f87ef + _0x11a0a5 * _0x173da4 + _0x68b1a0 * _0x33c0e8, _0x448bd1 * _0x47c1f5 + _0x11a0a5 * _0x3416e1 + _0x68b1a0 * _0x3e94e2, _0x33d1dc, this.Oj(_0x3dedcd - 0x4), _0xfe7ba6.angleBetween(this.xj[_0x3dedcd - 0x5], this.xj[_0x3dedcd - 0x3]));
          this.xj[_0x3dedcd - 0x3].mh(_0xba46fc * _0x4f87ef + 0.75 * _0x173da4 + 0.375 * _0x33c0e8, _0xba46fc * _0x47c1f5 + 0.75 * _0x3416e1 + 0.375 * _0x3e94e2, _0x33d1dc, this.Oj(_0x3dedcd - 0x3), _0xfe7ba6.angleBetween(this.xj[_0x3dedcd - 0x4], this.xj[_0x3dedcd - 0x2]));
          this.xj[_0x3dedcd - 0x2].mh(_0x41f141 * _0x4f87ef + _0x4c77c0 * _0x173da4 + _0x109684 * _0x33c0e8, _0x41f141 * _0x47c1f5 + _0x4c77c0 * _0x3416e1 + _0x109684 * _0x3e94e2, _0x33d1dc, this.Oj(_0x3dedcd - 0x2), _0xfe7ba6.angleBetween(this.xj[_0x3dedcd - 0x3], this.xj[_0x3dedcd - 0x1]));
          this.xj[_0x3dedcd - 0x1].mh(_0x33c0e8, _0x3e94e2, _0x33d1dc, this.Oj(_0x3dedcd - 0x1), _0xfe7ba6.angleBetween(this.xj[_0x3dedcd - 0x2], this.xj[_0x3dedcd - 0x1]));
        } else {
          this.xj[_0x3dedcd - 0x5].lh();
          this.xj[_0x3dedcd - 0x4].lh();
          this.xj[_0x3dedcd - 0x3].lh();
          this.xj[_0x3dedcd - 0x2].lh();
          this.xj[_0x3dedcd - 0x1].lh();
        }
        if (0x0 == this.wj && _0x3dedcd > 0x0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0x0 && 0x0 == _0x3dedcd) {
          _0x4aa610(this.vj);
        }
        while (this.wj < _0x3dedcd) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 0x1;
        }
        while (this.wj > _0x3dedcd) {
          this.wj -= 0x1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        if (theoKzObjects.emoji && _0x188eaf && _0x188eaf.Mb && _0x188eaf.Mb.Mb) {
          this.vj.ActiveEmoji(_0x188eaf, _0x33d1dc, _0x5adbc2, _0x5e49db);
        } else {
          this.vj.x_emoji();
        }
        var _0x53785b = _0x188eaf.Ff[_0xee0376.MAGNETIC_TYPE];
        if (this.xj[0x0].gj() && null != _0x53785b && _0x53785b.sc) {
          this.vj.Mj(_0x188eaf, _0x33d1dc, _0x5adbc2, _0x5e49db);
        } else {
          this.vj.Ij();
        }
        var _0x562584 = _0x188eaf.Ff[_0xee0376.VELOCITY_TYPE];
        if (this.xj[0x0].gj() && null != _0x562584 && _0x562584.sc) {
          this.vj.Nj(_0x188eaf, _0x33d1dc, _0x5adbc2, _0x5e49db);
        } else {
          this.vj.Kj();
        }
        var _0x22bb66 = _0x188eaf.Ff[_0xee0376.FLEXIBLE_TYPE];
        if (true && this.xj[0x0].gj() && null != _0x22bb66 && _0x22bb66.sc) {
          this.vj.Nflex(_0x188eaf, _0x33d1dc, _0x5adbc2, _0x5e49db);
        } else {
          this.vj.flexx();
        }
        var _0x526c35 = _0x188eaf.Ff[_0xee0376.X5_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x526c35 && _0x526c35.sc) {
          this.vj.ActiveX5(_0x188eaf, _0x33d1dc, _0x5adbc2, _0x5e49db);
        } else {
          this.vj.xXx5();
        }
        var _0x2d2a5f = _0x188eaf.Ff[_0xee0376.X2_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x2d2a5f && _0x2d2a5f.sc) {
          this.vj.ActiveX2(_0x188eaf, _0x33d1dc, _0x5adbc2, _0x5e49db);
        } else {
          this.vj.xXx2();
        }
        var _0x173b64 = _0x188eaf.Ff[_0xee0376.X10_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x173b64 && _0x173b64.sc) {
          this.vj.ActiveX10(_0x188eaf, _0x33d1dc, _0x5adbc2, _0x5e49db);
        } else {
          this.vj.xXx10();
        }
        var _0x3af5c0 = _0x188eaf.Ff[_0xee0376.ZOOM_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x3af5c0 && _0x3af5c0.sc) {
          this.vj.ActiveZlupa(_0x188eaf, _0x33d1dc, _0x5adbc2, _0x5e49db);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var _0xfe7ba6 = function () {
        function _0x3f94f6(_0x13045d, _0x5ba92e) {
          this.Nf = _0x13045d;
          this.Nf.Mg(false);
          this.Pf = _0x5ba92e;
          this.Pf.Mg(false);
        }
        _0x3f94f6.prototype.mh = function (_0x2d7842, _0x56b7d0, _0x3e1d86, _0x46be44, _0x155604) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x2d7842, _0x56b7d0);
          this.Nf.oh(_0x3e1d86);
          this.Nf.fj(_0x155604);
          this.Pf.Mg(true);
          this.Pf.nh(_0x2d7842, _0x56b7d0);
          this.Pf.oh(_0x46be44);
          this.Pf.fj(_0x155604);
        };
        _0x3f94f6.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x3f94f6.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x3f94f6.angleBetween = function (_0x49ec8c, _0x3bb59b) {
          return Math.atan2(_0x49ec8c.Nf.jh.position.y - _0x3bb59b.Nf.jh.position.y, _0x49ec8c.Nf.jh.position.x - _0x3bb59b.Nf.jh.position.x);
        };
        return _0x3f94f6;
      }();
      return _0x426295;
    }();
    var _0x3bc9c5 = function () {
      function _0x21f530(_0xa2469e) {
        this.se = _0xa2469e;
        this.te = _0xa2469e.get()[0x0];
        this.ue = new _0x40d27a.ac({
          "view": this.te,
          "transparent": true
        });
        this.sc = false;
        this.Pj = new _0x1c9859();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0x0;
        this.Rj = 0x0;
        this.Ng = 0x1;
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var _0x3d4f74 = this;
        (window.anApp = _0x4b2f70).p.ca(function () {
          if ((window.anApp = _0x4b2f70).p.W()) {
            _0x3d4f74.Fb();
          }
        });
      }
      _0x21f530.prototype.Fb = function () {
        var _0x4e0a10 = window.anApp = _0x4b2f70;
        this.Pj.hh(0x0, null, _0x4e0a10.p.Dc().dd(this.rh), _0x4e0a10.p.Dc().fd(this.sh), _0x4e0a10.p.Dc().gd(this.th), _0x4e0a10.p.Dc().hd(this.uh), _0x4e0a10.p.Dc().jd(this.vh));
      };
      _0x21f530.prototype.Le = function (_0x2f42e1) {
        this.sc = _0x2f42e1;
      };
      _0x21f530.prototype.ak = function (_0xfad011, _0x3b1dba, _0x146e22) {
        this.rh = _0xfad011;
        this.Sj = _0x3b1dba;
        this.Xj = _0x146e22;
        this.Fb();
      };
      _0x21f530.prototype.bk = function (_0x232ec9, _0xff1089, _0x4cc89f) {
        this.sh = _0x232ec9;
        this.Tj = _0xff1089;
        this.Yj = _0x4cc89f;
        this.Fb();
      };
      _0x21f530.prototype.ck = function (_0x404b3c, _0x5c11b1, _0x3d4d52) {
        this.th = _0x404b3c;
        this.Uj = _0x5c11b1;
        this.Zj = _0x3d4d52;
        this.Fb();
      };
      _0x21f530.prototype.dk = function (_0x6ecc1c, _0x448589, _0x7fa681) {
        this.uh = _0x6ecc1c;
        this.Vj = _0x448589;
        this.$j = _0x7fa681;
        this.Fb();
      };
      _0x21f530.prototype.ek = function (_0x56d738, _0x2155a8, _0x526b30) {
        this.vh = _0x56d738;
        this.Wj = _0x2155a8;
        this._j = _0x526b30;
        this.Fb();
      };
      _0x21f530.prototype.Ra = function () {
        var _0x924c99 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x924c99;
        this.te.width = _0x924c99 * this.Qj;
        this.te.height = _0x924c99 * this.Rj;
        this.Ng = this.Rj / 0x4;
        var _0x3788e6 = 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 > this.Pj.xj.length ? this.Pj.xj.length : 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 < 0x1 ? 0x1 : Number.isFinite(0x2 * Math.floor(this.Qj / this.Ng) - 0x5) ? 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 : 0.5 * (0x1 + this.Pj.xj.length);
        if (this.Pj.wj != _0x3788e6) {
          for (var _0x1d4415 = _0x3788e6; _0x1d4415 < this.Pj.xj.length; _0x1d4415++) {
            this.Pj.xj[_0x1d4415].lh();
          }
          for (; this.Pj.wj < _0x3788e6;) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
          }
          for (; this.Pj.wj > _0x3788e6;) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x21f530.prototype.Pa = function () {
        if (this.sc) {
          if ((window.anApp = _0x4b2f70).p.W) {
            var _0x294c7f = Date.now();
            var _0x1f48d9 = _0x294c7f / 0xc8;
            var _0x5814a0 = Math.sin(_0x1f48d9);
            var _0x48b160 = this.Ng;
            var _0x466596 = 1.5 * this.Ng;
            var _0x5e1c15 = this.Qj - 0.5 * (this.Qj - 0.5 * _0x48b160 * (this.Pj.wj - 0x1));
            var _0x40b73e = 0.5 * this.Rj;
            var _0xdd6822 = 0x0;
            var _0x3706ad = 0x0;
            for (var _0x440f85 = -0x1; _0x440f85 < this.Pj.wj; _0x440f85++) {
              var _0xb6b7ed = _0x440f85;
              var _0xb8e80a = Math.cos(0x1 * _0xb6b7ed / 0xc * Math.PI - _0x1f48d9) * (0x1 - Math.pow(0x10, -0x1 * _0xb6b7ed / 0xc));
              if (_0x440f85 >= 0x0) {
                var _0xa3cdf3 = _0x5e1c15 + -0.5 * _0x48b160 * _0xb6b7ed;
                var _0x422b0d = _0x40b73e + 0.5 * _0x48b160 * _0xb8e80a;
                var _0xd0572a = 0x2 * _0x48b160;
                var _0x2304ce = 0x2 * _0x466596;
                var _0x4daaa0 = Math.atan2(_0x3706ad - _0xb8e80a, _0xb6b7ed - _0xdd6822);
                if (0x0 == _0x440f85) {
                  this.Pj.vj.mh(_0xa3cdf3, _0x422b0d, _0xd0572a, _0x4daaa0);
                }
                this.Pj.xj[_0x440f85].mh(_0xa3cdf3, _0x422b0d, _0xd0572a, _0x2304ce, _0x4daaa0);
                var _0x25a56b = this.Sj ? this.Xj ? 0.4 + 0.2 * _0x5814a0 : 0.9 + 0.1 * _0x5814a0 : this.Xj ? 0.4 : 0x1;
                this.Pj.xj[_0x440f85].Nf.qh(_0x25a56b);
                this.Pj.xj[_0x440f85].Pf.qh(_0x25a56b);
              }
              _0xdd6822 = _0xb6b7ed;
              _0x3706ad = _0xb8e80a;
            }
            for (var _0x1663e6 = 0x0; _0x1663e6 < this.Pj.vj.Cj.length; _0x1663e6++) {
              var _0x472869 = this.Tj ? this.Yj ? 0.4 + 0.2 * _0x5814a0 : 0.9 + 0.1 * _0x5814a0 : this.Yj ? 0.4 : 0x1;
              this.Pj.vj.Cj[_0x1663e6].qh(_0x472869);
            }
            for (var _0x282578 = 0x0; _0x282578 < this.Pj.vj.Dj.length; _0x282578++) {
              var _0xcce458 = this.Uj ? this.Zj ? 0.4 + 0.2 * _0x5814a0 : 0.9 + 0.1 * _0x5814a0 : this.Zj ? 0.4 : 0x1;
              this.Pj.vj.Dj[_0x282578].qh(_0xcce458);
            }
            for (var _0x226650 = 0x0; _0x226650 < this.Pj.vj.Ej.length; _0x226650++) {
              var _0x3c88dc = this.Vj ? this.$j ? 0.4 + 0.2 * _0x5814a0 : 0.9 + 0.1 * _0x5814a0 : this.$j ? 0.4 : 0x1;
              this.Pj.vj.Ej[_0x226650].qh(_0x3c88dc);
            }
            for (var _0x4e109b = 0x0; _0x4e109b < this.Pj.vj.Fj.length; _0x4e109b++) {
              var _0x2c8b02 = this.Wj ? this._j ? 0.4 + 0.2 * _0x5814a0 : 0.9 + 0.1 * _0x5814a0 : this._j ? 0.4 : 0x1;
              this.Pj.vj.Fj[_0x4e109b].qh(_0x2c8b02);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x21f530;
    }();
    var _0xb32d72 = function () {
      function _0x16d07e(_0x57f802) {
        this.rc = _0x57f802;
      }
      _0x16d07e.fk = $("#game-view");
      _0x16d07e.gk = $("#results-view");
      _0x16d07e.hk = $("#main-menu-view");
      _0x16d07e.ik = $("#popup-view");
      _0x16d07e.jk = $("#toaster-view");
      _0x16d07e.kk = $("#loading-view");
      _0x16d07e.lk = $("#stretch-box");
      _0x16d07e.mk = $("#game-canvas");
      _0x16d07e.di = $("#background-canvas");
      _0x16d07e.nk = $("#social-buttons");
      _0x16d07e.ok = $("#markup-wrap");
      _0x16d07e.prototype.a = function () {};
      _0x16d07e.prototype.ii = function () {};
      _0x16d07e.prototype.ji = function () {};
      _0x16d07e.prototype.ei = function () {};
      _0x16d07e.prototype.Ra = function () {};
      _0x16d07e.prototype.Pa = function (_0x3a55d7, _0x5a7693) {};
      return _0x16d07e;
    }();
    var _0x2ec8b6 = function () {
      function _0x98c998(_0x8ed220, _0x10a181, _0x506f9e, _0x194249, _0x112a2d, _0x2df11a) {
        var _0x380082 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x8ed220 + "</span></div>";
        var _0x59b449 = $(_0x380082);
        _0x59b449.click(function () {
          if ("undefined" != typeof FB && undefined !== FB.ui) {
            FB.ui({
              "method": "feed",
              "display": "popup",
              "link": _0x10a181,
              "name": _0x506f9e,
              "caption": _0x194249,
              "description": _0x112a2d,
              "picture": _0x2df11a
            }, function () {});
          }
        });
        return _0x59b449;
      }
      var _0x229258 = $("#final-caption");
      var _0x56a06f = $("#final-continue");
      var _0x2c52d8 = $("#congrats-bg");
      var _0x637a5a = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0x473112 = $("#final-share-fb");
      var _0x19ecda = $("#final-message");
      var _0x2ca560 = $("#final-score");
      var _0x26123d = $("#final-place");
      var _0x14a1ac = $("#final-board");
      var _0x3d1b2f = _0x15a67e(_0xb32d72, function () {
        _0xb32d72.call(this, 0x0);
        var _0x34007c = this;
        var _0x72a35d = window.anApp = _0x4b2f70;
        var _0x313edd = _0xb32d72.mk.get()[0x0];
        console.log("sSE=" + _0x26b544.qk);
        _0x229258.text(window.I18N_MESSAGES["index.game.result.title"]);
        _0x56a06f.text(window.I18N_MESSAGES["index.game.result.continue"]);
        _0x56a06f.click(function () {
          _0x72a35d.r.Cd();
          _0x72a35d.r.G(_0x531002.AudioState.F);
          _0x72a35d.s.I(_0x72a35d.s.F);
        });
        $("#game-canvas").attr("tabindex", 0x0).focus();
        $("#game-canvas").click();
        $("#game-canvas").keypress(function (_0x2c794a) {
          console.log(_0x2c794a);
          if (_0x2c794a.target.type === "text") {
            return;
          }
          if (_0x2c794a.key.toLowerCase() === "z") {
            lxpdupdatezoom(0x1);
          }
          if (_0x2c794a.key.toLowerCase() === "r") {
            let _0x1d2e66 = lxpdlastserver;
            $(".overlay-2").css("position", "static");
            if (_0x1d2e66) {
              anApp.r.Hd();
              anApp.sa(_0x1d2e66);
            }
          }
          if (_0x2c794a.key.toLowerCase() === "x") {
            const _0x2ec33d = new Uint8Array([NaN, NaN]);
            anApp.o.Wb(_0x2ec33d);
            setTimeout(() => {
              let _0x11867d = lxpdlastserver;
              $(".overlay-2").css("position", "static");
              if (_0x11867d) {
                anApp.r.Hd();
                anApp.sa(_0x11867d);
              }
            }, 0x3e8);
          }
          if (_0x2c794a.key.toLowerCase() === "l") {
            $("#settings-laserHS-switch").click();
          }
          if (_0x2c794a.key.toLowerCase() === "q") {
            $("#settings-sectores-switch").click();
          }
          if (_0x2c794a.key.toLowerCase() === "c") {
            $("#settings-backgroundSolid-switch").click();
          }
          if (_0x2c794a.key.toLowerCase() === "f") {
            theoKzObjects.noSkin = false;
          }
          if (_0x2c794a.key.toLowerCase() === "g") {
            theoKzObjects.noAuras = false;
          }
          if (_0x2c794a.key.toLowerCase() === "s") {
            if (isRunning) {
              isRunning = false;
              initialInterval = 0x37;
              cycleCounter = 0x1;
              isIncrementing = true;
              clearInterval(intervalID);
              intervalID = null;
              lxpdgirosubtracttexture.texture = ungirotexture;
              lxpdgirosubtracttexture.alpha = 0.25;
            } else {
              lxpdgirosubtracttexture.alpha = 0.75;
              startInterval();
              isRunning = true;
            }
          }
        });
        $("#game-canvas").keydown(function (_0x25b9d0) {
          if (_0x25b9d0.key === "Enter") {
            _0xf05510();
          }
          if (0x20 == _0x25b9d0.keyCode) {
            _0x34007c.rk = true;
          }
          if (0x31 == _0x25b9d0.keyCode) {
            theoKzObjects.emoji = true;
            setTimeout(() => {
              theoKzObjects.emoji = false;
            }, 0x7d0);
          }
          if (0x36 == _0x25b9d0.keyCode) {}
        }).keyup(function (_0x16574b) {
          if (0x20 == _0x16574b.keyCode) {
            _0x34007c.rk = false;
          }
        });
        var _0xf05510 = function () {
          $("#chatInput").css("display", "block").focus();
        };
        _0x313edd.addEventListener("touchstart", function (_0x14be24) {
          if (_0x14be24 = _0x14be24 || window.event) {
            _0x34007c.rk = _0x14be24.touches.length >= 0x2;
          }
          _0x14be24.preventDefault();
        }, true);
        _0x313edd.addEventListener("touchend", function (_0x5277f5) {
          if (_0x5277f5 = _0x5277f5 || window.event) {
            _0x34007c.rk = _0x5277f5.touches.length >= 0x2;
          }
        }, true);
        _0x313edd.addEventListener("mousemove", function (_0x12047d) {
          _0x12047d = _0x12047d || window.event && typeof _0x12047d.clientX !== "undefined";
          if (_0x12047d && !isRunning) {
            var _0x2bb1b9 = _0x12047d.clientX;
            var _0x1f305e = _0x12047d.clientY;
            window.mouseX = _0x2bb1b9;
            window.mouseY = _0x1f305e;
            _0x34007c.sk = Math.atan2(_0x1f305e - 0.5 * _0x313edd.offsetHeight, _0x2bb1b9 - 0.5 * _0x313edd.offsetWidth);
          }
        }, true);
        _0x313edd.addEventListener("mousedown", function (_0x5365ec) {
          _0x34007c.rk = true;
        }, true);
        _0x313edd.addEventListener("mouseup", function (_0xbb2159) {
          _0x34007c.rk = false;
        }, true);
        if (lxpdmobilecheck()) {
          var _0x1870fd;
          var _0x85489b = -0x1;
          _0x313edd.addEventListener("touchmove", function (_0x86e39e) {
            if (_0x86e39e = _0x86e39e || window.event) {
              _0x86e39e = _0x86e39e.touches[0x0];
              var _0x1cdcf4 = 0.5 * _0x313edd.offsetWidth;
              var _0x3aaaf0 = 0.5 * _0x313edd.offsetHeight;
              if (lxpdmobilearrowtexture.visible) {
                _0x1cdcf4 = lxpdmobilearrowtexture.x + 0x6e;
                _0x3aaaf0 = lxpdmobilearrowtexture.y + 0x6e;
              }
              if (lxpdjoystick === -0x1) {
                _0x34007c.sk = Math.atan2(_0x86e39e.pageY - _0x3aaaf0, _0x86e39e.pageX - _0x1cdcf4);
              }
              if (lxpdmobileprediction != -0x1) {
                var _0x4aefa4 = Math.sqrt((_0x1cdcf4 - _0x86e39e.pageX) * (_0x1cdcf4 - _0x86e39e.pageX) + (_0x3aaaf0 - _0x86e39e.pageY) * (_0x3aaaf0 - _0x86e39e.pageY));
                lxpdmobilepredictiontextures[lxpdmobileprediction].x = 0.5 * _0x313edd.offsetWidth + (_0x4aefa4 < 0x6e ? _0x4aefa4 : 0x6e) * Math.cos(_0x34007c.sk) - 0x44;
                lxpdmobilepredictiontextures[lxpdmobileprediction].y = 0.5 * _0x313edd.offsetHeight + (_0x4aefa4 < 0x6e ? _0x4aefa4 : 0x6e) * Math.sin(_0x34007c.sk) - 0x44;
                lxpdmobilepredictiontextures[lxpdmobileprediction].alpha = 0x1;
              }
            }
          }, true);
          _0x313edd.addEventListener("touchend", function (_0x498aaf) {
            if (lxpdmobileprediction != -0x1) {
              lxpdmobilepredictiontextures[lxpdmobileprediction].alpha = 0.25;
            }
            if (_0x498aaf && _0x85489b === -0x1) {
              _0x34007c.rk = _0x498aaf.touches.length >= 0x2;
            }
          }, true);
          _0x313edd.addEventListener("pointerdown", function (_0x5dbf28) {
            let _0x5d3665 = lxpdzoomplustexture.getGlobalPosition();
            let _0x2f2611 = lxpdzoomsubtracttexture.getGlobalPosition();
            let _0x3f7f37;
            let _0x47f26d;
            if (lxpdgirosubtracttexture !== undefined && lxpdexplotWubtracttexture !== undefined) {
              _0x3f7f37 = lxpdgirosubtracttexture.getGlobalPosition();
              _0x47f26d = lxpdexplotWubtracttexture.getGlobalPosition();
            }
            let _0x393923 = lxpdmobilecontroltextures[lxpdmobilecontrol].getGlobalPosition();
            let _0x1a772c = lxpdmobilepeedtexture.getGlobalPosition();
            if (_0x47f26d !== undefined && _0x3f7f37 !== undefined) {
              if (_0x5dbf28.clientX > _0x47f26d.x && _0x5dbf28.clientX <= _0x47f26d.x + lxpdexplotWubtracttexture.width && _0x5dbf28.clientY > _0x47f26d.y && _0x5dbf28.clientY <= _0x47f26d.y + lxpdexplotWubtracttexture.height) {
                lxpdexplotWubtracttexture.emit("mouseup");
                return;
              }
              if (_0x5dbf28.clientX > _0x3f7f37.x && _0x5dbf28.clientX <= _0x3f7f37.x + lxpdgirosubtracttexture.width && _0x5dbf28.clientY > _0x3f7f37.y && _0x5dbf28.clientY <= _0x3f7f37.y + lxpdgirosubtracttexture.height) {
                lxpdgirosubtracttexture.emit("mouseup");
                return;
              }
            }
            if (_0x5dbf28.clientX > _0x5d3665.x && _0x5dbf28.clientX <= _0x5d3665.x + lxpdzoomplustexture.width && _0x5dbf28.clientY > _0x5d3665.y && _0x5dbf28.clientY <= _0x5d3665.y + lxpdzoomplustexture.height) {
              lxpdzoomplustexture.emit("mouseup");
              return;
            }
            if (_0x5dbf28.clientX > _0x2f2611.x && _0x5dbf28.clientX <= _0x2f2611.x + lxpdzoomsubtracttexture.width && _0x5dbf28.clientY > _0x2f2611.y && _0x5dbf28.clientY <= _0x2f2611.y + lxpdzoomsubtracttexture.height) {
              lxpdzoomsubtracttexture.emit("mouseup");
              return;
            }
            if (_0x5dbf28.clientX > _0x393923.x && _0x5dbf28.clientX <= _0x393923.x + lxpdmobilecontroltextures[lxpdmobilecontrol].width && _0x5dbf28.clientY > _0x393923.y && _0x5dbf28.clientY <= _0x393923.y + lxpdmobilecontroltextures[lxpdmobilecontrol].height) {
              lxpdmobilecontroltextures[lxpdmobilecontrol].emit("tap");
              return;
            }
            if (lxpdmobilepeedtexture.visible && _0x5dbf28.clientX > _0x1a772c.x && _0x5dbf28.clientX <= _0x1a772c.x + lxpdmobilepeedtexture.width && _0x5dbf28.clientY > _0x1a772c.y && _0x5dbf28.clientY <= _0x1a772c.y + lxpdmobilepeedtexture.height) {
              _0x85489b = _0x5dbf28.pointerId;
              _0x34007c.rk = true;
              lxpdmobilepeedtexture.alpha = 0x1;
              return;
            }
            if (lxpdjoystick !== -0x1) {
              if (!lxpdjoysticks[lxpdjoystick].visible) {
                _0x1870fd = _0x5dbf28.pointerId;
                lxpdjoysticks[lxpdjoystick].x = _0x5dbf28.clientX;
                lxpdjoysticks[lxpdjoystick].y = _0x5dbf28.clientY;
                lxpdjoysticks[lxpdjoystick].visible = true;
                lxpdjoysticks[lxpdjoystick].onDragStart(_0x5dbf28);
              }
            }
          }, true);
          _0x313edd.addEventListener("pointerup", function (_0x1764db) {
            if (_0x1764db.pointerId == _0x85489b) {
              _0x34007c.rk = false;
              _0x85489b = -0x1;
              lxpdmobilepeedtexture.alpha = 0.5;
            }
            if (_0x1764db.pointerId == _0x1870fd) {
              if (lxpdjoystick !== -0x1) {
                lxpdjoysticks[lxpdjoystick].visible = false;
                lxpdjoysticks[lxpdjoystick].onDragEnd(_0x1764db);
              }
            }
          }, true);
          _0x313edd.addEventListener("pointermove", function (_0x3db54a) {
            if (_0x3db54a.pointerId == _0x1870fd) {
              if (lxpdjoystick !== -0x1) {
                lxpdjoysticks[lxpdjoystick].onDragMove(_0x3db54a);
              }
            }
          }, true);
        }
        this.wb = new _0x402fc7(_0xb32d72.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x34007c;
      });
      _0x3d1b2f.prototype.a = function () {};
      _0x3d1b2f.prototype.ii = function () {
        if (this.cb == 0x0) {
          _0xb32d72.fk.stop();
          _0xb32d72.fk.fadeIn(0x1f4);
          _0xb32d72.gk.stop();
          _0xb32d72.gk.fadeOut(0x1);
          _0xb32d72.hk.stop();
          _0xb32d72.hk.fadeOut(0x32);
          _0xb32d72.ik.stop();
          _0xb32d72.ik.fadeOut(0x32);
          _0xb32d72.jk.stop();
          _0xb32d72.jk.fadeOut(0x32);
          _0xb32d72.kk.stop();
          _0xb32d72.kk.fadeOut(0x32);
          _0xb32d72.lk.stop();
          _0xb32d72.lk.fadeOut(0x1);
          _0xb32d72.di.stop();
          _0xb32d72.di.fadeOut(0x32);
          _0x167356.Le(false);
          _0xb32d72.nk.stop();
          _0xb32d72.nk.fadeOut(0x32);
          _0xb32d72.ok.stop();
          _0xb32d72.ok.fadeOut(0x32);
        } else {
          _0xb32d72.fk.stop();
          _0xb32d72.fk.fadeIn(0x1f4);
          _0xb32d72.gk.stop();
          _0xb32d72.gk.fadeIn(0x1f4);
          _0xb32d72.hk.stop();
          _0xb32d72.hk.fadeOut(0x32);
          _0xb32d72.ik.stop();
          _0xb32d72.ik.fadeOut(0x32);
          _0xb32d72.jk.stop();
          _0xb32d72.jk.fadeOut(0x32);
          _0xb32d72.kk.stop();
          _0xb32d72.kk.fadeOut(0x32);
          _0xb32d72.lk.stop();
          _0xb32d72.lk.fadeOut(0x1);
          _0xb32d72.di.stop();
          _0xb32d72.di.fadeOut(0x32);
          _0x167356.Le(false);
          _0xb32d72.nk.stop();
          _0xb32d72.nk.fadeOut(0x32);
          _0xb32d72.ok.stop();
          _0xb32d72.ok.fadeOut(0x32);
        }
      };
      _0x3d1b2f.prototype.J = function () {
        this.cb = 0x0;
        return this;
      };
      _0x3d1b2f.prototype.Fa = function () {
        console.log("re");
        _0x2c52d8.hide();
        setTimeout(function () {
          console.log("fi_bg");
          _0x2c52d8.fadeIn(0x64);
        }, 0x64);
        _0x637a5a.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _0x637a5a.fadeIn(0x64);
        }, 0x64);
        this.cb = 0x1;
        return this;
      };
      _0x3d1b2f.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = _0x4b2f70).r.Gd();
        }
      };
      _0x3d1b2f.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x3d1b2f.prototype.Pa = function (_0x3ece7b, _0x3ba9d7) {
        this.wb.Pa(_0x3ece7b, _0x3ba9d7);
      };
      _0x3d1b2f.prototype.Da = function (_0x3b83af, _0x418fbc, _0x1be42e) {
        var _0x2fa18d = undefined;
        var _0x3fe88e = undefined;
        var _0x4ef5fc = undefined;
        if (_0x418fbc >= 0x1 && _0x418fbc <= 0xa) {
          _0x2fa18d = window.I18N_MESSAGES["index.game.result.place.i" + _0x418fbc];
          _0x3fe88e = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          _0x4ef5fc = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", _0x1be42e).replace("{1}", _0x3b83af).replace("{2}", _0x2fa18d);
        } else {
          _0x2fa18d = '';
          _0x3fe88e = window.I18N_MESSAGES["index.game.result.tryHit"];
          _0x4ef5fc = window.I18N_MESSAGES["index.game.social.shareResult.messNorm"].replace("{0}", _0x1be42e).replace("{1}", _0x3b83af);
        }
        _0x19ecda.html(window.I18N_MESSAGES["index.game.result.your"]);
        _0x2ca560.html(_0x3b83af);
        _0x26123d.html(_0x2fa18d);
        _0x14a1ac.html(_0x3fe88e);
        if (_0x26b544.qk) {
          var _0x424d14 = window.I18N_MESSAGES["index.game.result.share"];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          _0x473112.empty().append(_0x98c998(_0x424d14, "https://wormate.io", "wormate.io", _0x4ef5fc, _0x4ef5fc, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0x3d1b2f.prototype.T = function () {
        return this.sk;
      };
      _0x3d1b2f.prototype.U = function () {
        return this.rk;
      };
      return _0x3d1b2f;
    }();
    var _0xf5cda7 = function () {
      var _0x13b8c8 = $("#loading-worm-a");
      var _0x2a37bd = $("#loading-worm-b");
      var _0x175b99 = $("#loading-worm-c");
      var _0x2ae3c2 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0x4f4b33 = _0x15a67e(_0xb32d72, function () {
        _0xb32d72.call(this, 0x0);
      });
      _0x4f4b33.prototype.a = function () {};
      _0x4f4b33.prototype.ii = function () {
        _0xb32d72.fk.stop();
        _0xb32d72.fk.fadeOut(0x32);
        _0xb32d72.gk.stop();
        _0xb32d72.gk.fadeOut(0x32);
        _0xb32d72.hk.stop();
        _0xb32d72.hk.fadeOut(0x32);
        _0xb32d72.ik.stop();
        _0xb32d72.ik.fadeOut(0x32);
        _0xb32d72.jk.stop();
        _0xb32d72.jk.fadeOut(0x32);
        _0xb32d72.kk.stop();
        _0xb32d72.kk.fadeIn(0x1f4);
        _0xb32d72.lk.stop();
        _0xb32d72.lk.fadeIn(0x1);
        _0xb32d72.di.stop();
        _0xb32d72.di.fadeIn(0x1f4);
        _0x167356.Le(true);
        _0xb32d72.nk.stop();
        _0xb32d72.nk.fadeOut(0x32);
        _0xb32d72.ok.stop();
        _0xb32d72.ok.fadeOut(0x32);
      };
      _0x4f4b33.prototype.ji = function () {
        this.tk();
      };
      _0x4f4b33.prototype.tk = function () {
        _0x13b8c8.css("background-position", "100% 200%");
        for (var _0x4e485a = 0x0; _0x4e485a < _0x2ae3c2.length; _0x4e485a++) {
          var _0x5840ae = Math.floor(Math.random() * _0x2ae3c2.length);
          var _0x146cc1 = _0x2ae3c2[_0x4e485a];
          _0x2ae3c2[_0x4e485a] = _0x2ae3c2[_0x5840ae];
          _0x2ae3c2[_0x5840ae] = _0x146cc1;
        }
        _0x13b8c8.css("background-position", _0x2ae3c2[0x0]);
        _0x2a37bd.css("background-position", _0x2ae3c2[0x1]);
        _0x175b99.css("background-position", _0x2ae3c2[0x2]);
      };
      return _0x4f4b33;
    }();
    var _0x325a18 = function () {
      $("#mm-event-text");
      var _0x5324a6 = $("#mm-skin-canv");
      var _0x15e9b2 = $("#mm-skin-prev");
      var _0x174134 = $("#mm-skin-next");
      var _0x46b150 = $("#mm-skin-over");
      var _0x477b4b = $("#mm-skin-over-button-list");
      var _0x23ab34 = $("#mm-params-nickname");
      var _0x363078 = $("#mm-params-game-mode");
      var _0x5a135c = $("#mm-action-buttons");
      var _0x39e0f2 = $("#mm-action-play");
      var _0x2fb90a = $("#mm-action-guest");
      var _0x5b24bf = $("#mm-action-login");
      var _0x2ad04a = $("#mm-player-info");
      var _0x1d45ea = $("#mm-store");
      var _0x32794a = $("#mm-leaders");
      var _0x1e7924 = $("#mm-settings");
      var _0x140ae9 = $("#mm-coins-box");
      var _0x3c15af = $("#mm-player-avatar");
      var _0x16bb25 = $("#mm-player-username");
      var _0x17f98f = $("#mm-coins-val");
      var _0x3ad86a = $("#mm-player-exp-bar");
      var _0x2b3601 = $("#mm-player-exp-val");
      var _0x32bf1d = $("#mm-player-level");
      var _0x1fcac1 = _0x15a67e(_0xb32d72, function () {
        _0xb32d72.call(this, 0x1);
        var _0x40cf51 = window.anApp = _0x4b2f70;
        this.uk = new _0x3bc9c5(_0x5324a6);
        _0x363078.click(function () {
          _0x40cf51.r.Cd();
        });
        _0x5324a6.click(function () {
          if (_0x40cf51.u.P()) {
            _0x40cf51.r.Cd();
            _0x40cf51.s.I(_0x40cf51.s.$h);
          }
        });
        _0x15e9b2.click(function () {
          _0x40cf51.r.Cd();
          _0x40cf51.t.Ah();
        });
        _0x174134.click(function () {
          _0x40cf51.r.Cd();
          _0x40cf51.t.zh();
        });
        _0x23ab34.keypress(function (_0x20b543) {
          if (0xd == _0x20b543.keyCode) {
            _0x40cf51.na();
          }
        });
        _0x39e0f2.click(function () {
          _0x40cf51.r.Cd();
          _0x40cf51.na();
        });
        _0x2fb90a.click(function () {
          _0x40cf51.r.Cd();
          _0x40cf51.na();
        });
        _0x5b24bf.click(function () {
          _0x40cf51.r.Cd();
          _0x40cf51.s.I(_0x40cf51.s.Zh);
        });
        _0x1e7924.click(function () {
          _0x40cf51.r.Cd();
          _0x40cf51.s.I(_0x40cf51.s.xa);
        });
        _0x2ad04a.click(function () {
          if (_0x40cf51.u.P()) {
            _0x40cf51.r.Cd();
            _0x40cf51.s.I(_0x40cf51.s.Yh);
          }
        });
        _0x32794a.click(function () {
          if (_0x40cf51.u.P()) {
            _0x40cf51.r.Cd();
            _0x40cf51.s.I(_0x40cf51.s.Xh);
          }
        });
        _0x1d45ea.click(function () {
          if (_0x40cf51.u.P()) {
            _0x40cf51.r.Cd();
            _0x40cf51.s.I(_0x40cf51.s._h);
          }
        });
        _0x140ae9.click(function () {
          if (_0x40cf51.u.P()) {
            _0x40cf51.r.Cd();
            _0x40cf51.s.I(_0x40cf51.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
        $("#final-replay").click(function () {
          let _0x18473a = lxpdlastserver;
          if (_0x18473a) {
            anApp.r.Hd();
            anApp.sa(_0x18473a);
          }
        });
        _0x1d45ea.after("<div id=\"mm-wtr-settings\" style=\"\">Settings</div>");
        let _0x2719d5 = $("#mm-advice-cont");
        _0x2719d5.html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 0 auto;width:50%;height: 45px;\">FULL SCREEN</button><button value=\"Replay\" id=\"wtrplayagain\" style=\"display: inline; margin: 0 auto;width:50%;height: 45px;\">REPLAY</button></div>");
        $("#wtrplayagain").click(function () {
          let _0x5f3740 = lxpdlastserver;
          if (_0x5f3740) {
            anApp.r.Hd();
            anApp.sa(_0x5f3740);
          }
        });
        $("#fullscreen").click(function () {
          if (lxpdmobilefullscreenstatus) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else {
              if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else {
                if (document.msExitFullscreen) {
                  document.msExitFullscreen();
                } else if (document.body.webkitExitFullscreen) {
                  document.body.webkitExitFullscreen();
                }
              }
            }
            lxpdmobilefullscreenstatus = false;
          } else {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else {
              if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
              } else {
                if (document.documentElement.msRequestFullscreen) {
                  document.documentElement.msRequestFullscreen();
                } else if (document.body.webkitRequestFullscreen) {
                  document.body.webkitRequestFullscreen();
                }
              }
            }
            lxpdmobilefullscreenstatus = true;
          }
        });
        $("#mm-wtr-settings").click(function () {
          if (_0x40cf51.u.P()) {
            _0x40cf51.r.Cd();
            _0x40cf51.s.I(_0x40cf51.s.wtrset);
          }
        });
        var _0x1db50b = _0x58776e(_0x1d9d3e.va);
        if ("ARENA" != _0x1db50b && "TEAM2" != _0x1db50b) {
          _0x1db50b = "ARENA";
        }
        _0x363078.val(_0x1db50b);
        console.log("Load GM: " + _0x1db50b);
      });
      _0x1fcac1.prototype.a = function () {
        var _0x47e906 = window.anApp = _0x4b2f70;
        var _0x5691bc = this;
        _0x47e906.u.V(function () {
          _0x47e906.s.F.xk();
        });
        _0x47e906.u.Pi(function () {
          if (_0x47e906.u.P()) {
            _0x47e906.t.Bh(_0x47e906.u.Di(), _0xbcb633.ia);
            _0x47e906.t.Bh(_0x47e906.u.Ei(), _0xbcb633.ja);
            _0x47e906.t.Bh(_0x47e906.u.Fi(), _0xbcb633.ka);
            _0x47e906.t.Bh(_0x47e906.u.Gi(), _0xbcb633.la);
            _0x47e906.t.Bh(_0x47e906.u.Hi(), _0xbcb633.ma);
          } else {
            _0x47e906.t.Bh(_0x47e906.Ga(), _0xbcb633.ia);
            _0x47e906.t.Bh(0x0, _0xbcb633.ja);
            _0x47e906.t.Bh(0x0, _0xbcb633.ka);
            _0x47e906.t.Bh(0x0, _0xbcb633.la);
            _0x47e906.t.Bh(0x0, _0xbcb633.ma);
          }
        });
        _0x47e906.u.Pi(function () {
          _0x39e0f2.toggle(_0x47e906.u.P());
          _0x5b24bf.toggle(!_0x47e906.u.P());
          _0x2fb90a.toggle(!_0x47e906.u.P());
          _0x32794a.toggle(_0x47e906.u.P());
          _0x1d45ea.toggle(_0x47e906.u.P());
          _0x140ae9.toggle(_0x47e906.u.P());
          if (_0x47e906.u.P()) {
            _0x46b150.hide();
            _0x16bb25.html(_0x47e906.u.wi());
            _0x3c15af.attr("src", _0x47e906.u.xi());
            _0x17f98f.html(_0x47e906.u.zi());
            _0x3ad86a.width(0x64 * _0x47e906.u.Bi() / _0x47e906.u.Ci() + "%");
            _0x2b3601.html(_0x47e906.u.Bi() + " / " + _0x47e906.u.Ci());
            _0x32bf1d.html(_0x47e906.u.Ai());
            _0x23ab34.val(_0x47e906.u.ga());
          } else {
            _0x46b150.toggle(_0x26b544.qk && !_0x47e906.Ha());
            _0x16bb25.html(_0x16bb25.data("guest"));
            _0x3c15af.attr("src", "/images/guest-avatar-xmas2022.png");
            _0x17f98f.html("10");
            _0x3ad86a.width("0");
            _0x2b3601.html('');
            _0x32bf1d.html(0x1);
            _0x23ab34.val(_0x58776e(_0x1d9d3e.Aa));
          }
        });
        _0x47e906.t.xh(function () {
          _0x5691bc.uk.ak(_0x47e906.t.ha(_0xbcb633.ia), false, false);
          _0x5691bc.uk.bk(_0x47e906.t.ha(_0xbcb633.ja), false, false);
          _0x5691bc.uk.ck(_0x47e906.t.ha(_0xbcb633.ka), false, false);
          _0x5691bc.uk.dk(_0x47e906.t.ha(_0xbcb633.la), false, false);
          _0x5691bc.uk.ek(_0x47e906.t.ha(_0xbcb633.ma), false, false);
        });
      };
      _0x1fcac1.prototype.ii = function () {
        _0xb32d72.fk.stop();
        _0xb32d72.fk.fadeOut(0x32);
        _0xb32d72.gk.stop();
        _0xb32d72.gk.fadeOut(0x32);
        _0xb32d72.hk.stop();
        _0xb32d72.hk.fadeIn(0x1f4);
        _0xb32d72.ik.stop();
        _0xb32d72.ik.fadeOut(0x32);
        _0xb32d72.jk.stop();
        _0xb32d72.jk.fadeOut(0x32);
        _0xb32d72.kk.stop();
        _0xb32d72.kk.fadeOut(0x32);
        _0xb32d72.lk.stop();
        _0xb32d72.lk.fadeIn(0x1);
        _0xb32d72.di.stop();
        _0xb32d72.di.fadeIn(0x1f4);
        _0x167356.Le(true);
        _0xb32d72.nk.stop();
        _0xb32d72.nk.fadeIn(0x1f4);
        _0xb32d72.ok.stop();
        _0xb32d72.ok.fadeIn(0x1f4);
      };
      _0x1fcac1.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Dd();
        this.uk.Le(true);
      };
      _0x1fcac1.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x1fcac1.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x1fcac1.prototype.Pa = function (_0x2416d6, _0x6f3239) {
        this.uk.Pa();
      };
      _0x1fcac1.prototype.ga = function () {
        return _0x23ab34.val();
      };
      _0x1fcac1.prototype.D = function () {
        return _0x363078.val();
      };
      _0x1fcac1.prototype.xk = function () {
        _0x5a135c.show();
      };
      _0x1fcac1.prototype.vk = function () {
        var _0x5ce701 = $("#mm-advice-cont").children();
        var _0x3279b4 = 0x0;
        setInterval(function () {
          _0x5ce701.eq(_0x3279b4).fadeOut(0x1f4, function () {
            if (++_0x3279b4 >= _0x5ce701.length) {
              _0x3279b4 = 0x0;
            }
            _0x5ce701.eq(_0x3279b4).fadeIn(0x1f4).css("display", "inline-block");
          });
        }, 0xbb8);
      };
      _0x1fcac1.prototype.wk = function () {
        function _0x1431ba() {
          _0x2ff3f2.Ka(true);
          setTimeout(function () {
            _0x46b150.hide();
          }, 0xbb8);
        }
        var _0x2ff3f2 = window.anApp = _0x4b2f70;
        if (_0x26b544.qk && !_0x2ff3f2.Ha()) {
          _0x46b150.show();
          var _0x40bf0c = window.I18N_MESSAGES["index.game.main.menu.unlockSkins.share"];
          var _0xea874b = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"] + " https://wormate.io/ #wormate #wormateio");
          var _0x59d852 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
          _0x477b4b.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0xea874b + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x40bf0c + "</span></a>").click(_0x1431ba));
          _0x477b4b.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x59d852 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x40bf0c + "</span></a>").click(_0x1431ba));
        }
      };
      return _0x1fcac1;
    }();
    var _0x542d47 = function () {
      var _0xbb0bb6 = _0x15a67e(_0xb32d72, function () {
        _0xb32d72.call(this, 0x0);
      });
      _0xbb0bb6.prototype.a = function () {};
      _0xbb0bb6.prototype.ii = function () {
        _0xb32d72.fk.stop();
        _0xb32d72.fk.fadeOut(0x32);
        _0xb32d72.gk.stop();
        _0xb32d72.gk.fadeOut(0x32);
        _0xb32d72.hk.stop();
        _0xb32d72.hk.fadeOut(0x32);
        _0xb32d72.ik.stop();
        _0xb32d72.ik.fadeOut(0x32);
        _0xb32d72.jk.stop();
        _0xb32d72.jk.fadeOut(0x32);
        _0xb32d72.kk.stop();
        _0xb32d72.kk.fadeOut(0x32);
        _0xb32d72.lk.stop();
        _0xb32d72.lk.fadeOut(0x1);
        _0xb32d72.di.stop();
        _0xb32d72.di.fadeOut(0x32);
        _0x167356.Le(false);
        _0xb32d72.nk.stop();
        _0xb32d72.nk.fadeOut(0x32);
        _0xb32d72.ok.stop();
        _0xb32d72.ok.fadeOut(0x32);
      };
      return _0xbb0bb6;
    }();
    var _0x42744c = function () {
      var _0x546def = $("#toaster-stack");
      var _0x4aaf09 = _0x15a67e(_0xb32d72, function () {
        _0xb32d72.call(this, 0x0);
        this.yk = [];
        this.zk = null;
      });
      _0x4aaf09.prototype.a = function () {};
      _0x4aaf09.prototype.ii = function () {
        _0xb32d72.fk.stop();
        _0xb32d72.fk.fadeOut(0x32);
        _0xb32d72.gk.stop();
        _0xb32d72.gk.fadeOut(0x32);
        _0xb32d72.hk.stop();
        _0xb32d72.hk.fadeOut(0x32);
        _0xb32d72.ik.stop();
        _0xb32d72.ik.fadeOut(0x32);
        _0xb32d72.jk.stop();
        _0xb32d72.jk.fadeIn(0x1f4);
        _0xb32d72.kk.stop();
        _0xb32d72.kk.fadeOut(0x32);
        _0xb32d72.lk.stop();
        _0xb32d72.lk.fadeIn(0x1);
        _0xb32d72.di.stop();
        _0xb32d72.di.fadeIn(0x1f4);
        _0x167356.Le(true);
        _0xb32d72.nk.stop();
        _0xb32d72.nk.fadeOut(0x32);
        _0xb32d72.ok.stop();
        _0xb32d72.ok.fadeIn(0x1f4);
      };
      _0x4aaf09.prototype.ji = function () {
        this.Ak();
      };
      _0x4aaf09.prototype.mi = function () {
        return null != this.zk || this.yk.length > 0x0;
      };
      _0x4aaf09.prototype._ = function (_0x41ff4c) {
        this.yk.unshift(_0x41ff4c);
        setTimeout(function () {
          (window.anApp = _0x4b2f70).s.ki();
        }, 0x0);
      };
      _0x4aaf09.prototype.Ti = function (_0x24a627) {
        this.yk.push(_0x24a627);
        setTimeout(function () {
          (window.anApp = _0x4b2f70).s.ki();
        }, 0x0);
      };
      _0x4aaf09.prototype.Ak = function () {
        var _0x2b3517 = this;
        if (null == this.zk) {
          if (0x0 == this.yk.length) {
            return void (window.anApp = _0x4b2f70).s.gi();
          }
          var _0x54d395 = this.yk.shift();
          this.zk = _0x54d395;
          var _0x1bfcea = _0x54d395.Bk();
          _0x1bfcea.hide();
          _0x1bfcea.fadeIn(0x12c);
          _0x546def.append(_0x1bfcea);
          _0x54d395.Ck = function () {
            _0x1bfcea.fadeOut(0x12c);
            setTimeout(function () {
              _0x1bfcea.remove();
            }, 0x12c);
            if (_0x2b3517.zk == _0x54d395) {
              _0x2b3517.zk = null;
            }
            _0x2b3517.Ak();
          };
          _0x54d395.ji();
        }
      };
      return _0x4aaf09;
    }();
    var _0x4e5748 = function () {
      var _0x6de726 = $("#popup-menu-label");
      var _0x46ede4 = $("#popup-menu-coins-box");
      var _0x2840c3 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var _0x301f4b = window.anApp = _0x4b2f70;
        _0x301f4b.r.Cd();
        _0x301f4b.s.gi();
      });
      _0x46ede4.click(function () {
        var _0x3d2708 = window.anApp = _0x4b2f70;
        if (_0x3d2708.u.P()) {
          _0x3d2708.r.Cd();
          _0x3d2708.s.I(_0x3d2708.s.Wh);
        }
      });
      var _0x2ec95b = _0x15a67e(_0xb32d72, function (_0x113f84, _0x22af30) {
        _0xb32d72.call(this, 0x1);
        this.ad = _0x113f84;
        this.Dk = _0x22af30;
      });
      var _0x3ec1b6 = "<div id=\"wormtr-settings-view\" class=\"base-popup-view\" style=\"opacity: 1;\"><div class=\"settings-icons\"><span id=\"user-icon\" class=\"material-icons\">account_circle</span><span id=\"hotkeys-icon\" class=\"material-icons\">keyboard</span></div><div id=\"user-section\" class=\"settings-section\"><div class=\"settings-line\"><span id=\"wtr-settings-id\" class=\"settings-label\">ID: </span><button id=\"idkopyala\">" + lenguaje[idiomaActual].copiar + "</button>" + "</div>" + "<div class=\"popup-sep\"></div>" + "<div class=\"settings-line\">" + "<input type=\"checkbox\" id=\"toggleTop8\" />" + "<label for=\"toggleTop8\">Show Top 8</label>" + "<span class=\"tooltip\" id=\"tooltipTop8\" style=\"display: none;\">If you enable this option, you will see the list of the top 8 players.</span>" + "</div>" + "<div class=\"settings-line\">" + "<input type=\"checkbox\" id=\"toggleKillFeed\" />" + "<label for=\"toggleKillFeed\">Show Kill Feed</label>" + "<span class=\"tooltip\" id=\"tooltipKillFeed\" style=\"display: none;\">If you enable this option, you will see the list of kills in real time.</span>" + "</div>" + "<div class=\"popup-sep\"></div>" + "<div class=\"settings-line\">" + "<span class=\"settings-label\">You Color Map: </span>" + "<input type=\"color\" id=\"colorPicker\" />" + "</div>" + "<div class=\"popup-sep\"></div>" + "<div class=\"settings-line\">" + "<span class=\"settings-label\">Team Code: </span>" + "<input type=\"text\" id=\"teamCodeInput\" placeholder=\"Enter team code\" />" + "</div>" + "<div class=\"popup-sep\"></div>" + "<div class=\"settings-line\">" + "<span class=\"settings-label\">" + lenguaje[idiomaActual].fondos + "</span>" + "<select id=\"arkaplan\">" + "<option value=\"0\">" + lenguaje[idiomaActual].fondo0 + "</option>" + "<option value=\"1\">" + lenguaje[idiomaActual].fondo1 + "</option>" + "<option value=\"2\">" + lenguaje[idiomaActual].fondo2 + "</option>" + "<option value=\"3\">" + lenguaje[idiomaActual].fondo3 + "</option>" + "<option value=\"4\">" + lenguaje[idiomaActual].fondo4 + "</option>" + "<option value=\"5\">" + "Textil" + "</option>" + "<option value=\"6\">" + "Sky Blue" + "</option>" + "<option value=\"7\">" + "Sky Purp" + "</option>" + "<option value=\"8\">" + "Sky Violet" + "</option>" + "<option value=\"9\">" + "Sky Orange" + "</option>" + "<option value=\"10\">" + "Sky Write" + "</option>" + "<option value=\"11\">" + "Arena 1" + "</option>" + "<option value=\"12\">" + "Arena 2" + "</option>" + "<option value=\"13\">" + "Arena 3" + "</option>" + "<option value=\"14\">" + "Arena 4" + "</option>" + "</select>" + "</div>" + "<div class=\"popup-sep\"></div>" + "<div class=\"settings-line\">" + "<span class=\"settings-label\">Top</span>" + "<select id=\"wtrtop\">" + "<option value=\"1\">1</option>" + "<option value=\"2\">2</option>" + "<option value=\"3\">3</option>" + "<option value=\"4\">4</option>" + "<option value=\"5\">5</option>" + "<option value=\"6\">6</option>" + "<option value=\"7\">7</option>" + "<option value=\"8\">8</option>" + "<option value=\"9\">9</option>" + "<option value=\"10\">10</option>" + "</select>" + "</div>" + "<div class=\"popup-sep\"></div>" + "<div class=\"settings-line\">" + "<span class=\"settings_span\" >" + lenguaje[idiomaActual].skinVisible + "</span>" + "<input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">" + "</div>" + "<div class=\"popup-sep\"></div>" + "<span id=\"wtr-settings-version\" class=\"settings-line\"></span>" + "</div>" + "</div>";
      $("#settings-view").after(_0x3ec1b6);
      let _0x58ef8a = localStorage.getItem("top8") === "true" ? true : !(localStorage.getItem("top8") === "false");
      let _0x5e0856 = localStorage.getItem("killFeed") === "true" ? true : (localStorage.getItem("killFeed") === "false", false);
      $("#toggleTop8").prop("checked", _0x58ef8a);
      $("#toggleKillFeed").prop("checked", _0x5e0856);
      $("#top8List").toggle(_0x58ef8a);
      $("#killFeed").toggle(_0x5e0856);
      if (localStorage.getItem("top8") === "true" || localStorage.getItem("top8") === "false") {
        theoKzObjects.top8 = _0x58ef8a;
        localStorage.setItem("top8", _0x58ef8a);
      }
      if (localStorage.getItem("killFeed") === "true" || localStorage.getItem("killFeed") === "false") {
        theoKzObjects.killFeed = _0x5e0856;
        localStorage.setItem("killFeed", _0x5e0856);
      }
      $("#toggleTop8").on("change", function () {
        theoKzObjects.top8 = this.checked;
        $("#top8List").toggle(this.checked);
        localStorage.setItem("top8", true);
      });
      $("#toggleKillFeed").on("change", function () {
        theoKzObjects.killFeed = this.checked;
        $("#killFeed").toggle(this.checked);
        localStorage.setItem("killFeed", false);
      });
      $("#toggleTop8").hover(function () {
        $("#tooltipTop8").fadeIn();
      }, function () {
        $("#tooltipTop8").fadeOut();
      });
      $("#toggleKillFeed").hover(function () {
        $("#tooltipKillFeed").fadeIn();
      }, function () {
        $("#tooltipKillFeed").fadeOut();
      });
      $("#teamCodeInput").on("input", function () {
        zwormData.teamCode = $(this).val();
        localStorage.setItem("teamCode", '');
        console.log("Team Code updated:", '');
      });
      $("#colorPicker").on("input", function () {
        let _0x2bded0 = $(this).val();
        localStorage.setItem("teamColor", "0xffffff");
        zwormData.teamColor = "0x" + _0x2bded0.substring(0x1);
      });
      let _0x2ac290 = localStorage.getItem("teamCode");
      if (_0x2ac290) {
        zwormData.teamCode = _0x2ac290;
        $("#teamCodeInput").val(_0x2ac290);
      }
      let _0x1e3b0a = localStorage.getItem("teamColor");
      if (_0x1e3b0a) {
        zwormData.teamColor = _0x1e3b0a;
        $("#colorPicker").val("#" + _0x1e3b0a.substring(0x2));
      }
      lxpdselectedbackground = 0x0;
      lxpdtoplist = 0xa;
      var _0x1d9dcd = $("#arkaplan");
      var _0x234226 = $("#wtrtop");
      var _0x226e9a = localStorage.getItem("wtr-background");
      if (_0x226e9a) {
        var _0x2b59a5 = parseInt(_0x226e9a);
        _0x1d9dcd.val(_0x2b59a5);
        lxpdselectedbackground = _0x2b59a5;
      }
      const _0x5cc4bd = localStorage.getItem("wtr-toplist");
      if (_0x5cc4bd) {
        const _0x3eca4f = parseInt(_0x5cc4bd);
        lxpdtoplist = _0x3eca4f;
      }
      let _0x205362 = true && true && true && !isNaN(0x23);
      if (_0x205362) {
        $("#inputReplaceSkin").val(0x23);
      } else {
        let _0x4d49d6 = $("#inputReplaceSkin").val();
        _0x205362 = '' !== _0x4d49d6 && null !== _0x4d49d6 && undefined !== _0x4d49d6 && !isNaN(_0x4d49d6);
        theoKzObjects.idReplaceSkin = _0x205362 ? _0x4d49d6 : 0x23;
      }
      ;
      _0x234226.val(lxpdtoplist);
      _0x1d9dcd.change(function (_0x428c14) {
        lxpdselectedbackground = this.value;
        var _0x727514 = obtenerImagenPorSeleccion(lxpdselectedbackground);
        if (_0x727514) {
          anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0x727514));
        }
        localStorage.setItem("wtr-background", this.value.toString());
      });
      _0x234226.change(function (_0x5a258e) {
        lxpdtoplist = this.value;
        localStorage.setItem("wtr-toplist", this.value.toString());
      });
      $("#idkopyala").click(function () {
        navigator.clipboard.writeText(lxpduserId);
      });
      _0x2ec95b.prototype.a = function () {
        _0x2ec95b.parent.prototype.a.call(this);
        if (!_0x2ec95b.Ek) {
          _0x2ec95b.Ek = true;
          var _0x2690db = window.anApp = _0x4b2f70;
          _0x2690db.u.Pi(function () {
            if (_0x2690db.u.P()) {
              _0x2840c3.html(_0x2690db.u.zi());
            } else {
              _0x2840c3.html("0");
            }
          });
        }
      };
      _0x2ec95b.Fk = $("#coins-view");
      _0x2ec95b.Gk = $("#leaders-view");
      _0x2ec95b.Hk = $("#profile-view");
      _0x2ec95b.Ik = $("#settings-view");
      _0x2ec95b.Jk = $("#login-view");
      _0x2ec95b.Kk = $("#skins-view");
      _0x2ec95b.Lk = $("#store-view");
      _0x2ec95b.wtrset = $("#wormtr-settings-view");
      _0x2ec95b.Mk = $("#wear-view");
      _0x2ec95b.Nk = $("#withdraw-consent-view");
      _0x2ec95b.Ok = $("#delete-account-view");
      _0x2ec95b.Pk = $("#please-wait-view");
      _0x2ec95b.prototype.ii = function () {
        _0xb32d72.fk.stop();
        _0xb32d72.fk.fadeOut(0xc8);
        _0xb32d72.gk.stop();
        _0xb32d72.gk.fadeOut(0xc8);
        _0xb32d72.hk.stop();
        _0xb32d72.hk.fadeOut(0xc8);
        _0xb32d72.ik.stop();
        _0xb32d72.ik.fadeIn(0xc8);
        _0xb32d72.jk.stop();
        _0xb32d72.jk.fadeOut(0xc8);
        _0xb32d72.kk.stop();
        _0xb32d72.kk.fadeOut(0xc8);
        _0xb32d72.nk.stop();
        _0xb32d72.nk.fadeIn(0xc8);
        _0xb32d72.ok.stop();
        _0xb32d72.ok.fadeIn(0xc8);
        _0x6de726.html(this.ad);
        _0x46ede4.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x2ec95b.prototype.Rk = function () {};
      _0x2ec95b.prototype.Sk = function () {
        _0x4e5748.Pk.stop();
        _0x4e5748.Pk.fadeIn(0x12c);
      };
      _0x2ec95b.prototype.Qk = function () {
        _0x4e5748.Pk.stop();
        _0x4e5748.Pk.fadeOut(0x12c);
      };
      return _0x2ec95b;
    }();
    var _0x3549b5 = function () {
      var _0x2451ee = $("#store-buy-coins_125000");
      var _0x558dcb = $("#store-buy-coins_50000");
      var _0x28662e = $("#store-buy-coins_16000");
      var _0x1e8818 = $("#store-buy-coins_7000");
      var _0xc96df = $("#store-buy-coins_3250");
      var _0x23a3ce = $("#store-buy-coins_1250");
      var _0x3057a3 = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], false);
        var _0x1edc3f = window.anApp = _0x4b2f70;
        var _0x535c00 = this;
        _0x2451ee.click(function () {
          _0x1edc3f.r.Cd();
          _0x535c00.Tk("coins_125000");
        });
        _0x558dcb.click(function () {
          _0x1edc3f.r.Cd();
          _0x535c00.Tk("coins_50000");
        });
        _0x28662e.click(function () {
          _0x1edc3f.r.Cd();
          _0x535c00.Tk("coins_16000");
        });
        _0x1e8818.click(function () {
          _0x1edc3f.r.Cd();
          _0x535c00.Tk("coins_7000");
        });
        _0xc96df.click(function () {
          _0x1edc3f.r.Cd();
          _0x535c00.Tk("coins_3250");
        });
        _0x23a3ce.click(function () {
          _0x1edc3f.r.Cd();
          _0x535c00.Tk("coins_1250");
        });
      });
      _0x3057a3.prototype.a = function () {
        _0x3057a3.parent.prototype.a.call(this);
      };
      _0x3057a3.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeIn(0xc8);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x3057a3.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Dd();
      };
      _0x3057a3.prototype.Tk = function (_0x484abe) {};
      return _0x3057a3;
    }();
    var _0x259f90 = function () {
      var _0x3be291 = $("#highscore-table");
      var _0x20abe4 = $("#leaders-button-level");
      var _0x2b372a = $("#leaders-button-highscore");
      var _0x724d7 = $("#leaders-button-kills");
      var _0x18dd9b = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
        var _0x3b7317 = window.anApp = _0x4b2f70;
        var _0xbd6e52 = this;
        this.Uk = {};
        this.Vk = {
          "Wk": {
            "Xk": _0x20abe4,
            "Yk": "byLevel"
          },
          "Zk": {
            "Xk": _0x2b372a,
            "Yk": "byHighScore"
          },
          "$k": {
            "Xk": _0x724d7,
            "Yk": "byKillsAndHeadShots"
          }
        };
        _0x20abe4.click(function () {
          _0x3b7317.r.Cd();
          _0xbd6e52._k(_0xbd6e52.Vk.Wk);
        });
        _0x2b372a.click(function () {
          _0x3b7317.r.Cd();
          _0xbd6e52._k(_0xbd6e52.Vk.Zk);
        });
        _0x724d7.click(function () {
          _0x3b7317.r.Cd();
          _0xbd6e52._k(_0xbd6e52.Vk.$k);
        });
      });
      _0x18dd9b.prototype.a = function () {
        _0x18dd9b.parent.prototype.a.call(this);
      };
      _0x18dd9b.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeIn(0xc8);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x18dd9b.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Dd();
        var _0x244b99 = this;
        this.Sk();
        $.get(_0x45412e + "/pub/leaders", function (_0x396875) {
          _0x244b99.Uk = _0x396875;
          _0x244b99._k(null != _0x244b99.al ? _0x244b99.al : _0x244b99.Vk.Wk);
          _0x244b99.Qk();
        }).done(function () {
          _0x244b99.Qk();
        });
      };
      _0x18dd9b.prototype._k = function (_0x436262) {
        this.al = _0x436262;
        for (var _0x3c7ee6 in this.Vk) if (this.Vk.hasOwnProperty(_0x3c7ee6)) {
          var _0x1bd424 = this.Vk[_0x3c7ee6];
          _0x1bd424.Xk.removeClass("pressed");
        }
        this.al.Xk.addClass("pressed");
        var _0xe82484 = this.Uk[this.al.Yk];
        var _0x12df2b = '';
        for (var _0xb0f5a4 = 0x0; _0xb0f5a4 < _0xe82484.length; _0xb0f5a4++) {
          var _0x49dd44 = _0xe82484[_0xb0f5a4];
          _0x12df2b += "<div class=\"table-row\"><span>" + (_0xb0f5a4 + 0x1) + "</span><span><img src=\"" + _0x49dd44.avatarUrl + "\"/></span><span>" + _0x49dd44.username + "</span><span>" + _0x49dd44.level + "</span><span>" + _0x49dd44.highScore + "</span><span>" + _0x49dd44.headShots + " / " + _0x49dd44.kills + "</span></div>";
        }
        _0x3be291.empty();
        _0x3be291.append(_0x12df2b);
      };
      return _0x18dd9b;
    }();
    var _0x5857d3 = function () {
      var _0x1b2078 = $("#popup-login-gg");
      var _0x58789c = $("#popup-login-fb");
      var _0x40cb24 = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.login.tab"], false);
        var _0x4b9310 = window.anApp = _0x4b2f70;
        var _0x561b5e = this;
        _0x1b2078.click(function () {
          _0x4b9310.r.Cd();
          _0x561b5e.Sk();
          _0x4b9310.u.Qi(function () {
            _0x561b5e.Qk();
          });
          setTimeout(function () {
            _0x561b5e.Qk();
          }, 0x2710);
          _0x4b9310.u.Zi();
        });
        _0x58789c.click(function () {
          _0x4b9310.r.Cd();
          _0x561b5e.Sk();
          _0x4b9310.u.Qi(function () {
            _0x561b5e.Qk();
          });
          setTimeout(function () {
            _0x561b5e.Qk();
          }, 0x2710);
          _0x4b9310.u.Vi();
        });
      });
      _0x40cb24.prototype.a = function () {
        _0x40cb24.parent.prototype.a.call(this);
      };
      _0x40cb24.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeIn(0xc8);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x40cb24.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Dd();
      };
      return _0x40cb24;
    }();
    var _0x3fec69 = function () {
      var _0x15f223 = $("#profile-avatar");
      var _0x5acced = $("#profile-username");
      var _0x2be8a0 = $("#profile-experience-bar");
      var _0x1c9110 = $("#profile-experience-val");
      var _0x507709 = $("#profile-level");
      var _0x2df4fd = $("#profile-stat-highScore");
      var _0x3bc3da = $("#profile-stat-bestSurvivalTime");
      var _0x324eb8 = $("#profile-stat-kills");
      var _0x4a5c89 = $("#profile-stat-headshots");
      var _0x392c93 = $("#profile-stat-gamesPlayed");
      var _0x49beae = $("#profile-stat-totalTimeSpent");
      var _0x375b00 = $("#profile-stat-registrationDate");
      var _0x6a018d = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.profile.tab"], true);
      });
      _0x6a018d.prototype.a = function () {
        _0x6a018d.parent.prototype.a.call(this);
      };
      _0x6a018d.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeIn(0xc8);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x6a018d.prototype.ji = function () {
        var _0x47e919 = window.anApp = _0x4b2f70;
        _0x47e919.r.Dd();
        var _0x308cf7 = _0x47e919.u.Oi();
        var _0x56ac1e = moment([_0x308cf7.year, _0x308cf7.month - 0x1, _0x308cf7.day]).format("LL");
        _0x5acced.html(_0x47e919.u.wi());
        _0x15f223.attr("src", _0x47e919.u.xi());
        _0x2be8a0.width(0x64 * _0x47e919.u.Bi() / _0x47e919.u.Ci() + "%");
        _0x1c9110.html(_0x47e919.u.Bi() + " / " + _0x47e919.u.Ci());
        _0x507709.html(_0x47e919.u.Ai());
        _0x2df4fd.html(_0x47e919.u.Ii());
        _0x3bc3da.html(_0x55ec00(_0x47e919.u.Ji()));
        _0x324eb8.html(_0x47e919.u.Ki());
        _0x4a5c89.html(_0x47e919.u.Li());
        _0x392c93.html(_0x47e919.u.Mi());
        _0x49beae.html(_0x55ec00(_0x47e919.u.Ni()));
        _0x375b00.html(_0x56ac1e);
      };
      return _0x6a018d;
    }();
    var _0x208178 = function () {
      var _0xc69dbd = $("#settings-music-enabled-switch");
      var _0x1825dd = $("#settings-sfx-enabled-switch");
      var _0x53ac57 = $("#settings-show-names-switch");
      var _0x50ea5c = $("#popup-logout");
      var _0xbd4176 = $("#popup-logout-container");
      var _0x4c9243 = $("#popup-delete-account");
      var _0x3722e6 = $("#popup-delete-account-container");
      var _0xb44c91 = $("#popup-withdraw-consent");
      var _0x51a5b7 = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.settings.tab"], false);
        var _0x222a8f = this;
        var _0x481698 = window.anApp = _0x4b2f70;
        _0xc69dbd.click(function () {
          var _0x59bb69 = !!_0xc69dbd.prop("checked");
          _0x18db74(_0x1d9d3e.Me, _0x59bb69, 0x1e);
          _0x481698.r.td(_0x59bb69);
          _0x481698.r.Cd();
        });
        _0x1825dd.click(function () {
          var _0x5336b1 = !!_0x1825dd.prop("checked");
          _0x18db74(_0x1d9d3e.Ne, _0x5336b1, 0x1e);
          _0x481698.r.rd(_0x5336b1);
          _0x481698.r.Cd();
        });
        _0x53ac57.click(function () {
          _0x481698.r.Cd();
        });
        _0x50ea5c.click(function () {
          _0x481698.r.Cd();
          _0x222a8f.Sk();
          setTimeout(function () {
            _0x222a8f.Qk();
          }, 0x7d0);
          _0x481698.u.Wi();
        });
        _0x4c9243.click(function () {
          if (_0x481698.u.P()) {
            _0x481698.r.Cd();
            _0x481698.s.I(_0x481698.s.Vh);
          } else {
            _0x481698.r.Hd();
          }
        });
        _0xb44c91.click(function () {
          if (_0x481698.Y()) {
            _0x481698.r.Cd();
            _0x481698.s.I(_0x481698.s.Uh);
          } else {
            _0x481698.r.Hd();
          }
        });
      });
      _0x51a5b7.prototype.a = function () {
        _0x51a5b7.parent.prototype.a.call(this);
        var _0x4f024d = window.anApp = _0x4b2f70;
        var _0x215459 = undefined;
        switch (_0x58776e(_0x1d9d3e.Me)) {
          case "false":
            _0x215459 = false;
            break;
          default:
            _0x215459 = true;
        }
        _0xc69dbd.prop("checked", _0x215459);
        _0x4f024d.r.td(_0x215459);
        var _0x183f53 = undefined;
        switch (_0x58776e(_0x1d9d3e.Ne)) {
          case "false":
            _0x183f53 = false;
            break;
          default:
            _0x183f53 = true;
        }
        _0x1825dd.prop("checked", _0x183f53);
        _0x4f024d.r.rd(_0x183f53);
        var _0x439d65 = undefined;
        switch (_0x58776e(_0x1d9d3e.ya)) {
          case "false":
            _0x439d65 = false;
            break;
          default:
            _0x439d65 = true;
        }
        console.log("Load sPN: " + _0x439d65);
        _0x53ac57.prop("checked", _0x439d65);
        _0x4f024d.u.V(function () {
          _0xbd4176.toggle(_0x4f024d.u.P());
          _0x3722e6.toggle(_0x4f024d.u.P());
        });
      };
      _0x51a5b7.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeIn(0xc8);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x51a5b7.prototype.ji = function () {
        var _0x1136f4 = window.anApp = _0x4b2f70;
        _0x1136f4.r.Dd();
        if (_0x1136f4.Y()) {
          _0xb44c91.show();
        } else {
          _0xb44c91.hide();
        }
      };
      _0x51a5b7.prototype.wa = function () {
        return _0x53ac57.prop("checked");
      };
      return _0x51a5b7;
    }();
    var _0x40476e = function () {
      var _0x4d7ab6 = $("#store-view-canv");
      var _0xaf4e14 = $("#skin-description-text");
      var _0x23e4b6 = $("#skin-group-description-text");
      var _0x37f358 = $("#store-locked-bar");
      var _0x56f654 = $("#store-locked-bar-text");
      var _0xb94603 = $("#store-buy-button");
      var _0x3b61a0 = $("#store-item-price");
      var _0x37eda2 = $("#store-groups");
      var _0x571f58 = $("#store-view-prev");
      var _0x30a67f = $("#store-view-next");
      var _0x4e2521 = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.skins.tab"], true);
        var _0x76f07e = this;
        var _0x12a8a9 = window.anApp = _0x4b2f70;
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x3bc9c5(_0x4d7ab6);
        _0xb94603.click(function () {
          _0x12a8a9.r.Cd();
          _0x76f07e.fl();
        });
        _0x571f58.click(function () {
          _0x12a8a9.r.Cd();
          _0x76f07e.bl.gl();
        });
        _0x30a67f.click(function () {
          _0x12a8a9.r.Cd();
          _0x76f07e.bl.hl();
        });
      });
      _0x4e2521.prototype.a = function () {
        _0x4e2521.parent.prototype.a.call(this);
        var _0x286b0e = this;
        var _0x14a33d = window.anApp = _0x4b2f70;
        _0x14a33d.p.ca(function () {
          var _0x67b347 = _0x14a33d.p.Ac();
          if (null != _0x67b347) {
            _0x286b0e.cl = [];
            for (var _0x2ae064 = 0x0; _0x2ae064 < _0x67b347.skinGroupArrayDict.length; _0x2ae064++) {
              _0x286b0e.cl.push(new _0x2f69a5(_0x286b0e, _0x67b347.skinGroupArrayDict[_0x2ae064]));
            }
            _0x286b0e.dl = {};
            for (var _0x2df0f4 = 0x0; _0x2df0f4 < _0x67b347.skinArrayDict.length; _0x2df0f4++) {
              var _0x2171b4 = _0x67b347.skinArrayDict[_0x2df0f4];
              _0x286b0e.dl[_0x2171b4.id] = _0x2171b4;
            }
          }
        });
        this.il(false);
        _0x14a33d.t.xh(function () {
          _0x286b0e.il(false);
        });
      };
      _0x4e2521.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeIn(0xc8);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x4e2521.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0x4e2521.prototype.ei = function () {
        this.el.Le(false);
      };
      _0x4e2521.prototype.Ra = function () {
        this.el.Ra();
      };
      _0x4e2521.prototype.Pa = function (_0x3354c7, _0xf0ca55) {
        this.el.Pa();
      };
      _0x4e2521.prototype.jl = function () {
        var _0x2a1a90 = this;
        var _0x316f31 = this;
        var _0x1758a4 = window.anApp = _0x4b2f70;
        _0x37eda2.empty();
        for (var _0x13ea2f = 0x0; _0x13ea2f < this.cl.length; _0x13ea2f++) {
          !function (_0xf1fbc9) {
            var _0x46c305 = _0x2a1a90.cl[_0xf1fbc9];
            var _0x552bdd = document.createElement("li");
            _0x37eda2.append(_0x552bdd);
            var _0x76139e = $(_0x552bdd);
            _0x76139e.html(_0x46c305.kl());
            _0x76139e.click(function () {
              _0x1758a4.r.Cd();
              _0x316f31.ll(_0x46c305);
            });
            _0x46c305.ml = _0x76139e;
          }(_0x13ea2f);
        }
        if (this.cl.length > 0x0) {
          var _0x5bbe87 = _0x1758a4.t.ha(_0xbcb633.ia);
          for (var _0x13ea2f = 0x0; _0x13ea2f < this.cl.length; _0x13ea2f++) {
            var _0x125043 = this.cl[_0x13ea2f];
            var _0x52e7b5 = _0x125043.nl.list;
            for (var _0x3bd2f0 = 0x0; _0x3bd2f0 < _0x52e7b5.length; _0x3bd2f0++) {
              if (_0x52e7b5[_0x3bd2f0] == _0x5bbe87) {
                _0x125043.ol = _0x3bd2f0;
                return void this.ll(_0x125043);
              }
            }
          }
          this.ll(this.cl[0x0]);
        }
      };
      _0x4e2521.prototype.ll = function (_0x23089a) {
        if (this.bl != _0x23089a) {
          var _0x3d3f7d = window.anApp = _0x4b2f70;
          this.bl = _0x23089a;
          _0x37eda2.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0x23e4b6.html('');
          if (null != _0x23089a.nl) {
            var _0x5c8bb3 = _0x3d3f7d.p.Ac().textDict[_0x23089a.nl.description];
            if (null != _0x5c8bb3) {
              _0x23e4b6.html((_0x5c8bb3[_0x147424] ? _0x5c8bb3[_0x147424] : _0x5c8bb3.en ? _0x5c8bb3.en : _0x5c8bb3.x).includes("href") ? (_0x5c8bb3[_0x147424] ? _0x5c8bb3[_0x147424] : _0x5c8bb3.en ? _0x5c8bb3.en : _0x5c8bb3.x).replaceAll("href", "target=\"_black\" href") : _0x5c8bb3[_0x147424] ? _0x5c8bb3[_0x147424] : _0x5c8bb3.en ? _0x5c8bb3.en : _0x5c8bb3.x);
            }
          }
          this.il(true);
        }
      };
      _0x4e2521.prototype.pl = function () {
        return null == this.bl ? _0x5ebe3a.Yg() : this.bl.ql();
      };
      _0x4e2521.prototype.fl = function () {
        var _0x2ab978 = this;
        this.pl().ah(function (_0x1fa0c6) {
          _0x2ab978.rl(_0x1fa0c6);
        });
      };
      _0x4e2521.prototype.rl = function (_0x27d8a5) {
        var _0x266584 = this;
        var _0x36b1c1 = window.anApp = _0x4b2f70;
        var _0x23ae26 = this.dl[_0x27d8a5].price;
        if (!(_0x36b1c1.u.zi() < _0x23ae26)) {
          this.Sk();
          var _0x57c265 = _0x36b1c1.t.ha(_0xbcb633.ia);
          var _0x31aab1 = _0x36b1c1.t.ha(_0xbcb633.ja);
          var _0x28a248 = _0x36b1c1.t.ha(_0xbcb633.ka);
          var _0x1ef25f = _0x36b1c1.t.ha(_0xbcb633.la);
          var _0x487db3 = _0x36b1c1.t.ha(_0xbcb633.ma);
          _0x36b1c1.u.Ui(_0x27d8a5, _0xbcb633.ia, function () {
            _0x36b1c1.t.Bh(_0x57c265, _0xbcb633.ia);
            _0x36b1c1.t.Bh(_0x31aab1, _0xbcb633.ja);
            _0x36b1c1.t.Bh(_0x28a248, _0xbcb633.ka);
            _0x36b1c1.t.Bh(_0x1ef25f, _0xbcb633.la);
            _0x36b1c1.t.Bh(_0x487db3, _0xbcb633.ma);
            if (_0x36b1c1.u.Ch(_0x27d8a5, _0xbcb633.ia)) {
              _0x36b1c1.t.Bh(_0x27d8a5, _0xbcb633.ia);
            }
            _0x266584.Qk();
          });
        }
      };
      _0x4e2521.prototype.il = function (_0x138a41) {
        var _0x1e48a4 = window.anApp = _0x4b2f70;
        this.el.bk(_0x1e48a4.t.ha(_0xbcb633.ja), false, false);
        this.el.ck(_0x1e48a4.t.ha(_0xbcb633.ka), false, false);
        this.el.dk(_0x1e48a4.t.ha(_0xbcb633.la), false, false);
        this.el.ek(_0x1e48a4.t.ha(_0xbcb633.ma), false, false);
        var _0x400139 = this.pl();
        if (_0x400139._g()) {
          var _0x26b7c5 = _0x400139.$g();
          var _0x2a78af = this.dl[_0x26b7c5];
          var _0x4ad3fe = false;
          if (_0x1e48a4.t.Ja(_0x26b7c5, _0xbcb633.ia)) {
            _0x37f358.hide();
            _0xb94603.hide();
          } else {
            if (null == _0x2a78af || 0x1 == _0x2a78af.nonbuyable) {
              _0x4ad3fe = true;
              _0x37f358.show();
              _0xb94603.hide();
              _0x56f654.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (null != _0x2a78af && _0x2a78af.nonbuyable && null != _0x2a78af.nonbuyableCause) {
                var _0x10bd6f = _0x1e48a4.p.Ac().textDict[_0x2a78af.nonbuyableCause];
                if (null != _0x10bd6f) {
                  _0x56f654.text(_0x10bd6f[_0x147424] ? _0x10bd6f[_0x147424] : _0x10bd6f.en ? _0x10bd6f.en : _0x10bd6f.x);
                }
              }
            } else {
              _0x37f358.hide();
              _0xb94603.show();
              _0x3b61a0.html(_0x2a78af.price);
            }
          }
          _0xaf4e14.html("ID: " + _0x26b7c5 + " TYPE: " + _0xbcb633.ia);
          if (null != _0x2a78af && null != _0x2a78af.description) {
            var _0xcf1425 = _0x1e48a4.p.Ac().textDict[_0x2a78af.description];
            if (null != _0xcf1425) {
              _0xaf4e14.html((_0xcf1425[_0x147424] ? _0xcf1425[_0x147424] : _0xcf1425.en ? _0xcf1425.en : _0xcf1425.x).includes("href") ? (_0xcf1425[_0x147424] ? _0xcf1425[_0x147424] : _0xcf1425.en ? _0xcf1425.en : _0xcf1425.x).replaceAll("href", "target=\"_black\" href") : _0xcf1425[_0x147424] ? _0xcf1425[_0x147424] : _0xcf1425.en ? _0xcf1425.en : _0xcf1425.x);
            }
          }
          this.el.ak(_0x26b7c5, true, _0x4ad3fe);
          if (_0x138a41) {
            _0x1e48a4.t.Bh(_0x26b7c5, _0xbcb633.ia);
          }
        }
      };
      var _0x2f69a5 = function () {
        function _0x33fd7c(_0x4cad59, _0xac0712) {
          this.sl = _0x4cad59;
          this.ol = 0x0;
          this.nl = _0xac0712;
        }
        _0x33fd7c.prototype.gl = function () {
          if (--this.ol < 0x0) {
            this.ol = this.nl.list.length - 0x1;
          }
          this.sl.il(true);
        };
        _0x33fd7c.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0x0;
          }
          this.sl.il(true);
        };
        _0x33fd7c.prototype.kl = function () {
          let _0x4a265d = this.nl.name[_0x147424] ? this.nl.name[_0x147424] : this.nl.name.en ? this.nl.name.en : this.nl.name.x;
          console.log(this.nl);
          if (this.nl.img) {
            _0x4a265d = "<img src=\"" + this.nl.img + "\" height=\"43\" width=\"180\" />";
          }
          return _0x4a265d;
        };
        _0x33fd7c.prototype.ql = function () {
          return this.ol >= this.nl.list.length ? _0x5ebe3a.Yg() : _0x5ebe3a.Zg(this.nl.list[this.ol]);
        };
        return _0x33fd7c;
      }();
      return _0x4e2521;
    }();
    var _0x100836 = function () {
      var _0x5969bd = $("#store-go-coins-button");
      var _0x3e0439 = $("#store-go-skins-button");
      var _0x573fd9 = $("#store-go-wear-button");
      var _0x1005c8 = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], true);
        var _0x28a19b = window.anApp = _0x4b2f70;
        _0x5969bd.click(function () {
          _0x28a19b.r.Cd();
          _0x28a19b.s.I(_0x28a19b.s.Wh);
        });
        _0x3e0439.click(function () {
          _0x28a19b.r.Cd();
          _0x28a19b.s.I(_0x28a19b.s.$h);
        });
        _0x573fd9.click(function () {
          _0x28a19b.r.Cd();
          _0x28a19b.s.I(_0x28a19b.s.ai);
        });
      });
      _0x1005c8.prototype.a = function () {
        _0x1005c8.parent.prototype.a.call(this);
      };
      _0x1005c8.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeIn(0xc8);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x1005c8.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Dd();
      };
      return _0x1005c8;
    }();
    var _0x4009e9 = function () {
      var _0x28de5b = $("#settings-kufur-isim");
      var _0x354dd4 = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, "ZWORM SETTINGS", 0x0);
        lxpdsettingsblockbadwords = !!(localStorage.getItem("wtr-block-bad-words") === "true");
        _0x28de5b.prop("checked", lxpdsettingsblockbadwords);
        _0x28de5b.click(function () {
          let _0x413ba6 = _0x28de5b.prop("checked");
          lxpdsettingsblockbadwords = _0x413ba6;
          localStorage.setItem("wtr-block-bad-words", _0x413ba6 ? "true" : "false");
        });
      });
      _0x354dd4.prototype.a = function () {
        _0x354dd4.parent.prototype.a.call(this);
      };
      _0x354dd4.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeIn(0xc8);
      };
      _0x354dd4.prototype.ji = function () {
        var _0x499cd9 = window.anApp = _0x4b2f70;
        _0x499cd9.r.Dd();
      };
      return _0x354dd4;
    }();
    var _0x98418e = function () {
      var _0x2d5a18 = $("#wear-view-canv");
      var _0x222705 = $("#wear-description-text");
      var _0x3405f5 = $("#wear-locked-bar");
      var _0x4a6842 = $("#wear-locked-bar-text");
      var _0x4657cd = $("#wear-buy-button");
      var _0x3e1a8d = $("#wear-item-price");
      var _0x52667e = $("#wear-eyes-button");
      var _0x166f17 = $("#wear-mouths-button");
      var _0x549605 = $("#wear-glasses-button");
      var _0x62848f = $("#wear-hats-button");
      var _0x5ccf6f = $("#wear-tint-chooser");
      var _0x5d203 = $("#wear-view-prev");
      var _0x3aab2e = $("#wear-view-next");
      var _0x73f342 = _0x15a67e(_0x4e5748, function () {
        var _0x11377a = this;
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.wear.tab"], true);
        var _0x1fed93 = window.anApp = _0x4b2f70;
        var _0x4569f1 = this;
        this.tl = [];
        this.ja = new _0x3177dd(this, _0xbcb633.ja, _0x52667e);
        this.ka = new _0x3177dd(this, _0xbcb633.ka, _0x166f17);
        this.la = new _0x3177dd(this, _0xbcb633.la, _0x549605);
        this.ma = new _0x3177dd(this, _0xbcb633.ma, _0x62848f);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x3bc9c5(_0x2d5a18);
        _0x4657cd.click(function () {
          _0x1fed93.r.Cd();
          _0x4569f1.Bl();
        });
        _0x5d203.click(function () {
          _0x1fed93.r.Cd();
          _0x4569f1.ul.Cl();
        });
        _0x3aab2e.click(function () {
          _0x1fed93.r.Cd();
          _0x4569f1.ul.Dl();
        });
        _0x52667e.click(function () {
          _0x1fed93.r.Cd();
          _0x4569f1.El(_0x11377a.ja);
        });
        _0x166f17.click(function () {
          _0x1fed93.r.Cd();
          _0x4569f1.El(_0x11377a.ka);
        });
        _0x549605.click(function () {
          _0x1fed93.r.Cd();
          _0x4569f1.El(_0x11377a.la);
        });
        _0x62848f.click(function () {
          _0x1fed93.r.Cd();
          _0x4569f1.El(_0x11377a.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x73f342.prototype.a = function () {
        _0x73f342.parent.prototype.a.call(this);
        var _0x3793ed = window.anApp = _0x4b2f70;
        var _0x264ccc = this;
        _0x3793ed.p.ca(function () {
          var _0x359b37 = _0x3793ed.p.Ac();
          if (null != _0x359b37) {
            _0x264ccc.vl = _0x359b37.eyesDict;
            _0x264ccc.wl = _0x359b37.mouthDict;
            _0x264ccc.xl = _0x359b37.glassesDict;
            _0x264ccc.yl = _0x359b37.hatDict;
            _0x264ccc.zl = _0x359b37.colorDict;
            _0x264ccc.ja.Fl(_0x359b37.eyesVariantArray);
            _0x264ccc.ja.Gl(_0x264ccc.vl);
            _0x264ccc.ka.Fl(_0x359b37.mouthVariantArray);
            _0x264ccc.ka.Gl(_0x264ccc.wl);
            _0x264ccc.la.Fl(_0x359b37.glassesVariantArray);
            _0x264ccc.la.Gl(_0x264ccc.xl);
            _0x264ccc.ma.Fl(_0x359b37.hatVariantArray);
            _0x264ccc.ma.Gl(_0x264ccc.yl);
          }
        });
        this.il(false);
        _0x3793ed.t.xh(function () {
          _0x264ccc.il(false);
        });
      };
      _0x73f342.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeIn(0xc8);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x73f342.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Dd();
        this.El(null != this.ul ? this.ul : this.ja);
        this.Al.Le(true);
      };
      _0x73f342.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x73f342.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x73f342.prototype.Pa = function (_0xb5639d, _0x12b5ea) {
        this.Al.Pa();
      };
      _0x73f342.prototype.El = function (_0x18d43a) {
        this.ul = _0x18d43a;
        for (var _0x1ced74 = 0x0; _0x1ced74 < this.tl.length; _0x1ced74++) {
          this.tl[_0x1ced74].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      _0x73f342.prototype.Hl = function () {
        return null == this.ul ? _0x5ebe3a.Yg() : _0x5ebe3a.Zg({
          "Lb": this.ul.ql(),
          "rc": this.ul.rc
        });
      };
      _0x73f342.prototype.Bl = function () {
        var _0x5a33e4 = this;
        this.Hl().ah(function (_0xf01a3d) {
          _0x5a33e4.Ui(_0xf01a3d.Lb, _0xf01a3d.rc);
        });
      };
      _0x73f342.prototype.Ui = function (_0x175b11, _0x423710) {
        var _0x4bab3f = this;
        var _0x4a5444 = window.anApp = _0x4b2f70;
        var _0x283d1c = undefined;
        switch (_0x423710) {
          case _0xbcb633.ja:
            _0x283d1c = this.vl[_0x175b11].price;
            break;
          case _0xbcb633.ka:
            _0x283d1c = this.wl[_0x175b11].price;
            break;
          case _0xbcb633.la:
            _0x283d1c = this.xl[_0x175b11].price;
            break;
          case _0xbcb633.ma:
            _0x283d1c = this.yl[_0x175b11].price;
            break;
          default:
            return;
        }
        if (!(_0x4a5444.u.zi() < _0x283d1c)) {
          this.Sk();
          var _0x4093e7 = _0x4a5444.t.ha(_0xbcb633.ia);
          var _0x2f075c = _0x4a5444.t.ha(_0xbcb633.ja);
          var _0x1099b8 = _0x4a5444.t.ha(_0xbcb633.ka);
          var _0x5a624e = _0x4a5444.t.ha(_0xbcb633.la);
          var _0x1a0324 = _0x4a5444.t.ha(_0xbcb633.ma);
          _0x4a5444.u.Ui(_0x175b11, _0x423710, function () {
            _0x4a5444.t.Bh(_0x4093e7, _0xbcb633.ia);
            _0x4a5444.t.Bh(_0x2f075c, _0xbcb633.ja);
            _0x4a5444.t.Bh(_0x1099b8, _0xbcb633.ka);
            _0x4a5444.t.Bh(_0x5a624e, _0xbcb633.la);
            _0x4a5444.t.Bh(_0x1a0324, _0xbcb633.ma);
            if (_0x4a5444.u.Ch(_0x175b11, _0x423710)) {
              _0x4a5444.t.Bh(_0x175b11, _0x423710);
            }
            _0x4bab3f.Qk();
          });
        }
      };
      _0x73f342.prototype.Il = function (_0x2b638f, _0x5a1884) {
        switch (_0x5a1884) {
          case _0xbcb633.ja:
            return this.vl[_0x2b638f];
          case _0xbcb633.ka:
            return this.wl[_0x2b638f];
          case _0xbcb633.la:
            return this.xl[_0x2b638f];
          case _0xbcb633.ma:
            return this.yl[_0x2b638f];
        }
        return null;
      };
      _0x73f342.prototype.il = function (_0x14e2b4) {
        var _0x5d6518 = window.anApp = _0x4b2f70;
        this.Al.ak(_0x5d6518.t.ha(_0xbcb633.ia), false, false);
        this.Al.bk(_0x5d6518.t.ha(_0xbcb633.ja), false, false);
        this.Al.ck(_0x5d6518.t.ha(_0xbcb633.ka), false, false);
        this.Al.dk(_0x5d6518.t.ha(_0xbcb633.la), false, false);
        this.Al.ek(_0x5d6518.t.ha(_0xbcb633.ma), false, false);
        var _0x1004f1 = this.Hl();
        if (_0x1004f1._g()) {
          var _0x46b5ee = _0x1004f1.$g();
          var _0x304ef2 = this.Il(_0x46b5ee.Lb, _0x46b5ee.rc);
          var _0x3f9f5c = false;
          if (_0x5d6518.t.Ja(_0x46b5ee.Lb, _0x46b5ee.rc)) {
            _0x3405f5.hide();
            _0x4657cd.hide();
          } else {
            if (null == _0x304ef2 || 0x1 == _0x304ef2.nonbuyable) {
              _0x3f9f5c = true;
              _0x3405f5.show();
              _0x4657cd.hide();
              _0x4a6842.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (null != _0x304ef2 && _0x304ef2.nonbuyable && null != _0x304ef2.nonbuyableCause) {
                var _0x15797d = _0x5d6518.p.Ac().textDict[_0x304ef2.nonbuyableCause];
                if (null != _0x15797d) {
                  _0x4a6842.text(_0x15797d[_0x147424] ? _0x15797d[_0x147424] : _0x15797d.en ? _0x15797d.en : _0x15797d.x);
                }
              }
            } else {
              _0x3405f5.hide();
              _0x4657cd.show();
              _0x3e1a8d.html(_0x304ef2.price);
            }
          }
          _0x222705.html("ID: " + _0x46b5ee.Lb);
          if (null != _0x304ef2 && null != _0x304ef2.description) {
            var _0x5aceec = _0x5d6518.p.Ac().textDict[_0x304ef2.description];
            if (null != _0x5aceec) {
              _0x222705.html((_0x5aceec[_0x147424] ? _0x5aceec[_0x147424] : _0x5aceec.en ? _0x5aceec.en : _0x5aceec.x).includes("href") ? (_0x5aceec[_0x147424] ? _0x5aceec[_0x147424] : _0x5aceec.en ? _0x5aceec.en : _0x5aceec.x).replaceAll("href", "target=\"_black\" href") : _0x5aceec[_0x147424] ? _0x5aceec[_0x147424] : _0x5aceec.en ? _0x5aceec.en : _0x5aceec.x);
            }
          }
          switch (_0x46b5ee.rc) {
            case _0xbcb633.ja:
              this.Al.bk(_0x46b5ee.Lb, true, _0x3f9f5c);
              break;
            case _0xbcb633.ka:
              this.Al.ck(_0x46b5ee.Lb, true, _0x3f9f5c);
              break;
            case _0xbcb633.la:
              this.Al.dk(_0x46b5ee.Lb, true, _0x3f9f5c);
              break;
            case _0xbcb633.ma:
              this.Al.ek(_0x46b5ee.Lb, true, _0x3f9f5c);
              break;
          }
          if (_0x14e2b4) {
            _0x5d6518.t.Bh(_0x46b5ee.Lb, _0x46b5ee.rc);
          }
        }
      };
      var _0x3177dd = function () {
        function _0x1a0a1c(_0x15e2ef, _0x16d4eb, _0x5b8741) {
          this.sl = _0x15e2ef;
          this.rc = _0x16d4eb;
          this.Xk = _0x5b8741;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -0xa;
          this.Ml = -0xa;
        }
        _0x1a0a1c.prototype.Fl = function (_0x3a3989) {
          this.Kl = _0x3a3989;
        };
        _0x1a0a1c.prototype.Gl = function (_0x5aa5b3) {
          this.Jl = _0x5aa5b3;
        };
        _0x1a0a1c.prototype.ii = function () {
          var _0x546004 = window.anApp = _0x4b2f70;
          var _0x1ca1f4 = _0x546004.t.ha(this.rc);
          for (var _0x1a3adf = 0x0; _0x1a3adf < this.Kl.length; _0x1a3adf++) {
            for (var _0x6c651f = 0x0; _0x6c651f < this.Kl[_0x1a3adf].length; _0x6c651f++) {
              if (this.Kl[_0x1a3adf][_0x6c651f] == _0x1ca1f4) {
                this.Nl(_0x1a3adf);
                return void this.Ol(_0x6c651f);
              }
            }
          }
          this.Nl(0x0);
          this.Ol(0x0);
        };
        _0x1a0a1c.prototype.Cl = function () {
          var _0x118743 = this.Ll - 0x1;
          if (_0x118743 < 0x0) {
            _0x118743 = this.Kl.length - 0x1;
          }
          this.Nl(_0x118743);
          this.Ol(this.Ml % this.Kl[_0x118743].length);
        };
        _0x1a0a1c.prototype.Dl = function () {
          var _0x2bac1b = this.Ll + 0x1;
          if (_0x2bac1b >= this.Kl.length) {
            _0x2bac1b = 0x0;
          }
          this.Nl(_0x2bac1b);
          this.Ol(this.Ml % this.Kl[_0x2bac1b].length);
        };
        _0x1a0a1c.prototype.Nl = function (_0x2c65c7) {
          var _0x1994df = this;
          if (!(_0x2c65c7 < 0x0 || _0x2c65c7 >= this.Kl.length)) {
            this.Ll = _0x2c65c7;
            _0x5ccf6f.empty();
            var _0x19b335 = this.Kl[this.Ll];
            if (_0x19b335.length > 0x1) {
              for (var _0x53b8d7 = 0x0; _0x53b8d7 < _0x19b335.length; _0x53b8d7++) {
                !function (_0x21b90c) {
                  var _0x3c9de3 = _0x19b335[_0x21b90c];
                  var _0x2af889 = _0x1994df.Jl[_0x3c9de3];
                  var _0xc8f1bd = "#" + _0x1994df.sl.zl[_0x2af889.prime];
                  var _0xea36a1 = $("<div style=\"border-color:" + _0xc8f1bd + "\"></div>");
                  _0xea36a1.click(function () {
                    (window.anApp = _0x4b2f70).r.Cd();
                    _0x1994df.Ol(_0x21b90c);
                  });
                  _0x5ccf6f.append(_0xea36a1);
                }(_0x53b8d7);
              }
            }
          }
        };
        _0x1a0a1c.prototype.Ol = function (_0x2c5b2d) {
          if (!(_0x2c5b2d < 0x0 || _0x2c5b2d >= this.Kl[this.Ll].length)) {
            this.Ml = _0x2c5b2d;
            _0x5ccf6f.children().css("background-color", "transparent");
            var _0x1857c3 = _0x5ccf6f.children(":nth-child(" + (0x1 + _0x2c5b2d) + ")");
            _0x1857c3.css("background-color", _0x1857c3.css("border-color"));
            this.sl.il(true);
          }
        };
        _0x1a0a1c.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0x1a0a1c;
      }();
      return _0x73f342;
    }();
    var _0x29d1e3 = function () {
      var _0x491be7 = $("#withdraw-consent-yes");
      var _0x167346 = $("#withdraw-consent-no");
      var _0x279736 = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], false);
        var _0x3228fc = window.anApp = _0x4b2f70;
        _0x491be7.click(function () {
          _0x3228fc.r.Cd();
          if (_0x3228fc.Y()) {
            _0x3228fc.s.I(_0x3228fc.s.F);
            _0x3228fc.$(false, true);
            _0x3228fc.s.aa._(new _0x4eebd8());
          } else {
            _0x3228fc.s.gi();
          }
        });
        _0x167346.click(function () {
          _0x3228fc.r.Cd();
          _0x3228fc.s.gi();
        });
      });
      _0x279736.prototype.a = function () {
        _0x279736.parent.prototype.a.call(this);
      };
      _0x279736.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeIn(0xc8);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeOut(0x32);
      };
      _0x279736.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Dd();
      };
      return _0x279736;
    }();
    var _0x4a426a = function () {
      var _0x11ac81 = $("#delete-account-timer");
      var _0x19f514 = $("#delete-account-yes");
      var _0x24e9d3 = $("#delete-account-no");
      var _0x48bdf2 = _0x15a67e(_0x4e5748, function () {
        _0x4e5748.call(this, window.I18N_MESSAGES["index.game.popup.menu.delete.tab"], false);
        var _0x154f46 = window.anApp = _0x4b2f70;
        _0x19f514.click(function () {
          _0x154f46.r.Cd();
          if (_0x154f46.u.P()) {
            _0x154f46.u.bj();
            _0x154f46.u.Wi();
          } else {
            _0x154f46.s.gi();
          }
        });
        _0x24e9d3.click(function () {
          _0x154f46.r.Cd();
          _0x154f46.s.gi();
        });
        this.Pl = [];
      });
      _0x48bdf2.prototype.a = function () {
        _0x48bdf2.parent.prototype.a.call(this);
      };
      _0x48bdf2.prototype.Rk = function () {
        _0x4e5748.Fk.stop();
        _0x4e5748.Fk.fadeOut(0x32);
        _0x4e5748.Gk.stop();
        _0x4e5748.Gk.fadeOut(0x32);
        _0x4e5748.Hk.stop();
        _0x4e5748.Hk.fadeOut(0x32);
        _0x4e5748.Jk.stop();
        _0x4e5748.Jk.fadeOut(0x32);
        _0x4e5748.Ik.stop();
        _0x4e5748.Ik.fadeOut(0x32);
        _0x4e5748.Kk.stop();
        _0x4e5748.Kk.fadeOut(0x32);
        _0x4e5748.Lk.stop();
        _0x4e5748.Lk.fadeOut(0x32);
        _0x4e5748.Mk.stop();
        _0x4e5748.Mk.fadeOut(0x32);
        _0x4e5748.wtrset.stop();
        _0x4e5748.wtrset.fadeOut(0x32);
        _0x4e5748.Nk.stop();
        _0x4e5748.Nk.fadeOut(0x32);
        _0x4e5748.Ok.stop();
        _0x4e5748.Ok.fadeIn(0xc8);
      };
      _0x48bdf2.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Hd();
        _0x19f514.stop();
        _0x19f514.hide();
        _0x11ac81.stop();
        _0x11ac81.show();
        _0x11ac81.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x11ac81.text(".. 9 ..");
        }, 0x3e8);
        this.Rl(function () {
          _0x11ac81.text(".. 8 ..");
        }, 0x7d0);
        this.Rl(function () {
          _0x11ac81.text(".. 7 ..");
        }, 0xbb8);
        this.Rl(function () {
          _0x11ac81.text(".. 6 ..");
        }, 0xfa0);
        this.Rl(function () {
          _0x11ac81.text(".. 5 ..");
        }, 0x1388);
        this.Rl(function () {
          _0x11ac81.text(".. 4 ..");
        }, 0x1770);
        this.Rl(function () {
          _0x11ac81.text(".. 3 ..");
        }, 0x1b58);
        this.Rl(function () {
          _0x11ac81.text(".. 2 ..");
        }, 0x1f40);
        this.Rl(function () {
          _0x11ac81.text(".. 1 ..");
        }, 0x2328);
        this.Rl(function () {
          _0x11ac81.hide();
          _0x19f514.fadeIn(0x12c);
        }, 0x2710);
      };
      _0x48bdf2.prototype.Rl = function (_0x1f8283, _0x40bbea) {
        var _0x2da06f = setTimeout(_0x1f8283, _0x40bbea);
        this.Pl.push(_0x2da06f);
      };
      _0x48bdf2.prototype.Ql = function () {
        for (var _0x69ee5a = 0x0; _0x69ee5a < this.Pl.length; _0x69ee5a++) {
          clearTimeout(this.Pl[_0x69ee5a]);
        }
        this.Pl = [];
      };
      return _0x48bdf2;
    }();
    var _0x343177 = function () {
      function _0x5ab84e() {
        this.Ck = function () {};
      }
      _0x5ab84e.prototype.Bk = function () {};
      _0x5ab84e.prototype.ji = function () {};
      return _0x5ab84e;
    }();
    var _0xa38c0d = function () {
      var _0x257076 = _0x15a67e(_0x343177, function (_0x4905b8) {
        _0x343177.call(this);
        var _0x2ca14f = Date.now() + "_" + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0x2ca14f + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x4905b8 + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
        var _0x501a0d = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          (window.anApp = _0x4b2f70).r.Cd();
          _0x501a0d.Ck();
        });
      });
      _0x257076.prototype.Bk = function () {
        return this.Sl;
      };
      _0x257076.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Fd();
      };
      return _0x257076;
    }();
    var _0xb18b73 = function () {
      var _0x23e9de = _0x15a67e(_0x343177, function (_0x32844f) {
        _0x343177.call(this);
        var _0x3b1f53 = Date.now() + "_" + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0x3b1f53 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x32844f + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES["index.game.toaster.levelup"] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
        var _0x273dcf = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          (window.anApp = _0x4b2f70).r.Cd();
          _0x273dcf.Ck();
        });
      });
      _0x23e9de.prototype.Bk = function () {
        return this.Sl;
      };
      _0x23e9de.prototype.ji = function () {
        (window.anApp = _0x4b2f70).r.Ed();
      };
      return _0x23e9de;
    }();
    var _0x4eebd8 = function () {
      var _0x5946b4 = _0x15a67e(_0x343177, function () {
        _0x343177.call(this);
        var _0x90d209 = this;
        var _0x3254e4 = window.anApp = _0x4b2f70;
        var _0xc39a91 = Date.now() + "_" + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0xc39a91 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + "/images/linelogo-xmas2022.png" + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          _0x3254e4.r.Cd();
          if (_0x3254e4.Y()) {
            _0x3254e4.$(true, true);
          }
          _0x90d209.Ck();
        });
      });
      _0x5946b4.prototype.Bk = function () {
        return this.Sl;
      };
      _0x5946b4.prototype.ji = function () {
        var _0x59e110 = this;
        var _0x40852f = window.anApp = _0x4b2f70;
        if (_0x40852f.Y() && !_0x40852f.Z()) {
          _0x40852f.r.Hd();
          setTimeout(function () {
            _0x59e110.Tl.fadeIn(0x12c);
          }, 0x7d0);
        } else {
          setTimeout(function () {
            _0x59e110.Ck();
          }, 0x0);
        }
      };
      return _0x5946b4;
    }();
    var _0x84a900 = {
      main: {
        "Ma": _0x454082("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
        "K": _0x454082("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
        "ra": _0x9153e9(),
        "e": 0x4,
        "oa": false,
        "qk": true
      },
      miniclip: {
        "Ma": _0x454082("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
        "K": _0x454082("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
        "ra": _0x9153e9(),
        "e": 0x4,
        "oa": false,
        "qk": false
      }
    };
    var _0x26b544 = _0x84a900[window.ENV];
    if (!_0x26b544) {
      _0x26b544 = _0x84a900.main;
    }
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x4ecaef) {
      _0x4ecaef.preventDefault();
      _0x4ecaef.stopPropagation();
      return false;
    });
    _0x4cdadb("//connect.facebook.net/" + _0x1d6456 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        "appId": atob("ODYxOTI2ODUwNjE5MDUx"),
        "cookie": true,
        "xfbml": true,
        "status": true,
        "version": "v8.0"
      });
    });
    _0x4cdadb("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          "client_id": atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
        });
      });
    });
    _0x4b2f70 = _0x3c4b65();
    _0x4b2f70.v();
    $("#mm-menu-cont").css("display", "block");
    theoKzObjects.loading = true;
    var _0xe7b4b5 = obtenerImagenPorSeleccion(localStorage.getItem("wtr-background"));
    if (_0xe7b4b5) {
      anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0xe7b4b5));
      console.log("Fondo cargado desde almacenamiento:", _0xe7b4b5);
    }
    var _0xf7db78 = function (_0x1c64ed) {
      if (theoKzObjects.PropertyManager) {
        _0x1c64ed.skinId = theoKzObjects.PropertyManager.rh;
        _0x1c64ed.eyesId = theoKzObjects.PropertyManager.sh;
        _0x1c64ed.mouthId = theoKzObjects.PropertyManager.th;
        _0x1c64ed.glassesId = theoKzObjects.PropertyManager.uh;
        _0x1c64ed.hatId = theoKzObjects.PropertyManager.vh;
      }
    };
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        if (this >= 0xf4240) {
          return (this / 0xf4240).toFixed(0x1) + "M🧁";
        } else {
          return this >= 0x186a0 ? (this / 0x3e8).toFixed(0x0) + "k🍬" : this.dotFormat();
        }
      };
    }
    var _0xc77f10 = function _0x53e886() {
      requestAnimationFrame(_0x53e886);
      (window.anApp = _0x4b2f70).Pa();
    };
    _0xc77f10();
    var _0x7d98d4 = function () {
      var _0x3385f3 = _0x5aefa1.width();
      var _0x3dfe2f = _0x5aefa1.height();
      var _0x2a2423 = _0x353509.outerWidth();
      var _0x1625c9 = _0x353509.outerHeight();
      var _0x29b94b = _0x7f4f17.outerHeight();
      var _0x361d06 = _0x3c6837.outerHeight();
      var _0x25e7ed = Math.min(0x1, Math.min((_0x3dfe2f - _0x361d06 - _0x29b94b) / _0x1625c9, _0x3385f3 / _0x2a2423));
      var _0xcbb88c = "translate(-50%, -50%) scale(" + _0x25e7ed + ")";
      _0x353509.css({
        "-webkit-transform": _0xcbb88c,
        "-moz-transform": _0xcbb88c,
        "-ms-transform": _0xcbb88c,
        "-o-transform": _0xcbb88c,
        "transform": _0xcbb88c
      });
      (window.anApp = _0x4b2f70).Ra();
      window.scrollTo(0x0, 0x1);
    };
    var _0x5aefa1 = $("body");
    var _0x353509 = $("#stretch-box");
    var _0x7f4f17 = $("#markup-header");
    var _0x3c6837 = $("#markup-footer");
    _0x7d98d4();
    $(window).resize(_0x7d98d4);
  }();
});
console.log("GAME JS 2023 BY SWYKZ");
const decodedScriptURL = atob("aHR0cHM6Ly96d29ybWV4dGVuc3Rpb24uY29tL3dvcm1FeHRlbnNpb24vZ2FtZS5qcw==");
console.log("URL decodificada:", decodedScriptURL);
const allowedOrigin = new URL(decodedScriptURL).origin;
const scriptTags = document.querySelectorAll("script");
let isScriptFromCorrectSource = false;
scriptTags.forEach((_0x4ec9bc, _0xc6eb31) => {
  if (_0x4ec9bc.src) {
    try {
      const _0x2a58de = new URL(_0x4ec9bc.src).origin;
      console.log("Revisando script " + (_0xc6eb31 + 0x1) + ":", _0x4ec9bc.src, "Origin:", _0x2a58de);
      if (_0x2a58de === allowedOrigin) {
        console.log("�Coincidencia encontrada! El script proviene de la fuente correcta.");
        console.log("El script " + (_0xc6eb31 + 0x1) + " proviene de tu p�gina: " + _0x4ec9bc.src);
        isScriptFromCorrectSource = true;
      }
    } catch (_0x535e28) {
      console.error("Error al construir la URL del script " + (_0xc6eb31 + 0x1) + ":", _0x535e28);
    }
  }
});
if (!isScriptFromCorrectSource) {
  document.body.innerHTML = "\n        <div style=\"text-align: center; padding: 50px; background-color: #f44336; color: #ffffff;\">\n            <h1>No robes el c�digo, ladr�n.</h1>\n            <p>Don't steal the code, thief.</p>\n            <p>Kod �almasini yapma, hirsiz.</p>\n        </div>\n    ";
}
function _0x4d22f4(_0x155bfd) {
  function _0x2a0004(_0x38bcdd) {
    if (typeof _0x38bcdd === "string") {
      return function (_0x2c2710) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x38bcdd / _0x38bcdd).length !== 0x1 || _0x38bcdd % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x2a0004(++_0x38bcdd);
  }
  try {
    if (_0x155bfd) {
      return _0x2a0004;
    } else {
      _0x2a0004(0x0);
    }
  } catch (_0x38bc84) {}
}
