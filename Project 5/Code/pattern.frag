#version 330 compatibility
in vec3 vColor;
in  vec2  vST;
in float vTime;
uniform float uS0;
uniform float uT0;
uniform float uSize;

// Lighting ---
//uniform float   uKa, uKd, uKs;		// coefficients of each type of lighting
//uniform vec3  uColor;			// object color
//uniform vec3  uSpecularColor;		// light color
//uniform float   uShininess;		// specular exponent

//in  vec2  vST;			// texture coords
//in  vec3  vN;			// normal vector
//in  vec3  vL;			// vector from point to light
//in  vec3  vE;			// vector from point to eye
// ---

void 
main ()
{
	// Making a rainbow
	vec3 myColor = vColor;

	// Fragmant Distortion
	// Red
	if (vST.t > sin(0.5) && vST.t > cos(0.5))
	{
		if (vST.s < sin(vTime)*1.2)
		{
		myColor = vec3(1.,0.,0.);
		}
	}

	// Orange
	if (vST.t > sin(0.45) && vST.t > cos(0.45))
	{
		if (vST.s < sin(vTime)*1.25)
		{
		myColor = vec3(1.,.5,0.);
		}
	}

	// Yellow
	if (vST.t > sin(0.4) && vST.t > cos(0.4))
	{
		if (vST.s < sin(vTime)*1.3)
		{
		myColor = vec3(1.,1.,0.);
		}
	}

	// Green
	if (vST.t > sin(0.35) && vST.t > cos(0.35))
	{
		if (vST.s < sin(vTime)*1.35)
		{
		myColor = vec3(0.,1.,0.);
		}
	}

	// Blue
	if (vST.t > sin(0.3) && vST.t > cos(0.3))
	{
		if (vST.s < sin(vTime)*1.4)
		{
		myColor = vec3(0.,0.,1.);
		}
	}

	// Dark Purple
	if (vST.t > sin(0.25) && vST.t > cos(0.25))
	{
		if (vST.s < sin(vTime)*1.45)
		{
		myColor = vec3(0.3,0.,0.51);
		}
	}

	// Light Purple
	if (vST.t > sin(0.2) && vST.t > cos(0.2))
	{
		if (vST.s < sin(vTime)*1.5)
		{
		myColor = vec3(0.58,0.,0.83);
		}
	}

	// Lighting ---
	//vec3 Normal = normalize(vN);
	//vec3 Light     = normalize(vL);
	//vec3 Eye        = normalize(vE);

	//vec3 ambient = uKa * myColor;

	//float d = max( dot(Normal,Light), 0. );       // only do diffuse if the light can see the point
	//vec3 diffuse = uKd * d * myColor;

	//float s = 0.;
	//if( dot(Normal,Light) > 0. )	          // only do specular if the light can see the point
	//{
	//	vec3 ref = normalize(  reflect( -Light, Normal )  );
	//	s = pow( max( dot(Eye,ref),0. ), uShininess );
	//}
	//vec3 specular = uKs * s * uSpecularColor;
	//gl_FragColor = vec4( ambient + diffuse + specular,  1. );
	// ---

	gl_FragColor = vec4( myColor,  1. );
}