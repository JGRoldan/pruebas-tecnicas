export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const //as const para que no se pueda modificar el objeto

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
       label: 'Todos',
       href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
       label: 'Activos',
       href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
       label: 'Completados',
       href: `/?filter=${TODO_FILTERS.COMPLETED}`
   }
} as const