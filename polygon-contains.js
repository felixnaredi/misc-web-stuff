class Vec2 {
    static make(x1, x2) {
	return {
	    0: x1,
	    1: x2,
	};
    }

    static add(u, v) {
	return Vec2.make(u[0] + v[0], u[1] + v[1]);
    }

    static scale(k, u) {
	return Vec2.make(k * u[0], k * u[1]);
    }

    static length(u) {
	return Math.hypot(u[0], u[1]);
    }

    static normalize(u) {
	return Vec2.scale(1.0 / Vec2.length(u), u);
    }

    static dot(u, v) {
	return u[0] * v[0] + u[1] * v[1];
    }
}

class Matrix_2x2 {
    static makeFromColumns(u1, u2) {
	return {
	    0: u1,
	    1: u2
	};
    }

    static make(x1, x2, x3, x4) {
	return Matrix_2x2.makeFromColumns(Vec2.make(x1, x2), Vec2.make(x3, x4));
    }

    static id() {
	return Matrix_2x2.make(
	    1, 0,
	    0, 1);	
    }

    static mul_Matrix_2x2(a, b) {
	return Matrix_2x2.make(
	    // column 1
	    a[0][0] * b[0][0] + a[1][0] * b[0][1], // row 1
	    a[0][1] * b[0][0] + a[1][1] * b[0][1], // row 2
	    // column 2
	    a[0][0] * b[1][0] + a[1][0] * b[1][1], // row 1
	    a[0][1] * b[1][0] + a[1][1] * b[1][1]); // row 2
	}
}

