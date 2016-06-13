'use strict';
var clone = require('clone');
var tipsifyGltf = require('../../lib/tipsifyGltf');
var addDefaults = require('../../lib/addDefaults');
var readGltf = require('../../lib/readgltf');

var gltfPath = './specs/data/tipsifyGltf/Cesium_Ground.gltf';

describe('tipsifyGltf', function() {
    it('reorders indices', function(done) {
        readGltf(gltfPath, function(gltf) {
            addDefaults(gltf);
            var copyGltf = clone(gltf);
            tipsifyGltf(gltf);

            expect(gltf).not.toEqual(copyGltf);
            done();
        });
    });
});