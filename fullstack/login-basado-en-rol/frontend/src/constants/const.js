export const Roles = {
    ADMIN: "ADMIN",
    ADMIN_ASSIST: "ADMIN_ASSIST",
    USER: "USER"
}

export const URL = import.meta.env.VITE_URL
export const MAX_PRODUCT_CREATED = 5

export const navLinksByRole = {
    [Roles.ADMIN]: [
        { to: '/admin', label: 'Admin' },
        { to: '/admin/create', label: 'Create Product' },
        { to: '/admin/register', label: 'Register' },
    ],
    [Roles.ADMIN_ASSIST]: [
        { to: '/admin', label: 'Admin' },
        { to: '/admin/create', label: 'Create Product' },
    ],
}