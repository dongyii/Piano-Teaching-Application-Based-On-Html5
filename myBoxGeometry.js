/**
 * @author mrdoob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Cube.as
 */

// THREE.BoxGeometry = function ( width, height, depth, widthSegments, heightSegments, depthSegments ) {

// 	THREE.Geometry.call( this );

// 	this.type = 'BoxGeometry';

// 	this.parameters = {
// 		width: width,
// 		height: height,
// 		depth: depth,
// 		widthSegments: widthSegments,
// 		heightSegments: heightSegments,
// 		depthSegments: depthSegments
// 	};

// 	this.fromBufferGeometry( new THREE.BoxBufferGeometry( width, height, depth, widthSegments, heightSegments, depthSegments ) );
// 	this.mergeVertices();

// };

// THREE.BoxGeometry.prototype = Object.create( THREE.Geometry.prototype );
// THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry;

// THREE.CubeGeometry = THREE.BoxGeometry;


THREE.myBoxGeometry = function ( width, height, depth, widthSegments, heightSegments, depthSegments ) {

	THREE.Geometry.call( this );

	this.type = 'BoxGeometry';

	this.parameters = {
		width: width,
		height: height,
		depth: depth,
		widthSegments: widthSegments,
		heightSegments: heightSegments,
		depthSegments: depthSegments
	};

	this.fromBufferGeometry( new THREE.BoxBufferGeometry( width, height, depth, widthSegments, heightSegments, depthSegments ) );
	this.mergeVertices();
	this.num=1;
	this.kind='pianoKey';
	this.waiting=-1;
	this.notelength=0;//音长
	this.correctlyclicked=0;

};

THREE.myBoxGeometry.prototype = Object.create( THREE.Geometry.prototype );
THREE.myBoxGeometry.prototype.constructor = THREE.BoxGeometry;

THREE.myCubeGeometry = THREE.myBoxGeometry;
