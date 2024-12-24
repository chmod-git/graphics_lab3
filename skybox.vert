#version 330 core
layout (location = 0) in vec3 aPos;

out vec3 texCoords;

uniform mat4 projection;
uniform mat4 view;

void main() {
    // Remove scaling from the transformation
    mat4 viewWithoutTranslation = mat4(mat3(view));
    vec4 pos = projection * viewWithoutTranslation * vec4(aPos, 1.0f);
    gl_Position = pos;
    texCoords = aPos; // Update if necessary based on the orientation of your cubemap
}
