/*
 * opencc_cli
 * https://github.com/lyuehh/opencc_cli
 *
 * Copyright (c) 2013 lyuehh
 * Licensed under the MIT license.
 */

'use strict';

var OpenCC = require('opencc');
var opencc_s2t = new OpenCC('zhs2zht.ini');
var opencc_t2s = new OpenCC('zht2zhs.ini');
opencc_s2t.setConversionMode(OpenCC.CONVERSION_FAST);
opencc_t2s.setConversionMode(OpenCC.CONVERSION_FAST);

exports.s2t = function(str) {
    return opencc_s2t.convertSync(str);
};

exports.t2s = function(str) {
    return opencc_t2s.convertSync(str);
};
