export const publicTRoutes = ['/auth'];
export const isPublicRoute = (route: string) => publicTRoutes.includes(route);