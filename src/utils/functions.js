export function transformResource(resource) {
    return (resource.charAt(0).toUpperCase() + resource.slice(1)).slice(0, -1)
}