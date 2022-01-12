#version 330 compatibility
out vec3 vColor;
out vec2 vST;
out float vTime;
uniform float uX;
uniform float uY;
uniform float uZ;
uniform float fragTime;
uniform float vertTime;

// Lighting ---
//out  vec3  vN;		// normal vector
//out  vec3  vL;		// vector from point to light
//out  vec3  vE;		// vector from point to eye

//vec3 LightPosition = vec3(  0., 5., 5. );
// ---

void 
main()
{
vTime = fragTime;
float Time = vertTime * 6.25;

vColor = vec3(uX,uY,uZ);
vST = gl_MultiTexCoord0.st;
vec3 vert = gl_Vertex.xyz;

// Lighting ---
//vec4 ECposition = gl_ModelViewMatrix * vec4( vert, 1. );
//vN = normalize( gl_NormalMatrix * gl_Normal );	// normal vector
//vL = LightPosition - ECposition.xyz;		// vector from the point to the light position
//vE = vec3( 0., 0., 0. ) - ECposition.xyz;	// vector from the point to the eye position 
// ---

// Vertex Distortion
// X
if (vert.x > -2. && vert.x < 2) 
{
vert.x = vert.x * (sin(Time)*1.25);
}

// Y
if (vert.y > -2. && vert.y < 2) 
{
vert.y = vert.y - (cos(Time)*1.25);
}

// Z
vert.z = vert.z + (cos(Time)*.25);

gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}