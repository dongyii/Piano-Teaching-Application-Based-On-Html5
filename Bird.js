var Bird = function () {

	var scope = this;

	THREE.Geometry.call( this );//用Threejs的Geometry对象替换当前对象
// 添加点
	v(   5,   0,   0 );
	v( - 5, - 2,   1 );
	v( - 5,   0,   0 );
	v( - 5, - 2, - 1 );

	v(   0,   2, - 6 );
	v(   0,   2,   6 );
	v(   2,   0,   0 );
	v( - 3,   0,   0 );
// 添加面
	f3( 0, 2, 1 );
	// f3( 0, 3, 2 );

	f3( 4, 7, 6 );
	f3( 5, 6, 7 );

	this.computeFaceNormals();//计算面法向量  如果没有这一句 飞鸟会变得没有光泽 或许法向量与光线照射相关

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vector3( x, y, z ) );

	}

	function f3( a, b, c ) {

		scope.faces.push( new THREE.Face3( a, b, c ) );

	}

}

Bird.prototype = Object.create( THREE.Geometry.prototype );
Bird.prototype.constructor = Bird;
