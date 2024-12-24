#version 330 core

// Outputs colors in RGBA
out vec4 FragColor;

// Imports the texture coordinates from the Vertex Shader
in vec2 texCoord;

// Gets the Texture Units from the main function
uniform sampler2D texture0; // Use a different uniform name or index if needed

void main()
{
    // Sample the texture using the provided texture coordinates
    vec4 texColor = texture(texture0, texCoord);

    // Output the final color by combining the texture color with lighting calculations
    FragColor = texColor; // Modify this line to blend texture color with lighting
}
